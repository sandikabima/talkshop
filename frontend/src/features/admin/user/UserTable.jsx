import BaseTable from "@/shared/components/table/BaseTable";
import UserTableRow from "./UserTableRow";

const UserTable = ({ datas, pagination, limit, page, setPage, onAdded, onEdit, onDelete, value, onChange }) => {
  const columns = ["Name", "Email", "Password", "Actions"];

  return (
    <BaseTable columns={columns} value={value} onAdded={onAdded} onChange={onChange} pagination={pagination} page={page} setPage={setPage}>
      {datas.length > 0 ? (
        datas.map((data, index) => (
          <UserTableRow
            key={data.userId}
            data={data}
            onEdit={onEdit}
            onDelete={onDelete}
            index={index}
            page={page}
            limit={limit}
          />
        ))
      ) : (
        <tr>
          <td colSpan={columns.length} className="text-center py-4">
            No data available
          </td>
        </tr>
      )}
    </BaseTable>
  );
};

export default UserTable;