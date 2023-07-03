// //GLOBAL Variables
// let noggin = document.getElementById("header");
// let spine = document.getElementById("center");
// let books = [
//    {
//      title: "Lord of the Rings",
//      author: "J.R.R. Tolkien"
//    }
//  ]
// // let listItem = `<li>${books[0].title}</li>`; This method will require more work because appending this will append a string. Go to line 35 for a better solution
// title.innerHTML = "Larry's Awesome Site"; //title was given an ID in HTML to be able to do this


// //add books
// books.push(
//    {
//       title: "The Handmaid's Tale",
//       author: "Margaret Atwood"
//    },
//    {
//       title: "The Hobbit", 
//       author: "J.R.R. Tolkien"
//    }
// )

// //add the <h1> title


// //create h3
// const face = document.createElement('h3');

// //create ul
// const roster = document.createElement('ul');

// const listItem = document.createElement('li');
// listItem.innerText = books[0].title;
// const listItem1 = document.createElement('li');
// listItem1.innerText = books[1].title;
// const listItem2 = document.createElement('li');
// listItem2.innerText = books[2].title;

// //append to the center div
// // spine.append(face, roster); --this works but use appendChild for exercise
// spine.appendChild(face);
// spine.appendChild(roster);

// face.innerHTML = "My Book List";
// roster.id = "booklist";

// //add the book to the ul as a template literal
// roster.append(listItem); 
// roster.append(listItem1);
// roster.append(listItem2);  
// //Following the example, this did not append correctly because listItem is a string
// // roster.append(listItem) is expecting a NODE

// //add a map() to loop through the books

// function addToBookList(){
//    for(let bookIndex = 0; bookIndex < books.length; bookIndex++)
//    return [books[bookIndex].title].join(" ");
// }
// console.log(addToBookList());

// books.map(addToBookList);
// //append our book.  Did it work??  WHY??
// //roster.append(books); // NO! Because they  are objects, append is expecting a NODE

// //the fix to the error
// // roster.append(listItem); 
// // roster.append(listItem1);
// // roster.append(listItem2);  





//-------------------------------------Final Answer Without Junk Code


let noggin = document.getElementById("header");
let spine = document.getElementById("center");
const face = document.createElement('h3')
const roster = document.createElement('ul');
const listItem = document.createElement('li');

let books = [
   {
     title: "Lord of the Rings",
     author: "J.R.R. Tolkien"
   }
 ]
title.innerHTML = "Larry's Awesome Site"; //title was given an ID in HTML to be able to do this

books.push(
   {
      title: "The Handmaid's Tale",
      author: "Margaret Atwood"
   },
   {
      title: "The Hobbit", 
      author: "J.R.R. Tolkien"
   }
)

spine.append(face, roster);
face.innerHTML = "My Book List";
roster.id = "booklist";

//For these v //I thought I could try to make a for loop, but it got too complicated. Is there a way?
listItem.innerText = books[0].title;
const listItem1 = document.createElement('li');
listItem1.innerText = books[1].title;
const listItem2 = document.createElement('li');
listItem2.innerText = books[2].title;
roster.append(listItem); 
roster.append(listItem1);
roster.append(listItem2);  
//For these ^
function addToBookList(){
   for(let j = 0; j < books.length; j++)
   {
      return [books[j].title].join(" "); //instructions said to add .join(" ") to remove the comma, but there is no comma if I remove the .join(" ")
   }
}
books.map(addToBookList);
  







