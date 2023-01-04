import React, { FC } from 'react';
import styles from '../styles/LaunchesItem.module.css';
import { Card } from './Card';
import { Badge } from './Badge';
import { Launch } from '../types';

type LaunchesItemProps = {
  launch: Launch;
};

export const LaunchesItem: FC<LaunchesItemProps> = ({ launch }) => {
  const outcome = launch.launch_success ? 'success' : 'failure';
  return (
    <Card>
      <div className={styles.wrapper}>
        <div>
          <img src={launch.links.mission_patch_small} className={styles.image} alt="Mission Patch" />
        </div>
        <div>
          <header className={styles.header}>
            <h2>{launch.mission_name}</h2>
            <div>{new Date(launch.launch_date_utc).toLocaleDateString()}</div>
          </header>
          <Badge type={outcome}>{outcome}</Badge>
          {launch.launch_failure_details && (
            <div>
              <h3>Failure Details</h3>
              <div>Time: {launch.launch_failure_details.time}</div>
              <div>Altitude: {launch.launch_failure_details.altitude}</div>
              <div>Reason:{launch.launch_failure_details.reason}</div>
            </div>
          )}
          <div className={styles.details}>
            <h3>Rocket Details</h3>
            <h4>First Stage Cores</h4>
            <ul>
              {launch.rocket.first_stage?.cores.map((core) => (
                <li key={core.core_serial}>
                  <span>Serial:</span>
                  {core.core_serial}
                </li>
              ))}
            </ul>
            <h4>Second Stage Payloads</h4>
            <ul>
              {launch.rocket.second_stage?.payloads.map((payload) => (
                <li key={payload.payload_id}>
                  <span>ID:</span>
                  {payload.payload_id}
                  <span>Type:</span>
                  {payload.payload_type}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Card>
  );
};
