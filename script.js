const flashcards = [
    { term: "HTML", definition: "HyperText Markup Language" },
    { term: "CSS", definition: "Cascading Style Sheets" },
    { term: "JavaScript", definition: "Programming language of the web" }
];

// You can use flashcards.length to get the length of the array

// These two variables will come in handy
let currentIndex = 0;
let showingTerm = true;

// Start with this function to simply display the card
function displayCard() {
    const cardContent = document.getElementById('card-content');
    const currCard = flashcards[currentIndex];
    if(showingTerm) {cardContent.textContent = currCard.term;}
    else {cardContent.textContent = currCard.definition;}
}

// The rest of the code you will write is apart of event listeners

document.getElementById("flashcard").addEventListener("click", ()=>{
    showingTerm = !showingTerm;

    displayCard();
})

document.getElementById("prev-btn").addEventListener("click", ()=>{
    currentIndex = (currentIndex - 1 + flashcards.length) % flashcards.length;
    showingTerm = true;

    displayCard();
})

document.getElementById("next-btn").addEventListener("click", ()=>{
    currentIndex = (currentIndex + 1) % flashcards.length;
    showingTerm = true;

    displayCard();
})

document.getElementById("add-card-btn").addEventListener("click", ()=>{
    const newTerm = document.getElementById('new-term').value;
    const newDef = document.getElementById('new-definition').value;

    if(newTerm && newDef) {
        flashcards.push({ term: newTerm, definition: newDef });

        document.getElementById('new-term').value = "";
        document.getElementById('new-definition').value = "";
    }
})

// This line will display the card when the page is refreshed
window.onload = displayCard;
