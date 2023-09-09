document.getElementById("op").style.display ="none"
document.getElementById("btn").onclick = function(){
 
  if(document.getElementById("bcel").checked && document.getElementById("acel").checked ){
       var box =   document.getElementById("temp").value;
       box = Number(box);
        document.getElementById("op").innerText = box+"°C";
        document.getElementById("op").style.display ="flex";
  }


  else if(document.getElementById("bcel").checked && document.getElementById("afar").checked ){
    var box =   document.getElementById("temp").value;
    box = Number(box);
    box = ((box*9)/5+32)
    document.getElementById("op").innerText = box+"°F";
        document.getElementById("op").style.display ="flex";
  }



  else if(document.getElementById("bcel").checked && document.getElementById("akel").checked ){
    var box =   document.getElementById("temp").value;
    box = Number(box);
    box = box+273.15;
    document.getElementById("op").innerText = box+"K";
        document.getElementById("op").style.display ="flex";
  }


  else if(document.getElementById("bfar").checked && document.getElementById("acel").checked ){
    var box =   document.getElementById("temp").value;
    box = Number(box);
    box = ((box-32)*5)/9
    document.getElementById("op").innerText = box+"°C";
        document.getElementById("op").style.display ="flex";
  }


  else if(document.getElementById("bfar").checked && document.getElementById("afar").checked ){
    var box =   document.getElementById("temp").value;
    box = Number(box);
    document.getElementById("op").innerText = box+"°F";
    document.getElementById("op").style.display ="flex";
  }


  else if(document.getElementById("bfar").checked && document.getElementById("akel").checked ){
    var box =   document.getElementById("temp").value;
    box = Number(box);
    box = (((box-32)*5)/9)+273.15;
    document.getElementById("op").innerText = box+"K";
        document.getElementById("op").style.display ="flex";
  }


  else if(document.getElementById("bkel").checked && document.getElementById("acel").checked ){
    var box =   document.getElementById("temp").value;
    box = Number(box);
    box = box-273.15;
    document.getElementById("op").innerText = box+"°C";
        document.getElementById("op").style.display ="flex";
  }



  else if(document.getElementById("bkel").checked && document.getElementById("afar").checked ){
         var box =   document.getElementById("temp").value;
          box = Number(box);
          box = (((box-273.15)*9)/5)+32;
         document.getElementById("op").innerText = box+"°F";
        document.getElementById("op").style.display ="flex"; 
  }



  else if(document.getElementById("bkel").checked && document.getElementById("akel").checked ){
    var box =   document.getElementById("temp").value;
    box = Number(box);
    document.getElementById("op").innerText = box+"K";
    document.getElementById("op").style.display ="flex";
  }
  else if( document.getElementById("temp").value === ""){
    alert("Enter a value!")
  }

  else{
    document.getElementById("op").innerText = "Select a unit!";
    document.getElementById("op").style.display ="flex";
  }

}

 
 




