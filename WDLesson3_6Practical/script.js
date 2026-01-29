// Challenge 2:  Create the function for the Average program.  Refer to the resource link in the HTML for assistance.
function avr(){
    let grade1=parseFloat(document.getElementById("G1").value);
    let grade2=parseFloat(document.getElementById("G2").value);
    let grade3=parseFloat(document.getElementById("G3").value);
    let op=document.getElementById("output");
    let A=(grade1+grade2+grade3)/3;
<<<<<<< HEAD
    op.innerHTML = `Area is: ${A}`;
=======
    op.innerHTML="Area is: "+ A;
>>>>>>> 38aedd7f59634276f1241824ba75bde0f477c2bc
}

// Challenge 4:  Create the function for the Slope program.  Refer to the resource link in the HTML for assistance.
function sl(){
    let Y1=parseFloat(document.getElementById("Y1").value);
    let Y2=parseFloat(document.getElementById("Y2").value);
    let X1=parseFloat(document.getElementById("X1").value);
    let X2=parseFloat(document.getElementById("X2").value);
    let op=document.getElementById("t");
    let A=(Y1+Y2)/(X1+X2);
<<<<<<< HEAD
    op.innerHTML=`Slope is: + ${A}`;
=======
    op.innerHTML="Slope is: "+ A;
>>>>>>> 38aedd7f59634276f1241824ba75bde0f477c2bc
}


// Challenge 6:  Create the function for the BMI program.  Refer to the resource link in the HTML for assistance.
function fr(){
    let W=parseFloat(document.getElementById("X").value);
    let H=parseFloat(document.getElementById("Y").value);
    let op=document.getElementById("r");
    let bmi=703*W/(H**2);
<<<<<<< HEAD
    op.innerHTML=`BMI is: + ${bmi}`;
=======
    op.innerHTML="BMI is: "+ bmi;
>>>>>>> 38aedd7f59634276f1241824ba75bde0f477c2bc
}
