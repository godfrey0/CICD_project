CICD project commissioned by japanese rest at NTP.
Using HTML, CSS and JS for the webpage. 
Current webpage going live soon!

A template for ABC Japanese Restaurant in their expansion module. The template app features HTML-CSS-Javascript, Node.js, and MySQL database at the Replit.com

ABC Japanese Restaurant
This repo consists of the folders:

/frontend         HTML, CSS, Javascript code for the frontend client
/backend          Node.js code for the backend server
/database         Data to load into MySQL database at Replit.com

To clone this repo:
                  git clone https://github.com/godfrey0/CICD_project.git

Not included are:

Database connection parameters. You will need to create a .env file in the /backend folder to contain connection parameters for your MySQL database. The .env_sample file contains a list of the parameters you need to set.
Database server. The backend server uses the node.js mysql module to connect to a MySQL server. The MySQL server itself is not provided, but sample data is available in the /database_sample folder.
Node modules. You will need to initialise a node.js project in the /backend folder:
<!DOCTYPE html>
<html>

<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<title>ABC JAPANESE RESTAURANT</title>
	<link href="style.css" rel="stylesheet" type="text/css" />
	<img src = "Lego.png" id="fire", width = 200>
    <h5>IRO IRO<br><br><br></h5>
    <br>
    <br>
    <br>
    <br>
    <br>
    <h4>
    <img src = "Omakase03.jpg" alt "03" width = 120, height = 120>  
    <img src = "Omakase04.jpg" alt "04" width = 90, height = 120> 
    <img src = "Omakase07.png" alt "07" width = 120, height = 120>
    <br>
    <br>
    <br>
    <br>
    <br>
    <p>
    <h4>
    <a href = "Menu.html" >|MENU|</a>
    <a> _ </a>
    <a href = "Take Away.html">|TAKEAWAY|</a>
     <a></a>
    </h4>
    </p>

    <section id= "container">
      <P><img src = "GI 151NTP.png" alt = "Image" width = 150>
        <button>Get Info</button></p>

    <script 
    type="text/javascript", 
    src = "script.js">
    </script>
    </section>
    <footer></footer>
  </body>

<!DOCTYPE html>

<style type='text/css'>
#fire {
  position:absolute;
  top:30px; center:100px;
  visibility:hidden;
  }
    </style>
    <script type='text/javascript'>
    var imgId = 'fire';
    var imgOnTime = 10000;
    var imgOffTime = 1000;
    window.onload = function()
    {
      if (document.getElementById) {
        var ele = document.getElementById(imgId);
        if (ele && ele.style) {
          setTimeout ('blinkImg()', imgOffTime);
        }
      }
    }
    function blinkImg()
    {
      var v, t, ele = document.getElementById(imgId);
      if (ele.style.visibility == 'visible'){
        v = 'hidden';
        t =imgOffTime;
      }
        else {
        v = 'visible';
        t = imgOnTime;
      }
      ele.style.visibility = v;
      setTimeout ('blinkImg()', t);
    }
    </script>
    
    <img src = "Lego.png" id="fire", width = 180, height = 80>


<div>
    <button class="btn">Yōkoso</button>
    <!--<button class="btn">open</button>-->
    <!--<button class="btn">we are closed today!</button>-->
        <div class="form-control">
    <p id="reco" class="blinking"></p>
    </div>

</html>

