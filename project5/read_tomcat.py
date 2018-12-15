# locust_test.py
# In python, '#' is used to indicate a comment line.
"""
The string within triple-quote is also considered as a comment.
And the triple-quote can be used for multiline comments.
DISCLAIMER: This sample doesn't care about whether the use of API is correct.
"""

import sys, random
from locust import HttpLocust, TaskSet


def readPost(locust):
    url_prefix = "/editor/post?action=open"
    username = "username=cs144"
    postid = random.randint(1, 500)  # including 1 and 500
    # /editor/post?action=open&username=cs144&postid={num}
    url = url_prefix + "&" + username + "&" + "postid=" + str(postid)
    locust.client.get(url, name=url_prefix)


class MyTaskSet(TaskSet):
    """ the class MyTaskSet inherits from the class TaskSet, defining the behavior of the user """
    tasks = [readPost]

class MyLocust(HttpLocust):
    """ the class MyLocust inherits from the class HttpLocust, representing an HTTP user """
    task_set = MyTaskSet
    min_wait = 1000
    max_wait = 2000



