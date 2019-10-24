import React, { createContext, useEffect, useState } from 'react'

import Header from './sections/Header'
import Footer from './sections/Footer'
import Transactions from './pages/Transactions'
import Modal from './pages/Transactions/Modal'

import styles from './App.css'

export const Context = createContext()

const App = () => {
  const [title] = useState('Transactions')
  const [userName, setUserName] = useState('Name')
  const [showModal, setShowModal] = useState(false)
  const [balance, setBalance] = useState(0)
  const [transactions, setTransactions] = useState([])

  useEffect(() => {
    const bodyTag = document.getElementsByTagName('body')[0]
    showModal
      ? bodyTag.classList.add(styles['scrollLock'])
      : bodyTag.classList.remove(styles['scrollLock'])
  }, [showModal])

  useEffect(() => {
    localStorage.transactions &&
      setTransactions(JSON.parse(localStorage.getItem('transactions')))

    localStorage.balance &&
      setBalance(JSON.parse(localStorage.getItem('balance')))
  }, [])

  useEffect(() => {
    localStorage.setItem('transactions', JSON.stringify(transactions))
    localStorage.setItem('balance', JSON.stringify(balance))
  }, [transactions, balance])

  return (
    <Context.Provider
      value={{
        userName,
        setUserName,
        showModal,
        setShowModal,
        balance,
        setBalance,
        transactions,
        setTransactions
      }}
    >
      <div className={styles.app}>
        <Header
          icon={(
            <i className="a-icon a-icon--transactions a-icon--size-large" />
          )}
          title={title}
          userName={userName}
        />
        <Transactions />
        <Modal />
        <Footer />
      </div>
    </Context.Provider>
  )
}

export default App
