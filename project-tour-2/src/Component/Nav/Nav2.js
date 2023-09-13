import React from 'react'
import { Link } from 'react-router-dom'
export default function Nav2(nav2name) {
  return (
    <>
        <div className="container-fluid p-0">
            <nav className="navbar bg-body-tertiary bg-dark text-white">
                <div className="container-fluid">
                  <span className="navbar-brand">Tour list</span>
                  <form className="d-flex" role="search">
                    <Link to="/" className='nav-link text-white'>Home</Link>
                    <Link to="#" className='nav-link text-white'>/</Link>
                    <Link to="#" className='nav-link'>{nav2name.nav2NameTitle}</Link>
                  </form>
                </div>
            </nav>
        </div>
    </>
  )
}
