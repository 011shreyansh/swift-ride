import { DotIcon } from 'lucide-react';
import '../style/home.css'
import { useNavigate } from 'react-router-dom';

const records=[
    {value:"50k+",text:"Happy Riders"},
    {value:"10k+",text:"Expert Drivers"},
    {value:"100k+",text:"Cities Covered"}
];
function Home(){
    const navigate=useNavigate();
    const handleBook=()=>{navigate("/trips")};
    return(
         <div className="home">
            <div className="herosection">
                <div className="title">
                    <div className="pin"><DotIcon color='black'/>Available 24/7 in your city</div>
                    <div className="heading">
                            YOUR RIDE,
                            <p>YOUR WAY</p>
                    </div>
                    <div className="text">Experience the future of urban transportation. 
                        Book a ride in seconds, track your driver in real-time, and travel safely with our trusted drivers.
                    </div>
                    <div className="btns">
                        <div className="book-btn" onClick={handleBook}>Book a Ride →</div>
                         <div className="driver-btn">Become a Driver</div>
                    </div>
                    <div className="records">
                        {
                            records.map((item,index)=>(
                                <div className="tag" key={index}>
                                    {item.value}
                                    <p>{item.text}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="poster">
                <div className="banner1 banner">✓<p>Ride Confirmed<br/>Driver arriving in 3 min</p></div>
                    <div className="pic">
                    🚗
                    <div className="desc"></div>
                    </div>
                    
                    <div className="banner2 banner">📍<p>Live Tracking <br/>Know exactly where your ride is</p></div>

                </div>
            </div>
         </div>
    );
}
export default Home;