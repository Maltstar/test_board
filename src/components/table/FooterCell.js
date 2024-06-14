/* eslint-disable prettier/prettier */
import PropTypes from 'prop-types'
import React from 'react';

const FooterCell = (props) => {
  const { table } = props
  const meta = table.options.meta;
  const selectedRows = table.getSelectedRowModel().rows;

  const removeRows = () => {
    meta.removeSelectedRows(
      table.getSelectedRowModel().rows.map((row) => row.index)
    );
    table.resetRowSelection();
  };

  return (
    <div className="footer-buttons">
      {selectedRows.length > 0 ? (
        <button className="remove-button" onClick={removeRows}>
          Remove Selected x
        </button>
      ) : null}
      <button className="add-button" onClick={meta?.addRow}>
        Add New +
      </button>
    </div>
  );
};

FooterCell.propTypes = {
  table:PropTypes.object
}

export default React.memo(FooterCell)
