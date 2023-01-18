const { DataTypes } = require('sequelize');
//Export a function that defines the model
//Then we inject the connection to sequelize.

module.exports = (sequelize) => {
  // define the model based on the readme requirements
  sequelize.define('pokemon', {
    
    id : {
      type: DataTypes.UUID,               // taken directly from the official documentation
      defaultValue: DataTypes.UUIDV4,     //default uuid
      primaryKey: true,
      allowNull : false,
    },
    
    name: { 
      type: DataTypes.STRING,
      allowNull: false,
      unique : true 
    },

    hp : {
      type: DataTypes.INTEGER, 
      defaultValue: 25 
    },
    attack : {
      type: DataTypes.INTEGER,
      defaultValue: 25
    }, 
    defense : {
      type: DataTypes.INTEGER,
      defaultValue: 25
    },
    speed : {
      type: DataTypes.INTEGER,
      defaultValue: 25
    },
    height : {
      type: DataTypes.INTEGER,
      defaultValue: 6
    },
    weight : {
      type: DataTypes.INTEGER,
      defaultValue: 100
    },
    image: {
      type : DataTypes.STRING,
      defaultValue : "https://thumbs.gfycat.com/DefenselessPoisedArizonaalligatorlizard.webp"

    },
    dbCreated : {
      type : DataTypes.BOOLEAN,
      allowNull : false,
      defaultValue : true,
    },
  },
   {timestamps :false });
};

//image and dbCreated are added to facilitate later the work of searching, filtering and rendering
//based on various pokemon set the default value of various stats