var gradientSlider = document.getElementById("gradientWidth");
var textYSlider = document.getElementById("textPosY");
var textVal = document.getElementById("inputText")

//////////////////////////////////////////////////////


var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");

var width = 1200;
var height = 330;


canvas.width = width;
canvas.height = height;

var gradient_width = 600;
var textY = 50;
var textX = 50;

var background = new Image();
var logo = new Image();

var text = "Hello World"

// background.src = "background.jpg";
// logo.src = "logo2.png";



/////////////////////////////////////////////

function preloadImage(url){
    const img = new Image();
    img.src = url;
    return img
  }
  
  function preloadImages(images) {
    for (var i = 0; i < images.length; i++) {
      images[i] = preloadImage(images[i])
    }
    return images
  }
  
  //-- usage --//
  let arr = [
    "background.jpg",
    "background2.jpg",
    "background3.jpg",
    "logo2.png"
  ]
  
  const images = preloadImages(arr)

//   console.log(images[1].src)

/////////////////////////////////////////

logo.src = images[3].src;


window.onload = function(){

    // Update the current slider value (each time you drag the slider handle)
    gradientSlider.oninput = function() {
        gradient_width = this.value;   
        drawCanvas()
    }

    textPosY.oninput = function() {
        textY = this.value;   
        drawCanvas()
    }

    textPosX.oninput = function() {
        textX = this.value;   
        drawCanvas()
    }

    document.getElementById("checkbox").onchange = function(){
        console.log("changes")
        text = textVal
        
        if (document.getElementById('background1').checked) {
            background.src = images[0].src;
            drawCanvas()
        } else if (document.getElementById('background2').checked){
            background.src = images[1].src;
            drawCanvas()
        } else if (document.getElementById('background3').checked) {
            background.src = images[2].src;
            drawCanvas()
        }
    }

    

    
  };


  function drawCanvas() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(background,0,0);
   
    var grad = context.createRadialGradient(gradient_width, 330, 0, gradient_width, 330, gradient_width);
    
    grad.addColorStop(0, 'rgba(233, 30, 99, 1)');
    grad.addColorStop(0.53, 'rgba(63, 75, 255, 1)');
    grad.addColorStop(0.92, 'rgba(42, 255, 254, 1)');
  
    context.fillStyle = grad;
    context.fillRect(0, 0, gradient_width, 330);


    context.font = '60px arial';
    context.fillStyle = "black";
    context.fillText(textVal.value, textX, textY);

    context.drawImage(logo,gradient_width-(logo.width/2),-30);
  }



//   var txt = 'Ideas that \nchange \nthe world';
//   var x = 30;
//   var y = textY;
//   var lineheight = 50;
//   var lines = txt.split('\n');

//   for (var i = 0; i<lines.length; i++)
//   context.fillText(lines[i], x, y + (i*lineheight) );


////////////////////////////////////
function download() {
    var dt = canvas.toDataURL('image/jpeg', 1.0);
    this.href = dt;
};
downloadLnk.addEventListener('click', download, false);