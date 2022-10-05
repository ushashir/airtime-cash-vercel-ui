import React, { useMemo } from "react";
import { useTable, usePagination } from "react-table";
import COLUMNS from "../../Admin-dashboard/columns";
import mockdata from "../../Admin-dashboard/mockdata.json";
import { BsThreeDots } from "react-icons/bs";
import "../overview/overviewstyle.css";
import Editcancel from '../editModal/editbutton/editcancel'
import {
  editModalState,
  minModalState,
} from "../../../atoms/successModalAtom";
import { useRecoilState } from "recoil";

const Overview = () => {
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => mockdata, []);
  const [ShowModal, setShowModal] = useRecoilState(minModalState);
  const [EditModal, setEditModal] = useRecoilState(editModalState);

  const handleClick = (e) => {
    e.preventDefault();
    setShowModal(true);
    setEditModal(false);
  };

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    canPreviousPage,
    canNextPage,
    pageOptions,
    state,
    gotoPage,
    pageCount,
    setPageSize,
    prepareRow,
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0 },
    },
    usePagination
  );

  const { pageIndex, pageSize } = state;

  return (
    <>
      <h1 className="ad-dash">Admin Dashboard</h1>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
              <th>Actions</th>
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
                <td>
                  <BsThreeDots
                    className="act"
                    onClick={handleClick}
                    style={{ cursor: "pointer" }}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="pageCount">
        <button
          onClick={() => gotoPage(1)}
          disabled={!canPreviousPage}
          className="btn-space"
        >
          {"<<"}
        </button>{" "}
        <button
          onClick={() => previousPage()}
          disabled={!canPreviousPage}
          className="btn-space"
        >
          Previous
        </button>{" "}
        <button
          onClick={() => nextPage()}
          disabled={!canNextPage}
          className="btn-space"
        >
          Next
        </button>{" "}
        <button
          onClick={() => gotoPage(pageCount - 1)}
          disabled={!canNextPage}
          className="btn-space"
        >
          {">>"}
        </button>{" "}
        <span className="index">
          Page{" "}
          <strong className="Str">
            {pageIndex + 1}</strong> of <strong className="Str"> {pageOptions.length}
          </strong>{" "}
        </span>
      </div>

      {ShowModal && <Editcancel />}
    </>
  );
};
export default Overview;
