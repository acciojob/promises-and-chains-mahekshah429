document.getElementById("voteForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const age = document.getElementById("age").value.trim();
  const ageNumber = parseInt(age);

  // Validate for empty or invalid inputs
  if (name === "" || age === "" || isNaN(ageNumber)) {
    alert("Please enter valid details.");
    return;
  }

  // Create promise
  const checkEligibility = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (ageNumber >= 18) {
        resolve();
      } else {
        reject();
      }
    }, 4000); // 4-second delay
  });

  // Handle result
  checkEligibility
    .then(() => {
      alert(`Welcome, ${name}. You can vote.`);
    })
    .catch(() => {
      alert(`Oh sorry ${name}. You aren't old enough.`);
    });
});
