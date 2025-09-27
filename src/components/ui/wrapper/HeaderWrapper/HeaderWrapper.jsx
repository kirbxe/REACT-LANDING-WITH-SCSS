import React from 'react'

import styles from './style/HeaderWrapper.module.scss';

export default function HeaderWrapper({children}) {
  return (
   <>
   <header className={`${styles.headerWrapper}`}>
    {children}
   </header>
   </>
  )
}


