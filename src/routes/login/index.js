import React from 'react'
import styles from './index.css'
import {Link} from  'dva/router'

export default function Login(props) {
    function goHome(){
        props.history.push('/')
    }
    return (
        <div className={styles.login}>
                Login
                <Link to="/">点我跳转到首页</Link>
                <button onClick={goHome}>点我跳转到首页</button>
        </div>
    )
}
