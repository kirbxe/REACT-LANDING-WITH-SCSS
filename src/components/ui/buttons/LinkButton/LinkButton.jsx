import React from 'react'

import styles from './style/LinkButton.module.scss'

export default function LinkButton({children, style, href}) {
  return (
   <a href={href} className={`${styles.default} ${styles[style]} `}>
    {children}
   </a>
  )
}
