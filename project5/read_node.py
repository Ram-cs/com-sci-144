import sys, random
from locust import HttpLocust, TaskSet


def readPost_node(locust):
    url_prefix = "/blog/cs144"
    postid = random.randint(1, 500)  # including 1 and 500
    # /editor/post?action=open&username=cs144&postid={num}
    url = url_prefix + "/" + str(postid)
    locust.client.get(url, name=url_prefix)


class MyTaskSet(TaskSet):
    """ the class MyTaskSet inherits from the class TaskSet, defining the behavior of the user """
    tasks = [readPost_node]

class MyLocust(HttpLocust):
    """ the class MyLocust inherits from the class HttpLocust, representing an HTTP user """
    task_set = MyTaskSet
    min_wait = 1000
    max_wait = 2000

