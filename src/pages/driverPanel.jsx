import { useState } from 'react';
import '../style/driverPanal.css';
import { Link, useNavigate } from 'react-router-dom';

const stats = [
  { icon: '🚗', label: 'Total Rides', value: '1,247', color: 'blue' },
  { icon: '💰', label: 'Earnings', value: '$8,542', color: 'green' },
  { icon: '⭐', label: 'Rating', value: '4.92', color: 'yellow' },
  { icon: '⏱️', label: 'Hours Online', value: '186', color: 'purple' },
];

const recentRides = [
  { id: 1, route: 'Downtown → Airport', time: '2 hours ago', amount: '+$32.50' },
  { id: 2, route: 'Central Park → Times Square', time: '4 hours ago', amount: '+$18.00' },
  { id: 3, route: 'Brooklyn → Manhattan', time: '6 hours ago', amount: '+$45.00' },
  { id: 4, route: 'Queens → Bronx', time: 'Yesterday', amount: '+$28.75' },
];

const notifications = [
  { id: 1, text: 'New ride request in your area', time: '5 min ago' },
  { id: 2, text: 'Weekly bonus unlocked: $50', time: '1 hour ago' },
  { id: 3, text: 'Complete 10 more rides for Gold status', time: '2 hours ago' },
];

function DriverPanel() {
  const [active, setActive] = useState(false);
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [time, setTime] = useState('');
  const [seats, setSeats] = useState(0);
  const [price, setPrice] = useState(0.0);
  const navigate=useNavigate();

  const handleSubmit = async(e) => {
    e.preventDefault();
    const token =localStorage.getItem("token");
    if(!token){
       navigate("/login");
       console.log(token);
       return;
    }
    try{
      const res=await fetch("http://localhost:9090/ride/create",{
        method:"POST",
        headers:{"Content-Type":"application/json","Authorization":`Bearer ${token}`},
        body:JSON.stringify({
          origin:origin,
          destination:destination,
          time:time,
          seats:seats,
          price:price
        })
      });
      if(res.ok){
        alert("ride created successfully");
      }
      const data=await res.json();
    }catch(error){
      alert("Error");
    }


    
  };

  return (
    <div className="driver-panel">
      {/* Header */}
      <div className="driver-header">
        <div className="driver-welcome">
          <h1>Welcome back, Driver!</h1>
          <p>Here's your performance overview for this week</p>
        </div>
        <div className="create-btn" onClick={() => setActive((prev) => !prev)}>
          <span className="status-dot"></span>
          <span>Create Ride</span>
        </div>
      </div>

      {/* Wrapper */}
      <div className="driver-wrapper">
        {/* Stats + Sections */}
        <div className={`rides-record ${active ? 'card-hide' : 'card-show'}`}>
          <div className="driver-stats">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card">
                <div className={`stat-card-icon ${stat.color}`}>{stat.icon}</div>
                <div className="stat-card-value">{stat.value}</div>
                <div className="stat-card-label">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="driver-sections">
            {/* Recent Rides */}
            <div className="driver-section">
              <h3>Recent Rides</h3>
              {recentRides.map((ride) => (
                <div key={ride.id} className="ride-item">
                  <div className="ride-icon">📍</div>
                  <div className="ride-details">
                    <h4>{ride.route}</h4>
                    <p>{ride.time}</p>
                  </div>
                  <div className="ride-amount">{ride.amount}</div>
                </div>
              ))}
            </div>

            {/* Notifications */}
            <div className="driver-section">
              <h3>Notifications</h3>
              {notifications.map((notification) => (
                <div key={notification.id} className="ride-item">
                  <div className="ride-icon">🔔</div>
                  <div className="ride-details">
                    <h4>{notification.text}</h4>
                    <p>{notification.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

         
        <div className={`ride-box ${active ? 'card-show' : 'card-hide'}`}>
          <div className="ride-card">
            <p style={{fontSize:"30px"}}>🚕</p>
            <h1>Offer a Ride</h1>
            <form onSubmit={handleSubmit} className="ride-form">
              <div className="form-group">
                <label className="form-label">Origin</label>
                <input
                  type="text"
                  className="form-input"
                  placeholder="Enter origin"
                  value={origin}
                  onChange={(e) => setOrigin(e.target.value)}
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
                />
              </div>

              <div className="form-group">
                <label className="form-label">Time</label>
                <input
                  type="datetime-local"
                  className="form-input"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label className="form-label">Seats</label>
                <input
                  type="number"
                  className="form-input"
                  placeholder="Enter number of seats"
                  value={seats}
                  onChange={(e) => setSeats(Number(e.target.value))}
                />
              </div>

              <div className="form-group">
                <label className="form-label">Price</label>
                <input
                  type="number"
                  className="form-input"
                  placeholder="Enter price"
                  value={price}
                  onChange={(e) => setPrice(Number(e.target.value))}
                />
              </div>

              <button type="submit" className="submit-btn">Submit Ride</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DriverPanel;
