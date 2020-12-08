import React from 'react';
import { NavLink } from 'react-router-dom';
const Navbar = () => {
    return (<>
    <div className='container-fluid nav bg'>
        <div className='row'>
            <div className='col-10 mx-auto'>
        <nav className="navbar navbar-expand-lg navbar-light  ">
            <NavLink className="navbar-brand" to="/">Edtech</NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <NavLink 
                        activeclassName="menu_active" exact className="nav-link"
                        aria-current="page" to="/">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink  activeclassName="menu_active" className="nav-link" to="/Liveclasses">Live Classes</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink activeclassName="menu_active" className="nav-link" to="/Course">Courses</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink activeclassName="menu_active" className="nav-link" to="/Book">Books</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink activeclassName="menu_active" className="nav-link" to="/Board">Boards</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink activeclassName="menu_active" className="nav-link" to="/Exam">Exams</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
        </div>
        </div>
    </div>
    </>
    )
}
export default Navbar;
