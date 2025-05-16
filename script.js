document.getElementById("complaintForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const title = document.getElementById("title").value;
  const message = document.getElementById("message").value;
  const mood = document.getElementById("mood").value;

  fetch("/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ title, message, mood })
  })
  .then(response => response.json())
  .then(data => {
    const msg = document.getElementById("statusMsg");
    msg.innerText = "❤️ Your complaint is saved with love.";
    msg.style.color = "#ff3399";
    msg.style.fontSize = "1.1em";
    msg.style.animation = "fadeIn 1s ease-in-out";
    document.getElementById("complaintForm").reset();
  })
  .catch(error => {
    console.error("Error:", error);
    const msg = document.getElementById("statusMsg");
    msg.innerText = "😢 Something went wrong.";
    msg.style.color = "red";
  });
});
