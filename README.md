### My Reads React App

## Overview

This application allows users to manage the books they're reading. Users are given the means to search for new books and place them on one of three shelves:

- Currently Reading
- Want to Read
- Read

This app leverages React to manage state and side effects. The user is given immediate feedback when performing actions inside the app, and relevant data persists across different pages. All culminating to provide a more streamlined and engaging UX.

This is the first project counting towards the completion of the the Udacity React Nanodegree

## Getting Started

After cloning the repo

`npm i` to install the dependencies, then
`npm start` to spin up the React dev server

navigate to localhost:3000 to view the app!

## Backend Server

Udacity provided a backend server for me to develop against. The methods (found in `src/utils/Bookshelf.js`) are as follows:

- [`getAll`](#getall)
- [`update`](#update)
- [`search`](#search)

### `getAll`

Method Signature:

```js
getAll();
```

- Returns a Promise which resolves to a JSON object containing a collection of book objects.
- This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
update(book, shelf);
```

- book: `<Object>` containing at minimum an `id` attribute
- shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]
- Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query);
```

- query: `<String>`
- Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
- These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.
