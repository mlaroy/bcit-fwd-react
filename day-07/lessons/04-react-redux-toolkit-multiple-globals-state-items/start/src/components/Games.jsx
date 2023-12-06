import Game from './Game';
import gamesData from '../data/gamesData';

function Games() {
    return (
        <div className="games-container">
            {gamesData.map((gameObj) => <Game key={gameObj.id} gameObj={gameObj} />)}
        </div>
    )
}

export default Games;
