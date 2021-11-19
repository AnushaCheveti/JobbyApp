import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import {ImHome} from 'react-icons/im'
import {FiLogOut} from 'react-icons/fi'
import './index.css'

const websiteLogo = 'https://assets.ccbp.in/frontend/react-js/logo-img.png'

const Header = props => {
  const onClickLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }
  return (
    <nav className="nav-container">
      <ul className="header-ul-container">
        <li className="logo-container">
          <Link to="/" className="link">
            <img
              src={websiteLogo}
              className="website-logo"
              alt="website logo"
            />
          </Link>
        </li>
        <li className="home-jobs-container">
          <Link to="/" className="link">
            <ImHome className="home-icon" />
            <h1 className="header-text">Home</h1>
          </Link>
          <Link to="/jobs" className="link">
            <h1 className="header-text">Jobs</h1>
          </Link>
        </li>
        <li>
          <FiLogOut className="home-icon" onClick={onClickLogout} />
          <button type="button" className="btn-logout" onClick={onClickLogout}>
            Logout
          </button>
        </li>
      </ul>
    </nav>
  )
}
export default withRouter(Header)
