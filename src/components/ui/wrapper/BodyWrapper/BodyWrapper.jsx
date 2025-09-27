import React from 'react'
import styles from './style/BodyWrapper.module.scss';

export default function BodyWrapper({children}) {
  return (
    <main className={`${styles.bodyWrapper}`}>
    {children}
    </main>
  )
}
