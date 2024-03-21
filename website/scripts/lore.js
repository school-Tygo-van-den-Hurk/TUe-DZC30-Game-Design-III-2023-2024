document.addEventListener("DOMContentLoaded", function() {
  var dialogueContainer = document.querySelector('.dialogue-container');
  var textElement = document.getElementById('dialogue-text');
  var characterImage = document.querySelector('.character img');
  var text = "Once upon a time this campus was ruled by a mighty pirate by the name of Captain Gabriele Ferri. After decades of ruling the seven streets of the TU/e campus, he passed away because he accidentally drank teacher’s poison which he mistook for rum. Legend says that his biggest treasure was never found. Some smaller pirates started to practice the art of treasure hunting, so they developed a box. They made an agreement under the TU/e pirate king that they would help each other to become the best treasure hunting campus in the whole world. The map to Captain Gabriele Ferri's treasure is of unknown nature, so the box may be found in various different ways, through treasure maps, through poetry or perhaps even through art. Many wonder if the treasure can even be found by us mere mortals, but one thing is for certain, if it can be found, the box will provide the experience required to complete this remarkable quest";
  var sentences = text.split('. '); // Split text into sentences
  var index = 0;
  var chunkSize = 2; // Display two sentences at a time
  var typingFinished = true;

  function typeWriter(chunk) {
    textElement.innerHTML = ''; // Clear previous text
    var currentIndex = 0;
    var typingInterval = setInterval(function() {
      if (currentIndex < chunk.length) {
        textElement.innerHTML += chunk.charAt(currentIndex);
        currentIndex++;
      } else {
        clearInterval(typingInterval); // Stop typing animation for the current chunk
        typingFinished = true; // Set typingFinished to true when typing is complete
      }
    }, 5); // Adjust typing speed here
  }

  function displayNextChunk() {
    if (typingFinished) {
      typingFinished = false; // Set typingFinished to false when starting typing
      var nextChunk = sentences.slice(index, index + chunkSize).join('. ');
      if (nextChunk) {
        typeWriter(nextChunk + '.'); // Start typing animation for the next chunk
        index += chunkSize;
      } else {
        // Hide the entire box and image when all text has been displayed and user clicks
        dialogueContainer.style.display = 'none';
      }
    }
  }

  // Display initial chunk
  displayNextChunk();

  // Listen for click event to display next chunk
  document.addEventListener('click', function() {
    displayNextChunk();
  });
});
