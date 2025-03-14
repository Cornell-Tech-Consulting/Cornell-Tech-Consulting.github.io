const taglines = [
    "Leveraging Technology",
    "Utilizing Data",
    "Developing Strategy",
    "Designing Software",
    "Applying Insights",
    "Optimizing Processes"
];

let currentTaglineIndex = 0;
let currentText = "";
let currentCharIndex = 0;

const typingSpeed = 75; // Speed of typing in ms
const erasingSpeed = 50; // Speed of erasing in ms
const displayTime = 2500;
const erasedTime = 500;

function type() {
    const tagline = taglines[currentTaglineIndex];

    if (currentCharIndex < tagline.length) {
        currentText += tagline.charAt(currentCharIndex);
        document.getElementById("tagline").innerText = currentText;
        currentCharIndex++;
        setTimeout(type, typingSpeed);
    } else {
        setTimeout(erase, displayTime);
    }
}

function erase() {
    const tagline = taglines[currentTaglineIndex];

    if (currentCharIndex > 0) {
        currentText = currentText.substring(0, currentCharIndex - 1);
        document.getElementById("tagline").innerText = currentText;
        currentCharIndex--;
        setTimeout(erase, erasingSpeed);
    } else {
        currentTaglineIndex = (currentTaglineIndex + 1) % taglines.length;
        setTimeout(type, erasedTime);
    }
}

// Start typing the first tagline
type();