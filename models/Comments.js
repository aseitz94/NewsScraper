var mongoose = require("mongoose");


var Schema = mongoose.Schema;
//creates new Comments object
var CommentSchema = new Schema({
  
  title: String,
  body: String
});


var Comments = mongoose.model("Comments", CommentSchema);

// Export the Comment model
module.exports = Comments;
