import React from 'react'

import styles from './style/MainBlockWrapper.module.scss'

export default function mainBlockWrapper({children}) {
  return (
    <div className={styles.mainBlockWrap}>
        {children}
    </div>
  )
}
