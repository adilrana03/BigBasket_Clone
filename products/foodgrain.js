// importing the navbar and footer
// import navbar from "navbar.js" ;
// import footer from 'footer.js'; 
// //calling the imported functions
// var nav_bar = document.getElementById("nav")
// nav_bar.innerHTML = navbar()

// var footer_div = document.getElementById("footer")
// footer_div.innerHTML = footer()
// console.log("anu");
// fetching all products from db
var Data;
// async function getdata(){
//     try{
//         let req=await fetch("https://bigbasketnewdb.herokuapp.com/products");
//         let data=await req.json();
//         Data=data.data.products;
    
//         display(data.data.products);
//         console.log(Data);
//     }
//     catch(err){
//         console.log(err);
//     }
// }
// calling getdata()
var bakery = [
    {
      imageUrl:
        "https://www.bigbasket.com/media/uploads/p/s/126906_8-aashirvaad-atta-whole-wheat.jpg",
      logo: "https://www.bbassets.com/static/v2514/custPage/build/content/img/vegicon.svg",
      name: "Atta/Godihittu - Whole Wheat",
      kg: "1kg",
      strike: 60,
      mrp: 38.38,
      brand:"Aashirvaad"
    },
    {
      imageUrl:
        "https://www.bigbasket.com/media/uploads/p/s/20001214_15-bb-royal-sona-masoori-raw-rice.jpg",
      logo: "https://www.bbassets.com/static/v2514/custPage/build/content/img/vegicon.svg",
      name: "Sona Masoori Raw Rice/Akki",
      kg: "500g",
      strike: 23.19,
      mrp: 19,
      brand:"BB Royal"
    },
    {
      imageUrl:
        "https://www.bigbasket.com/media/uploads/p/s/40101871_11-bb-royal-organic-almondbadam.jpg",
      logo: "https://www.bbassets.com/static/v2514/custPage/build/content/img/vegicon.svg",
      name: "Organic - Almond/Badam",
      kg: "1 pc (approx. 400 to 600 g)",
      strike: 23.19,
      mrp: 19,
      brand:"Fresho"
    },
    {
      imageUrl:
        "https://www.bigbasket.com/media/uploads/p/s/30005417_8-bb-popular-sugar.jpg",
      logo: "https://www.bbassets.com/static/v2514/custPage/build/content/img/vegicon.svg",
      name: "Sugar/Sakkare",
      kg: "500g",
      strike: 42.50,
      mrp: 34,
      brand:"BB Popular"
    },
    {
      imageUrl:
        "https://www.bigbasket.com/media/uploads/p/s/40030808_10-bb-royal-cuminjeera-whole.jpg",
      logo: "https://www.bbassets.com/static/v2514/custPage/build/content/img/vegicon.svg",
      name: "Cumin/Jeera/Jeerige - Whole",
      kg: "1pc",
      strike: 38.75,
      mrp: 31,
      brand:"BB Royal"
    },
    {
      imageUrl:
        "https://www.bigbasket.com/media/uploads/p/s/40075897_12-bb-royal-sona-masoori-rice-raw-rice-super-premium.jpg",
      logo: "https://www.bbassets.com/static/v2514/custPage/build/content/img/vegicon.svg",
      name: "Sona Masoori Rice/Akki Raw Rice/Akki - Super Premium",
      kg: "1kg",
      strike: 60,
      mrp: 38.38,
      brand:"BB Royal"
    },
    {
      imageUrl:
        "https://www.bigbasket.com/media/uploads/p/s/213273_7-nandini-pure-ghee.jpg",
      logo: "https://www.bbassets.com/static/v2514/custPage/build/content/img/vegicon.svg",
      name: "Pure Ghee/Tuppa",
      kg: "500g",
      strike: 23.19,
      mrp: 19,
      brand:"Fresho"
    },
    {
      imageUrl:
        "https://www.bigbasket.com/media/uploads/p/s/1204455_2-fortune-sunflower-refined-oil-sun-lite.jpg",
      logo: "https://www.bbassets.com/static/v2514/custPage/build/content/img/vegicon.svg",
      name: "Sunflower Refined Oil - Sun Lite",
      kg: "1 pc (approx. 400 to 600 g)",
      strike: 23.19,
      mrp: 19,
      brand:"Fresho"
    },
    {
      imageUrl:
        "https://www.bigbasket.com/media/uploads/p/s/10000423_12-bb-royal-sooji-ordinarybombay-rava.jpg",
      logo: "https://www.bbassets.com/static/v2514/custPage/build/content/img/vegicon.svg",
      name: "Sooji Ordinary/Bombay Rava",
      kg: "500g",
      strike: 42.50,
      mrp: 34,
      brand:"Fresho"
    },
    {
      imageUrl:
        "https://www.bigbasket.com/media/uploads/p/s/10000804_12-bb-royal-toor-dalarhar-dal-desi.jpg",
      logo: "https://www.bbassets.com/static/v2514/custPage/build/content/img/vegicon.svg",
      name: "Toor Dal/Togari Bele - Desi",
      kg: "1pc",
      strike: 38.75,
      mrp: 31,
      brand:"Fresho"
    },
    {
      imageUrl:
        "https://www.bigbasket.com/media/uploads/p/s/274120_4-sunpure-refined-sunflower-oil.jpg",
      logo: "https://www.bbassets.com/static/v2514/custPage/build/content/img/vegicon.svg",
      name: "Refined - Sunflower Oil",
      kg: "1kg",
      strike: 60,
      mrp: 38.38,
      brand:"Fresho"
    },
    {
      imageUrl:
        "https://www.bigbasket.com/media/uploads/p/s/10000446_17-bb-royal-peanutsmungaphalishengdana-raw.jpg",
      logo: "https://www.bbassets.com/static/v2514/custPage/build/content/img/vegicon.svg",
      name: "Peanuts/Kadalekayi - Raw",
      kg: "500g",
      strike: 23.19,
      mrp: 19,
      brand:"Fresho"
    },
    {
      imageUrl:
        "https://www.bigbasket.com/media/uploads/p/s/20000541_12-bb-royal-fried-grambengal-gram.jpg",
      logo: "https://www.bbassets.com/static/v2514/custPage/build/content/img/vegicon.svg",
      name: "Fried Gram/Huri Kadale ",
      kg: "1 pc (approx. 400 to 600 g)",
      strike: 23.19,
      mrp: 19,
      brand:"Fresho"
    },
    {
      imageUrl:
        "https://www.bigbasket.com/media/uploads/p/s/60000007_5-bb-popular-moong-dal.jpg",
      logo: "https://www.bbassets.com/static/v2514/custPage/build/content/img/vegicon.svg",
      name: "Moong Dal/Hesaru Bele",
      kg: "500g",
      strike: 42.50,
      mrp: 34,
      brand:"Fresho"
    },
    {
      imageUrl:
        "https://www.bigbasket.com/media/uploads/p/s/40075469_9-bb-royal-organic-turtoor-dal.jpg",
      logo: "https://www.bbassets.com/static/v2514/custPage/build/content/img/vegicon.svg",
      name: "Organic - Toor Dal/Togari Bele",
      kg: "1pc",
      strike: 38.75,
      mrp: 31,
      brand:"Fresho"
    },
    {
      imageUrl:
        "https://www.bigbasket.com/media/uploads/p/s/241600_5-tata-salt-iodized.jpg",
      logo: "https://www.bbassets.com/static/v2514/custPage/build/content/img/vegicon.svg",
      name: "Iodized",
      kg: "1kg",
      strike: 60,
      mrp: 38.38,
      brand:"Fresho"
    }
  ]
  display(bakery);
//getdata();

// creating debouncing function
let inputStr= document.querySelector("#searchbar");
let search_waiting; // to store searced keywords
  async function data(){
    let search=inputStr.value;
     if(search.length<=2){
         return false
     }
     try{
        let req=await fetch(`https://bigbasketnewdb.herokuapp.com/products?s=${search}`);
        let data=await req.json();
         Data=data;
        // let all=data.data.products
        console.log(data);
        display(data);
    }
    catch(err){
        console.log(err);
    }
 }
//  inputStr.oninput=()=>{
   
//     deBounce(data,1000);
    
//  }

 // debounce function
// function deBounce(fun,delay){
//      if(search_waiting){
//          clearTimeout(search_waiting);
//          getdata(); // calling getdata() again to reload the all data from db
//      }
//    search_waiting=setTimeout(()=>{
//           fun();
//       },delay);
// }



// creating the display function
function display(data){
    // getting the parent div to append the products
let prd=document.getElementById("products")
prd.innerHTML="";
// mapping the created products data
data.forEach(function(elem,index){
var mainDiv=document.createElement("div");
mainDiv.setAttribute("id","mainDiv")
var image=document.createElement("img");
image.src=elem.imageUrl
image.setAttribute("id","imgid")
// var offdiv=document.createElement("div")
// offdiv.innerText=elem.off;
//offdiv.setAttribute("id","offdiv")
var idiv=document.createElement("div")

var namediv=document.createElement("div")
namediv.setAttribute("id","namediv")

var name=document.createElement("h7");
name.style.fontSize="20px"
namediv.append(name)
var fresh=document.createElement("div")
fresh.setAttribute("id","fresh")
fresh.textContent="Fresho"
name.textContent=elem.name;
name.style.backgroundColor="white";
var veg=document.createElement("img")
veg.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh71sfIQVPk_TuhnuWB0Q1E6FlciHqRH-wRA&usqp=CAU"
veg.setAttribute("id","logo")


var price=document.createElement("h7");
var price2=document.createElement("h7");
price2.textContent=elem.mrp2;
price2.setAttribute("id","price2")
price.textContent=`Rs ${elem.mrp}`;
price.style.fontSize="18px"

var truck=document.createElement("img")
truck.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhzs53TfNnjTRqFDU7kRfOsoh3LE14bJe5Qg&usqp=CAU"
var mdiv=document.createElement("div")
mdiv.setAttribute("id","mdiv")
var divOne=document.createElement("div")
divOne.append(truck)
var divTwo=document.createElement("div")
divTwo.setAttribute("id","divTwo")

var div3=document.createElement("div")
div3.setAttribute("id","div3")
div3.textContent="Standard Delivery: 21 Jan, 7:00AM - 9:00AM"
divTwo.append(price2,price,div3);
mdiv.append(divOne,divTwo)

var coldiv=document.createElement("div")
coldiv.setAttribute("id","coldiv")

//button 
var qtybox=document.createElement("div")
qtybox.setAttribute("id","qtybox")
qtybox.innerText="1"

var btn = document.createElement("button");
btn.textContent="Add";
btn.setAttribute("id","cartbtn");
var count=2;
// adding click event to add items in the cart
btn.addEventListener("click",function(){
   
    
    qtybox.textContent=count++;
    elem.qty=1;
    
    addtocart(elem.name,elem.mrp,elem.qty,elem.strike);
     alert(`${elem.name} is added successfully`)
   

  })


var btndiv=document.createElement("div")
btndiv.setAttribute("id","btndiv");
var qtydiv=document.createElement("div")
qtydiv.setAttribute("id","qtydiv")
var qty=document.createElement("id","qty")
qty.textContent="Qty"


var cartbtn=document.createElement("div")
cartbtn.append(btn)

qtydiv.append(qty,qtybox)
btndiv.append(qtydiv,cartbtn)
coldiv.append(mdiv,btndiv)


idiv.append(image)
mainDiv.append(idiv,veg,fresh,namediv,coldiv);
prd.append(mainDiv);
});
}
// add to cart function 
function addtocart(name,price,qty,strike){
    // creating local storage
let cartdata=JSON.parse(localStorage.getItem("bigbasket")) || [];
// creating object to store cart data
let obj={
    name:name,
    strike:strike,
    price:price,
    qty:qty,
}
cartdata.push(obj);
// settig the total cart items
//document.getElementById("itemCountNav").textContent=`${cartdata.length} item`;
// setting local storage
localStorage.setItem("bigbasket",JSON.stringify(cartdata)); 
count();
}
// getting the local storage of cart data
let cartdata= JSON.parse(localStorage.getItem("bigbasket"))
//document.getElementById("itemCountNav").textContent=`${cartdata.length} item`;

// adding sort functionality 

var sort=document.getElementById("sortPrice");

sort.addEventListener("change",function priceSort(){

var sel=document.querySelector("#sortPrice").value;
console.log(sel)
if(sel=="asc"){
    bakery.sort(function(a,b){
        return a.mrp-b.mrp;
    })
}
if(sel=="dsc"){
    bakery.sort(function(a,b){
        return b.mrp-a.mrp;
    })
}
if(sel=="nasc"){
    bakery.sort(function(a,b){
 if(b.name>a.name){
     return -1;
 }
})
}
if(sel=="ndsc"){
    bakery.sort(function(a,b){
 if(a.name>b.name){
     return -1;
 }
})
}
display(bakery);
});
count();
function count(){
    var totalproducts=document.getElementById("totalprod")
var val=JSON.parse(localStorage.getItem("bigbasket"));
if(val==null){
    totalproducts.innerText="0";
}else{
    totalproducts.innerText=val.length;
}
}
//localStorage.setItem("user","anyname")
var username=document.querySelector("#username")
var user=localStorage.getItem("user")
if(user!=null){
username.innerText=user;
}

