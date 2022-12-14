var flag = 0;
print(flag);
function print(flag) {
  var arr = [
    "<img src='https://www.bigbasket.com/media/uploads/banner_images/YXHP144_hp_fom_m_bbpl-staples_460_101022_Bangalore.jpg'></img>",
    "<img src='https://www.bigbasket.com/media/uploads/banner_images/hp_m_Dry_FishBanner_1600x460_070922.jpg'></img>",
    "<img src='https://www.bigbasket.com/media/uploads/banner_images/fresho-fnv-Bangalore-1600x460-11thOCT22.png'></img>",
  ];

  let headline = document.getElementById("show1"); //image append in this div
  headline.innerHTML = arr[0];

  setInterval(function () {
    if (flag == arr.length) {
      flag = 0;
    }
    headline.innerHTML = arr[flag];
    flag++;
  }, 3000);
}

var flag = 0;
print2(flag);
function print2(flag) {
  var arr2 = [
    "<img src='https://www.bigbasket.com/media/uploads/banner_images/cp_diwali-pre-cleaning_1130x400-041022.jpg'></img>",
    "<img src='https://www.bigbasket.com/media/uploads/banner_images/cp_kgp-entrypoint_Festive-Crockery-Mela-TVC_1130x400-300922.jpg'></img>",
    "<img src='https://www.bigbasket.com/media/uploads/banner_images/hp_cc_m_diwali-sale_1130x400_101022-1.jpg'></img>",
    "<img src='https://www.bigbasket.com/media/uploads/banner_images/hp_cc_m_chocolate-gifting_1130x400_101022.jpg'></img>",
  ];

  let headline2 = document.getElementById("show2"); //image append in this div
  headline2.innerHTML = arr2[0];

  setInterval(function () {
    if (flag == arr2.length) {
      flag = 0;
    }
    headline2.innerHTML = arr2[flag];
    flag++;
  }, 2000);
}


var userName = document.getElementById("user_name");
var name = localStorage.getItem("user") || "Login/Sign Up";
userName.innerText = name;

var object1={
  name:"Onion",
  price:38.38,
  strike_price:58,
  qty:1,
}
var object2={
  name:"farm eggs",
  price:199.50,
  strike_price:220,
  qty:1,
}
var object3={
  name:"Atta",
  price:56.05,
  strike_price:70,
  qty:1,
}
var object4={
  name:"Idli Dosa",
  price:66.50,
  strike_price:80,
  qty:1,
}
var object5={
  name:"Harpic",
  price:185,
  strike_price:200,
  qty:1,
}


var a1= document.getElementById("a1");
a1.addEventListener("click", function(){
  var data=JSON.parse(localStorage.getItem("bigbasket")) || [];
  data.push(object1);
  localStorage.setItem("products", JSON.stringify(data));
  alert(name, "Product Added in Basket");
  cart_count();
});


var a2= document.getElementById("a2");
a2.addEventListener("click", function(){
  var data=JSON.parse(localStorage.getItem("bigbasket")) || [];
  data.push(object2);
  localStorage.setItem("products", JSON.stringify(data));
  alert("Product Added in Basket");
  cart_count();
});

var a3= document.getElementById("a3");
a3.addEventListener("click", function(){
  var data=JSON.parse(localStorage.getItem("bigbasket")) || [];
  data.push(object3);
  localStorage.setItem("products", JSON.stringify(data));
  alert("Product Added in Basket");
  cart_count();
});

var a4= document.getElementById("a4");
a4.addEventListener("click", function(){
  var data=JSON.parse(localStorage.getItem("bigbasket")) || [];
  data.push(object4);
  localStorage.setItem("products", JSON.stringify(data));
  alert("Product Added in Basket");
  cart_count();
});

var a5= document.getElementById("a5");
a5.addEventListener("click", function(){
  var data=JSON.parse(localStorage.getItem("bigbasket")) || [];
  data.push(object5);
  localStorage.setItem("products", JSON.stringify(data));
  alert("Product Added in Basket");
  cart_count();
});

cart_count();
function cart_count(){
  var count= document.getElementById("cart_ele");
  var totalcount=JSON.parse(localStorage.getItem("products"));
  if(totalcount!=null){
    count.innerText=totalcount.length;
    console.log(totalcount.length);
  }else{
    count.innerText=0;
  }
};
