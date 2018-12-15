<!DOCTYPE html>
<html>
<head>
  <title>error page</title>
  <style>
    .container {
        background-color: silver;
        width: 50%;
        margin-left: 500px;
    }

    h2, h3 {
        text-align: center;
    }

    h2 {
        color: red;
    }

    h3 {
        color: green;
    }



  </style>

</head>
<body style="background-color: snow">
    <div class="container">
    <h2 id="blogname"> *********** Request is Invalid ***************</h2>
    <h2> --Reason --</h2>
    <h3> <%= request.getAttribute("msg") %></h3>
    <table>
        <ol style="list-style-position: inside;">
            <li>action:<%= request.getParameter("action") %></li> 
            <li>username: <%= request.getParameter("username") %></li>
            <li>postid:<%= request.getParameter("postid") %></li> 
            <li>title:<%= request.getParameter("title") %></li> 
            <li>body: <%= request.getParameter("body") %> </li>
        </ol>
    </table>
</div>
    </body>
</html>