//Data: assume we have a list of 5 movies
	
        		

//Slideshow: Automatic
let autoSlideIndex = 0;//Initial slide = 0
function autoSlideShow() {
//Change the slide_index
  if (autoSlideIndex < topMovies.length - 1) {
    autoSlideIndex++;
  } else {
    autoSlideIndex = 0;
  }
  //Change the image source for the img
  document.getElementById("auto-slide-title").innerHTML = topMovies[autoSlideIndex].title;
  document.getElementById("auto-slide-image").src = topMovies[autoSlideIndex].image_url;
  //Wait 2 seconds
  setTimeout(autoSlideShow, 2000);//Auto change slide every 2 seconds
}
<style>
 .g{text-align:center; width:2000px; height:100px; background-color:white; transition-duration:5s;}
 .g:hover{
 width:500px;}
 </style>
 <h2><div class=q>New and Now</div></h2>
	            
autoSlideShow() // Call to run auto slideshow
