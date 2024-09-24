import { Link } from "react-router-dom";

export default function Navbar({isLogin,handleLogout,userData}) {
    return (
        <nav className="navbar navbar-expand-lg bg-primary mb-4">
            <div className="container">
                <a className="navbar-brand" href="#">Auth App</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        {
                            isLogin?<>
                            <li className="nav-item">
                            <Link className="nav-link" to={'/'}>Home</Link>
                             </li>
                             <li className="nav-item">
                             <Link className="nav-link" to={'/'}>Welcome {userData}</Link>
                             </li>
                                <li className="nav-item">
                                 <a className="nav-link" onClick={handleLogout}>Logout</a>
                                 </li>
                            </>
                            :
                            <>
                            <li className="nav-item">
                            <Link className="nav-link" to={'/login'}>Login</Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link" to={'/register'}>Register</Link>
                            </li>
                            </>
                        }
                    </ul>
                </div>
            </div>
        </nav>

    )
}
