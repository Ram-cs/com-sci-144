
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%><%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %><%@ page import="java.util.ArrayList" %><!DOCTYPE html>

<!DOCTYPE html>
<html>
<head><title>List Post</title>
<style>
button:hover {
    background-color: green;
    color: white;
}

#new-post-button:hover {
    background-color: #555;
    color: white;
}

#delete:hover {
    background-color: red;
    color: white;
}

#open:hover {
    background-color: green;
    color: white;
}

#delete, #open{
    width: 100px;
    border-style: solid;
    border-radius: 5px;
    padding: 6px 4px;
}

#open {
    color: green;
    border-color: green;
}



#delete {
    color: red;
    margin-top: 4px;
    border-color: red;
}
#new-post-button {
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

#new-post-button:focus {
    outline: none;
}

#open:focus {
    outline: none;
}

#delete:focus {
    outline: none;
}


/*https://www.w3schools.com/html/tryit.asp?filename=tryhtml_table_intro*/

table {
    width: 60%;
    border-collapse: collapse;

}

td, th {
    border: 1px solid #dddddd;
    text-align: left;
    padding: 6px;
}

tr:nth-child(even) {
    background-color: #dddddd;
}



</style>
</head>
<body style="background-color: snow">

<h2 id="blogname"><%= request.getParameter("username")%>'s Blog</h2>

<form id="0"  action="/editor/post" method="POST">
    <input type="hidden" name="username" value='<%= request.getParameter("username") %>' >
    <input type="hidden" name="postid" value='<%= request.getAttribute("nextPostid") %>'>
    <button id="new-post-button" type="submit" name="action" value="open">New Post</button>
</form>
<br><br><br><br>

<table>
    <tr>
        <th>Title</th>
        <th>Created</th>
        <th>Modified</th>
        <th>Options</th> 
    </tr>
    
    <% ArrayList posts = (ArrayList)request.getAttribute("posts"); %>
    <% for (int i = 0; posts != null && i < posts.size(); i++) { %>
    <%  ArrayList row = (ArrayList)posts.get(i); %>
    <tr>
        <td> <%= row.get(0) %> </td>
        <td> <%= row.get(1) %> </td>
        <td> <%= row.get(2) %> </td>
        
        <td style="width: 15px">
            <form id='<%= i+1 %>' action="/editor/post" method="POST">
                <input type="hidden" name="username" value='<%= request.getParameter("username") %>'>
                <input type="hidden" name="postid" value='<%= row.get(3) %>'>
                
                <button id="open" type="submit" name="action" value="open">Open</button>     
                <button id="delete" type="submit" name="action" value="delete">Delete</button>
               
            </form>
        </td>
    </tr>
<% } %>
</table>



</body>
</html>