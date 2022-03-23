import React from 'react';

export default function MainArea() {
  return <div className="mainarea">
    <div className='mainarea-topbar'>
      <div className='mainarea-topbar-options'>
        <div className='opt-selected'>Nearest Rides</div>
        <div className='opt'>Upcoming Rides (4)</div>
        <div className='opt'>Past Rides (2)</div>
      </div>
      <div className='mainarea-topbar-filterbtn'>
        <div className='icon'>
          <div className='line line1'></div>
          <div className='line line2'></div>
          <div className='line line3'></div>
        </div>
        <div className='title'>Filters</div>
      </div>
    </div>
    <div className='mainarea-rideslist'>
      <div className='mainarea-rideslist-card'></div>
      <div className='mainarea-rideslist-card'></div>
      <div className='mainarea-rideslist-card'></div>
      <div className='mainarea-rideslist-card'></div>
      <div className='mainarea-rideslist-card'></div>
    </div>
  </div>;
}
