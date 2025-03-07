import React, { useEffect, useState } from 'react'
import './conversation.css'
const Conversation = (props) => {
    const [friendItem, setFriendItem] = useState([]);

    useEffect(() => {
        // watch the video for the full code 
        // 
        // 
        // 
        // 
        // 
        // 
        //     
    }, [])

    const handleOnClick = () => {
        props.handleSelectedUser(props.id, friendItem)
    }
    return (
        <div className={`conv ${props.active ? 'active-class' : null}`} onClick={handleOnClick}>
            <div className='conv-profile-img'>
                <img className='profile-img-conv' src={friendItem[0]?.profilePic} />
            </div>

            // watch the video for the full code
        // 
        // 
        // 
        // 
        // 
        // 
        //     
        </div>
    )
}

export default Conversation