document.getElementById('view-doctors-btn').addEventListener('click', function () {
  const locationInput = document.getElementById('location-input').value.trim();
  const doctorContainer = document.getElementById('doctor-scroll-container');

  if (locationInput !== "") {
    doctorContainer.classList.remove('hidden');
    doctorContainer.classList.add('visible', 'fade-in');
  } else {
    alert('Please enter a location.');
  }
});

document.getElementById('use-location-btn').addEventListener('click', function () {
  getLocation();
});

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition, showError);
  } else {
    alert('Geolocation is not supported by this browser.');
  }
}

function showPosition(position) {
  document.getElementById('location-input').value = `Latitude: ${position.coords.latitude}, Longitude: ${position.coords.longitude}`;
  const doctorContainer = document.getElementById('doctor-scroll-container');
  doctorContainer.classList.remove('hidden');
  doctorContainer.classList.add('visible', 'fade-in');
}

function showError(error) {
  switch (error.code) {
    case error.PERMISSION_DENIED:
      alert('User denied the request for Geolocation.');
      break;
    case error.POSITION_UNAVAILABLE:
      alert('Location information is unavailable.');
      break;
    case error.TIMEOUT:
      alert('The request to get user location timed out.');
      break;
    case error.UNKNOWN_ERROR:
      alert('An unknown error occurred.');
      break;
  }
}
