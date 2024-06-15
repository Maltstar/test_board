/* eslint-disable prettier/prettier */
//import { MouseEvent } from "react";
import PropTypes from 'prop-types'
import React from "react";

export const EditCell = ({ row, table }) => {
  const meta = table.options.meta;
  const validRow = meta?.validRows[row.id];
  const disableSubmit = validRow ? Object.values(validRow)?.some(item => !item) : false;

  const setEditedRows = (e) => {
    const elName = e.currentTarget.name;
    meta?.setEditedRows((old) => ({
      ...old,
      [row.id]: !old[row.id],
    }));
    if (elName !== "edit") {
      e.currentTarget.name === "cancel" ? meta?.revertData(row.index) : meta?.updateRow(row.index);
    }
  };

  const removeRow = () => {
    meta?.removeRow(row.index);
  };

  return (
    <div className="edit-cell-container">
      {meta?.editedRows[row.id] ? (
        <div className="edit-cell-action">
          <button onClick={setEditedRows} name="cancel">
            ⚊
          </button>{" "}
          <button onClick={setEditedRows} name="done" disabled={disableSubmit}>
            ✔
          </button>
        </div>
      ) : (
        <div className="edit-cell-action">
          <button onClick={setEditedRows} name="edit">
            ✐
          </button>
          <button onClick={removeRow} name="remove">
            X
          </button>
        </div>
      )}
      <input
        type="checkbox"
        checked={row.getIsSelected()}
        onChange={row.getToggleSelectedHandler()}
      />
    </div>
  );
};

EditCell.propTypes = {
  row: PropTypes.object,
  table:PropTypes.object
}

export default React.memo(EditCell)
