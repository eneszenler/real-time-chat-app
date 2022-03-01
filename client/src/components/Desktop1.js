import React from "react";
import styles from "./Desktop1.module.scss";

const Desktop1 = () => {
    return (
        <div className={styles.desktop1}>
            <div className={styles.tel} />
            <div className={styles.rectangle2} />
            <div className={styles.item}>
                <p className={styles.text}>
                    Waiting for your reply. As I have to go back soon.
                </p>
            </div>
            <div className={styles.itemRight}>
                <p className={styles.textTwo}>
                    Hi, I am coming there in few minutes.
                </p>
            </div>
            <div className={styles.itemTwo}>
                <div className={styles.rectangle7} />
                <p className={styles.textThree}>
                    Ok, see you then.
                </p>
            </div>
            <div className={styles.itemRightTwo}>
                <div className={styles.rectangle8} />
                <p className={styles.textFour}>See you.</p>
            </div>
            <div className={styles.itemThree}>
                <p className={styles.textFive}>
                    Hi there, How are you ?
                </p>
            </div>
            <div className={styles.user}>
                <img
                    alt=""
                    className={styles.profilePic}
                    src="https://static.overlay-tech.com/assets/6382b1e8-b7d8-4793-8f05-ed506d048d4e.png"
                />
                <div className={styles.relativeWrapperOne}>
                    <p className={styles.userName}>Zendaya</p>
                    <p className={styles.status}>Online</p>
                </div>
                <div className={styles.other}>
                    <div className={styles.ellipse4} />
                    <div className={styles.ellipse4} />
                    <div className={styles.ellipse4} />
                </div>
            </div>
            <div className={styles.button}>
                <img
                    alt=""
                    className={styles.attachPaperclipSymbol1}
                    src="https://static.overlay-tech.com/assets/6c809add-f668-4e90-aaf0-fe8c1915813b.png"
                />
            </div>
            <div className={styles.input}>
                <div className={styles.inputEmoji}>
                    <div className={styles.flexWrapperOne}>
                        <div className={styles.ellipse2} />
                        <div className={styles.ellipse2} />
                    </div>
                    <img
                        alt=""
                        className={styles.vector1}
                        src="https://static.overlay-tech.com/assets/4390a8d1-68b4-407e-8a48-3b3399b9aa21.svg"
                    />
                </div>
                <p className={styles.inputMessage}>
                    Type a message
                </p>
            </div>
        </div>
    );
};

export default Desktop1;