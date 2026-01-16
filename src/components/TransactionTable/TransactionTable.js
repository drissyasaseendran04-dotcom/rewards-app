import PropTypes from "prop-types";
import { calculateRewardPoints } from "../../utils/rewardCalculator";

const TransactionTable = ({ transactions }) => {
  if (!transactions.length) return <p>No transactions</p>;

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th><th>Amount</th><th>Points</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map(tx => (
          <tr key={tx.transactionId}>
            <td>{tx.transactionId}</td>
            <td>{tx.amount}</td>
            <td>{calculateRewardPoints(tx.amount)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

TransactionTable.propTypes = {
  transactions: PropTypes.array.isRequired,
};

export default TransactionTable;
