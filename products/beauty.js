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
        "https://www.bigbasket.com/media/uploads/p/s/1209799_4-dove-cream-beauty-bathing-bar.jpg",
      logo: "https://www.bbassets.com/static/v2514/custPage/build/content/img/vegicon.svg",
      name: "TCream Beauty Bathing Bar",
      kg: "1kg",
      strike: 840,
      mrp: 595,
      brand:"Aashirvaad"
    },
    {
      imageUrl:
        "https://www.bigbasket.com/media/uploads/p/s/1208387_5-dettol-bathing-bar-soap-original.jpg",
      logo: "https://www.bbassets.com/static/v2514/custPage/build/content/img/vegicon.svg",
      name: "Bathing Bar Soap - Original",
      kg: "500g",
      strike: 240,
      mrp: 225,
      brand:"Red Label"
    },
    {
      imageUrl:
        "https://www.bigbasket.com/media/uploads/p/s/40078317_2-lakme-perfecting-liquid-foundation.jpg",
      logo: "https://www.bbassets.com/static/v2514/custPage/build/content/img/vegicon.svg",
      name: "Perfecting Liquid Foundation",
      kg: "1 pc (approx. 400 to 600 g)",
      strike: 170,
      mrp: 140,
      brand:"Fresho"
    },
    {
      imageUrl:
        "https://www.bigbasket.com/media/uploads/p/s/281185_10-lakme-nail-colour-remover.jpg",
      logo: "https://www.bbassets.com/static/v2514/custPage/build/content/img/vegicon.svg",
      name: "Nail Colour Remover",
      kg: "500g",
      strike: 99,
      mrp: 61.50,
      brand:"BB Popular"
    },
    {
      imageUrl:
        "https://www.bigbasket.com/media/uploads/p/s/40124254_9-dettol-antiseptic-disinfectant-liquid.jpg",
      logo: "https://www.bbassets.com/static/v2514/custPage/build/content/img/vegicon.svg",
      name: "Antiseptic Disinfectant Liquid",
      kg: "1pc",
      strike: 364.5,
      mrp: 313,
      brand:"BB Royal"
    },
    {
      imageUrl:
        "https://www.bigbasket.com/media/uploads/p/s/268464_18-colgate-maxfresh-toothpaste-gel-anticavity-spicy-fresh-saver-pack.jpg",
      logo: "https://www.bbassets.com/static/v2514/custPage/build/content/img/vegicon.svg",
      name: "MaxFresh Toothpaste Gel - Anticavity, Spicy Fresh, Saver Pack",
      kg: "1kg",
      strike: 200,
      mrp: 145,
      brand:"BB Royal"
    },
    {
      imageUrl:
        "https://www.bigbasket.com/media/uploads/p/s/40078319_4-lakme-rose-face-powder-sunscreen.jpg",
      logo: "https://www.bbassets.com/static/v2514/custPage/build/content/img/vegicon.svg",
      name: "Rose Face Powder - Sunscreen",
      kg: "500g",
      strike: 185,
      mrp: 157.25,
      brand:"Fresho"
    },
    {
      imageUrl:
        "https://www.bigbasket.com/media/uploads/p/s/40195476_6-whisper-ultra-clean-sanitary-pads-xl-plus-locks-wetness-odour.jpg",
      logo: "https://www.bbassets.com/static/v2514/custPage/build/content/img/vegicon.svg",
      name: "Ultra Clean Sanitary Pads - XL Plus, Locks Wetness & Odour",
      kg: "1 pc (approx. 400 to 600 g)",
      strike: 625,
      mrp: 312.5,
      brand:"Fresho"
    },
    {
      imageUrl:
        "https://www.bigbasket.com/media/uploads/p/s/40132873_2-parachute-pure-coconut-oil.jpg",
      logo: "https://www.bbassets.com/static/v2514/custPage/build/content/img/vegicon.svg",
      name: "Coconut Oil",
      kg: "500g",
      strike: 234,
      mrp: 193,
      brand:"Fresho"
    },
    {
      imageUrl:
        "https://www.bigbasket.com/media/uploads/p/s/100003902_1-mysore-sandal-bathing-soap.jpg",
      logo: "https://www.bbassets.com/static/v2514/custPage/build/content/img/vegicon.svg",
      name: "Pure Sandalwood Oil Soap, Keeps Skin Glowing, Soft, Blemish-Free",
      kg: "1pc",
      strike: 69,
      mrp: 62,
      brand:"Fresho"
    },
    {
      imageUrl:
        "https://www.bigbasket.com/media/uploads/p/s/40147778_5-maybelline-new-york-baby-lips-lip-balm-pink-lolita.jpg",
      logo: "https://www.bigbasket.com/media/uploads/p/s/1209455_4-paper-boat-coconut-water-refreshing-flavour-vital-electrolytes.jpg",
      name: "Baby Lips Lip Balm - Pink Lolita",
      kg: "1kg",
      strike: 175,
      mrp: 159,
      brand:"Fresho"
    },
    {
      imageUrl:
        "https://www.bigbasket.com/media/uploads/p/s/1212183_1-vaseline-intensive-care-cocoa-glow-body-lotion.jpg",
      logo: "https://www.bbassets.com/static/v2514/custPage/build/content/img/vegicon.svg",
      name: "Intensive Care Cocoa Glow Body Lotion",
      kg: "500g",
      strike: 1305,
      mrp: 783.02,
      brand:"Fresho"
    },
    {
      imageUrl:
        "https://www.bigbasket.com/media/uploads/p/s/100968_5-mysore-sandal-bathing-soap-superior-with-pure-sandalwood-oil.jpg",
      logo: "https://www.bbassets.com/static/v2514/custPage/build/content/img/vegicon.svg",
      name: "Superior Sandalwood Oil Soap",
      kg: "1 pc (approx. 400 to 600 g)",
      strike: 223,
      mrp: 243,
      brand:"Fresho"
    },
    {
      imageUrl:
        "https://www.bigbasket.com/media/uploads/p/s/40177449_11-garnier-skin-naturals-light-complete-milky-face-serum-sheet-mask-yellow.jpg",
      logo: "https://www.bbassets.com/static/v2514/custPage/build/content/img/vegicon.svg",
      name: "Milky Face Serum Sheet Mask - With Vitamin C, Reduces Dark Spots",
      kg: "500g",
      strike: 99,
      mrp: 81.5,
      brand:"Fresho"
    },
    {
      imageUrl:
        "https://www.bigbasket.com/media/uploads/p/s/1202461_4-dettol-handwash-skin-care.jpg",
      logo: "https://www.bbassets.com/static/v2514/custPage/build/content/img/vegicon.svg",
      name: "Handwash - Skin Care",
      kg: "1pc",
      strike: 327,
      mrp: 274,
      brand:"Fresho"
    },
    {
      imageUrl:
        "https://www.bigbasket.com/media/uploads/p/s/1208096_4-listerine-mouthwash-cool-mint.jpg",
      logo: "https://www.bbassets.com/static/v2514/custPage/build/content/img/vegicon.svg",
      name: "Mouthwash - Cool Mint",
      kg: "1kg",
      strike: 630,
      mrp: 501.96,
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

