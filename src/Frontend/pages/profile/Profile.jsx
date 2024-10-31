import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV, faHeart, faCommentAlt } from '@fortawesome/free-solid-svg-icons'; // นำเข้ารูปคอมเมนต์
import './profile.scss';

const Profile = () => {
    const navigate = useNavigate();

    const handleEditProfile = () => {
        navigate('/edit-profile');
    };

    const handleEditPost = () => {
        navigate('/edit-post');
    };

    const handleProfileLink = (username) => {
        navigate(`/profile/${username}`);
    };

    return (
        <div className="profileContainer">
            {/* Sidebar */}
            <div className="sidebar">
                <div className="profileSidebar">
                    <div className="avatar" />
                    <div className="username">Username</div>
                </div>
                <div className="menu">
                    <div className="menu-item active">Home</div>
                    <div className="menu-item">MyEvent</div>
                </div>
            </div>

            {/* Profile Main Content */}
            <div className="profileContent">
                <div className="cover">
                    <img src="https://i.ibb.co/g3JsY5W/1728763076086.jpg" alt="Cover" className="coverImg" />
                    <div className="editProfileButton">
                        <button onClick={handleEditProfile}>Edit Profile</button>
                    </div>
                </div>

                <div className="profileDetails">
                    <div className="profileImage">
                        <img src="https://pbs.twimg.com/media/FAccoqYWEAERln7.jpg" alt="Profile" />
                    </div>
                    <h2 className="username">username1</h2>
                    <p className="description">Description description description</p>
                </div>

                {/* Posts Section */}
                <div className="postSection">
                    {/* First Post */}
                    <div className="post">
                        <div className="postHeader">
                            <span className="usernameLink" onClick={() => handleProfileLink('username1')}>username1</span> 
                            <span className="postInfo">08.23 • EventName1</span> {/* เวลาและชื่อ Event ชิดกันทางซ้าย */}
                            <button className="moreOptions" onClick={handleEditPost}>
                                <FontAwesomeIcon icon={faEllipsisV} />
                            </button>
                        </div>
                        <div className="postBody">
                            <p>Hello Everyone!</p>
                            <div className="postReactions">
                                <div className="reactionGroup">
                                    <FontAwesomeIcon icon={faHeart} /> <span>100</span>
                                </div>
                                <div className="reactionGroup">
                                    <FontAwesomeIcon icon={faCommentAlt} /> <span>2</span> {/* เปลี่ยนเป็นรูปคอมเมนต์ */}
                                </div>
                            </div>
                            <div className="postComments">
                                <p><span className="usernameLink" onClick={() => handleProfileLink('username2')}>username2</span>: oh hi!</p>
                                <p><span className="usernameLink" onClick={() => handleProfileLink('username3')}>username3</span>: uwu</p>
                                <a href="#">Show more</a>
                            </div>
                        </div>
                    </div>

                    {/* Second Post */}
                    <div className="post">
                        <div className="postHeader">
                            <span className="usernameLink" onClick={() => handleProfileLink('username1')}>username1</span> 
                            <span className="postInfo">22 August • EventName1</span> {/* เวลาและชื่อ Event ชิดกันทางซ้าย */}
                            <button className="moreOptions" onClick={handleEditPost}>
                                <FontAwesomeIcon icon={faEllipsisV} />
                            </button>
                        </div>
                        <div className="postBody">
                            <img src="https://pbs.twimg.com/media/FAccoqYWEAERln7.jpg" alt="Post" className="postImage" />
                            <div className="postReactions">
                                <div className="reactionGroup">
                                    <FontAwesomeIcon icon={faHeart} /> <span>20</span>
                                </div>
                                <div className="reactionGroup">
                                    <FontAwesomeIcon icon={faCommentAlt} /> <span>0</span> {/* เปลี่ยนเป็นรูปคอมเมนต์ */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
