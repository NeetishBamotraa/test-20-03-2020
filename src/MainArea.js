import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

export default function MainArea({ userData, ridesData }) {
  const [option, setOption] = useState('1');
  const [loc, setLoc] = useState(['N/A', 'N/A']);

  const handleOption = (val) => {
    setOption(val);
  };

  return (
    <div className="mainarea">
      <div className="mainarea-topbar">
        <div className="mainarea-topbar-options">
          <div
            onClick={() => {
              handleOption('1');
            }}
            className={`${option === '1' ? 'opt-selected' : 'opt'}`}
          >
            Nearest Rides
          </div>
          <div
            onClick={() => {
              handleOption('2');
            }}
            className={`${option === '2' ? 'opt-selected' : 'opt'}`}
          >
            Upcoming Rides (4)
          </div>
          <div
            onClick={() => {
              handleOption('3');
            }}
            className={`${option === '3' ? 'opt-selected' : 'opt'}`}
          >
            Past Rides (2)
          </div>
        </div>
        <div className="mainarea-topbar-filterbtn">
          <div className="icon">
            <div className="line line1"></div>
            <div className="line line2"></div>
            <div className="line line3"></div>
          </div>
          <div className="title">Filters</div>
        </div>
      </div>
      <div className="mainarea-rideslist">
        {option === '1' &&
          ridesData &&
          ridesData.map((item, index) => (
            <div key={uuidv4()} className="mainarea-rideslist-card">
              <div className="image">
                <img src={item.map_url} />
              </div>
              <div className="cnt">
                <div className="line">
                  <div className="title">Ride Id :</div>
                  <div className="value">{item.id}</div>
                </div>
                <div className="line">
                  <div className="title">Origin Station :</div>
                  <div className="value">{item.origin_station_code}</div>
                </div>
                <div className="line">
                  <div className="title">station_path :</div>
                  <div className="value">
                    [
                    {item.station_path.map((val) => (
                      <span>{val}, </span>
                    ))}
                    ]
                  </div>
                </div>
                <div className="line">
                  <div className="title">Date :</div>
                  <div className="value">{item.date}</div>
                </div>
                <div className="line">
                  <div className="title">Distance :</div>
                  <div className="value">{item.distance}</div>
                </div>
              </div>
              <div className="loc">
                <div className="loc1">{item.city}</div>
                <div className="loc1">{item.state}</div>
              </div>
            </div>
          ))}

        {option !== '1' && (
          <h3 style={{ color: 'white' }}>Work in Progress...</h3>
        )}
      </div>
    </div>
  );
}

{
  /* <div className="mainarea-rideslist-card">
          <div className="image">
            <img src="https://picsum.photos/200" />
          </div>
          <div className="cnt">
            <div className="line">
              <div className="title">Ride Id :</div>
              <div className="value">001</div>
            </div>
            <div className="line">
              <div className="title">Origin Station :</div>
              <div className="value">20</div>
            </div>
            <div className="line">
              <div className="title">station_path :</div>
              <div className="value">
                [20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20]
              </div>
            </div>
            <div className="line">
              <div className="title">Date :</div>
              <div className="value">15th Feb 2022 16:33</div>
            </div>
            <div className="line">
              <div className="title">Distance :</div>
              <div className="value">0</div>
            </div>
          </div>
          <div className="loc">
            <div className="loc1">City Name</div>
            <div className="loc1">State Name</div>
          </div>
        </div> */
}
