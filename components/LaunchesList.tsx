import React, { useEffect, useMemo, useState } from 'react';
import styles from '../styles/LaunchesList.module.css';
import useAxios from '../hooks/axios';
import { LaunchesItem } from './LaunchesItem';
import { Launch } from '../types';

export default function LaunchesList() {
  const pagination = {
    limit: 10,
    offset: 0,
  };

  const dataToFetch = [
    'mission_name',
    'launch_date_utc',
    'launch_success',
    'launch_failure_details',
    'links/mission_patch_small',
    'rocket/(second_stage/payloads,first_stage/cores/core_serial)',
  ];

  const apiConfig = useMemo(
    () => ({
      params: {
        limit: pagination.limit,
        offset: pagination.offset,
        filter: dataToFetch.join(','),
      },
    }),
    []
  );

  const { response, loading, error } = useAxios({
    // method: 'get',
    url: '/launches',
    config: apiConfig,
  });

  const [launches, setLaunches] = useState<Launch[]>([]);

  useEffect(() => {
    if (response !== null) {
      setLaunches(response);
    }
  }, [response]);

  return (
    <>
      {loading ? (
        <p>loading...</p>
      ) : (
        <div>
          {error && (
            <div>
              <p>{error.message}</p>
            </div>
          )}
          {launches.length ? (
            <ol className={styles.list}>
              {launches.map((launch) => (
                <li key={launch.mission_name} className={styles.list__item}>
                  <LaunchesItem launch={launch} />
                </li>
              ))}
            </ol>
          ) : (
            'No Launches Found'
          )}
        </div>
      )}
    </>
  );
}
