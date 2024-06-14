/* eslint-disable prettier/prettier */
import { useState, useEffect, ChangeEvent } from "react";
import React from "react";
import PropTypes from 'prop-types'

//import "./table.css";

// type Option = {
//   label: string;
//   value: string;
// };

export const TableCell = (props) => {
  const { getValue, row, column, table } = props
  const initialValue = getValue();
  const columnMeta = column.columnDef.meta;
  const tableMeta = table.options.meta;
  const [value, setValue] = useState(initialValue);
  const [validationMessage, setValidationMessage] = useState("");

  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  const onBlur = (e) => {
    displayValidationMessage(e);
    tableMeta?.updateData(row.index, column.id, value, e.target.validity.valid);
  };

  const onSelectChange = (e) => {
    displayValidationMessage(e);
    setValue(e.target.value);
    tableMeta?.updateData(row.index, column.id, e.target.value, e.target.validity.valid);
  };

  const displayValidationMessage = (
    e
  ) => {
    if (columnMeta?.validate) {
      const isValid = columnMeta.validate(e.target.value);
      if (isValid) {
        e.target.setCustomValidity("");
        setValidationMessage("");
      } else {
        e.target.setCustomValidity(columnMeta.validationMessage);
        setValidationMessage(columnMeta.validationMessage);
      }
    } else if (e.target.validity.valid) {
      setValidationMessage("");
    } else {
      setValidationMessage(e.target.validationMessage);
    }
  };

  if (tableMeta?.editedRows[row.id]) {
    return columnMeta?.type === "select" ? (
      <select
        onChange={onSelectChange}
        value={initialValue}
        required={columnMeta?.required}
        title={validationMessage}
      >
        {columnMeta?.options?.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    ) : (
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onBlur={onBlur}
        type={columnMeta?.type || "text"}
        required={columnMeta?.required}
        pattern={columnMeta?.pattern}
        title={validationMessage}
      />
    );
  }
  return <span>{value}</span>;
};


TableCell.propTypes = {
  getValue:PropTypes.func, 
  row:PropTypes.object,
  column:PropTypes.object,
  table:PropTypes.object
}

export default React.memo(TableCell)