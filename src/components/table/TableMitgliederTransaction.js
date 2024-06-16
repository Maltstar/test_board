/* eslint-disable prettier/prettier */
import React from 'react';
import { useEffect, useState } from "react";
import { CButton,CNav, CNavItem } from "@coreui/react";

//import { Student } from "./types";

import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import {  columns } from "./columns_mitglieder";
import  FooterCell from "./FooterCell";
import useTableDb from './useTabledb';
import useReadDataInfo from '../hooks/supabase/ApiSupabase';
import { getRndInteger } from './TableInfoPersonen'

export const TableMitgliedTransaction = () => {
  const { data: originalData, isValidating, addRow, updateRow, deleteRow } = useTableDb('info_mitglieder');
  const [data, setData] = useState([]);
  const [editedRows, setEditedRows] = useState({});
  const [validRows, setValidRows] = useState({});
  const [id,SetId] = useState(originalData.length + 1)
  
  //const {dataUpdated, isValidatingUpdated} = useReadDataInfo('info_personen')

  //const [id,SetId] = useState(30)
  //const isValidating = true;
  

//   const originalData = [
//     {
//         "id": 4,
//         "Name": "Weber",
//         "Vorname": "Sophie",
//         "Anschrift": "Schulstraße 47, 10115 Berlin",
//         "erstellt_am": "2024-05-23"
//       }
//     ]

 // const isValidating = true

console.log('TableMitglieder originalData',originalData);
console.log('TableMitglieder originalData before use effect id',id);
//   console.log('TableMitglieder columnspersonen',columnspersonen);
   console.log('TableMitglieder isValidating',isValidating);
   
  console.log('TableMitglieder data',data);

  useEffect(() => {
    if (isValidating) return;
    setData([...originalData]);
    SetId(originalData.length + 1)
  }, [isValidating]);

  const table = useReactTable({
    data,
    columns,
    //columnspersonen,
    getCoreRowModel: getCoreRowModel(),
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
        //const id = Math.floor(Math.random() * 10000);
        
        const date = new Date();
        const newDate = date.getFullYear() + '-' +  (((date.getMonth() + 1) < 10) ? '0':'') + (date.getMonth() + 1) + '-' + date.getDate()
        console.log("addRow id",id);
        console.log(' addRow TableMitglieder originalData after use effect id',id);
        console.log(' addRow TableMitglieder originalData after use effect data.length',data.length);
        let newRow = {
          id:getRndInteger(30,10000),
         // id: data.length + 1,
          Name: "",
          Vorname: "",
          Geburtsjahr: "",
          "Menge in g": "",
          "THC-Gehalt in %": "",
          erstellt_am: newDate
        };
        //SetId((previousId) => previousId + 1)
        addRow(newRow);
      },
      removeRow: (rowIndex) => {
        console.log('removeRow',rowIndex);
        deleteRow(data[rowIndex].id);
      },
      removeSelectedRows: (selectedRows) => {
        selectedRows.forEach((rowIndex) => {
          deleteRow(data[rowIndex].id);
        });
      },
    },
  });

//   console.log('TableMitglieder table', table);
//   console.log('TableMitglieder table getAllColumns', table.getAllColumns());
  console.log( 'TableMitglieder table getHeaderGroups',table.getHeaderGroups())
  console.log( 'TableMitglieder getRowModel', table.getRowModel().rows)

  return (
    <article className="table-container">
        <div className="table-responsive">
            <table >
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
            {table.getRowModel().rows.map((row) => {
                console.log('TableMitglieder getRowModel row', row);
                return(
                <tr key={row.id}>
                {row.getVisibleCells().map((cell) => {
                    console.log('TableMitglieder cell',cell);

                    return(
                    <td key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </td>
                )})}
                </tr>
            )})}
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
          <div className="alert alert-info" role="alert">
                  {id-1} Mitglieder
              </div>
        
        </div>
     
      {/* <pre>{JSON.stringify(data, null, "\t")}</pre> */}
    </article>

  );
};
