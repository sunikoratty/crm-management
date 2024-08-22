import React from 'react'
import './topbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faClipboardQuestion, faBell, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import avatar from '../assets/avatar.png'
function TopBar() {
  return (
    <div className='navbar'>
      <div className="wrapper">
        <div className='searchWrapper'>
          <div className="search">
            <input type="text" placeholder='Search .....' />
            <FontAwesomeIcon icon={faSearch} />
          </div>
          <div className='topbarItems'>
            <div className='topContent'>
              <FontAwesomeIcon className='help' icon={faClipboardQuestion} />
              Help</div>
            <div className='topContent '>
              <FontAwesomeIcon className="backColor" icon={faBell} />
              <span>29</span>
              Alerts</div>
            <div className='topContent '> <FontAwesomeIcon className='backColor' icon={faEnvelope} />
              <span>29</span>
              Email</div>
          </div>
        </div>

        <div className="items">
          <div className='userDetails'>
            <div>Ms. employee</div>
            <div>Product Manager</div>
          </div>
          <div className="user">
            <img
              src={avatar}
              alt=""
              className="avatar"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopBar