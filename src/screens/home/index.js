import React, {useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import PostsList from '../../components/posts-list';
import TuitsList from '../../components/tuits-list';
import {useAuth} from "../../contexts/auth-context";

function HomeScreen() {
    const {currentUser, signout} = useAuth()
    const [error, setError] = useState()
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
        { error &&
          <div className="alert-danger mb-2 p-2">
            {error}
          </div>
        }
        <PostsList/>
      </div>
    );
}

export default HomeScreen;
