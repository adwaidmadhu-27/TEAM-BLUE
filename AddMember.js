import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddMember = () => {
  const [formData, setFormData] = useState({ name: '', rollNumber: '', year: '', degree: '', project: '', hobbies: '', certificate: '', internship: '', aim: '' });
  const [file, setFile] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    for (let key in formData) data.append(key, formData[key]);
    data.append('image', file);

    await axios.post('http://localhost:5000/api/members', data);
    alert("Member Added!");
    navigate('/view');
  };

  return (
    <div className="form-container">
      <h2>Add Team Member</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" onChange={e => setFormData({...formData, name: e.target.value})} required />
        <input type="text" placeholder="Roll Number" onChange={e => setFormData({...formData, rollNumber: e.target.value})} />
        <input type="text" placeholder="Year" onChange={e => setFormData({...formData, year: e.target.value})} />
        <textarea placeholder="About Project" onChange={e => setFormData({...formData, project: e.target.value})} />
        <input type="file" onChange={e => setFile(e.target.files[0])} required />
        <button type="submit" className="submit-btn">SUBMIT</button>
      </form>
    </div>
  );
};
export default AddMember;