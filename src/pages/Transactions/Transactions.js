import React, { useContext } from 'react'

import { Row, Head } from './Table'
import { Context } from 'App'

import styles from './Transactions.css'

const Transactions = () => {
  const {
    balance,
    setShowModal,
    transactions
  } = useContext(Context)

  return (
    <main>
      <div className="container">
        <section className={styles.transactions}>
          <div className={styles.head}>
            <div>
              <i className="a-icon a-icon--money-bag a-icon--size-large" />
              &nbsp;
              <span className="a-text--secondary-small">
                Balance: R$&nbsp;
                <strong className="a-text--large">
                  {balance.toLocaleString('pt-br', {
                    currency: 'BRL', minimumFractionDigits: 2
                  })}
                </strong>
              </span>
            </div>
            <div>
              <button
                className="a-btn a-btn--outline-earth a-btn--small a-btn--iconlabel"
                onClick={() => setShowModal(true)}
              >
                <i className="a-icon a-icon--additional a-icon--size-small" />
                Add transaction
              </button>
            </div>
          </div>

          <table className={styles.table}>
            <Head />
            <tbody>
              {transactions.toString()
                ? transactions
                  .sort((a, b) => parseFloat(b.id) - parseFloat(a.id))
                  .map(item => (
                    <Row
                      key={item.id}
                      item={item}
                    />
                  ))
                : <tr>
                  <td className={styles.empty} colSpan={4}>
                    <i className="a-icon a-icon--info a-icon--size-large" />
                    <span>No transactions yet.</span>
                  </td>
                </tr>
              }
            </tbody>
          </table>
        </section>
      </div>
    </main>
  )
}

export default Transactions
