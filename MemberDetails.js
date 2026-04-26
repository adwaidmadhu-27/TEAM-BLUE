import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const MemberDetails = () => {
    const { id } = useParams();
    const [member, setMember] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:5000/api/members/${id}`)
            .then(res => setMember(res.data))
            .catch(err => console.log(err));
    }, [id]);

    if (!member) return <p>Loading...</p>;

    return (
        <div className="details-container">
            <button onClick={() => navigate(-1)} className="back-btn">← Back</button>
            <div className="details-card">
                <img src={`http://localhost:5000/uploads/${member.image}`} alt={member.name} />
                <h1>{member.name}</h1>
                <p><strong>Roll Number:</strong> {member.rollNumber}</p>
                <p><strong>Degree & Year:</strong> {member.degree} - {member.year}</p>
                <p><strong>Project:</strong> {member.project}</p>
                <p><strong>Certificate:</strong> {member.certificate}</p>
                <p><strong>Internship:</strong> {member.internship}</p>
                <div className="hobbies">
                    <strong>Hobbies:</strong> 
                    {member.hobbies.split(',').map(h => <span key={h} className="badge">{h}</span>)}
                </div>
                <div className="aim-box">
                    <strong>About Your Aim:</strong>
                    <p>{member.aim}</p>
                </div>
            </div>
        </div>
    );
};

export default MemberDetails;