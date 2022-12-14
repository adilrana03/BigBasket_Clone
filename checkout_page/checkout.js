var tBody = document.querySelector("tbody");
var products = JSON.parse(localStorage.getItem("bigbasket")) || [];

display(products);
var totalPrice = 0;
var totalSaved = 0;

function display(data){
    tBody.innerHTML = null;
    totalPrice = 0;
    totalSaved = 0;

    data.map((elem, i)=> {
        var tr = document.createElement("tr");

        var tdItem = document.createElement("td");
        tdItem.innerText = elem.name;
        var tdPrice = document.createElement("td");
        tdPrice.setAttribute("class", "price");
        var p1 = document.createElement("p");
        p1.innerText = elem.price;
        var p2 = document.createElement("p");
        p2.innerText = elem.strike_price;
        tdPrice.append(p1, p2);

        var tdQty = document.createElement("td");
        var div = document.createElement("div");
        div.setAttribute("class", "qtyBtn");
        var dec = document.createElement("button");
        dec.setAttribute("class", "btn1");
        dec.innerText = "-";
        dec.addEventListener("click", sub);
        function sub(){
            var val = +disP.innerText;
            if(val != 1){
                disP.innerText = val-100;
            }
            elem.qty = disP.innerText;
            display(data);
        }
        var disP = document.createElement("p");
        disP.setAttribute("class", "qtyP");
        disP.innerText = elem.qty;
        var inc = document.createElement("button");
        inc.setAttribute("class", "btn2");
        inc.innerText = "+";
        inc.addEventListener("click", add);
        function add(){
            var val = +disP.innerText;
            disP.innerText = val+100;
            elem.qty = disP.innerText;
            display(data);
         }

         div.append(dec, disP, inc);
         
        tdQty.append(div);

        var tdTot = document.createElement("td");
         tdTot.innerText = ((+elem.price) * (+elem.qty).toFixed());
         totalPrice += (+tdTot.innerText);
        var tdDel = document.createElement("td");
         tdDel.setAttribute("class", "delete");
         tdDel.innerHTML = "<i class='fa-sharp fa-solid fa-xmark'></i>";
         tdDel.addEventListener("click", ()=> {
            data.splice(i, 1);
            localStorage.setItem("products", JSON.stringify(data));
            display(data);
         });


        var tdSave = document.createElement("td");
         tdSave.setAttribute("class", "savingsTd");
         tdSave.style="color: #bf2330";
        tdSave.innerText = (((+elem.strike) - (+elem.price)) * (+elem.qty)).toFixed(2);
        totalSaved += (+tdSave.innerText);

        tr.append(tdItem, tdPrice, tdQty, tdTot, tdDel, tdSave);
        tBody.append(tr);
    });

    var totP = document.querySelector("#total");
    totP.innerText = "Rs. "+totalPrice.toFixed(2);

    var totalH2 = document.querySelector("#totalH2");
    totalH2.innerText = "Rs. "+totalPrice.toFixed(2);
    localStorage.setItem("total", +totalPrice.toFixed(2));

    var savedP = document.querySelector("#savedP");
    savedP.innerText = "Rs. "+totalSaved.toFixed(2);

    var basketItems = document.getElementById("basketItems");
    basketItems.innerText = data.length;

    var totSpan = document.getElementById("totSpan");
    totSpan.innerText = data.length;
}

var clearBasket = document.getElementById("clearBasket");
clearBasket.addEventListener("click", rem);
function rem(){
  localStorage.removeItem("products");
  display([]);
}

var btn = document.querySelector("#checkBtn");
btn.addEventListener("click", payment);

function payment(){
    window.location.href="../payment/add.html"
}