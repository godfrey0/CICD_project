
let pics = [
    "GI Road Map.jpg", //0
    "GI QR code Webpage.jpg", //1
    "GI 10.jpg", //2
    "GI 11.jpg", //3
    "GI 12.jpg", //4
    "GI 13.jpg", //5
    "GI WhatsApp.png", //6
    "GI Pay Now.png", //7
    "GI QR code Scan & Pay.jpg", //8
    "GI Hours.png", //9
    "GI Email.png", //10
    "GI Collection.png", //11
    "GI 151NTP.png", //12
    
    ]
      let btn = document.querySelector("button");
      let img = document.querySelector("img");
      let counter = 1;
      
      btn.addEventListener("click", function(){
       if (counter === 13)
       {
        counter = 0;
        }
        img.src = pics[counter]
        counter = counter +1;
  
      });
  
