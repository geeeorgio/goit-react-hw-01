import css from './TransactionHistory.module.css';

const Transaction = ({ singleAction: { type, amount, currency } }) => {
  return (
    <tr>
      <td>
        {type === 'invoice' && 'Invoice'}
        {type === 'payment' && 'Payment'}
        {type === 'withdrawal' && 'Withdrawal'}
        {type === 'deposit' && 'Deposit'}
      </td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  );
};

const TransactionHistory = ({ items }) => {
  return (
    <div className={css.wrapper}>
      <table className={css.table}>
        <thead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>

        <tbody>
          {items.map(action => (
            <Transaction key={action.id} singleAction={action} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionHistory;
