import React from 'react';
import styles from './index.module.scss';

const Main = () => {
  const items = [];
  for (let i = 0; i < 100; i++)
  {
    items.push(`見出し${i}`);
  }

  return (
    <main className={styles['main']}>
      <div className={styles['channel-header']}>
        <figure className={styles['channel-logo']}>
          <img src='https://placehold.it/60' alt='channel name'/>
        </figure>
        <div className={styles['channel-name']}>CHANNEL NAME</div>
      </div>
      
      <div>
        <ul>
          {items.map(item =>
            <li key={item}
              style={{padding: '10px'}}>{item}</li>)}
        </ul>
      </div>
    </main>
  );
};

export default Main;