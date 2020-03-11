import React from 'react';
import Header from './components/header.js';
// import Main from './components/main.js';
// import Todo from './components/todo.js';
import Todo from './components/todo-connected.js';
import Footer from './components/footer.js';


function App() {
  return (
    <React.Fragment>
      <Header />
      <Todo />
      {/* <Main /> */}
      <Footer />
    </React.Fragment>
  );
}


export default App;