let products = [
    {
        title: "BESTSELLER",
        image: "./assets/image/image copy 9.png",
        price: 1200,
        description:"Trendy models of our experts, for the love of your life selected",
        id: 1,

    },
    {
        title: "SOLITAIRE",
        image: "./assets/image/image copy 10.png",
        price: 1000,
        description:"Trendy models of our experts, for the love of your life selected",
        id: 2,

    },
    {
        title: "PLATINUM",
        image: "./assets/image/image copy 11.png",
        price: 300,
        description:"Trendy models of our experts, for the love of your life selected",
        id: 3,

    },
    {
        title: "CHEAP",
        image: "./assets/image/image copy 12.png",
        price: 1400,
        description:"Trendy models of our experts, for the love of your life selected",
        id: 4,

    },
];
// --------
  

let cardArray = []
let count = document.querySelector(".count")
let modalBtn = document.querySelector(".modal-btn")

modalBtn.onclick=function () {
    cardArray = [];
    displayCard();
    updateCardCount();
}



function updateCardCount(){
    count.innerHTML = cardArray.length
}

function displayCard(){
    modalProduct.innerHTML = cardArray.map((item) => {
    return`
    <div class="modal-main">
    <div>
        <h1>${item.title}</h1>
        <p>${item.price}</p>
    </div>
    <img src="${item.image}" alt="">
</div>
`;
}) 
.join("");
};

function addCard(id) {
    let findProduct = products.find((x) => x.id == id)
    let isCartArray = cardArray.find((x)=>x.id==id)
    
    if (!isCartArray) {
        cardArray.push(findProduct)
        updateCardCount()
        displayCard()
    }
    console.log(cardArray);
}




// ---------
let result = document.querySelector(".wrap")

let modalProduct = document.querySelector(".modal-product")

let showProduct = products.map((item) => {
    return `
    <div class="ring active">
        <img src="${item.image}" alt="">
        <h1>${item.title}</h1>
        <h2>${item.description}</h2>
        <button onclick = "addCard('${item.id}')">Discover now</button>
    </div> 
    `
})


result.innerHTML = showProduct.join("")


let user= {
    name:"ali",
    age:18,
}
console.log(user.name);


let cardBtn = document.getElementById("card")

let modal = document.querySelector(".modal")

let close = document.getElementById("close")

cardBtn.onclick = function(){
    modal.style.display = "block";
}
 
close.onclick = function(){
    modal.style.display = "none";
}


// ---------

// let icon1 = document.querySelector('.icons img:first-child');
// icon1.addEventListener('click', function() {
//     window.location.href = './list.html';
// });



document.addEventListener("click", function(event) {
    const isModal = modal.contains(event.target)
    const isCardBtn = cardBtn.contains(event.target)
    if(!isModal && !isCardBtn ){
        modal.style.display = "none"
    }
})







