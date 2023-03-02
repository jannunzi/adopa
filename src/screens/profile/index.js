import React, {useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import {useAuth} from "../../contexts/auth-context";

const Profile = () => {
  const [error, setError] = useState()
  const {currentUser, signout} = useAuth()
  const navigate = useNavigate()
  const handleSignout = () => {
    try {
      signout()
      navigate("/")
    } catch(e) {
      setError(e.message)
    }
  }
  return (
    <div>
      <h1>
        <button className="btn btn-danger float-end"
                onClick={handleSignout}>
            Signout
        </button>

        Profile
      </h1>
      { error &&
      <div className="alert-danger mb-2 p-2">
        {error}
      </div>
      }
      <h2>Biography</h2>
      <div className="mb-2">
        <label>Email</label>
        <input type="text" className="form-control" value={currentUser.email}/>
      </div>
      <h2>Adoptions</h2>
      <h3>People I've adopted</h3>
      <h3>People that have adopted me</h3>
      <h2>Follows</h2>
      <h3>People I follow</h3>
      <h3>People that follow me</h3>
      <h2>Donations</h2>
      <h3>People I've donated to</h3>
      <h3>People that have donated to me</h3>
      <pre>
        {JSON.stringify(currentUser, null, 2)}
      </pre>
    </div>
  );
};

export default Profile;