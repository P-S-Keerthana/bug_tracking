const express = require("express");
const authRoutes = require('./src/routes/authRoutes');
const bugRoutes = require('./src/routes/bugRoutes');
const userRoutes = require('./src/routes/userRoutes');
const tenantRoutes = require('./src/routes/tenantRoutes');

const api = express.Router();

api.use('/api/auth', authRoutes);
api.use('/api/bugs', bugRoutes);
api.use('/api/users', userRoutes);
api.use('/api/tenants', tenantRoutes);

module.exports = { api };