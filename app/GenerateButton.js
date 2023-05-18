'use client';
import styles from './GenerateButton.module.scss';

export default function GenerateButton({ backgroundColor, color, name, left }) {
  return (
    <button
      className={styles.generateButton}
      style={{
        backgroundColor: backgroundColor,
        color: color,
        left: left,
      }}
    >
      {name}
    </button>
  );
}
