import sys, random
from locust import HttpLocust, TaskSet


def readPost(locust):
    url_prefix = "/editor/post?action=open"
    username = "username=cs144"
    postid = random.randint(1, 500)  # including 1 and 500
    # /editor/post?action=open&username=cs144&postid={num}
    url = url_prefix + "&" + username + "&" + "postid=" + str(postid)
    locust.client.get(url, name=url_prefix)

def writePost(locust):
    url_prefix = "/editor/post?action=save"
    username = "username=cs144"
    title = "title=Loading%20Test&body=***Hello%20World!***"
    postid = random.randint(1, 500)  # including 1 and 500
    # /editor/post?action=open&username=cs144&postid={num}
    url = url_prefix + "&" + username + "&" + "postid=" + str(postid) + "&" + title
    locust.client.post(url, name=url_prefix)


class MyTaskSet(TaskSet):
    """ the class MyTaskSet inherits from the class TaskSet, defining the behavior of the user """
    tasks = {writePost:1, readPost: 9} #10% write & 90% read ratio

class MyLocust(HttpLocust):
    """ the class MyLocust inherits from the class HttpLocust, representing an HTTP user """
    task_set = MyTaskSet
    min_wait = 1000
    max_wait = 2000