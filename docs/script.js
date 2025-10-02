/* script.js — Freshman Guide (USIU)
   Vanilla JS only (prompt, alert, console.log, DOM textContent)
*/

/* === Optional: set your student ID here (replace with your real student ID before submission) === */
const STUDENT_ID = "YOUR_STUDENT_ID_HERE";

/* On load: ask for student's first name once and set greeting */
let studentName = "Student";

window.addEventListener('load', function initOnLoad() {
  try {
    const name = prompt("Welcome to USIU! What's your first name?");
    if (name && name.trim().length > 0) {
      studentName = name.trim();
    }
    alert("Karibu, " + studentName + "!");
    console.log("Student entered name:", studentName);
    const greetingEl = document.getElementById("greeting");
    if (greetingEl) {
      greetingEl.textContent = "Hello, " + studentName;
    }
    // cosmetic: set a small campus-count example
    const campusCountEl = document.getElementById('campus-count');
    if (campusCountEl) campusCountEl.textContent = "Orientation week tips";
  } catch (e) {
    console.error("Error during init prompts:", e);
  }
}, { once: true });

/* Estimator: prompts the user for values and writes summary */
function runEstimator() {
  try {
    const daysRaw = prompt("How many days per week do you come to campus? (e.g., 3)");
    const days = Number(daysRaw);
    const costPerTrip = Number(prompt("Average transport cost per trip in KSh? (e.g., 120)"));
    const snacksPerDay = Number(prompt("Snacks per day? (e.g., 2)"));
    const snackPrice = Number(prompt("Average price per snack in KSh? (e.g., 80)"));

    // Basic validation fallback
    if (!Number.isFinite(days) || days <= 0) {
      alert("Please enter a valid number of days (e.g., 3). Estimator cancelled.");
      return;
    }

    const transportWeekly = days * costPerTrip * 2; // to & from
    const snacksWeekly = days * snacksPerDay * snackPrice;
    const totalWeekly = transportWeekly + snacksWeekly;
    const save10 = totalWeekly * 0.10;
    const totalWithSavings = totalWeekly - save10;

    console.log({
      days,
      costPerTrip,
      snacksPerDay,
      snackPrice,
      transportWeekly,
      snacksWeekly,
      totalWeekly,
      totalWithSavings
    });

    const summary = `
Weekly Transport: KSh ${transportWeekly}
Weekly Snacks:    KSh ${snacksWeekly}
-------------------------------
Weekly Total:     KSh ${totalWeekly}
If you cut 10% (e.g., carpool or fewer snack runs): KSh ${Math.round(totalWithSavings)}

Generated for: ${STUDENT_ID || "(replace with your student ID)"}
Name: ${studentName}
`;

    const summaryEl = document.getElementById("summary");
    if (summaryEl) summaryEl.innerText = summary;

    alert("Done — check your summary on the page. Details also logged to console (for debugging).");
  } catch (err) {
    console.error("Estimator error", err);
    alert("An error occurred. Check console for details.");
  }
}

/* Theme toggle: simple background + color changes using document.body.style
   (lesson-1 friendly approach). */
function toggleTheme() {
  const currentBg = (document.body.style.backgroundColor || "").toLowerCase();
  if (currentBg === "rgb(17, 17, 17)" || currentBg === "#111" || currentBg === "black") {
    document.body.style.backgroundColor = ""; // default
    document.body.style.color = ""; // default
    console.log("Theme: day (default)");
  } else {
    document.body.style.backgroundColor = "#111";
    document.body.style.color = "#fff";
    console.log("Theme: night (dark)");
  }
}

/* Expose functions globally so the inline wiring script can call them */
window.runEstimator = runEstimator;
window.toggleTheme = toggleTheme;
