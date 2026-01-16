import PropTypes from "prop-types";
import { MONTHS } from "../../constants/months";
import { YEARS } from "../../constants/years";

const Filters = ({ month, year, onMonth, onYear }) => (
  <>
    <select value={month} onChange={(e) => onMonth(e.target.value)}>
      {MONTHS.map((m, i) => <option key={i} value={i}>{m}</option>)}
    </select>

    <select value={year} onChange={(e) => onYear(e.target.value)}>
      {YEARS.map(y => <option key={y}>{y}</option>)}
    </select>
  </>
);

Filters.propTypes = {
  month: PropTypes.number,
  year: PropTypes.number,
  onMonth: PropTypes.func,
  onYear: PropTypes.func,
};

export default Filters;
