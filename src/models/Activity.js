const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Activity = sequelize.define('Activity', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    difficulty: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 1,
        max: 5,
      },
    },
    duration: {
      type: DataTypes.INTEGER,
      allowNull: true,
      validate:{
        min: 1,
        max: 5,

      },
    },
    season: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isIn: [["Verano", "Otoño", "Invierno", "Primavera"]],
      },
    },
  }, { 
    freezeTableName: true, 
    timestamps: false 
  });

  return Activity;
};
