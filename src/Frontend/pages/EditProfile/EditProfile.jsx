import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./editProfile.scss";

const EditProfile = () => {
    const navigate = useNavigate();

    return (
        <div className="editProfileContainer">
            {/* Profile Header with Cover and Profile Image */}
            <div className="profileHeader">
                <div className="cover">
                    <img src="cover-image-url.jpg" alt="Cover" className="coverImg" />
                </div>
                <div className="profileImage">
                    <img src="profile-image-url.jpg" alt="Profile" className="profilePic" />
                </div>
            </div>

            {/* Edit Profile Form positioned below Profile Image */}
            <div className="editProfileForm">
                <h1>Edit Profile</h1>
                <div className="form-group">
                    <div className="form-field left">
                        <label>UserID</label>
                        <input type="text" placeholder="65070503435" readOnly /> {/* Made it read-only */}
                    </div>
                    <div className="form-field left">
                        <label>Username</label>
                        <input type="text" placeholder="John Doe" />
                    </div>
                </div>
                <div className="form-group">
                    <div className="form-field left">
                        <label>Email</label>
                        <input type="email" placeholder="johndoe@email.com" />
                    </div>
                    <div className="form-field right">
                        <label>Phone Number</label>
                        <input type="text" placeholder="+66 87 131 1209" />
                    </div>
                </div>
                <div className="form-group">
                    <div className="form-field right">
                        <label>Address</label>
                        <input type="text" placeholder="123 Zboncak Isle" />
                    </div>
                    <div className="form-field right">
                        <label>Password</label>
                        <input type="password" placeholder="abc1234" />
                    </div>
                </div>

                {/* Save and Cancel Buttons positioned together */}
                <div className="form-actions">
                    <button className="cancelButton" onClick={() => navigate('/')}>Cancel</button>
                    <button className="saveButton" onClick={() => navigate('/')}>Save</button>
                </div>
            </div>
        </div>
    );
};

export default EditProfile;
