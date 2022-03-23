import React, { useState, useEffect } from 'react';

export default function MainArea({ userData, ridesData }) {
  const [loading, setLoading] = useState(false);
  const [option, setOption] = useState('1');
  const [loc, setLoc] = useState(['N/A', 'N/A']);

  const handleOption = (val) => {
    setLoading(true);
    setOption(val);
  };

  let ridesDataNew = [...ridesData]

  // if (ridesData) {
  //   var rgh = ridesData[0].map(bh=>bh.state);
  //   console.log(rgh);
  // }

  // //console.log(ridesData.filter((x) => x.state === rgh[0]));

  console.log(ridesDataNew);

  if (userData[0]) {
    console.log(userData[0].station_code);
  }

  if (ridesData[0] && userData[0]) {
    //console.log(
      ridesDataNew[0].sort((a, b) => {
        let amin = Math.abs(a.station_path[0] - userData[0].station_code);
        let bmin = Math.abs(b.station_path[0] - userData[0].station_code);

        a.station_path.forEach((aval) => {
          if (amin > Math.abs(aval - userData[0].station_code)) {
            amin = Math.abs(aval - userData[0].station_code);
          }
        });

        b.station_path.forEach((bval) => {
          if (bmin > Math.abs(bval - userData[0].station_code)) {
            bmin = Math.abs(bval - userData[0].station_code);
          }
        });

        console.log(amin, bmin, a.station_path, b.station_path);

        if (amin < bmin) return 1;
        if (amin > bmin) return -1;
        return 0;
      })
    //);
  }

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
        {loading ? (
          <h3 style={{ color: 'white' }}>Loading...</h3>
        ) : (
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
        )}
      </div>
    </div>
  );
}
