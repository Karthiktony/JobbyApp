import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'

import {MdHome, MdWork} from 'react-icons/md'
import {FiLogOut} from 'react-icons/fi'

import './index.css'

const Header = props => {
  const onClickLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <nav className="header-container">
      <Link to="/">
        <img
          src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
          alt="website logo"
          className="website-logo"
        />
      </Link>
      <div className="large-container">
        <ul className="large-list">
          <li className="header-item">
            <Link to="/" className="link">
              Home
            </Link>
          </li>
          <li className="header-item">
            <Link to="/jobs" className="link">
              Jobs
            </Link>
          </li>
        </ul>
        <button className="logout-button" type="submit" onClick={onClickLogout}>
          Logout
        </button>
      </div>
      <ul className="small-container">
        <li className="small-list-item">
          <Link to="/" className="small-link">
            <MdHome className="icons" />
          </Link>
          <li className="small-list-item">
            <Link to="/jobs" className="small-link">
              <MdWork className="icons" />
            </Link>
          </li>
          <li className="small-list-item">
            <button
              className="button-icon"
              type="submit"
              onClick={onClickLogout}
            >
              <FiLogOut className="icons" />
            </button>
          </li>
        </li>
      </ul>
    </nav>
  )
}

export default withRouter(Header)
