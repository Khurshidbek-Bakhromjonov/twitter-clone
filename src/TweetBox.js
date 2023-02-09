import React from 'react';
import "./TweetBox.css";
import {Avatar, Button} from "@mui/material";

function TweetBox() {
    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                    <Avatar src="https://media.licdn.com/dms/image/C4D0BAQHzK9-4vKacXQ/company-logo_200_200/0/1673250788390?e=2147483647&v=beta&t=gTBVekFc9uQ-qdOQcpnT75_K63SFNNxQ8T8RC_Kr3DM"></Avatar>
                    <input placeholder="What's happening?" type="text"/>
                </div>
                <input className="tweetBox__imageInput"
                       placeholder="Optional: Enter image URL"
                       type="text"/>
                <Button className="tweetBox__tweetButton">Tweet</Button>
            </form>
        </div>
    );
}

export default TweetBox;