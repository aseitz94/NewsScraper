var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

//creates a new UserSchema object

var ArticleSchema = new Schema({

  title: {
    type: String,
    required: true
  },

  link: {
    type: String,
    required: true
  },
 
  
  comments: {
    type: Schema.Types.ObjectId,
    ref: "Comments"
  }
});


var Article = mongoose.model("Article", ArticleSchema);

// Export the Article model
module.exports = Article;
