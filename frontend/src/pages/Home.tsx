import React, { FC, useEffect, useState } from 'react';
import axios from 'axios';

const Home: FC = () => {
  const [welcomeMsg, setWelcomeMsg] = useState<string>('');

  useEffect(() => {
    (async () => {
      const res = await axios.get('/api/start');
      setWelcomeMsg(res.data.msg);
    })();
  }, []);

  return (
    <div className="App-header">
      <p>{welcomeMsg}</p>
    </div>
  );
};

export default Home;
