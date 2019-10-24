import React from 'react'

import styles from './Footer.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.container}`}>
        <span className="a-text--secondary-small">
          Made with&nbsp;
        </span>
        <i className="a-icon a-icon--heart a-icon--size-small" />
      </div>
    </footer>
  )
}

export default Footer
