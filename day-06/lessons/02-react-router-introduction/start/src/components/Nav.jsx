// Nav

const Nav = () => { 
    
    function blur(e){
        e.target.blur();
    }
    
    return (
        <nav className="main-nav" onClick={blur}>
            <ul>
                {/* The anchor tag code below is incorrect...
                    Use React Router's NavLink component for 
                    navigation links... */}
                <li><a href="/">Home</a></li>
            </ul>
        </nav>
    );
    
};

export default Nav;