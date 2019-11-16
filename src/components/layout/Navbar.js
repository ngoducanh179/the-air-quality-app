import React from 'react'

const Navbar = () => {
    return (
        <div style={{marginBottom: 1 + 'em'}}>
            <nav className="navbar navbar-expand-lg navbar-light bg-success">
  <a className="navbar-brand" href="#">Home</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavDropdown">
    <ul className="navbar-nav">
      <li className="nav-item ">
        <a className="nav-link" href="https://www.facebook.com/tom.anh.370">Facebook <span class="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="https://github.com/ngoducanh179">GitHub</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Contact</a>
      </li>
      
    </ul>
  </div>
</nav>
        </div>
    )
}

export default Navbar
