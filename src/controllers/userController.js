// @ts-nocheck
require('dotenv').config();

const express = require('express');
const Sequelize = require('sequelize');
const jwt = require('jsonwebtoken');
const { BlogPost, Category, User } = require('../models');
const config = require('../config/config');
const { userSchema, loginSchema } = require('../validators');

const key = process.env.JWT_SECRET;
const sequelize = new Sequelize(
  process.env.NODE_ENV === 'test' ? config.test : config.development,
);

const jtwConfig = {
  expiresIn: '10h',
  algorithm: 'HS256',
};

const getAll = async (req, res) => {
  try {
    const employees = await User.findAll({});
    return res.status(200).json(employees);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Ocorreu um erro' });
  }
};

const createUser = async (req, res) => {
  try {
    const { displayName, email, password, image } = req.body;
    const { error } = userSchema.validate(req.body);
    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }
    const checkUser = await User.findOne({ where: { email } });
    if (checkUser) {
      return res.status(409).json({ message: 'User already registered' });
    }
    const user = await User.create({ displayName, email, password, image });
    return res.status(201).json(user);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Ocorreu um erro' });
  }
};

const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findOne({ where: { id } });
    if (!user) return res.status(404).json({ message: 'User does not exist' });
    if (req.query.includePosts === true) {
      const posts = await BlogPost.findAll({
        where: { userId: id },
        include: [
          { model: Category, as: 'categories', attributes: ['id', 'name'] },
        ],
      });
      return res.status(200).json({ user, posts });
    }
    return res.status(200).json(user);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Ocorreu um erro' });
  }
};

const login = async (req, res) => {
  try {
    const { email } = req.body;
    const { error } = loginSchema.validate(req.body);
    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }
    const user = await User.findOne({ where: { email } });
    if (!user) return res.status(400).json({ message: 'Invalid fields' });
    const data = { id: user.id, email: user.email };
    const token = jwt.sign(data, key, jtwConfig);
    return res.status(200).json({ token });
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Ocorreu um erro' });
  }
};

module.exports = {
  getAll,
  createUser,
  getUserById,
  login,
  // createAdmin,
};