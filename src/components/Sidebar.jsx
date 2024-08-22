import React from 'react'
import './sidebar.css'
import logo from '../assets/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoneyBill, faBraille } from '@fortawesome/free-solid-svg-icons'
function Sidebar() {
  return (
    <div className='sidebar'>
      <div className='top'>
        <img src={logo} alt="Logo" width="50" height="50" className="compLogo" />
      </div>
      <div className="create-btn">
        <button type="button" className='customBtn'>Create</button>
      </div>

      <div className='center'>
        <ul>

          <li>
            <FontAwesomeIcon icon={faMoneyBill} />
            <span>CRM Management</span>
          </li>
          <li>

            <span>Sales Order Management</span>
          </li>

          <li>

            <span>Finanace Management</span>
          </li>
          <li>

            <span>HR Management</span>
          </li>
          <li>
            <span>Procurement</span>
          </li>
          <li>

            <span>Asset Management</span>
          </li>
          <li>

            <span>Inventory Management</span>
          </li>
          <li>

            <span>Project Management</span>
          </li>
          <li>

            <span>Helpdesk</span>
          </li>
          <li>

            <span>Business Intelligence</span>
          </li>
          <li>

            <span>Control Panel</span>
          </li>
          <li>

            <span>Appliation Settings</span>
          </li>
          <li>

            <span>Solution builder</span>
          </li>
          <li>

            <span>Product & Services</span>
          </li>
          <li>

            <span>Suppliers & Customers</span>
          </li>
          <li>

            <span>Organisation</span>
          </li>
          <li>

            <span>More Item</span>
          </li>
          <li >

            <span>Logout</span>
          </li>
          <li className='moreItems'>
            <FontAwesomeIcon icon={faBraille} />
            <span>More Items</span>
          </li>
        </ul>
      </div>
      <div className='top'>
        <img src={logo} alt="Logo" width="50" height="50" className="compLogo" />
      </div>

    </div>
  )
}

export default Sidebar