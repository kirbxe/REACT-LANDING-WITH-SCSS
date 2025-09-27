import React from 'react'
import styles from './style/NavList.module.scss';


export default function NavList({title, value1, value2, value3, value4, value5, value6}) {
  return (
    <div className={styles.navList}>
    <div className={styles.navTitle}>
        {title}
    </div>
    <ul className={styles.nav}>
        <li><a href="">{value1}</a></li>
        <li><a href="">{value2}</a></li>
        <li><a href="">{value3}</a></li>
        <li><a href="">{value4}</a></li>
        <li><a href="">{value5}</a></li>
        <li><a href="">{value6}</a></li>
    </ul>
    </div>
  )
}
