import React from 'react';

function BookaTable() {
  return (
    <>
      <div className="table">
        <div className="information">
          <div className="information-item">
            <i className="fa-solid fa-mobile-screen"></i>
            <div>
              <h2>00 (123) 123 12 12</h2>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Dolores, numquam!
              </p>
            </div>
          </div>
          <div className="information-item">
            <i className="fa-solid fa-map-location-dot"></i>
            <div>
              <h2>198 West 21th Street</h2>
              <p>203 Fake St. Mountain View, San Francisco, California, USA</p>
            </div>
          </div>
          <div className="information-item">
            <i className="fa-regular fa-clock"></i>
            <div>
              <h2>Open Monday-Friday</h2>
              <p>8:00am - 9:00pm</p>
            </div>
          </div>
        </div>
        <form onSubmit={null}>
          <h1>Book a Table</h1>
          <div className="input1">
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Last Name" />
          </div>
          <div className="input2">
            <input type="date" />
            <input type="time" />
            <input type="text" placeholder="Phone" />
          </div>
          <div className="input3">
            <textarea placeholder="Message"></textarea>
            <button>Book a Table</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default BookaTable;
