import React from 'react';
import Header from './components/header.js';
import Todo from './components/todo-connected.js';
import Footer from './components/footer.js';
import LoginContex from './components/auth/context.js';
import Login from './components/auth/login.js';
import Auth from './components/auth/auth.js';

// login Context => 

const Edit = props => {
  return(
    <Auth capability = "update">
      <span className="ability">u can edit</span>
    </Auth>
  )
}

const Delete = props => {
  return(
    <Auth capability = "delete">
    <span className="ability">u can delete</span>
  </Auth>
    )
}




function App() {
  return (
    <React.Fragment>
      <Header />
      <Todo />
      <div className="auth">
      <LoginContex >
      <Login />
      <Edit />
      <Delete/>
      </LoginContex>
      </div>
      <Footer />
    </React.Fragment>
  );
}


export default App;