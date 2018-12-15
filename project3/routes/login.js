var express = require('express');
var router = express.Router();
// var bodyParser = require('body-parser');

// router.use(bodyParser.urlencoded({extended:true}))
const bcrypt = require('bcrypt');


//to connect with MongoDB
const assert = require('assert');

/* GET home page. */
router.get('/', (req, res, next)=> {
        var my_username = req.query.username;
        var my_password = req.query.password;
        var redirect = req.query.redirect;
        var display_error = ""

        // if (redirect != null && redirect != "") {
        //     redirect = "/"; //if the username is not given
        //     if (my_username == null) {
        //         redirect = "blog/" + my_username; //with given username
        //     }
        // }

        if(my_username == "" || my_password == "") { //force user to enter credentials
            console.log("=== USERNAME OR PASSWORD IS MISSING ==> ");
            console.log("=== USERNAME IS ==> ", my_username);
            console.log("=== PASSWORD IS ==> ", my_password);
            console.log("FILED IS VACANT");
            display_error = "Missing Username* or Password*"
            res.status(401);
            res.render(
                'login',
                {
                    displayError: display_error,
                    username: my_username,
                    password: my_password,
                    redirect:redirect,
                    next: null

                }
            );
        } else { //after entering both field, verify the user
            console.log("FILED NOT VACANT");
            console.log("=== USERNAME IS ==> ", my_username);
            console.log("=== PASSWORD IS ==> ", my_password);

            //mogoDB Connection
            var db = req.app.locals.db;
            const collection = db.collection('Users');
            //ref:https://docs.mongodb.com/manual/reference/operator/query/and/
            collection.find({
                $and : [
                    {username: my_username}
                ]
            }).toArray((err, docs)=> {
                assert.equal(err, null);

                if(err) {
                    console.log("=== Error found in LOGIN ====>");
                } else if(docs.length > 0){ //found user in our database
                    //check the password
                    bcrypt.compare(my_password, docs[0].password, function(err, result) {
                        if(err) {
                            console.log("=== Error with veryfying password ==> ");
                        } else if(result == true) { //password verified
                            //this point user and password both verified
                            console.log("=== Username and Password verified ===>");
                            console.log("=== DOCS Contains==> ", docs);

                            console.log("=== USERNAME IS ==> ", docs[0].username);
                            console.log("=== PASSWORD IS ==> ", docs[0].password);


                            //set authentication cookies
                            //Sign with default (HMAC SHA256)
                            var jwt = require('jsonwebtoken');
                            var token = jwt.sign({
                                "exp": Math.floor(Date.now() / 1000) + (2* 60 * 60), //2 hours
                                "usr": my_username
                            }, 'C-UFRaksvPKhx1txJYFcut3QGxsafPmwCY6SCly3G6c');

                            res.cookie('jwt', token);
                            res.status(200);
                            res.redirect(redirect);

                        } else { //if password is not verified then show the login page
                            console.log("=== Wrong Password ===>");
                            display_error = "Wrong Password";
                            res.status(401);
                            res.render(
                                'login',
                                {
                                    displayError: display_error,
                                    username: my_username,
                                    password: my_password,
                                    redirect:redirect,
                                    next: null

                                }
                            );
                        }
                    });

                } else { //if user is not in our databse
                    console.log("Username or Password is wrong");
                    res.status(401);
                    display_error = "Username or Password is wrong"
                    res.render(
                        'login',
                        {
                            displayError: display_error,
                            username: my_username,
                            password: my_password,
                            redirect:redirect,
                            next: null

                        }
                    );
                }
            });
        }

});


// Post login
router.post('/', function(req, res) {
        // set the default to blog post
        var redirect_url = "blog/" + req.body.username;
        if (req.body.redirect != null && req.body.redirect != "") {
          redirect_url = req.body.redirect;
        }
      


        console.log("Redirecting URL is:: " + redirect_url);

        // Redirect
        var redirect = "/login?username=" + my_username + "&password=" + my_password + "&redirect=" + redirect_url;
        console.log("The redirection from POST ==>", redirect);
        res.redirect(redirect);
});


module.exports = router;