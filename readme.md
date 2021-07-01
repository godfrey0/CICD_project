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

