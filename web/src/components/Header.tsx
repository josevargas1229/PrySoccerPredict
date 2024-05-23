import React from 'react';
import styles from '../styles/Header.module.css';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <img src="https://cdn.icon-icons.com/icons2/2248/PNG/512/soccer_icon_137174.png" alt="SportyTrader Logo" className={styles.logo} />
        <span className={styles.title}>PredictaGoal</span>
      </div>
    </header>
  );
};

export default Header;
