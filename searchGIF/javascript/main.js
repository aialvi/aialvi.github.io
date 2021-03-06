/* 1. Grab the input value*/


document.querySelector(".js-go").addEventListener('click',function(){

    var input = document.querySelector("input").value;
    pushToAPI(input);
    document.querySelector("input").value = null;
    var container = document.querySelector(".js-container");
    container.innerHTML = "";

  
  });
  
  document.querySelector(".js-userinput").addEventListener('keyup',function(e){
  
    var input = document.querySelector("input").value;
  
    // if the key ENTER is pressed...
    if(e.which === 13) {
      pushToAPI(input);
      document.querySelector("input").value = null;
      var container = document.querySelector(".js-container");
      container.innerHTML = "";
    }
  
  });
  
  /* 2. do the data stuff with the API */

 function pushToAPI(input){

    var url = "https://api.giphy.com/v1/gifs/search?q=" +input+ "&api_key=dc6zaTOxFJmzC"
    console.log(url);
  
    // AJAX Request
    var GiphyAJAXCall = new XMLHttpRequest();
    GiphyAJAXCall.open( 'GET', url );
    GiphyAJAXCall.send();
    
    GiphyAJAXCall.addEventListener('load',function(e){
    
      var data = e.target.response;
      pushToDOM(data);
    
    });

 }
    
    
   
  

  
  
  
  /* 3. Show me the GIFs */
  
  
  function pushToDOM(input) {

    var container = document.querySelector(".js-container");
  
    var response = JSON.parse(input);
  
    var imageUrls = response.data;
  
    imageUrls.forEach(function(image){
  
      var src = image.images.fixed_height.url;
      console.log(src);
  
     
      container.innerHTML += "<img src=\"" + src + "\" class=\"container-image\">";
  
    });

  
    
  
  }