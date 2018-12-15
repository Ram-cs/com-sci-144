var express = require('express');
var router = express.Router();

const assert = require('assert');


/* *****************************************************
* ***************blog/:username/:postid ************** *
* **************************************************** */
router.get('/:username/:postid', (req, res, next)=> {
    //get the username and postid
    var username = req.params.username;
    var postID = parseInt(req.params.postid);

    console.log(("/:username/:postid in blog.js, Username  ===>") ,  username);
    console.log(("/:username/:postid in blog.js PostID===>") ,  postID);

    //mogoDB Connection
    var db = req.app.locals.db;
    const collection = db.collection('Posts');
    //ref:https://docs.mongodb.com/manual/reference/operator/query/and/
        collection.find({
            $and : [
                {username: username}, {postid: { $eq: postID}}
        ]
        }).toArray((err, docs)=> {
            assert.equal(err, null);

            if(err) {
                console.log("Error in /:username/:postid blog.js document not found");
            } else {
                console.log("Found records in /:username/:postid blog.js");

                res.render(
                    'blog',
                    { posts: docs,
                        username: username,
                      next: null}
                    );
            }
        });
});

/* *****************************************************
* ***************blog/:username ************** *
* **************************************************** */
router.get('/:username', (req, res, next) =>{
    var checkForStart = req.query.start;

    if(checkForStart == null) {
        //get the username
        var username = req.params.username;

        console.log(("/:username the Username blog.js ===>") ,  username);


        //mogoDB Connection
        var db = req.app.locals.db;
        const collection = db.collection('Posts');
        collection.find({"username": username}).toArray((err, docs)=> { //get all post associated with given user
            assert.equal(err, null);
            var current_fivePost = null;
            var get_postID = null;

            if(err) {
                console.log("Error finding the document in /:username blog.js");

            } else {
                current_fivePost = docs; //first get all posts

                if (docs.length > 5) { //only when there is more than 5 post for the same user then divide into 5
                    current_fivePost = docs.slice(0,5);
                    get_postID = docs[5].postid;

                    console.log(("/:username blog.js My id is at position 5 is ===>") ,  get_postID);
                }
                console.log("Found record /:username blog.js");
                console.log(current_fivePost);
                res.render(
                    'blog',
                    {
                        posts: current_fivePost,
                        username: username,
                        next: get_postID

                    });
            }
        });

    } else { //this is for "Start"
        //get the username
        var username = req.params.username;
        var postID = parseInt(req.query.start);

        console.log(("The username id is ===>") ,  username);

        //mogoDB Connection
        var db = req.app.locals.db;
        const collection = db.collection('Posts');
        //ref:https://docs.mongodb.com/manual/reference/operator/query/and/
        collection.find({
            $and : [
                {username: username}, {postid: { $gte: postID}} //each loop, get all above current post id, includes current post
            ]
        }).toArray((err, docs)=>{
            assert.equal(err, null);
            var current_fivePost = null;
            var get_postID = null;

            if(err) {
                console.log("Error finding the documents==> Blog ");
            } else {
                current_fivePost = docs; //first get all posts

                if (docs.length > 5) {//if given user has more than 5 posts then divide into 5 each page
                    current_fivePost = docs.slice(0,5);
                    get_postID = docs[5].postid;

                    console.log(("My id is ===>") ,  get_postID);
                }
                console.log("Found the following records ==>Blog");
                console.log(current_fivePost);

                res.render(
                    'blog',
                    {
                        posts: current_fivePost,
                        username: username,
                        next: get_postID

                    });
            }
        });
    }

});

// catching 404 error and forwarding to error.ejs
router.use((req, res, next)=> {
    var error = new Error('Not Found....!');
    error.status = 404;
    next(error);
});

module.exports = router;