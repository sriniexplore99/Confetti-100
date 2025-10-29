function celebration() {
    const messages = [
        "100th class🎉",
        "You’ve leveled up to Code Ninja! 🥷",
        "Learning + Practice = Awesomeness 💪",
        "100 days of suffering, pain",
        "You're officially a Coding Legend! 💻🔥",
        "100 Classes! That’s 100 steps closer to mastery! 🏆"
    ];

    const randomMsg = messages[Math.floor(Math.random()*messages.length)];
    document.getElementById("message").innerText = randomMsg;

    document.body.style.backgroundColor = randomcolor();

    createConfetti();
}

function randomcolor() {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
  return `rgb(${r}, ${g}, ${b})`;   
}

function createConfetti() {
  const confettiArea = document.getElementById("confetti-area");
  confettiArea.innerHTML = ""; // clear old confetti

  for (let i = 0; i < 30; i++) {
    const confetti = document.createElement("div");
    confetti.classList.add("confetti");
    confetti.style.left = Math.random() * 100 + "vw"; // random horizontal position
    confetti.style.backgroundColor = randomcolor(); // random color
    confettiArea.appendChild(confetti);

    // animation
    confetti.animate([
      { transform: "translateY(0)" },
      { transform: "translateY(400px)" }
    ], {
      duration: 2000 + Math.random() * 2000,
      iterations: 1
    });
  }
}
