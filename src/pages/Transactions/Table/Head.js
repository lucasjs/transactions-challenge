import React from 'react'

import styles from './Head.css'

const Head = () => {
  return (
    <thead className={styles.tableHead}>
      <tr>
        <th scope="col">Description</th>
        <th scope="col">Value</th>
        <th scope="col">Type</th>
        <th scope="col">Current Balance</th>
      </tr>
    </thead>
  )
}

export default Head
