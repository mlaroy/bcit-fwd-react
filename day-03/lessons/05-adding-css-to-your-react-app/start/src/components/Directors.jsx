import BoardMember from './BoardMember';
import boardMembersList from '../data/board-members-list';

function Directors() {
    return (
        <div className="kittens-board-of-directors">
            <h3>Board of Directors</h3>
            <ul>
                {boardMembersList.map( member => {
                    return (
                        <li key={member.position}>
                            <BoardMember
                                name={member.name}
                                position={member.position}
                                image={member.picture}
                             />
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default Directors;
