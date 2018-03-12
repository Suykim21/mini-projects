const countdown = document.querySelector('.countdown');


// Set Launch Date
// getTime() - returns miliseconds
const launchDate = new Date('Jan 1, 2019 13:00:00').getTime();


// Update every second
// setInterval() - takes in function and how often it should run.
const intvl = setInterval(() => {
  // Get todays date and time (ms);
  // new Date() returns current time and date
  const now = new Date().getTime();

  // Distance from now to the launch date;
  const distance = launchDate - now;

  // Time calculations
  // Math.floor() runs down the number
  // 1ms - 60 secs - 60 mins - 24 hrs = gives days
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display result
  countdown.innerHTML = `
    <div>${days}<span>Days</span></div>
    <div>${hours}<span>Hours</span></div>
    <div>${mins}<span>Minutes</span></div>
    <div>${seconds}<span>Seconds</span></div>
  `;

  // If launch date passed 
  if(distance < 0) {
    // Stop countdown;
    clearInterval(intvl);
    // Style and output text
    countdown.style.color = '#17a2b8';
    countdown.innerHTML = `Launched!`;
  }
}, 1000);