// Define an array of objects that contains information about each Greek letter
const greekLetters = [
  {letter: 'Α', name: 'Άλφα'},
  {letter: 'α', name: 'Άλφα'},
  {letter: 'Β', name: 'Βήτα'},
  {letter: 'β', name: 'Βήτα'},
  {letter: 'Γ', name: 'Γάμμα'},
  {letter: 'γ', name: 'Γάμμα'},
  {letter: 'Δ', name: 'Δέλτα'},
  {letter: 'δ', name: 'Δέλτα'},
  {letter: 'Ε', name: 'Έψιλον'},
  {letter: 'ε', name: 'Έψιλον'},
  {letter: 'Ζ', name: 'Ζήτα'},
  {letter: 'ζ', name: 'Ζήτα'},
  {letter: 'Η', name: 'Ήτα'},
  {letter: 'η', name: 'Ήτα'},
  {letter: 'Θ', name: 'Θήτα'},
  {letter: 'θ', name: 'Θήτα'},
  {letter: 'Ι', name: 'Ιώτα'},
  {letter: 'ι', name: 'Ιώτα'},
  {letter: 'Κ', name: 'Κάππα'},
  {letter: 'κ', name: 'Κάππα'},
  {letter: 'Λ', name: 'Λάμδα'},
  {letter: 'λ', name: 'Λάμδα'},
  {letter: 'Μ', name: 'Μυ'},
  {letter: 'μ', name: 'Μυ'},
  {letter: 'Ν', name: 'Νυ'},
  {letter: 'ν', name: 'Νυ'},
  {letter: 'Ξ', name: 'Ξι'},
  {letter: 'ξ', name: 'Ξι'},
  {letter: 'Ο', name: 'Όμικρον'},
  {letter: 'ο', name: 'Όμικρον'},
  {letter: 'Π', name: 'Πι'},
  {letter: 'π', name: 'Πι'},
  {letter: 'Ρ', name: 'Ρώ'},
  {letter: 'ρ', name: 'Ρώ'},
  // Add more letters as needed
];

// Get references to HTML elements
const letterContainer = document.getElementById('letter-container');
const answerInput = document.getElementById('answer-input');
const submitButton = document.getElementById('submit-button');
const feedback = document.getElementById('feedback');

// Randomly select a letter from the array and display it on the page
const randomIndex = Math.floor(Math.random() * greekLetters.length);
const randomLetter = greekLetters[randomIndex];
letterContainer.innerHTML = randomLetter.letter;

// Compare the user's input to the correct name of the letter and provide feedback to the user
submitButton.addEventListener('click', function() {
  const userInput = answerInput.value.trim();
  const correctAnswer = randomLetter.name;

  if (userInput.toLowerCase() === correctAnswer.toLowerCase()) {
    feedback.innerHTML = 'Correct!';
  } else if (removeAccents(userInput.toLowerCase()) === removeAccents(correctAnswer.toLowerCase())) {
    feedback.innerHTML = 'Close. You made an accent mistake.';
  } else if (userInput.toLowerCase() === correctAnswer.toLowerCase().replace(/ά/g, 'α').replace(/έ/g, 'ε').replace(/ή/g, 'η').replace(/ί/g, 'ι').replace(/ό/g, 'ο').replace(/ύ/g, 'υ').replace(/ώ/g, 'ω')) {
    feedback.innerHTML = 'Close. You made a capitalization mistake.';
  } else {
    feedback.innerHTML = 'Incorrect. The correct answer is ' + correctAnswer + '.';
  }
});

// Function to remove accents from Greek letters
function removeAccents(str) {
  return str.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
}
