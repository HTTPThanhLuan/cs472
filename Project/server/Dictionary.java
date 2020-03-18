

import java.io.IOException;
import java.util.Map;
import java.util.stream.Collectors;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;

/**
 * Servlet implementation class Dictionary
 */
@WebServlet("/Dictionary")
public class Dictionary extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public Dictionary() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		  Db dao = new Db();
		  try {
		 	
			 String word =  request.getParameter("word");
			  
			JSONObject result = new JSONObject();		 		 	
			JSONArray list = new JSONArray();
		 	for (model mo : dao.readDataBase(word)) {
		 		 JSONObject ob = new JSONObject();
		 		 ob.put("wordtype", mo.getWordtype());
		 		 ob.put("definition",mo.getDefinition() );
			 	list.add(ob);
			}
		 	
		 	result.put("result", list);		 	
		 	response.getWriter().print(list.toJSONString());
		 	
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
