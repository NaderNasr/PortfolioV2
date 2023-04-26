import React from 'react';
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const history = useNavigate();

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh'
    }}>
      <h1>404 Not Found</h1>
      <button onClick={() => history(-1)}>Go back</button>
    </div>
  );
}

export default NotFound;