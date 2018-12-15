import java.io.IOException;
import java.io.PrintWriter;
import java.sql.* ;
import java.util.List;
import java.util.Arrays;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.HashSet;
import java.text.SimpleDateFormat;

import javax.naming.Context;
import javax.naming.InitialContext;
import javax.servlet.Servlet;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.RequestDispatcher;
import javax.sql.DataSource;

import org.commonmark.node.*;
import org.commonmark.parser.Parser;
import org.commonmark.renderer.html.HtmlRenderer;

/**
 * Servlet implementation class for Servlet: ConfigurationTest
 *
 */
public class Editor extends HttpServlet {
	/**
	 * The Servlet constructor
	 * 
	 * @see javax.servlet.http.HttpServlet#HttpServlet()
	 */
	public static final String dbUsername = "cs144";
	public static final String dbPw = "";
	private Connection con = null;
	private PreparedStatement insertStmt = null;
	private PreparedStatement selectStmt = null;
	private PreparedStatement selectByUserStmt = null;
	private PreparedStatement deleteStmt = null;
	private PreparedStatement getPostidStmt = null;
	private PreparedStatement updateStmt = null;

	public Editor() {}

	public void init() throws ServletException
	{
		try {
			Class.forName("com.mysql.jdbc.Driver");
			Connection con = DriverManager.getConnection("jdbc:mysql://localhost:3306/CS144", dbUsername, dbPw);
			insertStmt = con.prepareStatement(
				"INSERT INTO Posts (username, postid, title, body, modified, created) VALUES (?, ?, ?, ?, ?, ?)"
			);
			selectStmt = con.prepareStatement(
				"SELECT * FROM Posts where username = ? and postid = ?"
			);
			selectByUserStmt = con.prepareStatement(
				"SELECT * FROM Posts where username = ? ORDER BY postid"
			);
			deleteStmt = con.prepareStatement(
				"DELETE FROM Posts WHERE postid = ? AND username = ?"
			);
			getPostidStmt = con.prepareStatement(
				"SELECT MAX(postid) FROM Posts where username = ?"
			);
			updateStmt = con.prepareStatement(
				"UPDATE Posts SET title = ?, body = ?, modified = ? WHERE username = ? AND postid = ?"
			);
		} catch(SQLException ex) {
			return;
		} catch(ClassNotFoundException ex) {
			return;
		}
	}
	


	public void destroy()
	{
		try { deleteStmt.close(); } catch (Exception e) {}
		try { insertStmt.close(); } catch (Exception e) {}
		try { selectStmt.close(); } catch (Exception e) {}
		try { selectByUserStmt.close(); } catch (Exception e) {}
		try { getPostidStmt.close(); } catch (Exception e) {}
		try { updateStmt.close(); } catch (Exception e) {}
		try { con.close(); } catch (Exception e) {}
	}



	/**
	 * Handles HTTP GET requests
	 * 
	 * @see javax.servlet.http.HttpServlet#doGet(HttpServletRequest request,
	 *      HttpServletResponse response)
	 */
	public void doGet(HttpServletRequest req, HttpServletResponse res)
		throws ServletException, IOException 
	{
		String action = req.getParameter("action");
		String[] paramName = {"action", "username", "postid", "title", "body"};
		HashMap<String, String> parameters = new HashMap<String, String>();
		for (int i = 0; i < paramName.length; i++)
			parameters.put(paramName[i], req.getParameter(paramName[i]));

		// GET should only support open, preview, and list
		try{
			if (action == null) {
				throw new ServletException("NULL Action!" );
			} else if (action.equals("open")) {
				doOpen(req, res, parameters);
			} else if (action.equals("preview")) {
				doPreview(req, res, parameters);
			} else if (action.equals("list") || action.equals("close")) {
				doList(req, res, parameters);
			} else {
				if (action.equals("")) {
					throw new ServletException("empty Action!" );
				}
				else {
					throw new ServletException("Invalid Action! " + action);
				}
			}
		} catch(ServletException ex) {
			String msg = ex.toString();
			req.setAttribute("msg", msg);
			req.getRequestDispatcher("/error.jsp").forward(req, res);
		}
	}
	
	/**
	 * Handles HTTP POST requests
	 * 
	 * @see javax.servlet.http.HttpServlet#doPost(HttpServletRequest request,
	 *      HttpServletResponse response)
	 */
	public void doPost(HttpServletRequest req, HttpServletResponse res)
		throws ServletException, IOException 
	{
		String action = req.getParameter("action");
		String[] paramName = {"action", "username", "postid", "title", "body"};
		HashMap<String, String> parameters = new HashMap<String, String>();
		for (int i = 0; i < paramName.length; i++)
			parameters.put(paramName[i], req.getParameter(paramName[i]));

		// allow only POST method for save and delete
		try {
			if (action.equals("save")) {
				doSave(req, res, parameters);
			} else if (action.equals("delete")) {
				doDelete(req, res, parameters);
			} else if (action.equals("open")) {
				doOpen(req, res, parameters);
			} else if (action.equals("preview")) {
				doPreview(req, res, parameters);
			} else if (action.equals("list") || action.equals("close")) {
				doList(req, res, parameters);
			} else {
				if (action.equals("")) {
					throw new ServletException("empty Action!" );
				}
				else {
					throw new ServletException("Invalid Action! " + action);
				}
			}
		} catch(ServletException ex) {
			String msg = ex.toString();
			req.setAttribute("msg", msg);
			req.getRequestDispatcher("/error.jsp").forward(req, res);
		}
			
	}


	public void doOpen(HttpServletRequest req, HttpServletResponse res, 
		HashMap<String, String> p) throws ServletException, IOException
	{
		final String[] args = new String[] {"username", "postid"};
		requireArgs(p, new HashSet<String>(Arrays.asList(args)));
		
		for (String key : p.keySet())
			req.setAttribute(key, p.get(key));

		// for exist post
		try {
			selectStmt.setString(1, p.get("username"));
			selectStmt.setString(2, p.get("postid"));
			ResultSet rs = selectStmt.executeQuery();
			if (rs.next()) {	
				req.setAttribute("title", rs.getString("title"));
				req.setAttribute("body", rs.getString("body"));
			} else {	// no data, meaning this is a newly created post
				req.setAttribute("title", "");
				req.setAttribute("body", "");				
			}
		} catch(SQLException ex) {
			String msg = ex.toString();
			req.setAttribute("msg", msg);
			req.getRequestDispatcher("/error.jsp").forward(req, res);
		}
		// for new post
		if (req.getParameter("title") != null && req.getAttribute("title") == "")
			req.setAttribute("title", req.getParameter("title"));
		if (req.getParameter("body") != null && req.getAttribute("body") == "")
			req.setAttribute("body", req.getParameter("body"));


		req.getRequestDispatcher("/edit.jsp").forward(req, res);
	}



	public void doPreview(HttpServletRequest req, HttpServletResponse res, 
		HashMap<String, String> p) throws ServletException, IOException
	{
		final String[] args = new String[] {"body", "title"};
		requireArgs(p, new HashSet<String>(Arrays.asList(args)));
		String body = p.get("body");
		String title = p.get("title");

		Parser parser = Parser.builder().build();
		HtmlRenderer renderer = HtmlRenderer.builder().build();
		String bodyHtml = renderer.render(parser.parse(body));
		String titleHtml = renderer.render(parser.parse(title));
		req.setAttribute("bodyHtml", bodyHtml);
		req.setAttribute("titleHtml", titleHtml);
		req.setAttribute("body", body);
		req.setAttribute("title", title);
		req.getRequestDispatcher("/preview.jsp").forward(req, res);
	}



	public void doList(HttpServletRequest req, HttpServletResponse res, 
		HashMap<String, String> p) throws ServletException, IOException
	{
		final String[] args = new String[] {"username"};
		requireArgs(p, new HashSet<String>(Arrays.asList(args)));

		try {
			selectByUserStmt.setString(1, p.get("username"));
			ResultSet rs = selectByUserStmt.executeQuery();
			ArrayList<ArrayList> posts = new ArrayList();
			SimpleDateFormat simpleDateFormat = new SimpleDateFormat("MM/dd/yyyy' 'HH:mm:ss");
			while (rs.next()) {
				ArrayList row = new ArrayList();
				row.add(rs.getString("title"));
				Date created = rs.getTimestamp("created");
				row.add(simpleDateFormat.format(created));
				Date modified = rs.getTimestamp("modified");
				row.add(simpleDateFormat.format(modified));
				row.add(rs.getString("postid"));
				posts.add(row);
			}
			req.setAttribute("posts", posts);
			String nextAvailablePostId = getAvailablePostid(req, res, p.get("username"));
			req.setAttribute("nextPostid", nextAvailablePostId);
		} catch(SQLException ex) {
			String msg = "Oops! An error has occured! <br> Please try again.";
			req.setAttribute("msg", msg);
			req.getRequestDispatcher("/error.jsp").forward(req, res);
		}
		req.getRequestDispatcher("/list.jsp").forward(req, res);
	}



	public void doSave(HttpServletRequest req, HttpServletResponse res, 
		HashMap<String, String> p) throws ServletException, IOException
	{
		final String[] args = new String[] {"username", "postid", "title", "body"};
		requireArgs(p, new HashSet<String>(Arrays.asList(args)));

		try {
			if (Integer.valueOf(p.get("postid")) <= 0) {
				String nextAvailablePostId = getAvailablePostid(req, res, p.get("username"));
				p.put("postid", nextAvailablePostId);
				req.setAttribute("postid", nextAvailablePostId);
				for (int i = 0; i < 4; i++)
					insertStmt.setString(i+1, p.get(args[i]));
				insertStmt.setTimestamp(5, getCurrentTimeStamp());
				insertStmt.setTimestamp(6, getCurrentTimeStamp());
				insertStmt.executeUpdate();
			} else {
				selectStmt.setString(1, p.get("username"));
				selectStmt.setString(2, p.get("postid"));
				ResultSet rs = selectStmt.executeQuery();
				if (rs.next()) {
					updateStmt.setString(1, p.get("title"));
					updateStmt.setString(2, p.get("body"));
					updateStmt.setTimestamp(3, getCurrentTimeStamp());
					updateStmt.setString(4, p.get("username"));
					updateStmt.setString(5, p.get("postid"));
					updateStmt.executeUpdate();
				} else {
					for (int i = 0; i < 4; i++)
						insertStmt.setString(i+1, p.get(args[i]));
					insertStmt.setTimestamp(5, getCurrentTimeStamp());
					insertStmt.setTimestamp(6, getCurrentTimeStamp());
					insertStmt.executeUpdate();
				}
			}
		} catch(SQLException ex) {
			String msg = ex.toString();
			req.setAttribute("msg", msg);
			req.getRequestDispatcher("/error.jsp").forward(req, res);
		}
		res.sendRedirect(req.getContextPath() + "/post?action=list&username=" + p.get("username"));
	}



	public void doDelete(HttpServletRequest req, HttpServletResponse res, 
		HashMap<String, String> p) throws ServletException, IOException
	{
		final String[] args = new String[] {"postid", "username"};
		requireArgs(p, new HashSet<String>(Arrays.asList(args)));
		try {
			deleteStmt.setString(1, p.get("postid"));
			deleteStmt.setString(2, p.get("username"));
			deleteStmt.executeUpdate();
		} catch(SQLException ex) {
			String msg = ex.toString();
			req.setAttribute("msg", msg);
			req.getRequestDispatcher("/error.jsp").forward(req, res);
		}
		res.sendRedirect(req.getContextPath() + "/post?action=list&username=" + p.get("username"));
	}



	public void requireArgs(HashMap<String, String> p, HashSet<String> req) 
	throws ServletException
	{
		for (String s : req) {
			if (s == "username") {
				String username = p.get(s);
				if (username == null || username.length() > 40)
					throw new ServletException("username is invalid!");
				for (int i = 0; i < username.length(); i++) {
					if (!Character.isLetterOrDigit(username.charAt(i)))
						throw new ServletException("username is invalid!");
				}
			} else if (s == "postid") {
				String postid = p.get(s);
				if (postid == null || !postid.matches("-?\\d+"))
					throw new ServletException("postid is invalid!");
			} else if (s == "title") {
				String title = p.get(s);
				if (title != null && title.length() > 100)
					throw new ServletException("title is invalid!");
			} 
		}
	}


	private static java.sql.Timestamp getCurrentTimeStamp() {
	    java.util.Date today = new java.util.Date();
	    return new java.sql.Timestamp(today.getTime());
	}


	private String getAvailablePostid(HttpServletRequest req, HttpServletResponse res, String username) 
	throws ServletException, IOException {
		try {
			getPostidStmt.setString(1, username);
			ResultSet rs = getPostidStmt.executeQuery();
			if (rs.next()) {
				return String.valueOf(rs.getInt(1) + 1);
			} else {
				return "1";
			}
		} catch(SQLException ex) {
			String msg = ex.toString();
			req.setAttribute("msg", msg);
			req.getRequestDispatcher("/error.jsp").forward(req, res);
		}
		return "";
	}
}

