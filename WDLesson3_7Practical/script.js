/* Challenge 2: Create a function to serve as the event handler for the distance UI. Guidelines,
      1) Create variables and retrieve the information from the text inputs you created in Challenge 1.
      2) Perform the necessary calculations
      3) Display the results in the appropriate element
*/
function distance(){
    let X1=parseFloat(document.getElementById("X1").value);
    let Y1=parseFloat(document.getElementById("Y1").value);
    let X2=parseFloat(document.getElementById("X2").value);
    let Y2=parseFloat(document.getElementById("Y2").value);
    let op=document.getElementById("d");
    let A=Math.sqrt(Math.pow(X2-X1, 2) + Math.pow(Y2-Y1, 2));
    op.innerHTML=`Distance is: + ${A}`;
}

/* Challenge 4: Create a function to serve as the event handler for the compound interest UI. Guidelines,
      1) Create variables and retrieve the information from the text inputs you created in Challenge 1.
      2) Perform the necessary calculations
      3) Display the results in the appropriate element
*/
function CC(){
    let P=parseFloat(document.getElementById("P").value);
    let R=parseFloat(document.getElementById("R").value);
    let N=parseFloat(document.getElementById("N").value);
    let T=parseFloat(document.getElementById("T").value);
    let op=document.getElementById("c");
    let A=P*(1+R/N)**(N*T);
    op.innerHTML=`Your intrest is: + ${A}`;
}