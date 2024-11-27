const express = require("express");
const connectDB = require('./database/connection');
const setupSwaggerDocs = require('./swagger');
const mainRoutes = require('./src/routes/index');
require("dotenv").config();

// MongoDB Connection 
connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Swagger setup from the separate file
setupSwaggerDocs(app);

// Routes
app.use('', mainRoutes);

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
});

app.listen(process.env.PORT || 5000, () => {
    console.log("Server Connected");
});