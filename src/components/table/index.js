/* eslint-disable prettier/prettier */
import { useEffect, useState } from "react";
import { CButton,CNav, CNavItem } from "@coreui/react";
//import { Student } from "./types";
//import "./table.css";
import React from 'react';

import {
  flexRender,
  getCoreRowModel,
  getFacetedMinMaxValues,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { columns } from "./columns";
import  FooterCell  from "./FooterCell";
import useStudents from "./useStudents";

export const Table = () => {
 const {data: originalData, isValidating, addRow, updateRow, deleteRow } = useStudents();
  const [data, setData] = useState([]);
  const [editedRows, setEditedRows] = useState({});
  const [validRows, setValidRows] = useState({});

  const rerender = React.useReducer(() => ({}), {})[1]
  const [columnFilters, setColumnFilters] = useState(
    []
  )

  useEffect(() => {
    if (isValidating) return;
    setData([...originalData]);
  }, [isValidating]);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    initialState: {
      pagination: {
        pageIndex: 0, //custom initial page index
        pageSize: 25, //custom default page size
      }},
    enableRowSelection: true,
    meta: {
      editedRows,
      setEditedRows,
      validRows,
      setValidRows,
      revertData: (rowIndex) => {
        setData((old) =>
          old.map((row, index) =>
            index === rowIndex ? originalData[rowIndex] : row
          )
        );
      },
      updateRow: (rowIndex) => {
        updateRow(data[rowIndex].id, data[rowIndex]);
      },
      updateData: (rowIndex, columnId, value, isValid) => {
        setData((old) =>
          old.map((row, index) => {
            if (index === rowIndex) {
              return {
                ...old[rowIndex],
                [columnId]: value,
              };
            }
            return row;
          })
        );
        setValidRows((old) => ({
          ...old,
          [rowIndex]: { ...old[rowIndex], [columnId]: isValid },
        }));
      },
      addRow: () => {
        const id = Math.floor(Math.random() * 10000);
        const newRow = {
          id,
          studentNumber: id,
          name: "",
          dateOfBirth: "",
          major: ""
        };
        addRow(newRow);
      },
      removeRow: (rowIndex) => {
        deleteRow(data[rowIndex].id);
      },
      removeSelectedRows: (selectedRows) => {
        selectedRows.forEach((rowIndex) => {
          deleteRow(data[rowIndex].id);
        });
      },
    },
  });

  return (
    <article className="table-container">
      <table>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id}>
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
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <th colSpan={table.getCenterLeafColumns().length} align="right">
              <FooterCell table={table} />
                   {/* UI table */}
  <CNav variant="underline-border">
      <CNavItem>
          <CButton
          onClick={() => table.firstPage()}
          disabled={!table.getCanPreviousPage()}
          >
            {'<<'}
          </CButton>
      </CNavItem>
    
      <CNavItem>
          <CButton
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            {'<'}
          </CButton>
      </CNavItem>

      <span >
          <div>Seite</div>
          <strong>
            {table.getState().pagination.pageIndex + 1} of{' '}
            {table.getPageCount()}
          </strong>
        </span>

      <CNavItem>
        <CButton
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          {'>'}
        </CButton>
      </CNavItem>
      
      <CNavItem>
        <CButton
          onClick={() => table.lastPage()}
          disabled={!table.getCanNextPage()}
        >
          {'>>'}
        </CButton>
      </CNavItem>
      
      <CNavItem>
        <select
          value={table.getState().pagination.pageSize}
          onChange={e => {
            table.setPageSize(Number(e.target.value))
          }}
        >
          {[10, 20, 30, 40, 50].map(pageSize => (
            <option key={pageSize} value={pageSize}>
              {pageSize}
            </option>
          ))}
          </select>
      </CNavItem>
  </CNav>
            </th>
          </tr>
        </tfoot>
      </table>
 
      {/* <pre>{JSON.stringify(data, null, "\t")}</pre> */}
    </article>

  );
};
