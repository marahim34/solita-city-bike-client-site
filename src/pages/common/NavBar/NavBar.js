import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../../resources/logo1.png'

const NavBar = () => {
    const location = useLocation();

    const menuItems = (
        <>
            <li className={location.pathname === '/' ? 'rounded font-semibold' : ''}>
                <Link to='/'>Home</Link>
            </li>
            <li className={location.pathname === '/bike-stations' ? 'bg-primary rounded font-semibold' : ''}>
                <Link to='/bike-stations'>Bike Stations</Link>
            </li>
            <li className={location.pathname === '/journeyList-compiled' ? 'bg-primary rounded font-semibold' : ''}>
                <Link to='/journeyList-compiled'>Journey List</Link>
            </li>
            <li className={location.pathname === '/about' ? 'bg-primary rounded font-semibold' : ''}>
                <Link to='/about'>About</Link>
            </li>
        </>
    );

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <Link to='/'><img src={logo} alt=''></img></Link>
                <a className="align-middle text-center text-accent normal-case text-xl font-bold hidden lg:block md:block">City Bike</a>

            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {menuItems}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn btn-primary">Get started</a>
            </div>
        </div>
    );
};

export default NavBar;