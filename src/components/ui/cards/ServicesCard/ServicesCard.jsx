import React from 'react'
import styles from './style/ServicesCard.module.scss';

export default function ServicesCard({title, description, url, style}) {
  return (
    <div className={`${styles.carddefault} ${styles[style]}`}>
        <img src={url} alt="" />
        <h1>{title}</h1>
        <p>{description}</p>
    </div>
  )
}
