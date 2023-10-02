import styles from './TransactionHistory.module.css'

export const TransactionHistory = ({transaction}) => {
return (
  <table className={styles.transactionhistory}>
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>
  <tbody>
  {transaction.map(item => (
   <tr key={item.id}>
          <td>{item.type}</td>
          <td>{item.amount}</td>
          <td>{item.currency}</td>
   </tr>
  ))}           
  </tbody>
</table>   
  );
};