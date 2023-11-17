// Create and Array of flashcards
const flashcards = [
    { question: 'What is the capital of the US?', answer: 'Washington, D.C.' },
    { question: 'What is 2+2?', answer: '4' },
    //Add more flash cards here

];

//Create a variable to store the current flashcard index
//The index is the position of the card in the array
let currentCard = 0;

//Create a function to update the flashcard content
function updateFlashCard() {
    // Get the current card 

}

//init first card
updateFlashCard();

//This is the event listener for the flashcard
document.getElementById('flashcard').addEventListener('click', function() {
    //Toggle the flipped class so the card flips
    this.classList.toggle('flipped');
    //Update the card content by calling the updateFlashCard
    
}