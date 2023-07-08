import { useSelector } from 'react-redux';
import './CurrentProfilePage.styles.scss';

const CurrentProfilePage = () => {
    const profileInfo = useSelector((state) => state.reducer.user);
    return (
        <div className='Page'>
            <div className='currentProfile'>
                <h2>Current Profile:</h2>
                <div className='profileBox'>
                <div className='profileText'>
                    <h4><b>UserName:</b></h4>
                    <h4><b>Email:</b></h4>
                    <h4><b>Phone Number:</b></h4>
                </div>
                <div className='profileInfo'>
                    <h4>{profileInfo.username}</h4>
                    <h4>{profileInfo.email}</h4>
                    <h4>{profileInfo.phoneNumber}</h4>
                </div>
                </div>
            </div>
        </div>
    )
}

export default CurrentProfilePage;