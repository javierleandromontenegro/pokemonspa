const { DataTypes } = require('sequelize');

//the type model is created and connected with sequelize
//timestamps is false , for better personal reading
//we will not have problems with the id because the types route does not contain POST


module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('type', {
   
    name: {
      type: DataTypes.STRING,
      unique : true,
    },
  },
  {timestamps :false }
  );
};
