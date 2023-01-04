import React, { FC } from 'react';
import styles from '../styles/Card.module.css';

type CardProps = {};

export const Card: FC<CardProps> = ({ children }) => {
  return <div className={styles.card}>{children}</div>;
};
