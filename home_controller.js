const Post = require('../models/post');
module.exports.home = function(req, res){
    //console.log(req.cookies);
    // Post.find({},function(err,posts){
    //     return res.render('home', {
    //         title: "Navverse | Home",
    //         posts : posts,
    //     });
    // })
   Post.find({}).populate('user').exec(function(err,posts){
    return res.render('home', {
        title: "Navverse | Home",
        posts : posts,
    });
})}

// module.exports.actionName = function(req, res){}