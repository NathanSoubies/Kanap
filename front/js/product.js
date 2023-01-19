// Récupération de l'id du produit
const urlsearchparmas = new URLSearchParams(document.location.search)

const id = urlsearchparmas.get("id")
console.log(id)

// Récupération du produit sur l'API
fetch(`http://localhost:3000/api/products/${id}`)
.then(function (res) {
  return res.json();
})
.catch((error) => {
  let sectionitems = document.querySelector(".items");
  sectionitems.innerHTML =
    "Nous n'avons pas réussi à afficher notre article. Avez vous bien lancé le serveur local (Port 3000) ? <br>Si le problème persiste, contactez-nous.";
  productsContainer.style.textAlign = "center";
  productsContainer.style.padding = "30vh 0";
})

// Dispatch des données de l'article
  .then(function (resultatAPI) {
    const articles = resultatAPI;
    console.log(articles);

      let productImg = document.createElement("img");
      document.querySelector("article div.item__img").appendChild(productImg);
      productImg.alt = articles.altTxt;
      productImg.src = articles.imageUrl;

      let productInfoTitle = document.createTextNode(articles.name);
      document.querySelector("h1").appendChild(productInfoTitle);

      let productprice = document.createTextNode(articles.price);
      document.querySelector("#price").appendChild(productprice);

      let productdescri = document.createTextNode(articles.description);
      document.querySelector("#description").appendChild(productdescri);

// Mise en place du menu déroullent couleur
      (articles.colors).forEach(colors => {
        productcolors = document.createElement("option");
        productcolors.text = colors;
        productcolors.value = colors;
        document.querySelector("#colors").appendChild(productcolors)
      });

  })


  

  // choix couleur