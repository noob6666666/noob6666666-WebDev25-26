/* Challenge 2: Complete the area and perimeter functions below for the rectangle.  Guidelines,
      1) Create variables and retrieve the information from the text inputs you created in Challenge 1.
      2) Perform the necessary calculations
      3) Display the results in the appropriate element
*/
function recArea(){
      let len=parseFloat(document.getElementById("L").value);
      let wid=parseFloat(document.getElementById("W").value);
      let op=document.getElementById("output");
      let A=len*wid;
      op.innerHTML="Area is: "+ A;
}

function recPerimeter(){
      let len=parseFloat(document.getElementById("L").value);
      let wid=parseFloat(document.getElementById("W").value);
      let op=document.getElementById("output");
      let A=(len*2)+(wid*2);
      op.innerHTML="Perimeter is: "+ A;
}


/* Challenge 4: Complete the area and circumference functions below for the circle.  Guidelines,
      1) Create variables and retrieve the information from the text inputs you created in Challenge 3.
      2) Perform the necessary calculations
      3) Display the results in the appropriate element
*/
let pi = 3.1415926;

function cirArea(){
      let R=parseFloat(document.getElementById("R").value);
      let op=document.getElementById("output");
      let A=pi*R**2;
      op.innerHTML="Area is: "+ A;
}

function cirPerimeter(){
      let R=parseFloat(document.getElementById("R").value);
      let op=document.getElementById("output");
      let A=2*pi*R;
      op.innerHTML="Perimeter is: "+ A;
}

/* Challenge Bonus: Complete the area and perimeter functions below for the triangle.  Guidelines,
      1) Create variables and retrieve the information from the text inputs you.
      2) Perform the necessary calculations
      3) Display the results in the appropriate element
*/
function triArea(){

}

function triPerimeter(){

}