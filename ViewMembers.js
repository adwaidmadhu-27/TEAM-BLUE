import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ViewMembers = () => {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/members')
      .then(res => setMembers(res.data));
  }, []);

  return (
    <div className="view-container">
      <h1 className="title">MEET OUR AMAZING TEAM</h1>
      <div className="members-grid">
        {members.map(m => (
          <div key={m._id} className="member-card">
            {/* Full URL to the backend uploads folder */}
            <img src={`http://localhost:5000/uploads/${m.image}`} alt={m.name} />
            <h3>{m.name}</h3>
            <p>Roll Number: {m.rollNumber}</p>
            <Link to={`/member/${m._id}`} className="view-btn">VIEW DETAILS</Link>
          </div>
        ))}
      </div>
    </div>
  );
};
export default ViewMembers;