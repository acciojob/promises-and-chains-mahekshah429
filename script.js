document.getElementById("voteForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent actual form submission

  const name = document.getElementById("name").value.trim();
  const age = document.getElementById("age").value.trim();

  // Input validation
  if (name === "" || age === "") {
    alert("Please enter valid details.");
    return;
  }

  const ageNumber = parseInt(age);

  // Create promise for voting eligibility
  const checkEligibility = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (ageNumber > 18) {
        resolve();
      } else {
        reject();
      }
    }, 4000); // 4-second delay
  });

  checkEligibility
    .then(() => {
      alert(`Welcome, ${name}. You can vote.`);
    })
    .catch(() => {
      alert(`Oh sorry ${name}. You aren't old enough.`);
    });
});
