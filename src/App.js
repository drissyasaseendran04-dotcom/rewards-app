import { useEffect, useState } from "react";
import { fetchTransactions } from "./services/transactionService";
import CustomerList from "./components/CustomerList/CustomerList";
import Filters from "./components/Filters/Filters";
import TransactionTable from "./components/TransactionTable/TransactionTable";

function App() {
  const [data, setData] = useState([]);
  const [customer, setCustomer] = useState("");
  const [month, setMonth] = useState(new Date().getMonth());
  const [year, setYear] = useState(2025);

  useEffect(() => {
    fetchTransactions().then(setData);
  }, []);

  const customers = [...new Set(data.map(d => d.customerId))];

  const filtered = data.filter(d => {
    const date = new Date(d.date);
    return (
      d.customerId === customer &&
      date.getMonth() === month &&
      date.getFullYear() === Number(year)
    );
  });

  return (
    <div>
      <h2>Rewards Program</h2>
      <CustomerList customers={customers} onSelect={setCustomer} />
      <Filters month={month} year={year} onMonth={setMonth} onYear={setYear} />
      <TransactionTable transactions={filtered} />
    </div>
  );
}

export default App;
