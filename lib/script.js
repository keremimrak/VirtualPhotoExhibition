// Add your code here
document.addEventListener("DOMContentLoaded", function (){

  var pictureContainer = document.getElementById("pictureContainer");

  var varietyOfPictures = [
          "technology", "programming", "artificial intelligence","cybersecurity","data science","robotics", "machine learning", "innovation","software development", "automation","blockchain", "virtual reality", "gaming", "fintech", "finance", "healthcare","sustainability", "renewable energy", "climate change", "space exploration", "astronomy","nature", "photography", "art", "design", "creativity", "education", "computer","meditation", "mindfulness", "fitness", "nutrition", "travel", "industry", "philosophy","psychology", "literature", "music", "bank", "aikido", "sports", "adventure","entrepreneurship", "leadership", "teamwork", "communication", "diversity", "community"
      ];



  for (var i = 0; i < 24; i++) {
    

      console.log(i);
      var randomIndex = Math.floor(Math.random() * varietyOfPictures.length);
      var width = 400;
      var height = 500;
      var img = document.createElement("img");
      var source = "https://source.unsplash.com/random/" + width + "x" + height + "/?" + varietyOfPictures[randomIndex];
      img.src = source;
      pictureContainer.appendChild(img);
      varietyOfPictures.splice(randomIndex, 1);
      
  }


  // var randomMainHeaderIndex = Math.floor(Math.random() * varietyOfPictures.length);
  // var mainHeader = document.getElementById("mainHeader"); // Doğru ID'yi kullandığınızdan emin olun


  // mainHeader.style.backgroundImage = "url('https://source.unsplash.com/random/138x992/?'"+randomMainHeaderIndex+"')";

  // "url('" + baseUrl + "')" + yeniIfade


  
});



document.addEventListener("DOMContentLoaded", function () {
  var pictures = document.querySelectorAll("#pictureContainer img");

  for (var i = 0; i < pictures.length; i++) {
    pictures[i].addEventListener("mouseenter", function () {
      this.style.transform = "scale(1.2)"; 
      this.style.transition = "transform 0.5s ease"; 
    });

    pictures[i].addEventListener("mouseleave", function () {
      this.style.transform = "scale(1)"; 
      this.style.transition = "transform 0.5s ease"; 
    });
  }
});