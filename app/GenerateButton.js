'use client';
import styles from './GenerateButton.module.scss';

export default function GenerateButton({
  backgroundColor,
  color,
  name,
  left,
  border,
  marginTop
}) {
  return (
    <button
      className={styles.generateButton}
      style={{
        backgroundColor: backgroundColor,
        color: color,
        left: left,
        border: border,
        marginTop: marginTop
      }}
    >
      {name}
    </button>
  );
}
