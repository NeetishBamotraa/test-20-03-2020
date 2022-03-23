import React from 'react';

export default function MainArea() {
  return (
    <div className="mainarea">
      <div className="mainarea-topbar">
        <div className="mainarea-topbar-options">
          <div className="opt-selected">Nearest Rides</div>
          <div className="opt">Upcoming Rides (4)</div>
          <div className="opt">Past Rides (2)</div>
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
        <div className="mainarea-rideslist-card">
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
        </div>
      </div>
    </div>
  );
}
