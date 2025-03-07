import React, { useState } from 'react'
import './register.css'
import ProfileSelector from './ProfileSelector/profileSelector'
import axios from 'axios'
import Loader from './Loader/loader'
const Register = ({ funcSetLogin }) => {

    const [profileModal, setProfileModal] = useState(false)
    const [loading, setLoading] = useState(false)
    const [inputField, setInputFields] = useState({ "mobileNumber": "", password: "", name: "", profilePic: "https://images.unsplash.com/photo-1728887823143-d92d2ebbb53a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNhcnRvb24lMjBhdmF0YXJ8ZW58MHx8MHx8fDA%3D" });
    const gotoLogin = () => {
        funcSetLogin(true)
    }

    const handleSetImage = (link) => {
        // watch the video for the full code 
        // 
        // 
        // 
        // 
        // 
        // 
        //     
    }

    const handleProfileModalClose = () => {
        setProfileModal(prev => !prev);
    }

    const handleOnChange = (event, key) => {
        setInputFields({
            ...inputField, [key]: event.target.value
        })
    }

    const handleRegister = async () => {
        setLoading(true)
        // watch the video for the full code 
        // 
        // 
        // 
        // 
        // 
        // 
        //     
    }
    return (
        <div className='login'>
            {loading && <Loader />}
            <div className='register-card'>
                <div className='card-name'>
                    Register
                </div>

                <div className='login-form'>
                // watch the video for the full code
                    // 
                    // 
                    // 
                    // 
                    // 
                    // 
                    //     
                    <div className='button' onClick={handleRegister}>Register</div>
                    <div className='linkedLinks' onClick={gotoLogin}>Already have an account? Login</div>
                </div>
            </div>
            {profileModal && <ProfileSelector handleSetImage={handleSetImage} handleProfileModalClose={handleProfileModalClose} />}
        </div>
    )
}

export default Register