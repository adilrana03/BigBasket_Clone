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
        "https://www.bigbasket.com/media/uploads/p/s/271205_14-id-fresho-idly-dosa-batter.jpg",
      logo: "https://www.bbassets.com/static/v2514/custPage/build/content/img/vegicon.svg",
      name: "Idly & Dosa Batter",
      kg: "1kg",
      strike: 79,
      mrp: 74.5,
      brand:"Aashirvaad"
    },
    {
      imageUrl:
        "https://www.bigbasket.com/media/uploads/p/s/40096746_2-hallimane-2-in-1-idli-dosa-batter.jpg",
      logo: "https://www.bbassets.com/static/v2514/custPage/build/content/img/vegicon.svg",
      name: "2-In-1 Idli Dosa Batter",
      kg: "500g",
      strike: 80,
      mrp: 75,
      brand:"Red Label"
    },
    {
      imageUrl:
        "https://www.bigbasket.com/media/uploads/p/s/266109_19-maggi-2-minute-instant-noodles-masala.jpg",
      logo: "https://www.bbassets.com/static/v2514/custPage/build/content/img/vegicon.svg",
      name: "2-Minute Instant Masala Noodles - Made With Quality Spices,",
      kg: "1 pc (approx. 400 to 600 g)",
      strike: 109,
      mrp: 97,
      brand:"Fresho"
    },
    {
      imageUrl:
        "https://www.bigbasket.com/media/uploads/p/s/1214513_9-fresho-frozen-green-peas.jpg",
      logo: "https://www.bbassets.com/static/v2514/custPage/build/content/img/vegicon.svg",
      name: "Frozen Green Peas",
      kg: "500g",
      strike: 480,
      mrp: 370,
      brand:"BB Popular"
    },
    {
      imageUrl:
        "https://www.bigbasket.com/media/uploads/p/s/1200590_8-cadbury-dairy-milk-chocolate.jpg",
      logo: "https://www.bbassets.com/static/v2514/custPage/build/content/img/vegicon.svg",
      name: "Chocolate",
      kg: "1pc",
      strike: 150,
      mrp: 142.5,
      brand:"BB Royal"
    },
    {
      imageUrl:
        "https://www.bigbasket.com/media/uploads/p/s/40189353_1-kapiva-organic-gulkand-rich-in-calcium-and-antioxidants.jpg",
      logo: "https://www.bbassets.com/static/v2514/custPage/build/content/img/vegicon.svg",
      name: "Organic Gulkand - Rich In Calcium And Antioxidants",
      kg: "1kg",
      strike: 449,
      mrp: 404.5,
      brand:"BB Royal"
    },
    {
      imageUrl:
        "https://www.bigbasket.com/media/uploads/p/s/1214117_1-id-fresho-idly-dosa-batter-1-kg-whole-wheat-parota-350-g.jpg",
      logo: "https://www.bbassets.com/static/v2514/custPage/build/content/img/vegicon.svg",
      name: "dly Dosa Batter, 1 Kg + Whole Wheat Parota, 400 g",
      kg: "500g",
      strike: 174,
      mrp: 151,
      brand:"Fresho"
    },
    {
      imageUrl:
        "https://www.bigbasket.com/media/uploads/p/s/1201304_2-britannia-nutrichoice-digestive-high-fibre-biscuits.jpg",
      logo: "https://www.bbassets.com/static/v2514/custPage/build/content/img/vegicon.svg",
      name: "Digestive High Fibre Biscuits,",
      kg: "1 pc (approx. 400 to 600 g)",
      strike: 40,
      mrp: 37,
      brand:"Fresho"
    },
    {
      imageUrl:
        "https://www.bigbasket.com/media/uploads/p/s/267413_9-cadbury-nutties-chocolate-pack.jpg",
      logo: "https://www.bbassets.com/static/v2514/custPage/build/content/img/vegicon.svg",
      name: "Nutties Chocolate Pack",
      kg: "500g",
      strike: 40,
      mrp: 39.20,
      brand:"Fresho"
    },
    {
      imageUrl:
        "https://www.bigbasket.com/media/uploads/p/s/40091105_13-quaker-rolled-oats-rich-in-protein-nutritious-easy-to-cook.jpg",
      logo: "https://www.bbassets.com/static/v2514/custPage/build/content/img/vegicon.svg",
      name: "Rolled Oats - Rich In Protein, Nutritious, Easy To Cook",
      kg: "1pc",
      strike: 399,
      mrp: 368,
      brand:"Fresho"
    },
    {
      imageUrl:
        "",
      logo: "https://www.bigbasket.com/media/uploads/p/s/1215053_1-bb-combo-bb-royal-organic-kashmir-honey-500-g-id-fresho-idly-dosa-batter-1-kg.jpg",
      name: "",
      kg: "1kg",
      strike: 508,
      mrp: 335,
      brand:"Fresho"
    },
    {
      imageUrl:
        "https://www.bigbasket.com/media/uploads/p/s/103692_2-safal-frozen-green-peas.jpg",
      logo: "https://www.bbassets.com/static/v2514/custPage/build/content/img/vegicon.svg",
      name: "Frozen - Green Peas",
      kg: "500g",
      strike: 240,
      mrp: 191,
      brand:"Fresho"
    },
    {
      imageUrl:
        "https://www.bigbasket.com/media/uploads/p/s/263526_17-britannia-good-day-cashew-cookies.jpg",
      logo: "https://www.bbassets.com/static/v2514/custPage/build/content/img/vegicon.svg",
      name: "Good Day Cashew Cookies ",
      kg: "1 pc (approx. 400 to 600 g)",
      strike: 50,
      mrp: 45,
      brand:"Fresho"
    },
    {
      imageUrl:
        "https://www.bigbasket.com/media/uploads/p/s/157375_9-mtr-breakfast-mix-rava-idli.jpg",
      logo: "https://www.bbassets.com/static/v2514/custPage/build/content/img/vegicon.svg",
      name: "Breakfast Mix - Rava Idli",
      kg: "500g",
      strike: 250,
      mrp: 182,
      brand:"Fresho"
    },
    {
      imageUrl:
        "https://www.bigbasket.com/media/uploads/p/s/100012354_14-britannia-bourbon-chocolate-cream-biscuits.jpg",
      logo: "https://www.bbassets.com/static/v2514/custPage/build/content/img/vegicon.svg",
      name: "Bourbon Chocolate Cream Biscuits",
      kg: "1pc",
      strike: 12,
      mrp: 10,
      brand:"Fresho"
    },
    {
      imageUrl:
        "https://www.bigbasket.com/media/uploads/p/s/100022552_1-haldirams-namkeen-bhujia-sev.jpg",
      logo: "https://www.bbassets.com/static/v2514/custPage/build/content/img/vegicon.svg",
      name: "Namkeen - Bhujia Sev",
      kg: "1kg",
      strike: 260,
      mrp: 216,
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

