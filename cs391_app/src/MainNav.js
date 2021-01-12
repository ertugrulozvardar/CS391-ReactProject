import {Link} from 'react-router-dom'

function MainNav() {

    const navStyle = {
        color: 'white'
    };



  return (
    <nav>
        <ul className="nav-links">
            <Link style={navStyle} to='/AddMovie'>
            <li>Add Movie</li>
            </Link>

            <Link style={navStyle} to='/DeleteMovie'>
            <li>Delete Movie</li>
            </Link>
            
            <Link style={navStyle} to='/Movies'>
            <li>Movies</li>
            </Link>
        </ul>
    </nav>
  );
}

export default MainNav;
