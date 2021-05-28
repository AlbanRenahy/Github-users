import React from 'react';
import { GithubContext } from '../context/context';

const UserInfo = () => {
    const data = React.useContext(GithubContext)
    console.log(data);
  return <h2>user info component : {data}</h2>;
};

export default UserInfo;