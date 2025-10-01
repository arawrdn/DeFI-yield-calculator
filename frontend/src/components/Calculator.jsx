import { useState } from "react";

export default function Calculator({ apr }) {
  const [deposit, setDeposit] = useState("");

  const calculateReturns = () => {
    const d = parseFloat(deposit);
    if (isNaN(d) || d <= 0) return { monthly: 0, yearly: 0 };
    const yearly = (d * apr) / 100;
    const monthly = yearly / 12;
    return { monthly, yearly };
  };

  const { monthly, yearly } = calculateReturns();

  return (
    <div className="p-4 border rounded-lg shadow">
      <h3 className="font-bold text-lg">APR: {apr}%</h3>
      <input
        type="number"
        placeholder="Enter deposit amount"
        value={deposit}
        onChange={(e) => setDeposit(e.target.value)}
        className="border px-2 py-1 mt-2 w-full rounded"
      />
      <div className="mt-3">
        <p>📆 Estimated Monthly: <b>{monthly.toFixed(2)}</b></p>
        <p>📅 Estimated Yearly: <b>{yearly.toFixed(2)}</b></p>
      </div>
    </div>
  );
}
