import axios from 'axios';
import React, { useEffect } from 'react';

import styles from './styles.module.scss';

function Dashboard() {
  useEffect(() => axios.get('/api/last_activity'), []);

  return (
    <div className={ styles.Root }>
      Dashboard
    </div>
  );
}

Dashboard.propTypes = {
};

export default Dashboard;
