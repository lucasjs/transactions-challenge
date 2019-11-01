import React, { useContext } from 'react'
import MaskedInput from 'react-text-mask'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import createNumberMask from 'text-mask-addons/dist/createNumberMask'

import { Context } from 'App'

import styles from './ModalForm.css'

const numberMask = createNumberMask({
  prefix: '',
  thousandsSeparatorSymbol: '.',
  allowDecimal: true,
  decimalSymbol: ',',
  decimalLimit: 2
})

const FormSchema = Yup.object().shape({
  transactionValue: Yup.string()
    .required('Value is required'),
  description: Yup.string()
    .required('Description is required')
})

const ModalForm = () => {
  const {
    transactions,
    setTransactions,
    setShowModal,
    balance,
    setBalance
  } = useContext(Context)

  return (
    <Formik
      initialValues={{
        transactionValue: '',
        description: '',
        transactionType: 'credit',
        id: ''
      }}
      validationSchema={FormSchema}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        values.id = transactions.length + 1
        let newTransactionValue = values.transactionValue.split('.').join('').replace(',','.')
        values.transactionValue = +newTransactionValue

        if(values.transactionType === 'credit') {
          let newBalance = balance + values.transactionValue
          setBalance(newBalance)
          values.currentBalance = newBalance
        }
        if(values.transactionType === 'debit') {
          let newBalance = balance - values.transactionValue
          setBalance(newBalance)
          values.currentBalance = newBalance
        }

        setTransactions([
          ...transactions,
          values
        ])

        setSubmitting(false)
        resetForm()
      }}
    >
      {({
        values,
        errors,
        touched,
        isSubmitting,
        isValid,
        setFieldValue
      }) => (
        <Form>
          <div className={styles.form}>
            <div className={`
              a-input
              ${styles.transactionValue}
              ${isSubmitting && `a-input--disabled`}
              ${errors.transactionValue && touched.transactionValue && 'a-input--invalid'}
              ${touched.transactionValue && 'a-input--validated'}
            `}>
              <Field
                type="number"
                name="transactionValue"
                render={({field}) => (
                  <MaskedInput
                    {...field}
                    mask={numberMask}
                    placeholder="0,00"
                    guide={false}
                    id="transactionValue"
                    aria-labelledby="labelmoney"
                    disabled={isSubmitting}
                  />
                )}
              />
              <label htmlFor="transactionValue">
                Value (R$)
              </label>
              <ErrorMessage name="transactionValue">
                {msg => <span className="a-input__error">{msg}</span>}
              </ErrorMessage>
            </div>
            <div className={`
              a-input
              ${styles.description}
              ${isSubmitting && 'a-input--disabled'}
              ${errors.description && touched.description && 'a-input--invalid'}
              ${touched.description && 'a-input--validated'}
            `}>
              <Field
                component="textarea"
                name="description"
                id="description"
                rows="3"
                cols="20"
                disabled={isSubmitting}
              >
              </Field>
              <label htmlFor="description">
                Description
              </label>
              <ErrorMessage name="description">
                {msg => <span className="a-input__error">{msg}</span>}
              </ErrorMessage>
            </div>
            <div className={styles.transactionType}>
              <div className="a-radio">
                <label htmlFor="credit">Credit</label>
                <input
                  type="radio"
                  id="credit"
                  name="transactionType"
                  checked={values.transactionType === 'credit'}
                  onChange={() => setFieldValue('transactionType', 'credit')}
                />
                <span className="a-radio__shape" />
              </div>
              <div className="a-radio">
                <label htmlFor="debit">Debit</label>
                <input
                  type="radio"
                  id="debit"
                  name="transactionType"
                  checked={values.transactionType === 'debit'}
                  onChange={() => setFieldValue('transactionType', 'debit')}
                />
                <span className="a-radio__shape" />
              </div>
            </div>
          </div>

          <div className={styles.actions}>
            <button
              className="a-btn a-btn--outline-earth a-btn--iconlabel a-btn--small"
              onClick={() => setShowModal(false)}
              type="button"
            >
              <i className="a-icon a-icon--x-men a-icon--size-small" />
              Cancel
            </button>
            <button
              className="a-btn a-btn--earth a-btn--iconlabel a-btn--small"
              type="submit"
              disabled={!isValid}
            >
              <i className="a-icon a-icon--download a-icon--size-small" />
              Save
            </button>
          </div>
        </Form>
      )}
    </Formik>
  )
}

export default ModalForm
