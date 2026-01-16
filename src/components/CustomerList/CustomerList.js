import PropTypes from "prop-types";

const CustomerList = ({ customers, onSelect }) => (
  <select onChange={(e) => onSelect(e.target.value)}>
    {customers.map(c => (
      <option key={c} value={c}>{c}</option>
    ))}
  </select>
);

CustomerList.propTypes = {
  customers: PropTypes.array.isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default CustomerList;
