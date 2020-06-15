// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each 'article' in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Use your function to create a card for each of the articles and add the card to the DOM.

const cards = document.querySelector("div.cards-container");

axios
  .get("https://lambda-times-backend.herokuapp.com/articles")
  .then(({ data: { articles } }) => {
    for (const category in articles) {
      articles[category].forEach((article) => cards.appendChild(Cards(article)));
    }
  })
  .catch((error) => console.log(error));

function Cards(article) {
  const card = document.createElement("div");
  card.classList.add("card");

  const headline = document.createElement("div");
  headline.classList.add("headline");
  headline.textContent = `${article.headline}`;

  const author = document.createElement("div");
  author.classList.add("author");

  const imgContainer = document.createElement("div");
  imgContainer.classList.add("img-container");
  const img = document.createElement("img");
  img.src = article.authorPhoto;

  const authorsName = document.createElement("span");
  authorsName.textContent = `By ${article.authorName}`;

  card.appendChild(headline);
  imgContainer.appendChild(img);
  author.appendChild(imgContainer);
  author.appendChild(authorsName);
  card.appendChild(author);

  return card;
}
