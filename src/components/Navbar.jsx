

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
       <div className="flex flex-shrink-0 items-center">
        <img src="#" alt="logo"/>
        </div>
        <div>
        <ul className="">
                   <li>
                   <Link to="/">Home</Link>
                    </li>
                    <li>
                      <Link to="/about">About </Link>
                    </li>
                    <li>
                       <Link to="/experiences">Contact Us </Link>
                    </li>
                    <li>
                       <Link to="/projects">Grocery</Link>
                    </li>
                    <li>
                        <Link to="/contact">Home</Link>
                    </li>
        </ul>
        
        </div> 
    </nav>
  )
}

export default Navbar;