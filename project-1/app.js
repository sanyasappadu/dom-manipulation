
// Variables
let btn = document.querySelector('#new-qoute');
let qoute = document.querySelector('.qoute');
let person = document.querySelector('.person');

const qoutes = [
    {
      person: "Albert Einstein",
      quote: "Imagination is more important than knowledge."
    },
    {
      person: "Marie Curie",
      quote: "Nothing in life is to be feared, it is only to be understood."
    },
    {
      person: "Isaac Newton",
      quote: "If I have seen further it is by standing on the shoulders of Giants."
    },
    {
      person: "Ada Lovelace",
      quote: "I am in my element when I am sitting quietly in a room doing absolutely nothing."
    },
    {
      person: "Stephen Hawking",
      quote: "The greatest enemy of knowledge is not ignorance, it is the illusion of knowledge."
    },
    {
      person: "Jane Goodall",
      quote: "What you do makes a difference, and you have to decide what kind of difference you want to make."
    },
    {
      person: "Nikola Tesla",
      quote: "The present is theirs; the future, for which I really worked, is mine."
    },
    {
      person: "Rosalind Franklin",
      quote: "Science and everyday life cannot and should not be separated."
    },
    {
      person: "Carl Sagan",
      quote: "Somewhere, something incredible is waiting to be known."
    },
    {
      person: "Richard Feynman",
      quote: "I would rather have questions that can't be answered than answers that can't be questioned."
    }
  ];

  btn.addEventListener('click', function(){
    let random = Math.floor(Math.random() * qoutes.length);
    qoute.innerText = qoutes[random].quote;
    person.innerText = qoutes[random].person;
  })
  
  