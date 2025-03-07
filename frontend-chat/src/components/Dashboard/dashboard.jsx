import React, { useState, useEffect, useRef } from 'react'
import './dashboard.css';
import LogoutIcon from '@mui/icons-material/Logout';
import SearchIcon from '@mui/icons-material/Search';
import Conversation from '../Conversation/conversation';
import Chats from '../Chats/chats';
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import socket from '../../socket';


const Dashboard = ({ setLoginFunc }) => {
    const [selectedUserDetails, setSelectedUserDetails] = useState(null);
    const [selectedId, setSelectedId] = useState(null)
    const [queryParam, setQueryParam] = useState('');
    const [searchData, setSearchedData] = useState([]);
    const [conversation, setConversation] = useState([]);
    const ref = useRef();
    const navigate = useNavigate()

    const handleSelectedUser = (id, userDetails) => {
        // watch the video for the full code 
        // 
        // 
        // 
        // 
        // 
        // 
        //     
    }


    const handleClickOutside = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
            setSearchedData([]);
            setQueryParam('')
        }
    };

    let fetchConversation = async () => {
        // watch the video for the full code 
        // 
        // 
        // 
        // 
        // 
        // 
        //     
    }

    const fetchUserBysearch = async () => {
        await axios.get(`http://localhost:8000/api/auth/searchedMember?queryParam=${queryParam}`, { withCredentials: true }).then((response) => {
            // watch the video for the full code 
            // 
            // 
            // 
            // 
            // 
            // 
            //     
        }).catch(err => {
            console.log(err)
        })
    }

    useEffect(() => {
        if (queryParam.length !== 0) {
            fetchUserBysearch()
        }

    }, [queryParam])

    useEffect(() => {
        fetchConversation()
    }, [])

    useEffect(() => {
        if (searchData.length) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        // Cleanup the event listener when the component unmounts
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [searchData])

    const handleLogout = async () => {

        await axios.post('http://localhost:8000/api/auth/logout', {}, { withCredentials: true }).then((response) => {
            localStorage.clear();
            setLoginFunc(false)
            navigate('/')
        }).catch(err => {
            console.log(err)
        })


    }

    const handleCreateConv = async (id) => {
        await axios.post(`http://localhost:8000/api/conversation/add-conversation`, { recieverId: id }, { withCredentials: true }).then((response) => {
            fetchConversation()
            setSearchedData([])

        }).catch(err => {
            console.log(err)
        })
    }

    return (
        <div className='dashboard'>
            <div className='dashboard-card'>

                <div className='dashboard-conversations'>
                    <div className='dashboard-conv-block'>
                        <div className='dashboard-title-block'>
                            <div>Chats</div>
                            <div onClick={handleLogout}><LogoutIcon sx={{ fontSize: "32px", cursor: "pointer" }} /></div>
                        </div>

                        <div className='searchBoxDiv'>
                            <input value={queryParam} onChange={(event) => { setQueryParam(event.target.value) }} type='text' placeholder='Search' className='searchBox' />
                            <button type='submit' className='searchIcon'><SearchIcon /></button>

                            {
                                searchData.length ? <div ref={ref} className='searched-box'>

                                    {
                                        searchData.map((item, index) => {
                                            return (
                                                <div className='search-item' key={index} onClick={() => handleCreateConv(item._id)}>
                                                        // watch the video for the full code
                                                // 
                                                // 
                                                // 
                                                // 
                                                // 
                                                // 
                                                //     
                                                </div>
                                            );
                                        })
                                    }



                                </div> :
                                    queryParam.length !== 0 && searchData.length === 0 ?
                                        <div ref={ref} className='searched-box'>
                                            <div className='search-item'>
                                                <img className='search-item-profile' src='https://images.unsplash.com/photo-1728887823143-d92d2ebbb53a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNhcnRvb24lMjBhdmF0YXJ8ZW58MHx8MHx8fDA%3D' />
                                                <div>No Data Found</div>
                                            </div>
                                        </div> : null
                            }

                        </div>

                        <div className='conv-block'>

                            {/* particular conversation Block */}
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
                    </div>
                </div>

                {
                    selectedUserDetails ? <Chats selectedId={selectedId} selectedUserDetails={selectedUserDetails} /> : <div className='noChatSeleceted'>
                        <img src='https://cdni.iconscout.com/illustration/premium/thumb/people-chatting-on-phone-8044282-6369994.png' className='noChatImage' />
                        <div>No Chat Selected</div>
                    </div>
                }


            </div>
        </div>
    )
}

export default Dashboard