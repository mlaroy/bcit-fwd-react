import { useSelector, useDispatch } from 'react-redux';
import { addItem, deleteItem } from '../features/cart/cartSlice';

const imageFolderPath = import.meta.env.BASE_URL + 'assets/images/';

function Game({ gameObj }) {

    const cartItems = useSelector((state) => state.cart.items);
    const dispatch = useDispatch();

    function inCart(id, arr) {
        return arr.some(item => item.id === id);
    }

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
                {inCart(gameObj.id, cartItems) ?
                    <button onClick={() => dispatch(deleteItem(gameObj))}>Remove from Cart</button> :
                    <button onClick={() => dispatch(addItem(gameObj))}>Add to Cart</button>
                }
            </div>
        </div>
    )
}

export default Game;
