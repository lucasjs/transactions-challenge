import React from 'react'
import PropTypes from 'prop-types'

import styles from './Row.css'

const Row = ({ item }) => {
  return (
    <tr className={styles.row} id={item.id} tabIndex="0">
      <td>
        {item.description}
      </td>
      <td>
        {item.transactionValue.toLocaleString('pt-br', {
          currency: 'BRL', style: 'currency'
        })}
      </td>
      <td>
        {item.transactionType}
      </td>
      <td>
        {item.currentBalance.toLocaleString('pt-br', {
          currency: 'BRL', style: 'currency'
        })}
      </td>
    </tr>
  )
}

Row.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    currentBalance: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    transactionValue: PropTypes.number.isRequired,
    transactionType: PropTypes.oneOf(['credit', 'debit']).isRequired
  }).isRequired
}

export default Row
