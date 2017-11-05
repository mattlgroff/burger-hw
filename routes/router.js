const Burger = require('../models/burger.js');
const BurgerController = require('../controllers/burgers_controller.js');
const path = require('path');
const express = require('express');

module.exports = function(app) {

  app.use(express.static(path.join(__dirname, './../public')));
  // GET route for getting all of the todos
  app.get("/api", Burger.selectAllBurgers);

  app.get("/all-burgers", BurgerController.allBurgers);

  app.post("/post-burger", (req, res) => {
    Burger.insertOneBurger(req.body.burger_name);
  });

}


