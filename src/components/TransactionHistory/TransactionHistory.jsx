import css from './TransactionHistory.module.css'
import PropTypes from 'prop-types'

export const TransactionHistory = ({ items }) => {
  return (
    <table className={css.transactionHistory}>
      <thead className={css.thead}>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <tr key={id}>
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

TransactionHistory.protoTypes = {
  items: PropTypes.array.isRequired,
}