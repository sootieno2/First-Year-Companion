USIU Freshman Guide (v1)
📘 Project Summary

What:
The USIU Freshman Guide (v1) is a lightweight, static web companion designed to help first-year students navigate their first weeks on campus. Built with HTML5, CSS3, and vanilla JavaScript, it provides personalized greetings, a basic campus cost and commute estimator, and a simple theme toggle feature — all without the need for external libraries or backend services.

Why:
New students often struggle with planning their transport costs, snack budgets, and daily schedules during orientation week. This guide simplifies that process by offering a fun, interactive, and mobile-friendly microsite that gives them instant estimates and tips.

Who:
This project is built for USIU-Africa’s Student Affairs Office to assist first-year students during Orientation Week. It’s an MVP version of a larger onboarding platform planned for future development.



Running Locally (No Docker)

To test and view the site locally:
Clone or download the project.
Open the public/index.html file directly in your web browser.
The site will load and prompt you for your name.
Click “Run Estimator” to enter your commute/snack data and view your weekly summary.
Use “Toggle Theme” to switch between light and dark modes.

No installation or server setup is required — it runs completely client-side.



🐳 Building and Running with Docker

If you want to containerize and run this project using Docker:
Make sure Docker is installed and running on your system.
From the project root (where the Dockerfile is located), run:

docker build -t usiu-first-year:v1 .


Start a container and expose it on port 8080:

docker run -p 8080:80 usiu-first-year:v1


Open your browser and navigate to:

http://localhost:8080


The site should now be running inside a Docker container, served by nginx.



⚙️ Features

Personalized Greeting: Prompts for the student’s name and displays it on the page.
Cost & Commute Estimator: Calculates weekly transport and snack costs using prompt inputs and displays a breakdown summary.
Theme Toggle: Switches between day and night modes dynamically with JavaScript.
10% Savings Suggestion: Provides a simple behavior-based tip to reduce weekly costs.




 Known Limitations & Next Steps



Prompt-based inputs: Currently uses JavaScript prompt() dialogs. Future versions should replace these with accessible HTML forms.

No data persistence: All calculations are temporary and reset on page reload.

No backend: This is a static MVP. A future version could integrate with a backend to store user preferences and cost history.

Theme toggle is manual: Future enhancements could automatically set the theme based on the current time of day.

📂 Project Structure
usiu-first-year-companion/
├─ design/                  # Wireframes & notes
├─ public/
│  ├─ index.html           # Main HTML page
│  ├─ styles.css           # Custom styles
│  └─ script.js            # JavaScript logic
├─ Dockerfile              # Container configuration
├─ .dockerignore
└─ README.md



License

This project is developed as part of a coursework assignment and is intended for educational use.