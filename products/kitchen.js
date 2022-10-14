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
        "https://www.bigbasket.com/media/uploads/p/s/30005107_17-pedigree-dry-dog-food-chicken-vegetables-for-adult-dogs.jpg",
      logo: "https://www.bbassets.com/static/v2514/custPage/build/content/img/vegicon.svg",
      name: "Dry Pet Food - For Adult Dogs, Chicken & Vegetables",
      kg: "1kg",
      strike: 840,
      mrp: 595,
      brand:"Aashirvaad"
    },
    {
      imageUrl:
        "https://www.bigbasket.com/media/uploads/p/s/40024642_1-daily-dump-organic-compost.jpg",
      logo: "https://www.bbassets.com/static/v2514/custPage/build/content/img/vegicon.svg",
      name: "Organic-Compost",
      kg: "500g",
      strike: 585,
      mrp: 480.5,
      brand:"Red Label"
    },
    {
      imageUrl:
        "https://www.bigbasket.com/media/uploads/p/s/40209692_1-natures-plus-flower-pot-120.jpg",
      logo: "https://www.bbassets.com/static/v2514/custPage/build/content/img/vegicon.svg",
      name: "Flower Pot 120",
      kg: "1 pc (approx. 400 to 600 g)",
      strike: 10,
      mrp: 9,
      brand:"Fresho"
    },
    {
      imageUrl:
        "https://www.bigbasket.com/media/uploads/p/s/40008667_8-natures-plus-pot-mix.jpg",
      logo: "https://www.bbassets.com/static/v2514/custPage/build/content/img/vegicon.svg",
      name: "Pot Mix",
      kg: "500g",
      strike: 399,
      mrp: 340,
      brand:"BB Popular"
    },
    {
      imageUrl:
        "https://www.bigbasket.com/media/uploads/p/s/100028198_5-duracell-ultra-alkaline-battery-aa.jpg",
      logo: "https://www.bbassets.com/static/v2514/custPage/build/content/img/vegicon.svg",
      name: "Ultra-Alkaline Battery AA",
      kg: "1pc",
      strike: 65,
      mrp: 68,
      brand:"BB Royal"
    },
    {
      imageUrl:
        "https://www.bigbasket.com/media/uploads/p/s/40235056_1-whiskas-wet-cat-food-adult-1-year-salmon-in-gravy-balanced-nutrition-shiny-coat.jpg",
      logo: "https://www.bbassets.com/static/v2514/custPage/build/content/img/vegicon.svg",
      name: "Wet Cat Food - Adult, +1 Year, Salmon In Gravy, Balanced Nutrition, Shiny Coat",
      kg: "1kg",
      strike: 960,
      mrp: 800,
      brand:"BB Royal"
    },
    {
      imageUrl:
        "https://www.bigbasket.com/media/uploads/p/s/40185972_6-bb-home-stainless-steel-pav-bhajiidli-plate-oval-shape.jpg",
      logo: "https://www.bbassets.com/static/v2514/custPage/build/content/img/vegicon.svg",
      name: "Stainless Steel Pav Bhaji/Idli Plate - Oval Shape",
      kg: "500g",
      strike: 139,
      mrp: 99,
      brand:"Fresho"
    },
    {
      imageUrl:
        "https://www.bigbasket.com/media/uploads/p/s/40209575_1-natures-plus-vermi-compost-organic-manure.jpg",
      logo: "https://www.bbassets.com/static/v2514/custPage/build/content/img/vegicon.svg",
      name: "Vermi Compost - Organic Manur",
      kg: "1 pc (approx. 400 to 600 g)",
      strike: 600,
      mrp: 390,
      brand:"Fresho"
    },
    {
      imageUrl:
        "https://www.bigbasket.com/media/uploads/p/s/40124436_2-sheba-premium-cat-food-fish-with-dry-bonito-flake-for-adult-cats.jpg",
      logo: "https://www.bbassets.com/static/v2514/custPage/build/content/img/vegicon.svg",
      name: "Deluxe Pet Food - For Cats, Succulent Chicken Breast in Gravy",
      kg: "500g",
      strike: 378,
      mrp: 332.25,
      brand:"Fresho"
    },
    {
      imageUrl:
        "https://www.bigbasket.com/media/uploads/p/s/40021905_9-sheba-premium-cat-food-succulent-chicken-breast-in-gravy.jpg",
      logo: "https://www.bbassets.com/static/v2514/custPage/build/content/img/vegicon.svg",
      name: "Deluxe Pet Food - For Cats, Succulent Chicken Breast in Gravy",
      kg: "1pc",
      strike: 215,
      mrp: 176,
      brand:"Fresho"
    },
    {
      imageUrl:
        "https://www.bigbasket.com/media/uploads/p/s/40209695_1-natures-plus-planter-tray-40.jpg",
      logo: "https://www.bigbasket.com/media/uploads/p/s/1209455_4-paper-boat-coconut-water-refreshing-flavour-vital-electrolytes.jpg",
      name: "Planter Tray 40",
      kg: "1kg",
      strike: 260,
      mrp: 238,
      brand:"Fresho"
    },
    {
      imageUrl:
        "https://www.bigbasket.com/media/uploads/p/s/40174570_2-hit-anti-mosquito-racquet-rechargeable-insect-killer-bat-with-led-light.jpg",
      logo: "https://www.bbassets.com/static/v2514/custPage/build/content/img/vegicon.svg",
      name: "Anti Mosquito Racquet - Rechargeable Insect Killer Bat With LED Light",
      kg: "500g",
      strike: 399,
      mrp: 375,
      brand:"Fresho"
    },
    {
      imageUrl:
        "https://www.bigbasket.com/media/uploads/p/s/1214635_1-eveready-led-bulb-9-watt-cool-day-light-base-b22d.jpg",
      logo: "https://www.bbassets.com/static/v2514/custPage/build/content/img/vegicon.svg",
      name: "LED Bulb - 9 Watt, Cool Day Light, Base B22D",
      kg: "1 pc (approx. 400 to 600 g)",
      strike: 30,
      mrp: 27,
      brand:"Fresho"
    },
    {
      imageUrl:
        "https://www.bigbasket.com/media/uploads/p/s/40235058_1-whiskas-wet-cat-food-adult-1-year-tuna-in-jelly-for-balanced-nutrition-shiny-coat.jpg",
      logo: "https://www.bbassets.com/static/v2514/custPage/build/content/img/vegicon.svg",
      name: "Wet Cat Food - Adult, +1 year, Tuna In Jelly, For Balanced Nutrition & Shiny Coat",
      kg: "500g",
      strike: 430,
      mrp: 335,
      brand:"Fresho"
    },
    {
      imageUrl:
        "https://www.bigbasket.com/media/uploads/p/s/70001924_15-pedigree-adult-gravy-doga-food-chicken-liver-chunks-in-gravy-25-rsa-off-value-pack.jpg",
      logo: "https://www.bbassets.com/static/v2514/custPage/build/content/img/vegicon.svg",
      name: "Adult Gravy DogÂ Food - Chicken & Liver Chunks In Gravy, 25 RsÂ Off Value Pack",
      kg: "1pc",
      strike: 930,
      mrp: 738,
      brand:"Fresho"
    },
    {
      imageUrl:
        "https://www.bigbasket.com/media/uploads/p/s/273623_5-duracell-ultra-alkaline-battery-aaa.jpg",
      logo: "https://www.bbassets.com/static/v2514/custPage/build/content/img/vegicon.svg",
      name: "Ultra-Alkaline Battery AAA",
      kg: "1kg",
      strike: 480,
      mrp: 460,
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

