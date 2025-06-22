import { Table, TableBody, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import TableToolbar from "./TableToolbar";
import { Separator } from "@/components/ui/separator";
import TablePagination from "./TablePagination";

const BaseTable = ({ columns, children, value, onAdded, onChange, pagination, page, setPage }) => {
  return (
    <>
      <TableToolbar value={value} onChange={onChange} onAdded={onAdded}/>
      <Separator />
      <Table>
        <TableHeader>
          <TableRow>
            {columns.map((col, idx) => (
              <TableHead
                key={idx}
                className={col === "Actions" ? "text-center" : ""}
              >
                {col}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>{children}</TableBody>
      </Table>
      <TablePagination pagination={pagination} page={page} setPage={setPage} />
    </>

  )
}

export default BaseTable