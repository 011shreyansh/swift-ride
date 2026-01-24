import { useState } from 'react';
import '../style/booking.css';

const rideHistory = [
  {
    id: 1,
    date: 'Jan 22, 2026',
    from: 'Downtown Mall',
    to: 'Airport Terminal 1',
    driver: 'Michael S.',
    price: '$28.50',
    status: 'completed',
  },
  {
    id: 2,
    date: 'Jan 20, 2026',
    from: 'Central Station',
    to: 'University Campus',
    driver: 'Sarah L.',
    price: '$12.75',
    status: 'completed',
  },
  {
    id: 3,
    date: 'Jan 18, 2026',
    from: 'Home',
    to: 'City Hospital',
    driver: 'James K.',
    price: '$15.00',
    status: 'completed',
  },
  {
    id: 4,
    date: 'Jan 15, 2026',
    from: 'Office Park',
    to: 'Shopping Center',
    driver: 'Emily R.',
    price: '$9.25',
    status: 'cancelled',
  },
];

function Bookings() {
  const [expanded, setExpanded] = useState(null);
  const [activeTab, setActiveTab] = useState("book");
  const [pickup, setPickup] = useState('');
  const [destination, setDestination] = useState('');

  const handleBookRide = (e) => {
    e.preventDefault();
    alert(`Booking ride from "${pickup}" to "${destination}"`);
  };

  return (
    <div className="bookings">
      
      {/* Header */}
      <div className="bookings-header">
        <h1>Welcome, Rider!</h1>
        <p>Book your next trip or view your ride history</p>
        <div className="btns">
          <div className="driver-btn" onClick={() => setActiveTab("book")}>
            Book a Ride
          </div>
          <div className="driver-btn" onClick={() => setActiveTab("history")}>
            History
          </div>
        </div>
      </div>

      
      <div className="bookings-content">
        
         
        <div className={`booking-box ${activeTab === "book" ? "card-show" : "card-hide"}`}>
          <div className="ride-card" style={{ height: "80%" }}>
            <h2>Book a Ride</h2>
            <form className="ride-form" onSubmit={handleBookRide}>
              <div className="form-group">
                <label className="form-label">Pickup Location</label>
                <input
                  type="text"
                  className="form-input"
                  placeholder="Enter pickup address"
                  value={pickup}
                  onChange={(e) => setPickup(e.target.value)}
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">Destination</label>
                <input
                  type="text"
                  className="form-input"
                  placeholder="Enter destination"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  required
                />
              </div>

              <button type="submit" className="submit-btn">
                Find a Ride
              </button>
            </form>
          </div>
        </div>

        
        <div className={`history-box ${activeTab === "history" ? "card-show" : "card-hide"} hide-scrollbar`}>
          <h2>Ride History</h2>
          {rideHistory.map((ride, index) => (
            <div
              className={`history-card ${expanded===index ? "expanded" : ""} `}
              key={index}
              onClick={() => setExpanded(prev=>(prev===index?null:index))}
            >
             <p style={{fontSize:"25px"}}> ⬇️</p>
              <div className="ride-info">
                <div className="ride-route">
                  <span className="ride-from">{ride.from}</span>
                  <span className="ride-arrow">→</span>
                  <span className="ride-to">{ride.to}</span>
                </div>
                {expanded===index && (
                  <div className="ride-details">
                    <span>ID: {ride.id}</span>
                    <span>Date: {ride.date}</span>
                    <span>• Driver: {ride.driver}</span>
                  </div>
                )}
              </div>
              <div className="ride-meta">
                <span className="ride-price">{ride.price}</span>
                <span className={`ride-status status-${ride.status}`}>
                  {ride.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Bookings;
