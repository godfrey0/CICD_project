
let pics = [
    "GI WhatsApp.png", //0
    "GI Pay Now.png", //1
    "GI QR code Scan & Pay.jpg", //2
    "GI Hours.png", //3
    "GI Email.png", //4
    "GI Collection.png", //5
    "GI 151NTP.png", //6
    "GI Road Map.jpg", //7
    "GI QR code webpage.jpg", //8
    ]
      let btn = document.querySelector("button");
      let img = document.querySelector("img");
      let counter = 1;
      
      btn.addEventListener("click", function(){
       if (counter === 9)
       {
        counter = 0;
        }
        img.src = pics[counter]
        counter = counter +1;
  
      });
  
