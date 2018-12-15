<!DOCTYPE html>
<html>
<head>
<title>Edit Post</title>
<style>

.mybutton {
    list-style-type: none;
    margin-left: 350px;
    padding: 30px;
    padding-left: 60px;
    overflow: hidden;
    background-color: #DCDCDC;
    width: 300px;
    height: 450px;
    border-radius: 10px;
}

button:hover {
    background-color: #555;
    color: white;
}

button {
    float: left;
    text-decoration: none;
    display: block;
    padding: 14px;
    text-align: center;
    color: black;
    margin:6px;
    border-radius: 5px;
    margin-bottom: 16px;
}

#title {
    padding: 3px;
    width: 250px;
    font-size: 15px;
    border-radius: 10px;
}

input:focus {
    outline: none;
}

textarea:focus {
    outline: none;
}

button:focus {
    outline: none;
}

textarea {
    border-radius: 5px;
    border: solid 1px black;
    font-size: 12px;
}

h1 {
    background-color: seagreen;
    width: 385px;
    height: 50px;
    padding-top: 10px;
    margin-top: 0px;
    margin-left: 350px;
    border-radius: 5px;
    padding-left: 5px;
    

} 

h2 {
    margin-left: 490px;
}

</style>
</head>
<body style="background-color: snow">

<h1> Edit Post </h1>
<h2 id="blogname"><%= request.getParameter("username")%>'s Blog</h2>

<!-- <div class="mybutton">
    <form action="listPage.jsp" method="GET">
        <button type="submit">Save</button>
    </form>
    <form action="listPage.jsp" method="GET">
        <button type="submit">Close</button>
    </form>
    <form action="previewPage.jsp" method="GET">
        <button type="submit">Preview</button>
    </form>
    <form action="listPage.jsp" method="GET">
        <button type="submit">Delete</button>
    </form>
</div>
 -->
 

<div class="mybutton">
    <form action="post" method="POST">
    <button name="action" value="save" type="submit">Save</button>
    <button name="action" value="list" type="submit">Close</button>
    <button name="action" value="preview" type="submit">Preview</button>
    <button name="action" value="delete" type="submit">Delete</button>
    <input type="hidden" name="username" value='<%= request.getParameter("username") %>' >
    <input type="hidden" name="postid" value=<%= request.getParameter("postid") %> >
 
 
<br>
Title
<br>
    <input type="text" class="form-control" id="title" name="title" value='<%= request.getAttribute("title") %>' >
<br><br> 
Body
<br>
   <textarea id="body" class="form-control" name="body" rows="20" cols="40"><%= request.getAttribute("body") %>
   </textarea>

<br>

</form>
</div>

</body>
</html>

