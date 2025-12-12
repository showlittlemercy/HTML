/* =========================================
   HACKER THEME JAVASCRIPT CONTROLLER
   ========================================= */

document.addEventListener("DOMContentLoaded", () => {
  // --- 1. BOOT SEQUENCE ANIMATION ---
  const bootScreen = document.getElementById("boot-screen");
  const bootText = document.getElementById("boot-text");

  const bootLog = [
    "INITIALIZING KERNEL...",
    "LOADING HTML5 MODULES...",
    "DECRYPTING USER: PRIYANSHU...",
    "CONNECTING TO HOST: showlittlemercy@gmail.com...",
    "ACCESS GRANTED.",
    "STARTING INTERFACE...",
  ];

  let lineIndex = 0;

  function typeLine() {
    if (lineIndex < bootLog.length) {
      const line = document.createElement("div");
      line.textContent = `> ${bootLog[lineIndex]}`;
      line.style.marginBottom = "5px";
      line.style.opacity = "0";
      bootText.appendChild(line);

      // Fade in line
      setTimeout(() => {
        line.style.opacity = "1";
      }, 50);

      lineIndex++;
      // Random delay between lines for realism
      setTimeout(typeLine, Math.random() * 300 + 100);
    } else {
      // Sequence finished, fade out boot screen
      setTimeout(() => {
        bootScreen.style.transition = "opacity 0.5s ease";
        bootScreen.style.opacity = "0";
        setTimeout(() => {
          bootScreen.style.display = "none";
        }, 500);
      }, 800);
    }
  }

  // Start boot sequence
  setTimeout(typeLine, 500);

  // --- 2. CUSTOM CURSOR LOGIC ---
  const cursor = document.getElementById("cursor-custom");

  document.addEventListener("mousemove", (e) => {
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
  });

  // Cursor hover effects
  const interactiveElements = document.querySelectorAll(
    "a, button, input, summary"
  );
  interactiveElements.forEach((el) => {
    el.addEventListener("mouseenter", () => {
      cursor.style.transform = "scale(2)";
      cursor.style.background = "var(--neon-purple)";
    });
    el.addEventListener("mouseleave", () => {
      cursor.style.transform = "scale(1)";
      cursor.style.background = "var(--neon-green)";
    });
  });

  // --- 3. SYSTEM STATS UPDATE ---
  const cpuStat = document.getElementById("cpu-stat");
  const memStat = document.getElementById("mem-stat");

  setInterval(() => {
    // Randomly fluctuate stats
    const cpu = Math.floor(Math.random() * 30) + 5;
    const mem = Math.floor(Math.random() * 200) + 4000;

    if (cpuStat) cpuStat.textContent = `${cpu}%`;
    if (memStat) memStat.textContent = `${mem}MB`;
  }, 2000);
});
