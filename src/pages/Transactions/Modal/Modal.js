import React, { useContext } from 'react'

import ModalForm from './ModalForm'
import { Context } from 'App'

import styles from './Modal.css'

const Modal = () => {
  const {
    showModal,
    setShowModal
  } = useContext(Context)

  return (
    <div
      className={`${styles.modalOverlay} ${showModal ? styles.show : ''}`}
      role="dialog"
      tabIndex="-1"
      aria-modal={showModal}
      aria-hidden={!showModal ? true : null}
    >
      <div className={styles.modal} role="document">
        <button
          aria-label="fechar"
          className={`a-btn a-btn--ghost-earth a-btn--small a-btn--icon ${styles.close}`}
          onClick={() => setShowModal(false)}
        >
          <i className="a-icon a-icon--close a-icon--size-medium" />
        </button>

        <div className={styles.content}>
          <h3 className={`a-title--medium ${styles.title}`}>
            Add transaction
          </h3>
          <h4 className={`a-text--secondary-medium ${styles.subtitle}`}>
            Fill in all fields and then click on save
          </h4>
        </div>
        <ModalForm />
      </div>
    </div>
  )
}

export default Modal
