import React, { useState, MouseEvent, ChangeEvent } from 'react'
import { TablePagination } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { AppGradientColors } from '@app/themes/app.main-theme'

const useStyles = makeStyles((theme) => ({
  root: {
    background: AppGradientColors.coolBlues2
  }
}))

interface IProps {
  initRowsPerPage: number; // The available values are 10, 25, 50, 100
  emitRowsPerPage: (initRowsPerPage: number) => void;
  count: number;
  emitPage: (newPage: number) => void;
}

export const Pagination: React.FC<IProps> = ({ initRowsPerPage, emitRowsPerPage, count, emitPage }) => {
  const classes = useStyles()

  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(initRowsPerPage)

  const handleChangePage = (event: MouseEvent<HTMLButtonElement> | null, newPage: number) => {
    setPage(newPage)
    emitPage(newPage)
  }

  const handleChangeRowsPerPage = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const newRowsPerPage = parseInt(event.target.value, 10)

    setRowsPerPage(newRowsPerPage)
    setPage(0)
    emitRowsPerPage(newRowsPerPage)
  }

  return (
    <TablePagination
      className={classes.root}
      component="div"
      count={count}
      page={page}
      onPageChange={handleChangePage}
      rowsPerPage={rowsPerPage}
      onRowsPerPageChange={handleChangeRowsPerPage}
    />
  )
}
