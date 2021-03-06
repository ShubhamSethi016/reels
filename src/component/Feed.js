import React, { useContext, useState, useEffect } from 'react'
import Header from './Header'
import { AuthContext } from '../context/AuthProvider'
import { database } from '../firebase'
import UploadFile from './UploadFile'
import './Feed.css';
import Posts from './Posts';
import CircularProgress from '@material-ui/core/CircularProgress';


function Feed() {
    const { currentUser } = useContext(AuthContext);
    const [userData, setUserData] = useState(null);
    useEffect(() => {
        const unsub = database.users.doc(currentUser.uid).onSnapshot((doc) => {
            // console.log(doc);
            setUserData(doc.data());
        });
    }, [currentUser]);


    return (
        <>
            {
                userData == null ? <CircularProgress className='feed-loader' /> : <>
                    <Header userData={userData} />
                    <div style={{ height: '9.5vh' }} />
                    <div className='feed-container'>
                        <div className='center'>
                            <UploadFile userData={userData} />
                            <Posts userData={userData} />
                        </div>
                    </div>
                </>
            }
        </>
    )
}

export default Feed
