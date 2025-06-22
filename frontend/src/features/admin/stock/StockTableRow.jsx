import { TableCell, TableRow } from "@/components/ui/table";
import RowAction from "@/shared/components/table/RowAction";

const StockTableRow = ({ data, onEdit, onDelete, index, page, limit }) => {

	const rowNumber = (page - 1) * limit + index + 1

	return (
		<TableRow>
			<TableCell>{rowNumber}</TableCell>
			<TableCell>{data.Product.name}</TableCell>
			<TableCell>{data.quantity}</TableCell>
			<TableCell>{data.location}</TableCell>
			<TableCell className="w-32">
				<RowAction onEdit={() => onEdit(data.productStockId)} onDelete={() => onDelete(data.productStockId)} />
			</TableCell>
		</TableRow>
	);
};

export default StockTableRow;  