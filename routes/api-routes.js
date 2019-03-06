// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our models
var db = require("../models");

// Routes
// =============================================================
module.exports = function (app) {
  // POST route for saving a new favorite
  app.post("/api/favorite", function (req, res) {
    db.Fav.create(req.body).then(function (dbFav) {
      res.json(dbFav);
      // res.redirect('/')
    });
  });

  // DELETE route for deleting favorite
  app.delete("/api/favorite/:id", function (req, res) {
    db.Fav.destroy({
      where: {
        id: req.params.id
      }
    }).then(function (dbFav) {
      res.json(dbFav);
    });
  });

  // // PUT route for updating posts
  // app.put("/api/posts", function(req, res) {
  //   db.Post.update(
  //     req.body,
  //     {
  //       where: {
  //         id: req.body.id
  //       }
  //     }).then(function(dbPost) {
  //     res.json(dbPost);
  //   });
  // });

  /////////////////////////////////////
  // Don't open this page... huge data
  app.get("/api/game", function (req, res) {
    db.Game.findAll({
    }).then(function (dbGame) {
      res.json(dbGame);
    });
  });
  // search one game in api
  app.get("/api/:name", function (req, res) {
    db.Game.findOne({
      where: {
        Name: req.params.name
      },
    }).then(function (dbGame) {
      res.json(dbGame);
    });
  });
};
