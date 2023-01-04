import React, { FC } from 'react';
import styles from '../styles/Badge.module.css';

type BadgeProps = {
  type: 'success' | 'failure';
};

export const Badge: FC<BadgeProps> = ({ type, children }) => {
  let className = styles.badge;
  className += ' ' + styles[`badge--${type}`];

  return <div className={className}>{children}</div>;
};
