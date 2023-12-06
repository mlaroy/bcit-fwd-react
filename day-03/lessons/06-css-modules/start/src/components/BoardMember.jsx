import '../styles/BoardMember.css'

function BoardMember({name, position, image, imagePath}) {
    return (
        <div className="board-member">
            <div className="profile-picture">
                <img src={`${imagePath}${image}`} alt={`${position} of the Kitten's Group Inc. - ${name}`} />
            </div>
            <div className="title-and-name">
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
