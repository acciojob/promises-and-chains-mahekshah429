const form = document.getElementById('voteForm');
const ageInput = document.getElementById('age');
const nameInput = document.getElementById('name');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const age = ageInput.value.trim();
  const name = nameInput.value.trim();

  if (age === '' || name === '') {
    alert("Please enter valid details.");
    return;
  }

  // Create a promise to handle voting eligibility
  const eligibilityPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (parseInt(age, 10) > 18) {
        resolve(`Welcome, ${name}. You can vote.`);
      } else {
        reject(`Oh sorry ${name}. You aren't old enough.`);
      }
    }, 4000);
  });

  eligibilityPromise
    .then((message) => {
      alert(message);
    })
    .catch((errorMessage) => {
      alert(errorMessage);
    });
});
