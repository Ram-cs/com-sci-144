import sys, random
from locust import HttpLocust, TaskSet


def readPost_node(locust):
    url_prefix = "/blog/cs144"
    postid = random.randint(1, 500)  # including 1 and 500
    # /editor/post?action=open&username=cs144&postid={num}
    url = url_prefix + "/" + str(postid)
    locust.client.get(url, name=url_prefix)


def writePost_node(locust):
    url_prefix = '/api/cs144'
    title = "Loading Test"
    body = "***Hello World!***"
    postid = random.randint(1, 500)  # including 1 and 500
    # /editor/post?action=open&username=cs144&postid={num}
    locust.client.put(url_prefix + '/' + str(postid), {"title": title, "body": body}, name=url_prefix)

class MyTaskSet(TaskSet):
    """ the class MyTaskSet inherits from the class TaskSet, defining the behavior of the user """
    tasks = {readPost_node: 9, writePost_node: 1} #90% read and 10% write
    def on_start(locust):
        """ on_start is called when a Locust start before any task is scheduled """
        response = locust.client.get("/login?username=cs144&password=password&redirect=/blog/cs144/1")
        if response.status_code != 200:
            print("FAIL to start with posting data to server. Make sure that your server is running.")
            sys.exit();

class MyLocust(HttpLocust):
    """ the class MyLocust inherits from the class HttpLocust, representing an HTTP user """
    task_set = MyTaskSet
    min_wait = 1000
    max_wait = 2000
