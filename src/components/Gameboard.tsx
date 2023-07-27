import gameboard from '../classes/gameboard';
import { useEffect } from 'react';

function Gameboard() {

  useEffect(() => {
    console.log('mounted');
  }, []);

  return (
    <div>
      <h1>My Gameboard</h1>
      <ul>

      </ul>
    </div>
  );
}

export default Gameboard;
