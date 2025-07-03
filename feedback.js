document
  .getElementById("feedbackForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    document.getElementById("message").textContent =
      "Thank you for your feedback!";
    document.getElementById("message").style.color = "green";

    document.getElementById("feedbackForm").reset();
    setTimeout(() => {
      document.getElementById("message").textContent = "";
    }, 3000);
  });
