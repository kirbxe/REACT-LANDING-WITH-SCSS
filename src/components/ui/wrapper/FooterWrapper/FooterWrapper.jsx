import React from 'react'
import styles from './style/FooterWrapper.module.scss';
export default function FooterWrapper({children}) {
  return (
    <footer className={`${styles.footerWrapper}`}>
        {children}
    </footer>
  )
}
