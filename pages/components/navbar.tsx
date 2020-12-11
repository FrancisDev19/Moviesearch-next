import React from 'react';
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <Link href="/"> Movienext </Link>
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active font-weight-bold" aria-current="page">
                <Link href="/"> Inicio </Link>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link font-weight-bold" href="#">
              <Link href="/movies"> Movies </Link>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link font-weight-bold" href="#">
                <Link href="/series"> Series </Link>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
