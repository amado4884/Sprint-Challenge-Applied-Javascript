// STEP 1: Create a Header component.
// -----------------------
// Write a function that returns the markup you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

function Header() {
  const header = document.createElement("div");
  header.classList.add("header");
  const date = document.createElement("span");
  date.textContent = "SMARCH 28, 2019";
  date.classList.add("date");
  const h1 = document.createElement("h1");
  h1.textContent = "Lambda Times";
  const temp = document.createElement("span");
  temp.classList.add("temp");
  temp.textContent = "98°";

  header.appendChild(date);
  header.appendChild(h1);
  header.appendChild(temp);

  return header;
}

document.querySelector("div.header-container").appendChild(Header());
