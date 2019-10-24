import React from 'react'
import PropTypes from 'prop-types'

import styles from './Header.css'

const Header = ({
  icon,
  title,
  userName
}) => {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.container}`}>
        <h1 className={`a-title--large ${styles.title}`}>
          {icon} {title}
        </h1>
        <div className="a-text--very-small">
          {userName}
          <i className="a-icon a-icon--profile a-icon--size-small" />
        </div>
      </div>
    </header>
  )
}

Header.propTypes = {
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired
}

export default Header
