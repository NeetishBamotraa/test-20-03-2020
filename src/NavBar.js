import React from 'react';

export default function NavBar({ userData }) {
  return (
    <div className="navbar">
      <div className="title">Edvora</div>
      <div className="user">
        <div className="name">{userData && userData.name && userData.name}</div>
        <div className="image">
          <img src={userData && userData.url && userData.url} />
        </div>
      </div>
    </div>
  );
}
