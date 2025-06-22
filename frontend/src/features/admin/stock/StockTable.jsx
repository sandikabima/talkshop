import BaseTable from "@/shared/components/table/BaseTable";
import StockTableRow from "./StockTableRow";

const StockTable = ({ datas, pagination, page, limit, setPage, onAdded, onEdit, onDelete, value, onChange }) => {
	const columns = ["No", "Product", "Quantity", "Location","Actions"];

	return (
		<BaseTable columns={columns} value={value} onAdded={onAdded} onChange={onChange} pagination={pagination} page={page} setPage={setPage}>
			{datas.length > 0 ? (
				datas.map((data, index) => (
					<StockTableRow
						key={data.productStockId}
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

export default StockTable;