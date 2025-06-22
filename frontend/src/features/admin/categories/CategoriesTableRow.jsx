import { TableCell, TableRow } from "@/components/ui/table";
import RowAction from "@/shared/components/table/RowAction";

const CategoriesTableRow = ({ data, onEdit, onDelete, index, page, limit }) => {

	const rowNumber = (page - 1) * limit + index + 1

	return (
		<TableRow>
			<TableCell>{rowNumber}</TableCell>
			<TableCell>{data.name}</TableCell>
			<TableCell className="w-32">
				<RowAction onEdit={() => onEdit(data.categoryId)} onDelete={() => onDelete(data.categoryId)} />
			</TableCell>
		</TableRow>
	);
};

export default CategoriesTableRow;  