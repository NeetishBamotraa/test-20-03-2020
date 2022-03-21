import React from 'react';

export default function NavBar({ userData }) {
  console.log(userData);
  return (
    <div className="navbar">
      <div className="title">Edvora</div>
      <div className="user">
        <div className="name">
          {userData[0] && userData[0].name && userData[0].name}
        </div>
        <div className="image">
          <img src={userData[0] && userData[0].url && userData[0].url} />
        </div>
      </div>
    </div>
  );
}
