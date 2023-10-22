import React, { useEffect, useState } from "react";
import classes from "./SearchedItem.module.css";

import { useSelector } from "react-redux";

function SearchedItem() {
  const data = useSelector((state) => state.yourReducer.data);
  const showUserData = useSelector((state) => state.yourReducer.showUserData);

  const mediaData = data.lastMedia;

  return (
    <div className={classes.searchedItem}>
      <div className={classes.serchedItemWrapper}>
        {/* <h1>Lorem ipsum dolor sit. </h1> */}

        {showUserData && (
          <div className={classes["profile-container"]}>
            <div className={classes["profile-header"]}>
              <img
                src={data.profile_pic_url_proxy}
                alt="Profile Picture"
                className="profile-picture"
              />
              <div className={classes["profile-info"]}>
                <h1>{data.full_name}</h1>
                <p>{data.posts} posts</p>
                <p>{data.followers} followers</p>
                <p>{data.following} following</p>
                <p>{data.bio}</p>
              </div>
            </div>
            {mediaData.media.map((item) => (
              <div key={item.id} className={classes.post}>
                <div className={classes.postHeader}>
                  <img
                    className={classes.postAvatar}
                    src={data.profile_pic_url_proxy}
                    alt="User Avatar"
                  />
                  <h3>{data.full_name}</h3>
                </div>
                {/* <a href={item.link_to_post}>
                </a> */}
                <img
                  className={classes.postImage}
                  src={item.thumbnail_src_proxy}
                  alt="Post"
                />
                <h4 className={classes.postText}>
                  <strong>{data.full_name}:</strong>
                  <span> liked by {item.like} others</span>
                  {/* {item.caption} */}
                </h4>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default SearchedItem;
