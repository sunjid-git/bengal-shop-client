import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';

const Header = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    return (
        <nav className="navbar container navbar-expand-lg navbar-light bg-light p-3">

        <p className="navbar-brand font-weight-bold" href="#">Bengal Shop</p>

        <div className="collapse navbar-collapse justify-content-end" >
            <div className="navbar-nav">
                <p className="nav-link active"><Link to={`/home`}>Home </Link></p>

                <p className="nav-link active"><Link to={`/orders`}>Orders</Link></p>
                <p className="nav-link active"><Link to={`/login`}>Admin</Link></p>
                <p className="nav-link active"><Link to={`/deals`}>Deals</Link></p>
                <p className="nav-link active" ><Link to={`/login`}>
                    <button className="bg-success rounded"> 
                        Login {loggedInUser.name} 
                    </button>
                    </Link></p>
            </div>    
        </div>
    </nav>
    );
};

export default Header;