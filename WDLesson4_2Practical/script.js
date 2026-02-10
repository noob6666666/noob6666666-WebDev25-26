// General Guideline
/*
function name(){
  // Step 1: Create variables for the information from the text inputs and the output element

  // Step 2: Complete the process
  //    a) Perform any calculations necessary
  //    b) Perform necessary decisions

  // Step 3: Display the output

}
*/

/* Challenge 2:  Create the function for Challenge 1 scenario */
function Area(){
  let X= parseFloat(document.getElementById("X").value);
  let Y= parseFloat(document.getElementById("Y").value);
  let output = document.getElementById("output");
  let A= X*Y
  output.innerHTML=`Your area is ${A}`;
  if(X<=0 || Y<=0 ){
    output.innerHTML=`Inappropriate measurement`;
  }

}


/* Challenge 3:  Complete the function for Pets Challenge on pets.html.  
1) Review the HTML for the UI.  Remember dropdown boxes are just input.
2) You will need to write HTML as part of the output.  
   For example, output.innerHTML = `<input src="pic.png">` would place the image in the <div>*/
function pet() {
  let A = document.getElementById("animal").value;
  let E = document.getElementById("emotion").value;
  let output = document.getElementById("output");

  let message = "";

  if (A == "Bear" && E == "Funny") {
    message = "funnyBear.jpg";
  } 
  if (A == "Bear" && E == "Sad") {
    message = "sadBear.jpg";
  } 
  if (A == "Cat" && E == "Funny") {
    message = "funnyCat.jpg";
  } 
  if (A == "Cat" && E == "Sad") {
    message = "sadCat.jpg";
  } 
  if (A == "Dog" && E == "Funny") {
    message = "funnyDog.jpg";
  } 
  if (A == "Dog" && E == "Sad") {
    message = "sadDog.jpg";
  }

  output.innerHTML = `<img src=${message} >`;
}















