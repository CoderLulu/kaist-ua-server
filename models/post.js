'use strict';
module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('Post', {
    postId: DataTypes.NUMBER
  }, {});
  Post.associate = function(models) {
    // associations can be defined here
  };
  return Post;
};