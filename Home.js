import { Link } from 'react-router-dom';

const Home = () => (
  <div className="home-container">
    <header>
      <h1>TEAM BLUE</h1>
      <p>Welcome to the BLUE Team Management</p>
    </header>
    <div className="card">
      <h3>Manage Team</h3>
      <div className="btn-group">
        <Link to="/add" className="btn">Add Member</Link>
        <Link to="/view" className="btn">View Members</Link>
      </div>
    </div>
  </div>
);
export default Home;