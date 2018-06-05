# Redux Workshop

## Getting started

1. Clone the repository.

2. Install dependencies:
```bash
npm install
```

3. Start development server:
```bash
npm run start
```

## Intro

"Redux is a predictable state container for JavaScript apps." - https://redux.js.org/

### Flow diagram

![flow](https://image.slidesharecdn.com/reduxdataflowwithangular2-161118085712/95/redux-data-flow-with-angular-2-19-638.jpg?cb=1479459463)

### Basics

**Actions** are payloads of information that send data from your application to your store. They are the only source of information for the store. You send them to the store using `store.dispatch()`.

https://redux.js.org/basics/actions

The **Store** is the object that brings them together. The store has the following responsibilities:

- holds the application state; 
- allows access to the state via `getState()`;
-  allows state to be updated via `dispatch(action)`;
- registers listeners via `subscribe(listener)`.

https://redux.js.org/basics/store

**Reducers** specify how the application's state changes in response to actions sent to the store. Remember that actions only describe what happened, but don't describe how the application's state changes.

https://redux.js.org/basics/reducers

### What we'll do

Create a simple app to check domain availability.
