import Row from "./Row";

const DataTable = ({ theadItems, tbodyItems, noItemMsg }) => {
  return (
    <table>
      <thead className="table__head">
        <Row compoents={theadItems} />
      </thead>
      <tbody className="table__body">
        {tbodyItems.length <= 0 ? (
          <tr>
            <td colSpan="5" className="text-center font-size__1">
              {noItemMsg}
            </td>
          </tr>
        ) : (
          tbodyItems.map((items, index) => (
            <Row key={index + 1} compoents={items} />
          ))
        )}
      </tbody>
    </table>
  );
};

export default DataTable;
