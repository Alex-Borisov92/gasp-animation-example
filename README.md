
# Simple Landing Page with Animations

## Overview
This project is a simple landing page featuring animations using **GSAP**. It demonstrates how to create smooth entrance animations for page elements like headings and buttons, as well as hover effects on buttons.

## Features
- **Smooth entrance animations**: The headline and button appear with smooth transitions when the page loads.
- **Scroll animations**: Page elements animate as they come into view when the user scrolls down.
- **Interactive hover effects**: The call-to-action button has an animated hover effect that scales up the button and changes its background color.
  
## Technologies
- **HTML5** for structuring the page.
- **CSS3** for styling and layout.
- **GSAP (GreenSock Animation Platform)** for animations.
- **JavaScript** for handling the animation logic.

## How to Run the Project
1. Clone the repository:
   ```bash
   git clone 
   ```
2. Open the project folder and start a live server (for example, using VSCode's Live Server extension) or open `index.html` directly in your browser.

## Code Highlights
- **GSAP for entrance animations**:
  ```javascript
  gsap.fromTo(".headline", { opacity: 0, scale: 0.5 }, { opacity: 1, scale: 1, duration: 1.5 });
  gsap.fromTo(".cta-button", { opacity: 0, y: 20 }, { opacity: 1, y: 0, delay: 0.5, duration: 1 });
  ```

- **Button hover effect**:
  ```javascript
  button.addEventListener("mouseenter", () => {
    gsap.to(button, { scale: 1.1, backgroundColor: "#ff4500", duration: 0.3 });
  });
  ```

## Live Demo
https://alex-borisov92.github.io/gasp-animation-example/
