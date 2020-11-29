import React from 'react';
import styles from './index.module.scss';

const Header = () => {
  return (
    <header className={styles['header']}>
      <div className={styles['logo']}>LOGO or TITLE</div>
    </header>
  );
};

export default Header;