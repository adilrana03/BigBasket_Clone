document.querySelector("#cod").style.display="none";
document.querySelector("#credit").style.display="block";
document.querySelector("#add_upi").style.display="none";

function home(){
  document.querySelector("#home").style.color ="green";
  document.querySelector("#office").style.color="black";
  //document.querySelector("#home").style ="border-color:1px solid green";
}
  // document.querySelector("#office").style="background-color:black";

function office(){
  document.querySelector("#home").style.color="black";
  document.querySelector("#office").style.color="green";
  //document.querySelector("#office").style ="border-color:1px solid green";
}




// adding click event on pay button
document.getElementById("pay").addEventListener("click", pay);
// creating the function 
function pay() {
  var cardNo = document.getElementById("card_no").value;
  var v = document.getElementById("valid").value;
  var cvv = document.getElementById("cvv").value;
  var flag = 0;
  if (cardNo.length != 6) {
    alert("Invalid card number");
    
  } else if (v.length != 4) {
    console.log("2nd");
    alert("Validity Expired");
  } else if (cvv.length != 3) {
    console.log("3rd");
    alert("Invalid cvv");
  } else {
    // alert("PAYMENT SUCCESSFULL AND YOUR ORDER IS PLACED");
    window.location.href = "otp.html";
  }
  
}
document.getElementById("place").addEventListener("click", placed);
function placed(){
  window.location.href = "placed.html";
}

function handleUpi(){ 
  document.querySelector("#upi").style="background-color:whitesmoke";
  document.querySelector("#card").style="background-color:white";
  document.querySelector("#cash").style="background-color:white";
  console.log(document.getElementById("add_up"));
  document.querySelector("#cod").style.display="none";
  document.querySelector("#credit").style.display="none";
  document.querySelector("#add_upi").style.display="block";

}
function handleCredit(){ 
  console.log(document.getElementById("credit"));
  document.querySelector("#card").style="background-color:whitesmoke";
  document.querySelector("#upi").style="background-color:white";
  document.querySelector("#cash").style="background-color:white";
  document.querySelector("#cod").style.display="none";
  document.querySelector("#credit").style.display="block";
  document.querySelector("#add_upi").style.display="none";

}
function handleCod(){ 
  console.log("working");
  document.querySelector("#cash").style="background-color:whitesmoke";
  document.querySelector("#card").style="background-color:white";
  document.querySelector("#upi").style="background-color:white";
  document.querySelector("#cod").style.display="block";
  document.querySelector("#credit").style.display="none";
  document.querySelector("#add_upi").style.display="none";

}

// localStorage.setItem("total",1000);
var basket = document.getElementById("basket");
var final = +localStorage.getItem("total") || 0;
var total = document.getElementById("total");
basket.innerText=final;
total.innerText=final;

var vouchar = document.getElementById("vou1");

document.getElementById("vouButton").addEventListener("click",vouApply);
function vouApply(){
      if(vouchar.value=="masai30"){
        basket.innerText = final-(final*30)/100;
        total.innerText = basket.innerText;
      }
}