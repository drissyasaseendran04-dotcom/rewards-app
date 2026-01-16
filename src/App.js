import { useEffect, useState } from "react";
import CustomerList from "./components/CustomerList/CustomerList";
import Filters from "./components/Filters/Filters";
import TransactionTable from "./components/TransactionTable/TransactionTable";
import { fetchTransactions } from "./services/transactionService";
import { Page, Card, Title, Row } from "./components/Layout";

function App() {
  const [data, setData] = useState([]);
  const [customer, setCustomer] = useState("");
  const [month, setMonth] = useState(new Date().getMonth());
  const [year, setYear] = useState(2025);

  useEffect(() => {
    fetchTransactions().then((res) => {
      setData(res);
      if (res.length > 0) {
        setCustomer(res[0].customerId); // default customer
      }
    });
  }, []);

  const customers = [...new Set(data.map(d => d.customerId))];

  const filtered = data.filter(d => {
    const date = new Date(d.date);
    return (
      d.customerId === customer &&
      date.getMonth() === month &&
      date.getFullYear() === year
    );
  });

  return (
    <Page>
      <Title>Customer Rewards Program</Title>

      <Card>
        <Row>
          <CustomerList
            customers={customers}
            selectedCustomer={customer}
            onSelect={setCustomer}
          />
          <Filters
            month={month}
            year={year}
            onMonth={setMonth}
            onYear={setYear}
          />
        </Row>
      </Card>

      <Card>
        <Title>Transactions</Title>
        <TransactionTable transactions={filtered} />
      </Card>
    </Page>
  );
}

export default App;
