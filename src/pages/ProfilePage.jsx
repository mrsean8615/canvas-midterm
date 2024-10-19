import profileImg from '../assets/profileicon.png'
import { useUserInfo } from '../context/TrackUser';
import { useEditButton } from '../hooks/useEditButton'

export default function ProfilePage({initalData}) {
    const {userInfo, updateUserInfo} = useUserInfo();
    const {isEdit, value, handleEdit, handleUserSave, handleChange} = useEditButton(initalData);
    return ( 
        <div className="profile-page box" >
            <img src={profileImg} alt='profile-pic'/>

            {isEdit ? (
                <>
                    <input 
                        className="edit-input" 
                        type='text' 
                        name='firstName'
                        value={value.firstName || ''}
                        onChange={handleChange}
                        placeholder='First Name'
                    />
                        
                    <input 
                        className="edit-input" 
                        type='text' 
                        name='lastName'
                        value={value.lastName || ''}
                        onChange={handleChange}
                        placeholder='Last Name'
                    />
                    <input 
                        className="edit-input" 
                        type='email' 
                        name='email'
                        value={value.email ||  ''}
                        onChange={handleChange}
                        placeholder='Email'
                    />
                    <input 
                        className="edit-input" 
                        type='text' 
                        name='age'
                        value={value.age || ''}
                        onChange={handleChange}
                        placeholder='Age'
                    />
                    <button onClick={() => handleUserSave(value)}>Save</button>
                </>
            ) : (
                <>
                    <div>
                        <h2>First Name</h2>
                        <span>{value.firstName || userInfo?.firstName || ''}</span>
                    </div>
                    <div>
                        <h2>Last Name</h2>
                        <span>{value.lastName || userInfo?.lastName || ''}</span>
                    </div>
                    <div>
                        <h2>Email</h2>
                        <span>{value.email || userInfo?.email || ''}</span>
                    </div>
                    <div>
                        <h2>Age</h2>
                        <span>{value.age || userInfo?.age || ''}</span>
                    </div>
                    <button onClick={handleEdit}>Edit</button>
                </>

            )}



        </div>
    )
}