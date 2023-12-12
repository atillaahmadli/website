var button=document.getElementById("submit_button");
button.addEventListener("click",submitFunction);
function submitFunction(){
    var range=document.getElementById("range").value;
    var feedback=document.getElementById("feedback").value;
    alert("Your point is "+range+" and your feedback is "+feedback+ ". Thanks!")
}

var gallery_image=document.getElementsByClassName("gallery_img")
  for(var i = 0; i < gallery_image.length; i++) {
        var galleryimg=gallery_image[i];
        galleryimg.addEventListener('click', function() {
            
            this.style.transform='scale(1.2)'
        })
  }
 

