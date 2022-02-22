import React, { useState, MouseEvent, ChangeEvent } from 'react'
import { TablePagination } from '@material-ui/core'

interface IProps {
  initRowsPerPage: number; // The available values are 10, 25, 50, 100
  setInitRowsPerPage: (initRowsPerPage: number) => void
}

export const Pagination: React.FC<IProps> = ({ initRowsPerPage, setInitRowsPerPage }) => {
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(initRowsPerPage)

  const handleChangePage = (event: MouseEvent<HTMLButtonElement> | null, newPage: number) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const newRowsPerPage = parseInt(event.target.value, 10)

    setRowsPerPage(newRowsPerPage)
    setPage(0)
    setInitRowsPerPage(newRowsPerPage)
  }

  return (
    <TablePagination
      component="div"
      count={100}
      page={page}
      onPageChange={handleChangePage}
      rowsPerPage={rowsPerPage}
      onRowsPerPageChange={handleChangeRowsPerPage}
    />
  )
}
