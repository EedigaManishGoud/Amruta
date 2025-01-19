// Function to create a flower element
const createFlower = () => {
  const flower = document.createElement("div"); // Create a new div element
  flower.classList.add("flower"); // Add the "flower" class

  // Randomize flower properties
  flower.style.left = `${Math.random() * 100}vw`; // Random horizontal position
  flower.style.animationDuration = `${Math.random() * 3 + 2}s`; // Random fall speed (2 to 5 seconds)
  flower.style.opacity = Math.random() + 0.3; // Random opacity (0.3 to 1.3)

  document.body.appendChild(flower); // Add the flower to the page

  // Remove the flower after it falls out of view
  setTimeout(() => {
    flower.remove();
  }, 5000); // Remove after 5 seconds
};

// Generate flowers every 200 milliseconds
setInterval(createFlower, 200);
