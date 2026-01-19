const imageFolderPath = import.meta.env.BASE_URL + 'assets/images/';

function Game({ gameObj }) {
    return (
        <div className="game">
            <figure className="game-image">
                <img src={`${imageFolderPath}${gameObj.poster}`} alt={gameObj.title} />
            </figure>
            <div className="game-info">
                <p className="game-title"><b>Title: </b>{gameObj.title}</p>
                <p className="game-console"><b>Console: </b>{gameObj.console}</p>
                <p className="game-price"><b>Price: </b>${gameObj.price}</p>
            </div>
            <div className="game-add-to-cart">
                <button>Add to Cart</button>
            </div>
        </div>
    )
}

export default Game;
