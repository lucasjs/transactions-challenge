import React from 'react'
import { storiesOf, addDecorator } from '@storybook/react'
import { withA11y } from '@storybook/addon-a11y'
import '@magnetis/astro'

import Row from 'pages/Transactions/Table/Row'

import './index.css'

addDecorator(withA11y)

const item = {
  id: 1,
  description: 'test',
  transactionValue: 1223.43,
  transactionType: 'debit'
}

storiesOf('Row', module)
  .add('Default', () => (
    <table>
      <tbody>
        <Row
          key={item.id}
          item={item}
        />
      </tbody>
    </table>
  ))
