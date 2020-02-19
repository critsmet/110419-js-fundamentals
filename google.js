//Google Books API
//https://www.googleapis.com/books/v1/volumes?q=search+terms

//Add in the HTML a text input field for a search and a button to submit
const button = document.querySelector('button');
const ulTag = document.querySelector('#list');

function submit(){
  const userInput = document.querySelector('input').value.split(" ").join("+");
  fetch(`https://www.googleapis.com/books/v1/volumes?q=${userInput}`)
    .then( (response) => {
      return response.json();
    }).then((obj) => {
      const bookArray = obj.items;
      const firstTenBooks = bookArray.slice(0,10)
      let bookTitles = firstTenBooks.map((book)=> book.volumeInfo.title)
      displayBooks(bookTitles);
    })
}

function displayBooks(titles){
  let newLi = document.createElement('li');
  newLi.innerText = titles
  ulTag.appendChild(newLi)

}

button.addEventListener('click',()=>{
  submit();
})

//Make a request to the Google Books API using the inputted search terms
//Create a div for the results and list out the title of the first 10 results from the API
