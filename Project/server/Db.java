import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class Db {
	
  private Connection connect = null;
  private Statement statement = null;
  private PreparedStatement preparedStatement = null;
  private ResultSet resultSet = null;

  final private String host = "localhost:3306";
  final private String user = "golden";
  final private String passwd = "golden";
  
  public List<model> readDataBase(String search) throws Exception {
    try {
    
      Class.forName("com.mysql.cj.jdbc.Driver").newInstance();    
      connect =  DriverManager.getConnection("jdbc:mysql://" + host + "/entries",user,passwd );
      // Statements allow to issue SQL queries to the database
      statement = connect.createStatement();
      // Result set get the result of the SQL query
      resultSet = statement
          .executeQuery("select  * from entries.entries where word='"+search+"'");
     return  writeResultSet(resultSet);

      
    } catch (Exception e) {
      throw e;
    } finally {
      close();
    }

  }


  private List<model> writeResultSet(ResultSet resultSet) throws SQLException {
    // ResultSet is initially before the first data set
	  List<model> models=new ArrayList();
      while (resultSet.next()) {
      
      String word = resultSet.getString("word");
      String wordtype = resultSet.getString("wordtype");
      String definition = resultSet.getString("definition");
    
      model model=new model();
      model.setWord(word);
      model.setDefinition(definition);
      model.setWordtype(wordtype);
      models.add(model);
      
    
    }
	return models;
  }

  // You need to close the resultSet
  private void close() {
    try {
      if (resultSet != null) {
        resultSet.close();
      }

      if (statement != null) {
        statement.close();
      }

      if (connect != null) {
        connect.close();
      }
    } catch (Exception e) {

    }
  }

}
