import { TableCell, TableRow } from "@/components/ui/table";
import RowAction from "@/shared/components/table/RowAction";

const ProductTableRow = ({ data, onEdit, onDelete, index, page, limit }) => {
  const rowNumber = (page - 1) * limit + index + 1

  return (
    <TableRow>
      <TableCell>{rowNumber}</TableCell>
      <TableCell>{data.name}</TableCell>
      <TableCell>{data.description}</TableCell>
      <TableCell>{data.price}</TableCell>
      <TableCell>{data.Category.name}</TableCell>
      <TableCell>
        <img
          src={data.imageUrl}  
          alt={data.name || "Image"}
          className="w-16 h-16 object-cover rounded-md"
        />
      </TableCell>
      <TableCell className="w-32">
        <RowAction onEdit={() => onEdit(data.productId)} onDelete={() => onDelete(data.productId)} />
      </TableCell>
    </TableRow>
  );
};

export default ProductTableRow;  