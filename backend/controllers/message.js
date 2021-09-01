const db = require ("../models/index");
//const Post = db.post;
const Message = db.message;
const User = db.user;
const Comment = db.comment;
const fs = require('fs');

//exports.createPost = (req, res, next) => {
exports.createMessage = (req, res, next) => {

// Analyse le post en utilisant une chaîne de caractères
if(req.body.content == null) {
  return res.status(400).send({
    message: "Votre message createPost ne peut pas être vide"
  });
}
console.log(req.body);
  //const post = {
  const message = {

    content: req.body.content,
    user_id: req.body.user_id,
    imageUrl: req.body.content && req.file ? `${req.protocol}://${req.get('host')}/images/${req.file.filename}`: null,
};

//Enregistre le post dans la base de données
//Post.create(post)
db.Message.create(message)

    .then(()=> res.status(201).json({ message: 'Post enregistré !'}))
    .catch(function(err) {
        res.status(500).json({ message: 'Pb server' });
        console.log(err);
      }); 
    };