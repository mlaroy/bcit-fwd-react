// Fav Button

function FavButton({ kittenObj, remove = false, handleFavClick }) {

    console.log({ remove })
    function handleAddFav(){
        console.log('add')
        handleFavClick(kittenObj, false);
    }

    function handleRemoveFav(){
        handleFavClick(kittenObj, true);
    }

    return (
        <>
            {remove === false ?
            <button onClick={handleAddFav}>Add To Favs</button> :
            <button onClick={handleRemoveFav}>Remove From Favs</button>}
        </>
    );

}

export default FavButton;
