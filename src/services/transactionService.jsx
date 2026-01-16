import logger from "../logger";

export const fetchTransactions = () => {
  logger.info("Fetching transactions");

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      fetch("/data/transactions.json")
        .then(res => res.json())
        .then(data => resolve(data))
        .catch(() => {
          logger.error("Fetch failed");
          reject("Error loading transactions");
        });
    }, 1000);
  });
};
