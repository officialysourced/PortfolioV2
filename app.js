document.addEventListener('DOMContentLoaded', function() {
    const textElement = document.getElementById('typewriter-text');
    const textToType = "Welcome to My Awesome Site!";
    let charIndex = 0;
    const typingSpeed = 100;

    function typeWriter() {
        if (textElement && charIndex < textToType.length) { 
            textElement.textContent += textToType.charAt(charIndex);
            charIndex++;
            setTimeout(typeWriter, typingSpeed);
        }
    }

    if (textElement) { 
        typeWriter();
    }


    function typewriterDocumentTitle(titleText, typingDelay) {
        let titleCharIndex = 0;
        let currentTypedTitle = '';
        const titleInterval = setInterval(() => {
            if (titleCharIndex < titleText.length) {
                currentTypedTitle += titleText.charAt(titleCharIndex);
                document.title = currentTypedTitle;
                titleCharIndex++;
            } else {
                clearInterval(titleInterval);
            }
        }, typingDelay);
    }

   
    setTimeout(() => {
        typewriterDocumentTitle("@Opensourced", 150);
    }, 500);
});