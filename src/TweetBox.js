import React, {useState} from 'react';
import "./TweetBox.css";
import {Avatar, Button} from "@mui/material";
import db from "./firebase";

function TweetBox() {
    const [tweetMessage, setTweetMessage] = useState('');
    const [tweetImage, setTweetImage] = useState('');

    const sendTweet = (e) => {
        e.preventDefault();

        db.collection('posts').add({
            displayName: 'Epam',
            username: 'epam',
            verified: true,
            text: tweetMessage,
            image: tweetImage,
            avatar: "https://media.licdn.com/dms/image/C4D0BAQHzK9-4vKacXQ/company-logo_200_200/0/1673250788390?e=2147483647&v=beta&t=gTBVekFc9uQ-qdOQcpnT75_K63SFNNxQ8T8RC_Kr3DM"
        });

        setTweetMessage("");
        setTweetImage("");
    }

    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                    <Avatar src="https://media.licdn.com/dms/image/C4D0BAQHzK9-4vKacXQ/company-logo_200_200/0/1673250788390?e=2147483647&v=beta&t=gTBVekFc9uQ-qdOQcpnT75_K63SFNNxQ8T8RC_Kr3DM"></Avatar>
                    <input
                        onChange={(e) => setTweetMessage(e.target.value)}
                        value={tweetMessage}
                        placeholder="What's happening?"
                        type="text"/>
                </div>
                <input
                    value={tweetImage}
                    onChange={(e) => setTweetImage(e.target.value)}
                    className="tweetBox__imageInput"
                    placeholder="Optional: Enter image URL"
                    type="text"/>
                <Button
                    onClick={sendTweet}
                    type="submit"
                    className="tweetBox__tweetButton">Tweet</Button>
            </form>
        </div>
    );
}

export default TweetBox;