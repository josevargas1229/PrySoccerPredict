import React from 'react';
import styles from '../styles/ColumnHeaders.module.css';

const ColumnHeaders: React.FC = () => {
  return (
    <div className={styles.columnHeaders}>
      <div className={styles.column}>Competición</div>
      <div className={styles.column}>Partido</div>
      <div className={styles.column}>Pronóstico</div>
    </div>
  );
};

export default ColumnHeaders;
