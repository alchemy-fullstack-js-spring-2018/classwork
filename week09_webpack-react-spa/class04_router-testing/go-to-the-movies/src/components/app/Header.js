import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import styles from './Header.css';

export default class Header extends Component {
  render() {
    return (
      <header className={styles.header}>
        <h1>Go to the Movies!</h1>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/search">Search</Link></li>
            <Route path="/movies" render={() => <li>only on movies!</li>}/>
          </ul>
        </nav>
      </header>
    );
  }
}
