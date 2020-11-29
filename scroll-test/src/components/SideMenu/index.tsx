import React from 'react';
import styles from './index.module.scss';

const SideMenu = () => {
  return (
    <menu className={styles['menu']}>
        <li className={styles['menu-item']}>メニュー1</li>
        <li className={styles['menu-item']}>メニュー2</li>
        <li className={styles['menu-item']}>メニュー3</li>
        <li className={styles['menu-item']}>メニュー4</li>
        <li className={styles['menu-item']}>メニュー5</li>
    </menu>
  );
};

export default SideMenu;