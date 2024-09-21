document.addEventListener("DOMContentLoaded", () => {
    const phrases = [
      
             " we are freelancing company",
    
        " we are a group of programmers",
    " we are here to provide you our best services",
        " we make website according to your instruction"
    ];
    const typewriterElement = document.getElementById('typewriter');
    const typingSpeed = 100; // Speed in milliseconds
    const deletingSpeed = 50; // Speed for deleting text
    const pauseDuration = 1000; // Pause duration between phrases
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    
    function type() {
        const currentPhrase = phrases[phraseIndex];
        
        if (isDeleting) {
            typewriterElement.textContent = currentPhrase.substring(0, charIndex--);
            if (charIndex < 0) {
                isDeleting = false;
                phraseIndex = (phraseIndex + 1) % phrases.length;
                setTimeout(type, pauseDuration); // Pause before starting to type the next phrase
            } else {
                setTimeout(type, deletingSpeed);
            }
        } else {
            typewriterElement.textContent = currentPhrase.substring(0, charIndex++);
            if (charIndex > currentPhrase.length) {
                isDeleting = true;
                setTimeout(type, pauseDuration); // Pause after completing the phrase
            } else {
                setTimeout(type, typingSpeed);
            }
        }
    }

    type();
});