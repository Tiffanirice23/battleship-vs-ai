import gameboardObject from '../../classes/gameboard';
import { useEffect, useState } from 'react';
import './Gameboard.scss';

function Gameboard() {

  const [gameboard, setGameboard] = useState(null);

  useEffect(() => {
    setGameboard(new gameboardObject(10, 10));
  }, []);

  return (
    <div className='gameboard' style={{ backgroundImage: "url(/assets/boards.png)" }}>
      {gameboard?.board && gameboard.board.map(row => (
        <ul>
          {row.map(space => (
            <li></li>
          ))}
        </ul>
      ))}
    </div>
  );
}

export default Gameboard;
