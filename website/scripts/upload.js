// Show file name after submitting
function updateFileName() {
  var fileInput = document.getElementById('myFile');
  var fileInputLabel = document.getElementById('fileInputLabel');
  if (fileInput.files.length > 0) {
    fileInputLabel.textContent = 'File chosen: ' + fileInput.files[0].name;
  } else {
    fileInputLabel.textContent = 'Choose File';
  }
}

// Function to display notifications with different styles
function displayNotification(message, duration, type) {
  var notificationContainer = document.getElementById('notificationContainer');
  var notification = document.createElement('div');
  notification.classList.add('notification');
  notification.textContent = message;
  notification.classList.add(type); // Add class based on notification type
  notificationContainer.appendChild(notification);
  setTimeout(function() {
    notification.remove();
  }, duration);
}



// Function to handle form submission
document.getElementById('fileUploadForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent default form submission behavior
  
  var fileInput = document.getElementById('myFile');
  if (fileInput.files.length === 0) {
    displayNotification('You must first upload a file.', 5000, 'error');
  } else {
    displayNotification('File submitted successfully.', 5000, 'success');
    }
});

// Confetti Animation
const jsConfetti = new JSConfetti();

function addConfettiWithDelay(delay) {
  setTimeout(() => {
    jsConfetti.addConfetti();
  }, delay);
}

window.addEventListener('load', () => {
  addConfettiWithDelay(0);
  addConfettiWithDelay(2000);
  addConfettiWithDelay(4000);
});
