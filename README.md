# Todo App  [![Build Status](https://travis-ci.org/estrella-kim/vuejs-todo.svg?branch=master)](https://travis-ci.org/estrella-kim/react-todo)

## Features

* Node.js
* Vuejs

### Node.js Stack

- Express server
- webpack-dev-server

### Vuejs Stack
* Vue-cli

## Getting started

### Backend set up
1. Install all backend dependencies
```bash
$ cd backend && npm install
```

2. Make logs directory for loggin backend server
```bash
# Directory: /backend
$ mkdir logs && cd logs && touch err.log & touch forever.log & touch out.log 
```

3. Serve the app

`for production`
```bash
$ npm start
```

`for dev server`
```bash
$ npm run dev
```

### Frontend set up
1. Install all frontend dependencies
```bash
$ cd frontend && npm install
```