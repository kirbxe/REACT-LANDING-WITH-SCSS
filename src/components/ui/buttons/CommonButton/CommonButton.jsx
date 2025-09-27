import React from 'react';
import styles from './style/CommonButton.module.scss';

export default function CommonButton({styleColor, width, height, children}) {
  return (
    <button style={{width:width, height: height}} className=
    {`${styles[styleColor]} ${styles.default}`}>
        {children}
    </button>
  )
}
