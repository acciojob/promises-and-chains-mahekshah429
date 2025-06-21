document.getElementById("btn").addEventListener("click", function () {
  const name = document.getElementById("name").value.trim();
  const age = parseInt(document.getElementById("age").value.trim());

  if (!name || isNaN(age)) {
    alert("Please enter valid details"); // ❌ Do NOT use a period here
    return;
  }

  if (age >= 18) {
    alert(`Welcome, ${name}. You can vote.`);
  } else {
    alert(`Oh sorry ${name}. You aren't old enough.`);
  }
});