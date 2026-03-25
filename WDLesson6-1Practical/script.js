/*
Challenge 1: Add the appropriate images to each array below from the list of images provided.
 "beeftips.jpg", "brisket.jpg", "ribeye.jpg", "steak.jpg", "clams.jpg", "crabs.jpg", "lobster.png", "scallops.jpg", "shrimp.jpg","tuna.jpg", "flan.jpg", "passionberry.jpeg", "oreocup.jpg"
*/ 

//Challenge 2: Add appropriate prices for each food in their corresponding array. (Any reasonable price works) 
//Challenge 3: Add appropriate titles for each food in their corresponding array. Use the image names as a hint for the food title.

let meat_images = ["images/beeftips.jpg", "images/brisket.jpg", "images/ribeye.jpg", "images/steak.jpg"];
let meat_prices = [12.99, 18.50, 24.99, 15.75];
let meat_titles = ["beeftips", "brisket", "ribeye", "steak"];

let seafood_images = ["images/clams.jpg", "images/crabs.jpg", "images/lobster.png", "images/scallops.jpg", "images/tuna.jpg"];
let seafood_prices = [9.99, 14.99, 29.99, 19.99, 17.50];
let seafood_titles = ["clams", "crabs", "lobster", "scallops", "tuna"];

let dessert_images = ["images/flan.jpg", "images/passionberry.jpeg", "images/oreocup.jpg"];
let dessert_prices = [ 9887755343433.99, 12387753425.50, 99999999.99];
let dessert_titles = ["flan", "passionberry", "oreocup"];

function init(){
  //Each food has its own output container
  let m = document.getElementById("meats");
  let s = document.getElementById("seafoods");
  let d = document.getElementById("desserts");
  let build = ``;

  /* Notes for Challenges 4 through 6 below:
      1) Each challenge requires its own for loop to build the output.
      2) You can reuse the build variable as long as you set it back to `` before each loop.
      3) Create a basic card with a title, image and price.
  */

  //Challenge 4:  Build cards for the meats. Place the build in the meat container. 
 for(let me = 0; me < meat_images.length; me ++){
    build +=`<div class=card>
      <h2> ${meat_titles[me]}</h2>
      <img src = "${meat_images[me]}">
       <h3> $${meat_prices[me]} </h3>
       </div>`
  }
  m.innerHTML=build;
  //Challenge 5:  Build cards for the seafoods. Place the build in the seafood container.
   let build1 = ``;
 for(let me = 0; me < seafood_images.length; me ++){
    build1 +=`<div class=card>
      <h2> ${seafood_titles[me]}</h2>
      <img src = "${seafood_images[me]}">
       <h3> $${seafood_prices[me]} </h3>
       </div>`
  }
  s.innerHTML=build1;
  //Challenge 6:  Build cards for the desserts. Place the build in the dessert container.
   let build2 = ``;
 for(let me = 0; me < dessert_images.length; me ++){
    build2 +=`<div class=card>
      <h2> ${dessert_titles[me]}</h2>
      <img src = "${dessert_images[me]}">
       <h3> $${dessert_prices[me]} </h3>
       </div>`
  }
  d.innerHTML=build2;
}
