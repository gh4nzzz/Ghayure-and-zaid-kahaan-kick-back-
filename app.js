// Elevate Fitness App JS
// Handles interactive features: rotating workouts, feedback form, keyboard Nav

// Sample workouts array
const workouts = [
  ["10 Push-ups", "20 Air Squats", "5 Burpees", "3 Rounds"],
  ["15 Sit-ups", "10 Lunges (each leg)", "20 Jumping Jacks", "3 Rounds"],
  ["400m Run (or 90s high knees)", "20 Mountain Climbers", "20 Crunches", "2 Rounds"],
  ["5 Pull-ups (or 10 Negative Rows)", "10 Squats", "10-second Plank", "4 Rounds"],
  ["AMRAP 8 Minutes: 6 Thrusters, 8 Plank Taps, 10 Lunges"]
];
let currentWorkout = 0;

// Shows the current workout routine
function showWorkout() {
  const workoutList = document.getElementById('workout-list');
  workoutList.innerHTML = '';
  let items = Array.isArray(workouts[currentWorkout]) ? workouts[currentWorkout] : [workouts[currentWorkout]];
  items.forEach(step => {
    const li = document.createElement('li');
    li.textContent = step;
    workoutList.appendChild(li);
  });
}

// Go to next workout (on button click)
function nextWorkout() {
  currentWorkout = (currentWorkout + 1) % workouts.length;
  showWorkout();
}

// Scroll to section (from Hero button)
function scrollToSection(sectionId) {
  const sec = document.getElementById(sectionId);
  if (sec) sec.scrollIntoView({behavior: "smooth"});
}

// Handle contact form submit (shows a message, no data is stored)
function contactFormHandler(e) {
  e.preventDefault();
  document.getElementById('form-message').textContent = "Thank you for your feedback! (No data is stored)";
  e.target.reset();
  return false;
}

// Add key event: 'W' = jump to Workout section
document.addEventListener('keydown', (ev) => {
  if (ev.key.toLowerCase() === 'w') scrollToSection('workouts');
});

// Show first workout on page load
document.addEventListener('DOMContentLoaded', showWorkout);