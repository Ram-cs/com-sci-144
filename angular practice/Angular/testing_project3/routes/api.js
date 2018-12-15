var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');

// const bodyParser = require('body-parser');
// // router.use(bodyParser);
//
// router.use(bodyParser.urlencoded({ extended: false }));

module.exports = router;
/* *****************************************************
* ***************GET /api/:username************** *
* **************************************************** */

router.get('/:username', (req, res, next)=> {
    async function myAsyncFunc() {
        try {
            var token = req.cookies.jwt;
            if (token != null) {
                var username = req.params.username; //get the username
                var receive_username = null;
                var receive_time = null;
                var current_time = new Date().getTime() / 1000;

                await jwt.verify(token, 'C-UFRaksvPKhx1txJYFcut3QGxsafPmwCY6SCly3G6c', (error, decode_token)=> {
                    if(error) {
                        res.status(401).send("Something wrong JWT token");
                        // res.send("Something wrong JWT token");
                    } else {
                        receive_username = decode_token.usr;
                        receive_time = decode_token.exp;
                    }
                });

                console.log("username is: ==> ", receive_username);
                console.log("time is: ==> ", receive_time);

                //check if the name got and current username with time within 2 hrs
                if((username == receive_username) && (receive_time > current_time)) { //confirm given credentials
                    var db = req.app.locals.db; //connect to db
                    const docs = await db.collection('Posts').find
                    (
                        { 'username': username}
                        ).toArray();
                    res.status(200).json(docs);
                    // res.json(docs);
                    console.log("found documents is:",docs);

                } else {
                    res.status(401).send("Error! Username or Date token is not valid API /:username");//send unauthorized user;
                    // res.send("Error! Username or Date token is not valid API /:username");//send unauthorized user
                }


            } else {
                res.status(401).send("Error! Token is not valid API /:username");
                // res.send("Error! Token is not valid API /:username");
            }

        } catch (error) {
            console.log(error);
            res.status(401).send('Error! Something went wrong API /:username');
            // res.send('Error! Something went wrong API /:username');
        }

    }
    myAsyncFunc();
});


/* *****************************************************
* ***************GET /api/:username/:postid:************** *
* **************************************************** */


router.get('/:username/:postid', (req, res, next)=> {
    async function myAsyncFunc() {
        try {
            var token = req.cookies.jwt;
            if (token != null) {
                var username = req.params.username; //get the username
                var postID = parseInt(req.params.postid); //get postID
                var receive_username = null;
                var receive_time = null;
                var current_time = new Date().getTime() / 1000;

                await jwt.verify(token, 'C-UFRaksvPKhx1txJYFcut3QGxsafPmwCY6SCly3G6c', (error, decode_token)=> {
                    if(error) {
                        res.status(401).send("Something wrong JWT token");
                        // res.send("Something wrong JWT token");
                    } else {
                        receive_username = decode_token.usr;
                        receive_time = decode_token.exp;
                    }
                });

                if((username == receive_username) && (receive_time > current_time))  { //if confirm the parameters then only
                    var db = req.app.locals.db; //connect to db

                    const docs = await db.collection('Posts').find(
                        { $and:
                                [{ "username": username},
                                    { "postid": postID}
                                    ]}
                        ).toArray();

                    console.log("found documents is:",docs);

                    if (docs.length) { //if post exists
                        res.status(200).json(docs);
                        // res.json(docs);
                    } else { //if post not exits
                        res.status(404).send('Post not found! API /:username/:postid!');
                        // res.send('Post not found! API /:username/:postid!');
                    }

                } else {
                    res.status(401).send("Error! Username or Date token is not valid API /:username/:postid");//send unauthorized user
                    // res.send("Error! Username or Date token is not valid API /:username/:postid");//send unauthorized user
                }


            } else {
                res.status(401).send("Error! Token is not valid API /:username/:postid");
                // res.send("Error! Token is not valid API /:username/:postid");
            }

        } catch (error) {
            res.status(401).send('Error! Something went wrong! API /:username/:postid');
            console.log(error);
            // res.send('Error! Something went wrong! API /:username/:postid');
        }

    }
    myAsyncFunc();
});


// /* *****************************************************
// * ***************POST /api/:username/:postid:************** *
// * **************************************************** */
router.post('/:username/:postid', (req, res, next)=> {
    async function myAsyncFunc() {
        //making sure that given title and body
        console.log("body is:", req.body);
        console.log("username is:", req.params.username);
        console.log("Post id is:", parseInt(req.params.postid));
        console.log("title is:", req.body["title"]);
        console.log("body is:", req.body["body"]);


        if ((req.body["title"] != null) && (req.body["body"] != null)) { //must include title and body
            try {
                var token = req.cookies.jwt;
                if (token != null) {
                    var username = req.params.username; //get the username
                    var postID = parseInt(req.params.postid); //get postID
                    var receive_username = null;
                    var receive_time = null;
                    var current_time = new Date().getTime() / 1000;

                    await jwt.verify(token, 'C-UFRaksvPKhx1txJYFcut3QGxsafPmwCY6SCly3G6c', (error, decode_token)=> {
                        if(error) {
                            res.status(401).send("Something wrong JWT token");
                            // res.send("Something wrong JWT token");
                        } else {
                            receive_username = decode_token.usr;
                            receive_time = decode_token.exp;
                        }
                    });

                    if((username == receive_username) && (receive_time > current_time))  { //if confirm the parameters then only
                        var db = req.app.locals.db; //connect to db
                        const docs = await db.collection('Posts').find(
                            { $and:
                                    [{ "username": username },
                                    { "postid": postID }] }
                            ).toArray();

                        if(docs.length == 0) { //if document not in our database, then add it in our databse
                            var current_time = new Date().getTime();
                            await db.collection('Posts')
                                .insertOne(
                                    { "postid": postID,
                                        "username": username,
                                        "created": current_time,
                                        "modified": current_time,
                                        "title": req.body["title"],
                                        "body": req.body["body"]
                                    } );
                            res.status(201).send("Post succefully created! POST/:username/:postid");
                            // res.send("Post succefully created! POST/:username/:postid");

                        } else {//if already exits, then say so
                            res.status(400).send('Post is already exists! POST/:username/:postid');
                            // res.send('Post is already exists! POST/:username/:postid');
                        }

                    } else {
                        res.status(401).send('Error, username or time is wrong! POST/:username/:postid');//send unauthorized user
                        // res.send('Error, username or time is wrong! POST/:username/:postid');//send unauthorized user
                    }


                } else {
                    res.status(401).send('Error Token is null! POST/:username/:postid');
                    // res.send('Error Token is null! POST/:username/:postid');
                }

            } catch (error) {
                res.status(401).send('Error Something went wrong! POST/:username/:postid');
                console.log(error);
                // res.send('Error Something went wrong! POST/:username/:postid');
            }

        } else {
            res.status(400).send('Missing Title or Body parameter! POST/:username/:postid');
            // res.send('Missing Title or Body parameter! POST/:username/:postid');
            return;
        }
    }
    myAsyncFunc();
});


// /* *****************************************************
// * ***************PUT /api/:username/:postid:************** *
// * **************************************************** */
router.put('/:username/:postid', function(req, res, next) {

    //making sure that given title and body
    console.log("body is:", req.body);
    console.log("username is:", req.params.username);
    console.log("Post id is:", parseInt(req.params.postid));
    console.log("title is:", req.body["title"]);
    console.log("body is:", req.body["body"]);

    async function myAsyncFunc() {
        //making sure that given title and body
        if (req.body["title"] && req.body["body"]) { //must have body and title
            try {
                var token = req.cookies.jwt;
                if (token != null) {
                    var username = req.params.username; //get the username
                    var postID = parseInt(req.params.postid); //get postID
                    var receive_username = null;
                    var receive_time = null;
                    var current_time = new Date().getTime() / 1000;

                    await jwt.verify(token, 'C-UFRaksvPKhx1txJYFcut3QGxsafPmwCY6SCly3G6c', (error, decode_token)=> {
                        if(error) {
                            res.status(401).send("Something wrong JWT token");
                            // res.send("Something wrong JWT token");
                        } else {
                            receive_username = decode_token.usr;
                            receive_time = decode_token.exp;
                        }
                    });

                    if((username == receive_username) && (receive_time > current_time))  { //if confirm the parameters then only
                        var db = req.app.locals.db; //connect to db
                        const docs = await db.collection('Posts').find(
                            { $and:
                                    [{ "username": username},
                                        { "postid": postID}] }
                            ).toArray();

                        if(docs.length > 0) { //make sure docoment is in our database
                            await db.collection('Posts')
                                .updateOne(
                                    { $and: [{ "username":username}, { "postid": postID}] },
                                    {
                                        $set: {
                                            "modified": new Date().getTime(), //only update modified time
                                            "title": req.body["title"],
                                            "body": req.body["body"]
                                        }
                                    } );
                            res.status(200).send("Post udated succefully PUT/:username/:postid");
                            // res.send("Post udated succefully PUT/:username/:postid");

                        } else {//if docs is not in our databse throw the error
                            res.status(400).send('Post does not exists! PUT/:username/:postid');
                            // res.send('Post does not exists! PUT/:username/:postid');
                        }

                    } else {
                        res.status(401).send('Error, username or time is wrong! PUT/:username/:postid');//send unauthorized user
                        // res.send('Error, username or time is wrong! PUT/:username/:postid');//send unauthorized user
                    }


                } else {
                    res.status(401).send('Error Token is null! PUT/:username/:postid');
                    // res.send('Error Token is null! PUT/:username/:postid');
                }

            } catch (error) {
                res.status(401).send('Error Something went wrong! PUT/:username/:postid');
                console.log(error);
                // res.send('Error Something went wrong! PUT/:username/:postid');
            }

        } else {
            res.status(400).send('Missing Title or Body parameter! PUT/:username/:postid');
            // res.send('Missing Title or Body parameter! PUT/:username/:postid');
            return;
        }
    }
    myAsyncFunc();
});


// /* *****************************************************
// * ***************DELETE /api/:username/:postid:************** *
// * **************************************************** */

router.delete('/:username/:postid', function(req, res, next) {
    async function myAsyncFunc() {
        try {
            var token = req.cookies.jwt;
            if (token != null) {
                var username = req.params.username; //get the username
                var postID = parseInt(req.params.postid); //get postID
                var receive_username = null;
                var receive_time = null;
                var current_time = new Date().getTime() / 1000;

                await jwt.verify(token, 'C-UFRaksvPKhx1txJYFcut3QGxsafPmwCY6SCly3G6c', (error, decode_token)=> {
                    if(error) {
                        res.status(401).send("Something wrong JWT token");
                        // res.send("Something wrong JWT token");
                    } else {
                        receive_username = decode_token.usr;
                        receive_time = decode_token.exp;
                    }
                });

                if((username == receive_username) && (receive_time > current_time))  { //if confirm the parameters then only
                    var db = req.app.locals.db; //connect to db
                    const docs = await db.collection('Posts').find(
                        { $and:
                                [{ "username": username},
                                    { "postid": postID
                                    }]}).toArray();

                    console.log("founded docs", docs);
                    console.log("docs length is ", docs.length);

                    if(docs.length == 1) { //if document exists in our databse
                        await db.collection('Posts').deleteOne(
                                { $and:
                                        [{ "username": username },
                                            { "postid": postID}
                                            ] }
                            );
                        // res.send("Succefully deleted post DELETE/:username/:postid!");
                        res.status(204).send("Succefully deleted post DELETE/:username/:postid!");


                    } else { //the document is not exits in our databse
                        // res.send('Post does not exists DELETE/:username/:postid!');
                        res.status(400).send('Post does not exists DELETE/:username/:postid!');

                    }

                } else {
                    res.status(401).send('Error, username or time is wrong! DELETE/:username/:postid');
                    // res.send('Error, username or time is wrong! DELETE/:username/:postid');
                }


            } else {
                res.status(401).send('Error Token is null! DELETE/:username/:postid');
                // res.send('Error Token is null! DELETE/:username/:postid');
            }

        } catch (error) {
            res.status(401).send('Error Something went wrong! DELETE/:username/:postid');
            console.log(error);
            // res.send('Error Something went wrong! DELETE/:username/:postid');
        }

    }
    myAsyncFunc();
});

module.exports = router;
