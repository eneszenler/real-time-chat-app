import React from 'react'
import styles from "./styles.module.css"


function User() {
    return (
        <div className={styles.userInfo}>
            <div className={styles.itemFoto}>
            </div>
            <div className={styles.itemInfo}>
                <div className={styles.jessica}>
                    Peter
                </div>
                <div className={styles.online}>
                    Online
                </div>
            </div>
            <div className={styles.threeDots}>
                <i class="fa-solid fa-ellipsis-vertical"></i>
            </div>
        </div>
    )
}

export default User