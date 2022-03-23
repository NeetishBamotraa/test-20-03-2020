import React, { useState, useEffect } from 'react';
import './style.css';

import NavBar from './NavBar';
import MainArea from './MainArea';

// const sortRidesData = (x, y) => {
//   const ridesData = [...x];
//   const userData = y;
//   ridesData.sort((a, b) => {
//     let amin = Math.abs(a.station_path[0] - userData.station_code);
//     let bmin = Math.abs(b.station_path[0] - userData.station_code);

//     a.station_path.forEach((aval) => {
//       if (amin > Math.abs(aval - userData.station_code)) {
//         amin = Math.abs(aval - userData.station_code);
//       }
//     });

//     b.station_path.forEach((bval) => {
//       if (bmin > Math.abs(bval - userData.station_code)) {
//         bmin = Math.abs(bval - userData.station_code);
//       }
//     });

//     console.log(amin, bmin, a.station_path, b.station_path);

//     if (amin < bmin) return 1;
//     if (amin > bmin) return -1;
//     return 0;
//   });

//   return ridesData;
// };

export default function App() {
  const [ridesData, setRidesData] = useState([]);
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loading1, setLoading1] = useState(true);
  const [loading2, setLoading2] = useState(true);
  const [errors, setErrors] = useState();

  useEffect(() => {
    fetch('https://assessment.api.vweb.app/rides')
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw response;
      })
      .then((data) => {
        setRidesData(data);
      })
      .catch((error) => {
        console.log('Error while fetching data: ', error);
        setErrors((preverror) => errors + error);
      })
      .finally(() => {
        console.log('fetched rides data');
        setLoading1(false);
      });
  }, []);

  useEffect(() => {
    fetch('https://assessment.api.vweb.app/user')
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw response;
      })
      .then((data) => {
        setUserData(data);
      })
      .catch((error) => {
        console.log('Error while fetching data: ', error);
        setErrors((preverror) => errors + error);
      })
      .finally(() => {
        console.log('fetched user data');
        setLoading2(false);
      });
  }, []);

  const sortRidesData = () => {
    console.log('iabsds');

    let sortedData = [...ridesData].sort((a, b) => {
      let amin = Math.abs(a.station_path[0] - userData.station_code);
      let bmin = Math.abs(b.station_path[0] - userData.station_code);

      a.station_path.forEach((aval) => {
        if (amin > Math.abs(aval - userData.station_code)) {
          amin = Math.abs(aval - userData.station_code);
        }
      });

      b.station_path.forEach((bval) => {
        if (bmin > Math.abs(bval - userData.station_code)) {
          bmin = Math.abs(bval - userData.station_code);
        }
      });

      a['distance'] = amin;
      b['distance'] = bmin;

      console.log(amin, bmin, a.station_path, b.station_path);

      return amin - bmin;
    });

    setRidesData(sortedData);
    setLoading(false);
  };

  return (
    <div>
      {loading && <h1>Loading...</h1>}
      {!loading1 &&
        !loading2 &&
        loading &&
        console.log(ridesData, userData.station_code)}
      {!loading1 && !loading2 && !loading && console.log('done', ridesData)}
      {!loading1 && !loading2 && loading && sortRidesData()}
      {errors && <p>{errors}</p>}
      {!loading && userData && <NavBar userData={userData} />}
      {!loading && userData && ridesData && (
        <MainArea userData={userData} ridesData={ridesData} />
      )}
    </div>
  );
}
