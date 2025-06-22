import { TableCell, TableRow } from "@/components/ui/table";
import RowAction from "@/shared/components/table/RowAction";

const UserTableRow = ({ data, onEdit, onDelete,index, page, limit }) => {
  const rowNumber = (page - 1) * limit + index + 1

  return (
    <TableRow>
      <TableCell>{rowNumber}</TableCell>
      <TableCell>{data.userName}</TableCell>
      <TableCell>{data.email}</TableCell>
      <TableCell>{data.password}</TableCell>
      <TableCell className="w-32">
        <RowAction onEdit={() => onEdit(data.userId)} onDelete={() => onDelete(data.userId)} />
      </TableCell>
    </TableRow>
  );
};

export default UserTableRow;  