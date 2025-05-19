// script.js

// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', function () {
    // Dynamic Greeting based on time
    const greetingDiv = document.getElementById('greeting');
    function setGreeting() {
        const hour = new Date().getHours();
        let greet = "Welcome!";
        if (hour < 12) greet = "Good morning!";
        else if (hour < 18) greet = "Good afternoon!";
        else greet = "Good evening!";
        greetingDiv.textContent = greet + " 👋";
    }
    setGreeting();

    // Dark Mode Toggle
    const darkModeBtn = document.getElementById('darkModeToggle');
    darkModeBtn.addEventListener('click', function () {
        document.body.classList.toggle('dark-mode');
        if (document.body.classList.contains('dark-mode')) {
            darkModeBtn.textContent = '☀️ Light Mode';
        } else {
            darkModeBtn.textContent = '🌙 Dark Mode';
        }
    });

    // Create a button for dynamic actions
    const dynamicBtn = document.createElement('button');
    dynamicBtn.textContent = 'Click Me!';
    dynamicBtn.className = 'btn';
    dynamicBtn.style.marginTop = '20px';

    // Insert the button after the Interests section
    const interestsSection = document.getElementById('Interests');
    interestsSection.appendChild(dynamicBtn);

    // Create a removable element
    const removableDiv = document.createElement('div');
    removableDiv.textContent = 'This is a dynamically added element!';
    removableDiv.id = 'removableDiv';
    removableDiv.style.marginTop = '15px';
    removableDiv.style.padding = '10px';
    removableDiv.style.backgroundColor = '#f0f0f0';
    removableDiv.style.borderRadius = '5px';

    let isAdded = false;

    dynamicBtn.addEventListener('click', function () {
        // Change text content in the Interests section
        const interestsP = interestsSection.querySelector('p');
        interestsP.textContent = 'You clicked the button! My interests now include JavaScript interactivity.';

        // Modify CSS styles of the button
        dynamicBtn.style.backgroundColor = '#007bff';
        dynamicBtn.style.color = '#fff';
        dynamicBtn.style.border = 'none';

        // Add or remove the removableDiv
        if (!isAdded) {
            interestsSection.appendChild(removableDiv);
            dynamicBtn.textContent = 'Remove Element';
            isAdded = true;
        } else {
            if (removableDiv.parentNode) {
                removableDiv.parentNode.removeChild(removableDiv);
            }
            dynamicBtn.textContent = 'Click Me!';
            isAdded = false;
        }
    });

    // Fun: Animate profile image on hover
    const profileImg = document.querySelector('img[alt="My Photo"]');
    if (profileImg) {
        profileImg.addEventListener('mouseenter', () => {
            profileImg.style.transform = 'scale(1.08) rotate(-3deg)';
            profileImg.style.transition = 'transform 0.4s';
        });
        profileImg.addEventListener('mouseleave', () => {
            profileImg.style.transform = 'scale(1) rotate(0deg)';
        });
    }

    // Surprise Me! button: shows a random project or fun fact
    const surpriseBtn = document.getElementById('surpriseBtn');
    const surpriseText = document.getElementById('surpriseText');
    const surprises = [
        "Did you know? Kelvin loves aviation trivia!",
        "Check out the Database Design project above!",
        "Fun fact: JavaScript can make your site come alive.",
        "Try the dark mode toggle for a new look!",
        "Python is one of Kelvin's favorite languages.",
        "You can copy the email address below with one click!"
    ];
    if (surpriseBtn) {
        surpriseBtn.addEventListener('click', function () {
            const idx = Math.floor(Math.random() * surprises.length);
            surpriseText.textContent = surprises[idx];
            surpriseText.style.opacity = 0;
            setTimeout(() => {
                surpriseText.style.opacity = 1;
                surpriseText.style.transition = "opacity 0.5s";
            }, 100);
        });
    }

    // Copy Email button
    const copyEmailBtn = document.getElementById('copyEmailBtn');
    const emailText = document.getElementById('emailText');
    const copyIcon = document.getElementById('copyIcon');
    if (copyEmailBtn && emailText && copyIcon) {
        copyEmailBtn.addEventListener('click', function () {
            navigator.clipboard.writeText(emailText.textContent);
            // Change SVG to a checkmark
            copyIcon.outerHTML = `<svg id="copyIcon" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" style="vertical-align:middle;">
                <path d="M5 13l4 4L19 7" stroke="#28a745" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>`;
            setTimeout(() => {
                copyEmailBtn.querySelector('svg').outerHTML = `<svg id="copyIcon" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" style="vertical-align:middle;">
                    <rect x="9" y="9" width="13" height="13" rx="2" fill="#fff" stroke="#007bff" stroke-width="2"/>
                    <rect x="3" y="3" width="13" height="13" rx="2" fill="#fff" stroke="#007bff" stroke-width="2"/>
                </svg>`;
            }, 1500);
        });
    }

    // Scroll to Top Button
    const scrollBtn = document.createElement('button');
    scrollBtn.textContent = "⬆️ Top";
    scrollBtn.className = "btn";
    scrollBtn.style.position = "fixed";
    scrollBtn.style.bottom = "30px";
    scrollBtn.style.right = "30px";
    scrollBtn.style.display = "none";
    scrollBtn.style.zIndex = "1000";
    document.body.appendChild(scrollBtn);

    window.addEventListener('scroll', function () {
        if (window.scrollY > 200) {
            scrollBtn.style.display = "block";
        } else {
            scrollBtn.style.display = "none";
        }
    });
    scrollBtn.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});