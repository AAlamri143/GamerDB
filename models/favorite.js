module.exports = function(sequelize, DataTypes) {
  var Fav = sequelize.define("Favorite", {
    Name: {
      type: DataTypes.STRING,
    },
    Platform: {
      type: DataTypes.STRING(10),
    },
    Year_of_Release: {
      type: DataTypes.INTEGER(4),
      // defaultValue: null
    },
    Genre: {
      type: DataTypes.STRING(20),
    },
    createdAt: {
      type: 'TIMESTAMP',
      defaultValue: null
    },
    updatedAt: {
      type: 'TIMESTAMP',
      defaultValue: null
    },
  });

  // Game.associate = function(models) {

  //   Game.belongsTo(models.Player, {
  //     foreignKey: {
  //       allowNull: false
  //     }
  //   });
  // };

  return Fav;
};
