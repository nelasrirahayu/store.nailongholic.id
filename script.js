// ================= DATA PRODUK =================

const products = {
    1: { name: "Gantungan Nailong", price: 75000, image: "image/gantungan.jpg" },
    2: { name: "Bucket Boneka Nailong", price: 150000, image: "image/bucket.jpg" },
    3: { name: "Boneka Cemberut Nailong", price: 99000, image: "image/boneka.jpg" },
    4: { name: "Kipas Angin Portable Nailong", price: 350000, image: "image/kipas.jpg" },
    5: { name: "Mug Kecil Nailong", price: 43200, image: "image/mug.jpg" },
    6: { name: "Pouch Makeup Nailong", price: 7800, image: "image/pouch.jpg" },
    7: { name: "Pulpen 10 Warna Nailong", price: 21500, image: "image/pulpen.jpg" },
    8: { name: "Strap Handphone Nailong", price: 20000, image: "image/strap.jpg" },
    9: { name: "Totebag Custom Nailong", price: 50000, image: "image/totebag.jpg" },
    10: { name: "Tumbler Karakter Nailong", price: 87400, image: "image/tumbler.jpg" }
};

// ================= KERANJANG =================

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(id){

    const produk = products[id];

    const index = cart.findIndex(item => item.name === produk.name);

    if(index !== -1){
        cart[index].qty += 1;
    }else{
        cart.push({
            name: produk.name,
            price: produk.price,
            image: produk.image,
            qty: 1
        });
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    updateCartCount();

    alert(produk.name + " berhasil ditambahkan ke keranjang.");
}

function buyNow(id){

    const produk = {
        ...products[id],
        qty:1
    };

    localStorage.setItem("checkoutProduk", JSON.stringify([produk]));

    window.location.href="checkout.html";
}

function updateCartCount(){

    let total=0;

    cart.forEach(item=>{
        total += item.qty;
    });

    const count=document.getElementById("cart-count");

    if(count){
        count.innerText=total;
    }

}

// ================= SEARCH =================

function searchProduct(){

    const keyword=document.getElementById("search").value.toLowerCase();

    const cards=document.querySelectorAll(".product-card");

    cards.forEach(card=>{

        const title=card.querySelector("h3").innerText.toLowerCase();

        card.style.display=title.includes(keyword) ? "block" : "none";

    });

}

updateCartCount();