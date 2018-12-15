#!/bin/bash

cat << EOF | mongo
    use BlogServer
    db.Posts.remove({})
    for (i = 1; i <= 500; i++){
        db.Posts.save({ "postid": i, "username": "cs144", "created": 1518669658420, "modified": 1518669658420, "title": "mockTitle", "body": "mockBody" })
    }
    db.Users.remove({})
    db.Users.save({ "username": "cs144", "password": "\$2a\$10\$2DGJ96C77f/WwIwClPwSNuQRqjoSnDFj9GDKjg6X/PePgFdXoE4W6" })
    db.Users.save({ "username": "user2", "password": "\$2a\$10\$kTaFlLbfY1nnHnjb3ZUP3OhfsfzduLwl2k/gKLXvHew9uX.1blwne" })
EOF
