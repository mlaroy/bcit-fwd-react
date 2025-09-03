import { useContext } from 'react'
import { FavsContext } from '../context/FavsContext'
import { Link } from "react-router-dom"
import FavButton from './FavButton'

const imageFolderPath = import.meta.env.BASE_URL + 'assets/images/';

function Kitten({ kittenOb, profileLink = true, isFav }) {

    const { favs, deleteFav, addFav } = useContext(FavsContext);

    function handleFavClick(obj, removeFromFavs = true) {
        if(removeFromFavs) {
            deleteFav(obj)
        } else {
            addFav(obj)
        }
    }


    return (
        <div className="kitten">
            {isFav &&
                <div className="heart">
                    <img src={`${imageFolderPath}heart.png`} alt="heart" />
                </div>
            }
            <div className="profile-picture">
                <img src={`${imageFolderPath}${kittenOb.pic}`} alt={kittenOb.name} />
            </div>
            <div className="title-and-name">
                <p><b>Name: </b> {kittenOb.name}</p>
                <p><b>Position: </b> {kittenOb.position}</p>
            </div>
            {profileLink && <div className="link-profile">
                <Link to={{
                    pathname: `/kitten-profile/${kittenOb.id}`
                }}>
                    View Profile
                </Link>
            </div>}
            <div className="btn-favourite">
                {isFav ?
                    <FavButton kittenObj={kittenOb} remove={true} handleFavClick={handleFavClick} /> :
                    <FavButton kittenObj={kittenOb} handleFavClick={handleFavClick} />
                }
            </div>
        </div>
    )
}

export default Kitten;
