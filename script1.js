function updateClock() {
    // Get the current time
    var now = new Date();
  
    // Adjust the time by subtracting 6 hours and 10 minutes
    now.setHours(now.getHours() - 6);
    now.setMinutes(now.getMinutes() - 10);
  
    // Extract hours, minutes, and seconds
    var hours = now.getHours() % 12; // Ensure it's in 12-hour format
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
  
    // Calculate rotation angles
    var hourRotation = 360 / 12 * hours + 360 / 12 * (minutes / 60);
    var minuteRotation = 360 / 60 * minutes + 360 / 60 * (seconds / 60);
    var secondRotation = 360 / 60 * seconds;
  
    // Apply rotation to clock hands
    document.getElementById('hour').style.transform = 'rotate(' + hourRotation + 'deg)';
    document.getElementById('minute').style.transform = 'rotate(' + minuteRotation + 'deg)';
    document.getElementById('second').style.transform = 'rotate(' + secondRotation + 'deg)';
  }
  
  // Call the updateClock function to set the initial time
  updateClock();
  
  // Update the clock every second
  setInterval(updateClock, 1000);