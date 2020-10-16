'use strict';
module.exports = (sequelize, DataTypes) => {
  const Item = sequelize.define('Item', {
    code: DataTypes.STRING,
    name: DataTypes.STRING,
    description: DataTypes.STRING
  }, {});
  Item.removeAttribute('id');
  Item.associate = function(models) {
    // associations can be defined here
  };
  return Item;
};
