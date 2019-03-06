// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var db = require('../models');

// Routes
// =============================================================
module.exports = function (app) {

  // Get all games in database
  app.get("/", function (req, res) {
    db.Game.findAll({})
      .then(function (dbGame) {
        var hbsObject = {
          game: dbGame
        };
        res.render("index", hbsObject);
      });
  });

  //search a game
  app.post("/input", function (req, res) {
    db.Game.findOne({
      where: {
        Name: req.body.name
      },
    }).then(function (dbGame) {
      res.json(dbGame);
      console.log("search name")
    });
  });

  // order by year
  app.get("/year-desc", function (req, res) {
    db.Game.findAll({
      order: [
        ['Year_of_Release', 'DESC'],
      ],
    })
      .then(function (dbGame) {
        var hbsObject = {
          game: dbGame
        };
        res.render("index", hbsObject);
      });
  })

  app.get("/year-asc", function (req, res) {
    db.Game.findAll({
      order: [
        ['Year_of_Release', 'ASC'],
      ],
    })
      .then(function (dbGame) {
        var hbsObject = {
          game: dbGame
        };
        res.render("index", hbsObject);
      });
  })

  // sort games by genre
  app.get("/Genre/action", function (req, res) {
    db.Game.findAll({
      where: {
        Genre: 'Action'
      },
    })
      .then(function (dbGame) {
        var hbsObject = {
          game: dbGame
        };
        res.render("index", hbsObject);
      });
  });

  app.get("/Genre/rpg", function (req, res) {
    db.Game.findAll({
      where: {
        Genre: 'Role-Playing'
      },
    })
      .then(function (dbGame) {
        var hbsObject = {
          game: dbGame
        };
        res.render("index", hbsObject);
      });
  });

  app.get("/Genre/sports", function (req, res) {
    db.Game.findAll({
      where: {
        Genre: 'Sports'
      },
    })
      .then(function (dbGame) {
        var hbsObject = {
          game: dbGame
        };
        res.render("index", hbsObject);
      });
  });

  app.get("/Genre/shooter", function (req, res) {
    db.Game.findAll({
      where: {
        Genre: 'Shooter'
      },
    })
      .then(function (dbGame) {
        var hbsObject = {
          game: dbGame
        };
        res.render("index", hbsObject);
      });
  });

  // sort games by platform
  app.get("/platform/ps4", function (req, res) {
    db.Game.findAll({
      where: {
        Platform: 'PS4'
      },
    })
      .then(function (dbGame) {
        var hbsObject = {
          game: dbGame
        };
        res.render("index", hbsObject);
      });
  });

  app.get("/platform/XOne", function (req, res) {
    db.Game.findAll({
      where: {
        Platform: 'XOne'
      },
    })
      .then(function (dbGame) {
        var hbsObject = {
          game: dbGame
        };
        res.render("index", hbsObject);
      });
  });

  app.get("/platform/WiiU", function (req, res) {
    db.Game.findAll({
      where: {
        Platform: 'WiiU'
      },
    })
      .then(function (dbGame) {
        var hbsObject = {
          game: dbGame
        };
        res.render("index", hbsObject);
      });
  });

  app.get("/platform/3DS", function (req, res) {
    db.Game.findAll({
      where: {
        Platform: '3DS'
      },
    })
      .then(function (dbGame) {
        var hbsObject = {
          game: dbGame
        };
        res.render("index", hbsObject);
      });
  });

  //------------------ favorite page ---------------------
  // Get all favorite games selected
  app.get("/favorite", function (req, res) {
    db.Fav.findAll({})
      .then(function (dbGame) {
        var hbsObject = {
          game: dbGame
        };
        res.render("index", hbsObject);
      });
  });
};
