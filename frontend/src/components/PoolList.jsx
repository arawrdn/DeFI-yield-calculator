import { useState } from "react";
import pools from "../data/pools.json";
import Calculator from "./Calculator";

export default function PoolList() {
  const [selectedPool, setSelectedPool] = useState(null);

  return (
    <div>
      <h2 className="text-xl font-bold mb-2">Available Pools</h2>
      <ul className="space-y-2">
        {pools.map((pool) => (
          <li key={pool.id}>
            <button
              onClick={() => setSelectedPool(pool)}
              className="w-full text-left p-2 bg-gray-200 rounded hover:bg-gray-300"
            >
              {pool.name} – APR: {pool.apr}%
            </button>
          </li>
        ))}
      </ul>

      {selectedPool && (
        <div className="mt-4">
          <Calculator apr={selectedPool.apr} />
        </div>
      )}
    </div>
  );
}
