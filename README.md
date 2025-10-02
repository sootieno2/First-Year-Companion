**Project Contents**

USIU Freshman Guide is a lightweight, static web microsite designed to welcome and assist new first-year students during Orientation Week at United States International University – Africa (USIU).
This version (v1) is built using HTML5, CSS3, and vanilla JavaScript only — no external JS frameworks — and runs both locally and inside a Docker container. 
It offers a personalized greeting, a weekly campus cost & snack estimator, and a day/night theme toggle, all wrapped in a clean, responsive, USIU-inspired interface.

**Features**

**1. Personalized Greeting**

Prompts the student for their name on page load.
Displays a custom greeting on the homepage.
Logs the input to the browser console for debugging.

**2.  Campus Cost & Commute Estimator**

Calculates estimated weekly transport costs and snack budgets based on user input.
Suggests a 10% savings strategy (e.g., reducing snack runs or carpooling).
Displays a clear, formatted weekly summary directly on the page.


**3.Theme Toggle (Day/Night Mode)**

Switch between light and dark modes using a simple button.
Demonstrates DOM manipulation with document.body.style.


**4.  Premium UI/UX Design**

USIU-inspired navy & gold color palette.

Clean typography, consistent spacing, and mobile-first layout.

Dynamic sections: Hero, Estimator, Featured Resources, and Premium Footer.

📂 Project Structure
usiu-freshman-guide/
├─ design/
│  ├─ wireframe-home.png
│  ├─ wireframe-estimator.png
│  └─ notes.md
├─ public/
│  ├─ index.html
│  ├─ styles.css
│  └─ script.js
├─ Dockerfile
├─ .dockerignore
└─ README.md


**How to Run Locally (Without Docker)**

Clone or download this repository:

git clone https://github.com/your-username/usiu-freshman-guide.git 


Open the project folder and navigate to public/:

cd usiu-freshman-guide/public


Open index.html directly in your browser (e.g., double-click or use a local server such as Live Server in VS Code).

**🐳 Running with Docker (Recommended)**

Build the Docker image:

docker build -t usiu-first-year:v1 .


Run the container:

docker run -p 8080:80 usiu-first-year:v1


Visit the site:

http://localhost:8080

