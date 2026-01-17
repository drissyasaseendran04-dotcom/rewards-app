import PropTypes from "prop-types";
import styled from "styled-components";
import { calculateRewardPoints } from "../../utils/rewardCalculator";

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const Th = styled.th`
  text-align: left;
  padding: 10px;
  background: #f0f2f5;
  font-size: 14px;
`;

const Td = styled.td`
  padding: 10px;
  border-bottom: 1px solid #eee;
  font-size: 14px;
`;

const Empty = styled.p`
  color: #888;
  text-align: center;
  padding: 20px;
`;

const TransactionTable = ({ transactions }) => {
  if (!transactions.length) {
    return <Empty>No transactions</Empty>;
  }

  return (
    <Table>
      <thead>
        <tr>
          <Th>Transaction ID</Th>
          <Th>Date</Th>
          <Th>Amount </Th>
          <Th>Reward Points</Th>
        </tr>
      </thead>
      <tbody>
        {transactions.map((tx) => (
          <tr key={tx.transactionId}>
            <Td>{tx.transactionId}</Td>
            <Td>{tx.date}</Td>
            <Td>{tx.amount.toFixed(2)}</Td>
            <Td>{calculateRewardPoints(tx.amount)}</Td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

TransactionTable.propTypes = {
  transactions: PropTypes.array.isRequired,
};

export default TransactionTable;
