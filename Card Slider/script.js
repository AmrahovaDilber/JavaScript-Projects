const container = document.querySelector("#container");
const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");
const points = document.querySelector("#points");

let index = 0;
const itemsPerPage = 3; // Number of items to display per page
let items = [];

async function fetchData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  return data;
}

async function getData() {
  items = await fetchData(); // Fetch data and update global items array
  updateContainer(items);
  updatePoints(); // Call updatePoints after fetching data
}

function updateContainer(items) {
  const slicedArr = items.slice(index, index + itemsPerPage);
  container.innerHTML = "";
  slicedArr.forEach((item) => {
    container.innerHTML += `
      <div class="flex-none w-60 bg-white border rounded-lg p-4 flex flex-col items-center">
        <div class="w-16 h-16 rounded-full border overflow-hidden mb-4">
          <img src="https://via.placeholder.com/150" alt="Placeholder" class="object-cover w-full h-full" />
        </div>
        <p class="font-semibold mb-2">${item.name}</p>
        <p class="font-medium text-center mb-4">${item.email}</p>
        <button class="w-full py-2 rounded-md bg-blue-500 text-white font-semibold">Message</button>
      </div>
    `;
  });
  updatePoints(); 
}

function updatePoints() {
  const totalPages = Math.ceil(items.length / itemsPerPage);
  points.innerHTML = ""; // Clear existing points
  for (let i = 0; i < totalPages; i++) {
    const point = document.createElement("div");
    point.classList.add(
      "w-3",
      "h-3",
      "rounded-full",
      i === Math.floor(index / itemsPerPage) ? "bg-gray-800" : "bg-gray-200",
      "cursor-pointer",
      "transition-colors",
      "duration-300"
    );
    point.addEventListener("click", () => {
      index = i * itemsPerPage;
      updateContainer(items);
    });
    points.appendChild(point);
  }
}

// Handle the Next button click
function handleNext() {
  index += itemsPerPage;
  if (index >= items.length) {
    index = 0; 
  }
  updateContainer(items);
}

function handlePrev() {
  index -= itemsPerPage;
  if (index < 0) {
    index = items.length - itemsPerPage; 
  }
  updateContainer(items);
}

// Event listeners for buttons
prevBtn.addEventListener("click", handlePrev);
nextBtn.addEventListener("click", handleNext);


getData();
