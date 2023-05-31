currentIndex = 0
images=["images\\1.jfif","images\\2.jfif","images\\3.jfif","images\\4.jfif","images\\5.jfif","images\\6.jfif"]

setInterval(() => {
    currentIndex = Math.round(Math.random()*5)
    document.getElementById("img1").src=images[currentIndex]
}, 5000);


function changeImage(arrowType){
    if(arrowType=="right"){
        currentIndex=currentIndex==5?0:++currentIndex
    }else if(arrowType=="left")
    {
        currentIndex=currentIndex==0?5:--currentIndex
    }
    document.getElementById("img1").src=images[currentIndex]
}

function hideDiv() {
    var x = document.getElementById("slide-area");
    if (x.style.display === "none") {
      x.style.display = "block";
      document.getElementById("img2").src="images\\up.png" 
    } else {
      x.style.display = "none";
      document.getElementById("img2").src="images\\down.png" 
    }
  }