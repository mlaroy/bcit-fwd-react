import styles from '../styles/BoardMember.module.css'

function BoardMember({name, position, image, imagePath}) {
    return (
        <div className={`${styles.boardMember} ${position == 'Chairman' && styles.special } `}>
            <div className={styles.profilePicture}>
                <img src={`${imagePath}${image}`} alt={`${position} of the Kitten's Group Inc. - ${name}`} />
            </div>
            <div className={styles.titleAndName}>
                <p><b>Name: </b>{name}</p>
                <p><b>Position: </b>{position}</p>
            </div>
        </div>
    );
}

BoardMember.defaultProps = {
    imagePath: import.meta.env.BASE_URL + 'assets/images/'
}

export default BoardMember;
