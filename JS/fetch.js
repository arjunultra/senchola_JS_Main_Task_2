// fetch
// Make a fetch request to get electronic products
fetch("https://fakestoreapi.com/products")
  .then(res => res.json())
  .then(json => console.log(json))
  .then(data => {
    // Loop through the data and create Bootstrap cards
    data.slice(0, 20).forEach(product => {
      const card = document.createElement("div");
      card.classList.add("card", "m-3");

      const image = document.createElement("img");
      image.src = product.image;
      image.classList.add("card-img-top");
      card.appendChild(image);

      const cardBody = document.createElement("div");
      cardBody.classList.add("card-body");

      const title = document.createElement("h5");
      title.textContent = product.title;
      title.classList.add("card-title");
      cardBody.appendChild(title);

      const description = document.createElement("p");
      description.textContent = product.description;
      description.classList.add("card-text");
      cardBody.appendChild(description);

      card.appendChild(cardBody);

      // Append the card to the container element
      document.getElementById("product-container").appendChild(card);
    });
  })
  .catch(error => console.log(error));
