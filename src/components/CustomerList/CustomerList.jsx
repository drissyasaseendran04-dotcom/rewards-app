import PropTypes from "prop-types";
import { Label, Select } from "../Layout";

const CustomerList = ({ customers, selectedCustomer, onSelect }) => {
  return (
    <div>
      <Label>Customer</Label><br />
      <Select
        value={selectedCustomer}
        onChange={(e) => onSelect(e.target.value)}
      >
        {customers.map((c) => (
          <option key={c} value={c}>
            {c}
          </option>
        ))}
      </Select>
    </div>
  );
};

CustomerList.propTypes = {
  customers: PropTypes.array.isRequired,
  selectedCustomer: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default CustomerList;
