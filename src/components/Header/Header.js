import React from 'react';
import cx from "classnames";
import styles from "./Header.less";

const Header = () => {
    
    return (
        <div className={cx("container", styles.header)}>
            <h1 className="is-size-1 has-text-centered">Lambda's Newsfeed</h1>
        </div>
    )
}

export default Header
