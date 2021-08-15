import React, { useEffect, useState } from 'react';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { makeStyles } from '@material-ui/core/styles';
import { database } from '../firebase'
const useStyles = makeStyles({
    like: {
        color: '#e74c3c',
        cursor: 'pointer'
    },
    unlike: {
        color: 'white',
        cursor: 'pointer'
    }
})

function Likes({ userData = null, postData = null }) {
    const classes = useStyles();
    const [like, setLike] = useState(null);
    useEffect(() => {
        let check = postData.likes.includes(userData?.userId) ? true : false;
        setLike(check);
    }, [postData]);

    const handleLike = async () => {
        if (like == true) {//then unlike as it is already liked
            let arr = postData.likes.filter((el) => {
                return el != userData.userId;
            })

            await database.posts.doc(postData.postId).update({
                likes: arr
            })
        } else {
            //then like as it is not liked
            let uarr = [...postData.likes, userData.userId];
            await database.posts.doc(postData.postId).update({
                likes: uarr
            })
        }
    }
    return (
        <div>
            {
                like != null ? <>
                    {
                        like == false ? <FavoriteIcon className={`${classes.unlike} icon-styling`} onClick={handleLike} /> : <FavoriteIcon className={`${classes.like} icon-styling`} onClick={handleLike} />
                    }</> : <></>
            }
        </div>
    )
}

export default Likes
