import PropTypes from "prop-types";
import { MONTHS } from "../../constants/months";
import { YEARS } from "../../constants/years";
import { Label, Select } from "../Layout";

const Filters = ({ month, year, onMonth, onYear }) => {
  return (
    <>
      <div>
        <Label>Month</Label><br />
        <Select value={month} onChange={(e) => onMonth(Number(e.target.value))}>
          {MONTHS.map((m, i) => (
            <option key={i} value={i}>{m}</option>
          ))}
        </Select>
      </div>

      <div>
        <Label>Year</Label><br />
        <Select value={year} onChange={(e) => onYear(Number(e.target.value))}>
          {YEARS.map((y) => (
            <option key={y} value={y}>{y}</option>
          ))}
        </Select>
      </div>
    </>
  );
};

Filters.propTypes = {
  month: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  onMonth: PropTypes.func.isRequired,
  onYear: PropTypes.func.isRequired,
};

export default Filters;
