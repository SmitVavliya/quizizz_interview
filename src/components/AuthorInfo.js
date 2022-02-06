import React, { useState } from "react";

import { ShrinkOutlined } from "@ant-design/icons";

const AuthorInfo = ({ userInfo }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <div style={styles.mainContainer}>
        <ShrinkOutlined style={styles.mainIcon} onClick={handleOpen} />
        <div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              height: "30px"
            }}
          >
            <img
              src={userInfo.author.avatar}
              alt="userImage"
              width="30px"
              height="30px"
            />
            <h3 style={styles.mainText}>{userInfo.author.name}</h3>
          </div>
          <p style={styles.userText}>{userInfo.text}</p>
          {open ? (
            <div>
              {userInfo.replies !== undefined ? (
                userInfo.replies.map((user, index) => {
                  return (
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row"
                      }}
                    >
                      <div onClick={handleClose} className="verticleLine" />
                      <AuthorInfo key={index} userInfo={user} />;
                    </div>
                  );
                })
              ) : (
                <></>
              )}
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};

const styles = {
  mainIcon: {
    height: "30px",
    display: "flex",
    alignItems: "center"
    // border: "1px solid blue"
  },
  mainContainer: {
    display: "flex",
    flexDirection: "row"
  },
  mainText: {
    height: "30px",
    display: "flex",
    alignItems: "center"
  },
  userText: {
    // border: "1px solid red"
  }
};

export default AuthorInfo;
