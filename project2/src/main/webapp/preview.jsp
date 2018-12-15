
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%><%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>


<!DOCTYPE html>
<html>
<head><title>previewPage</title></head>
<style>
button:hover {
    background-color: #555;
    color: white;
}

button {
    float: left;
    text-decoration: none;
    display: block;
    text-align: centers;
    color: black;
    margin:5px;
    border-radius: 5px;
    background-color: seagreen;
    font-size: 12px;
    padding: 14px 45px;
    overflow: visible;
}

button:focus {
    outline: none;
}

.preview {
    margin-left: 500px;
    margin-top: 100px;
    background-color: #DCDCDC;
    width: 40%;
    height: 200%;
}

li, ul, h2, h3 {
    margin-left: 15px;
}

h1 {
    margin-left: 255px;
    color: blue;
}

</style>
<body style="background-color: snow";>

<div class="preview">

<h1>Preview Post</h1>

<form action="/editor/post" method="post">
    <input type="hidden" name="username" value= '<%= request.getParameter("username") %>' >
    <input type="hidden" name="postid" value= <%= request.getParameter("postid") %> >
    <input type="hidden" name="title" value= '<%= request.getAttribute("title") %>' >
    <input type="hidden" name="body" value= '<%= request.getAttribute("body") %>' >
    <button type="submit" name="action" value="open">Close Preview</button>
</form>
<br><br><br><br>

<h2 id="blogname"><%= request.getParameter("username")%>'s Blog</h2>
<h3 id="title"><%= request.getAttribute("titleHtml") %></h3>

<ul> 
    <li> <%= request.getAttribute("bodyHtml") %> </li>
    <br>
</ul>
</div>

</body>
</html>