import React from 'react';
import "./TweetBox.css";
import {Avatar, Button} from "@mui/material";

function TweetBox() {
    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                    <Avatar src="https://www.google.com/url?sa=i&url=https%3A%2F%2Ftwitter.com%2FBek_Mirahmedov%2Fstatus%2F1485375543809826823&psig=AOvVaw1KKFMfj7xoFSRqCJYTM9C1&ust=1675959145403000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCNClh76ohv0CFQAAAAAdAAAAABAE"></Avatar>
                    <input placeholder="What's happening?" type="text"/>
                </div>
                <input className="tweetBox__imageInput" placeholder="Enter image URL" type="text"/>
                <Button className="tweetBox__tweetButton">Tweet</Button>
            </form>
        </div>
    );
}

export default TweetBox;