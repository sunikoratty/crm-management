import React from 'react'
import './home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowsUpDown, faCoffee } from '@fortawesome/free-solid-svg-icons'
import Barchart from './Barchart';

function Home() {
  let datas = [30, 60, 100];
  let setDatas = [10, 20, 30];
  let firstColor = ['blue', 'brown']
  let secondColor = ['brown', 'green']
  return (
    <div className='home'>
      <div className='navigations'>
        <span>Dashboard</span>
        <span>Overview</span>
        <span>Overview</span>
        <span>Overview</span>
      </div>
      <div className='homeWrapper'>
        <div className='firstSection'>
          <div className="card">
            <div className="container">
              <div className='details'>
                <span><b>Employee Turnover Rate</b></span>
                <h3><b>25%</b></h3>
                <p>Resignation in last 90 days: 0</p>
              </div>
              <div className='charts'>
                <Barchart datas={setDatas} color={firstColor} />
              </div>
            </div>
          </div>
          <div className="card">
            <div className="container">
              <div className='details'>
                <span><b>Total Employees</b></span>
                <h3><b>123</b></h3>
                <p>Men: 101  | Female: 22 </p>
              </div>
              <div className='moreDetails'>
                <p>Full time employees: 100</p>
                <p>Contract employees: 23</p>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="container">
              <div className='details'>
                <span><b>Overall Attendance</b></span>
                <h3><b>89%</b></h3>
                <p>Attendance Performance</p>
              </div>
              <div className='charts'>
                <Barchart datas={datas} color={secondColor} />
              </div>
            </div>
          </div>
        </div>
        <div className='secondSection'>
          <div className='card'>
            <div className='card-body'>
              <div className='title'>
                <div>Request for Purchase</div>
                <div className='icon'>
                  <FontAwesomeIcon icon={faArrowsUpDown} />
                </div>
              </div>
              <div className='table'>
                <table>
                  <thead>
                    <tr>
                      <th>Request ID</th>
                      <th>Requester</th>
                      <th>Subject</th>
                      <th>Due Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>RQ-002-2024</td>
                      <td>Name of requested</td>
                      <td>Marriage leave reques...</td>
                      <td>21 Apr 2024</td>
                    </tr>
                    <tr>
                      <td>RQ-002-2024</td>
                      <td>Name of requested</td>
                      <td>Marriage leave reques...</td>
                      <td>21 Apr 2024</td>
                    </tr>
                    <tr>
                      <td>RQ-002-2024</td>
                      <td>Name of requested</td>
                      <td>Marriage leave reques...</td>
                      <td>21 Apr 2024</td>
                    </tr>
                    <tr>
                      <td>RQ-002-2024</td>
                      <td>Name of requested</td>
                      <td>Marriage leave reques...</td>
                      <td>21 Apr 2024</td>
                    </tr>
                    <tr>
                      <td>RQ-002-2024</td>
                      <td>Name of requested</td>
                      <td>Marriage leave reques...</td>
                      <td>21 Apr 2024</td>
                    </tr>
                    <tr>
                      <td>RQ-002-2024</td>
                      <td>Name of requested</td>
                      <td>Marriage leave reques...</td>
                      <td>21 Apr 2024</td>
                    </tr>
                    <tr>
                      <td>RQ-002-2024</td>
                      <td>Name of requested</td>
                      <td>Marriage leave reques...</td>
                      <td>21 Apr 2024</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className='card-footer'>
                <span className='content'>10 request in queue</span>
                <span className='content'>View All</span>
              </div>
            </div>
          </div>
          <div className='card'>
            <div className='card-body'>
              <div className='title'>
                <div>Upcoming Tasks</div>
                <div className='icon'>
                  <FontAwesomeIcon icon={faArrowsUpDown} />
                </div>
              </div>
            </div>
          </div>

        </div>
        <div className='secondSection'>
          <div className='card'>
            <div className='card-body'>
              <div className='title'>
                <div>Upcoming Events</div>
                <div className='icon'>
                  <FontAwesomeIcon icon={faArrowsUpDown} />
                </div>
              </div>

            </div>
          </div>
          <div className='card'>
            <div className='card-body'>
              <div className='title'>
                <div>Net income</div>
                <div className='icon'>
                  <FontAwesomeIcon icon={faArrowsUpDown} />
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Home