# DOM 101 Lab

You will be writing some functions in JavaScript that will manipulate the DOM.

## Objectives 

- DOM manipulation
## Repo Instructions

- **Fork** this repo to your account by clicking on the **fork** Button at the top of this page. 

![](https://upload.wikimedia.org/wikipedia/commons/3/38/GitHub_Fork_Button.png)

*A **fork** is a copy of this repository. This forked repository will appear on your github account.*

- Find the repository on *YOUR* account (ie yourUserName/js-lab-DOM-101) and click on the green `Code` button at the top of the page.

![](./images/githubCodeButton.png)

- Copy the path in the dialogue box
- Navigate to a location on **your local computer in VSCode** where you keep your homework 
- Clone this repository by typing the following command in your terminal

```
clone [`path that you just copied`]
```

## Task Instructions

- Navigate into the folder titled `js-lab-DOM-101`
- Use `Live Server` to run `index.html`.
- Manipulate the DOM using the `scripts.js`.

# Select DOM elements

Using JavaScript, select the elements `title` and `center`.
- use `document.getElementById`
To observe this has worked, `console.log` these elements.

# Manipulate these elements

Add your name to the title element.
 - use the variable name for the element and `.innerHTML` to add your name.

Create a `h3` and an `unordered list` to the center div.
- Add `My book list` to the `h3`.
- Add an `id` of "bookList" to the unordered list.

Make variable called `books` that is an array.  In this array, make several objects that contain `title` and `author`.
```js
const books = [
  {title: "Lord of the Rings",
  author: "J.R.R. Tolkien"
  },
  {...}
  ]
```