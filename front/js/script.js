main();

function main() {
  getArticles();
}

// Récupération des articles depuis l'API
function getArticles() {
  fetch("http://localhost:3000/api/products")
    .then(function (res) {
      return res.json();
    })

    // Dispatche des données de chaque produit
    .then(function (resultatAPI) {
      const articles = resultatAPI;
      // console.log(articles);
      for (let article in articles) {

        let productLink = document.createElement("a");
        document.querySelector(".items").appendChild(productLink);
        productLink.href = `product.html?id=${resultatAPI[article]._id}`;

        let productImgDiv = document.createElement("article");
        productLink.appendChild(productImgDiv);

        let productImg = document.createElement("img");
        productImgDiv.appendChild(productImg);
        productImg.alt = "Lorem ipsum dolor sit amet, " + resultatAPI[article].name;
        productImg.src = resultatAPI[article].imageUrl;

        let productInfoTitle = document.createElement("h3");
        productImgDiv.appendChild(productInfoTitle);
        productInfoTitle.classList.add("productName");
        productInfoTitle.innerText = resultatAPI[article].name;

        let productDescri = document.createElement("p");
        productImgDiv.appendChild(productDescri);
        productDescri.classList.add("productDescription");
        productDescri.innerText = resultatAPI[article].description;

      }
    })

    .catch((error) => {
      let sectionitems = document.querySelector(".items");
      sectionitems.innerHTML =
        "Nous n'avons pas réussi à afficher nos articles. Avez vous bien lancé le serveur local (Port 3000) ? <br>Si le problème persiste, contactez-nous.";
      productsContainer.style.textAlign = "center";
      productsContainer.style.padding = "30vh 0";
    });
}
