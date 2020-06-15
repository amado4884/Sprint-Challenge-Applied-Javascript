// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>

const topicsDiv = document.querySelector("div.topics");

axios
  .get("https://lambda-times-backend.herokuapp.com/topics")
  .then(({ data: { topics } }) => {
    topics.forEach((topic) => {
      const topicDiv = document.createElement("div");
      topicDiv.classList.add("tab");
      topicDiv.textContent = topic;
      topicsDiv.appendChild(topicDiv);
      topicDiv.addEventListener("click", (e) => {
        const allCards = document.querySelectorAll(`div.card`);
        allCards.forEach((card) => (card.style.display = "none"));
        if (topic === "node.js") topic = "node";
        const chosenCards = document.querySelectorAll(`[category=${topic}]`);
        chosenCards.forEach((card) => (card.style.display = "block"));
      });
    });
  })
  .catch((error) => console.log(`Error: `, error.message));
