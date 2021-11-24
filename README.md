# Would You Rather Project

Project done for advanced frontend development nd track

## Installation

1. `npm install` or `yarn install`
2. `npm start` or `yarn start`

## Features

the user can impersonate an account, and use it to add questions, answer questions, and view others scores and questions

## Fake Database

The `_DATA.js` file represents a fake database and methods that gives access the data.
it has been edited a little (like abstracting the util functions into util folder)

## Data

there are 3 types of states i used

- Users
- currentUser
- polls
- loadingBar (from react-redux-loading)

The Data file provides 4 methods:

- `_getUsers()`
- `_getQuestions()`
- `_saveQuestion(question)`
- `_saveQuestionAnswer(object)`
