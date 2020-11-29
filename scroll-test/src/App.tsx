import React from 'react';
import Header from './components/Header';
import SideMenu from './components/SideMenu';
import Main from './components/Main';
import styles from './App.module.scss';

const App = () => {
  return (
    <div className={styles['app']}>
      <Header />

      <div className={styles['app-content']}>
        <SideMenu />
        <Main />
      </div>
      
    </div>
  );
};

export default App;