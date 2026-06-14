import {
    flexRender,
    getCoreRowModel,
    useReactTable,
    type ColumnDef,
  } from "@tanstack/react-table";
  
  type DataTableProps<TData> = {
    data: TData[];
    columns: ColumnDef<TData>[];
  };
  
  export default function DataTable<TData>({
    data,
    columns,
  }: DataTableProps<TData>) {
    const table = useReactTable({
      data,
      columns,
      getCoreRowModel: getCoreRowModel(),
    });
  
    return (
      <div className="overflow-hidden rounded-md border">
        <table className="w-full text-sm">
          <thead className="border-b bg-gray-50">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th key={header.id} className="px-4 py-3 text-left font-medium">
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
  
          <tbody>
            {table.getRowModel().rows.length ? (
              table.getRowModel().rows.map((row) => (
                <tr key={row.id} className="border-b last:border-0">
                  {row.getVisibleCells().map((cell) => (
                    <td key={cell.id} className="px-4 py-3">
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </td>
                  ))}
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={columns.length} className="px-4 py-10 text-center">
                  No data found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    );
  }