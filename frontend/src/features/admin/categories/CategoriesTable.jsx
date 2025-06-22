import BaseTable from "@/shared/components/table/BaseTable";
import CategoriesTableRow from "./CategoriesTableRow";

const CategoriesTable = ({ datas, pagination, page, limit, setPage, onAdded, onEdit, onDelete, value, onChange }) => {
	const columns = ["No", "Name", "Actions"];

	return (
		<BaseTable columns={columns} value={value} onAdded={onAdded} onChange={onChange} pagination={pagination} page={page} setPage={setPage}>
			{datas.length > 0 ? (
				datas.map((data, index) => (
					<CategoriesTableRow
						key={data.categoryId}
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

export default CategoriesTable;