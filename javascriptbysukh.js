//Data: assume we have a list of 5 movies
let topMovies = [{id: 0, title: "The Shawshank Redemption", year: 1994, image_url: "images/movie0.jpg"},
         {id: 1, title: "The Godfather ", year: 1972, image_url: "images/movie1.jpg"},
         {id: 2, title: "The Dark Knight", year: 2008, image_url: "images/movie2.jpg"},
         {id: 3, title: "12 Angry Men", year: 1957, image_url: "images/movie3.jpg"},
         {id: 4, title: " Schindler\'s List", year: 1993, image_url: "images/movie4.jpg"},
	{id: 5, title: " Avatar", year: 1993, image_url: "images/movie5.jpg"},
	
        ];
		

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

autoSlideShow() // Call to run auto slideshow
