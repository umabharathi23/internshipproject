import React from "react";

const TableWidget = () => {
  return (
    <table className="data-table">
      <thead>
        <tr>
          <th>Month</th>
          <th>Sales</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>Jan</td><td>400</td></tr>
        <tr><td>Feb</td><td>600</td></tr>
        <tr><td>Mar</td><td>700</td></tr>
        <tr><td>Apr</td><td>800</td></tr>
      </tbody>
    </table>
  );
};

export default TableWidget;
