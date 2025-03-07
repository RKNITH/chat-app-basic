import React, { useEffect, useState, useRef } from 'react'
import './chats.css'
import SendIcon from '@mui/icons-material/Send';
import axios from 'axios';
import socket from '../../socket';
const Chats = (props) => {
    const [content, setContent] = useState("");
    const [chats, setChats] = useState([]);
    const ownId = JSON.parse(localStorage.getItem("userInfo"))._id;
    const ref = useRef();

    const fetchMessages = async () => {
        // watch the video for the full code 
        // 
        // 
        // 
        // 
        // 
        // 
        //     
    }

    const handleSendMessage = async () => {
        if (content.trim().length === 0) return alert("Please Enter Message")
        await axios.post(`http://localhost:8000/api/chat/post-message-chat`, {
            conversation: props.selectedId,
            content: content
        }, { withCredentials: true }).then(response => {
            socket.emit("sendMessage", props.selectedId, response.data)
            setContent("")
        }).catch(err => {
            console.log(err)
        })
    }

    useEffect(() => {
        socket.on("receiveMessage", (response) => {
            setChats([...chats, response])
        })
    }, [chats])



    useEffect(() => {
        fetchMessages()
        setContent("")
    }, [props.selectedId])


    useEffect(() => {
        ref?.current?.scrollIntoView({ behaviour: "smotoh" });

    }, [chats])

    return (
        <div className='dashboard-chats'>
            <div className='chatNameBlock'>
                <div className='chat-profile-img'>
                    <img className='profile-img-conv' src={props?.selectedUserDetails[0]?.profilePic} />
                </div>
                <div className='chat-name'>
                    {props?.selectedUserDetails[0]?.name}
                </div>
            </div>

            <div className='chats-block'>

                {
                    // watch the video for the full code 
                    // 
                    // 
                    // 
                    // 
                    // 
                    // 
                    //     
                }






            </div>

            <div className='message-box'>
                <div className='message-input-box'>
                    <input value={content} onChange={(event) => { setContent(event.target.value) }} placeholder='Type Your Message Here' className='searchBox messageBox' />
                </div>
                <div onClick={handleSendMessage}><SendIcon sx={{ "fontSize": "32px", margin: "10px", cursor: "pointer" }} /></div>
            </div>
        </div>
    )
}

export default Chats