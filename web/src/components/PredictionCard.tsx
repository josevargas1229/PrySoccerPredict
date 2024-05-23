import React from 'react';
import styles from '../styles/Prediction.module.css';

interface Prediction {
    date: string;
    league: string;
    homeTeam: string;
    awayTeam: string;
    homeTeamLogo: string;
    awayTeamLogo: string;
    probability: number;
    odds: number;
    bettingSite: string;
  }
  
  
const PredictionCard: React.FC<{ prediction: Prediction }> = ({ prediction }) => {
    return (
      <div className={styles.card}>
        <div className={styles.column}>
          <p className={styles.date}>{prediction.date}</p>
          <p className={styles.league}>{prediction.league}</p>
        </div>
        <div className={styles.column}>
            <p>
            {prediction.homeTeam} <span className={styles.vs}>vs</span> {prediction.awayTeam}
            </p>
            <div className={styles.logos}>
            <img src={prediction.homeTeamLogo} alt={`${prediction.homeTeam} logo`} className={styles.logo} />
            <img src={prediction.awayTeamLogo} alt={`${prediction.awayTeam} logo`} className={styles.logo} />
            </div>
        </div>
        <div className={styles.column}>
          <div className={styles.probability}>
            <span>1</span> <span>X</span> <span>2</span>
            <p>Probabilidad de {prediction.probability}%</p>
          </div>
        </div>
      </div>
    );
};

export default PredictionCard;
