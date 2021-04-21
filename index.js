const url = 'https://anapioficeandfire.com/api/books'

function fetchBooks() {
  fetch(url).then(resp => resp.json()).then(function(data){
    console.log(data)
    debugger
    books = []
    for (i = 0; i < data.length; i++){
      books.push(data[i].name)
    }
    return books
  })
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});
