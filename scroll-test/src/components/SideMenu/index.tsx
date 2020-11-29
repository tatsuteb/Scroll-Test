import React from 'react';
import styles from './index.module.scss';

const SideMenu = () => {
  return (
    <menu className={styles['menu']}
    onWheel={e => console.log('wheel')}>
      Menu
    </menu>
  );
};

export default SideMenu;