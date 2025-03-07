import React from 'react'
import './profileSelector.css'
import boysImage from './boysimages.json';
import girlsImages from './girlsImages.json';
const ProfileSelector = ({ handleProfileModalClose,handleSetImage }) => {

    const handleCloseBtn = () => {
        handleProfileModalClose()
    }

    const handleClickImage =(link)=>{
        handleSetImage(link);
        handleProfileModalClose()
    }
    return (
        <div className='profileSelector'>
            <div className='profile-card'>
                <div className='profile-selector-header'>
                    <div>Select Profile Image</div>
                    <div style={{ cursor: "pointer" }} onClick={handleCloseBtn}>Close X</div>
                </div>

                <div className='profile-section'>
                    <div className='profile-section-gender'>

                        {
                            boysImage.map((item, index) => {
                                return (
                                    <div className='profile-section-gender-div' onClick={()=>handleClickImage(item.link)}>
                                        <img className='profile-section-image' src={item.link} />
                                    </div>
                                );
                            })
                        }
                    </div>

                    <div className='profile-section-gender'>

                        {
                            girlsImages.map((item, index) => {
                                return (
                                    <div className='profile-section-gender-div'  onClick={()=>handleClickImage(item.link)}>
                                        <img className='profile-section-image' src={item.link} />
                                    </div>
                                );
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileSelector