import React, { Component } from 'react';
import '../styles/App.css';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="main">
        <div className="jumbotron bg-danger text-white">
          <h1 className="display-4">Got Secrets?</h1>
          <h6>Your Trapper-Keeper for secrets. Sign up today. It's easy, free and about as reliable as somebody you sort of trust!</h6>
          <hr/>
          <h6 className="text-muted">Create an account to get started, or log back in if you're already a Secret Keeper.</h6>
          <Link className="btn btn-primary" to="/register" style={{marginRight:5}}>Register</Link>
          <Link className="btn btn-success" to="/login">Log Back In</Link>
        </div>
      </div>
    );
  }
}

export default App;
