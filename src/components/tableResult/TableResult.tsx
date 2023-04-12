import * as React from 'react'

import { Container } from '@mui/material'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'

import {
  getChosenPipeSelector,
  getPricePipeSelector,
  getPriceScrewSelector,
  getQuantityPipeSelector,
  getQuantityScrewSelector,
  getChosenListSelector,
  getPriceListSelector,
  getQuantityListSelector,
} from '../../common/selectors'
import { useAppSelector } from '../../State/Store'

import { StyledTableCell, StyledTableRow } from './StyledTableCell'

function createData(
  name: string,
  units: string,
  quantity: number | string | [],
  sum: number | string
) {
  return { name, units, quantity, sum }
}

export const TableResult = () => {
  const chosenListMaterial = useAppSelector(getChosenListSelector) || '-'
  const chosenPipeMaterial = useAppSelector(getChosenPipeSelector) || '-'

  const quantityList = useAppSelector(getQuantityListSelector) || 0
  const quantityPipe = useAppSelector(getQuantityPipeSelector) || 0
  const quantityScrew = useAppSelector(getQuantityScrewSelector) || 0

  const priceListMaterial = useAppSelector(getPriceListSelector) || 0
  const allPriceListMaterial = priceListMaterial * quantityList

  const indexPrice = 0
  const indexStep = 1
  const pricePipeMaterial = useAppSelector(getPricePipeSelector) || 0
  const allPricePipeMaterial = pricePipeMaterial * quantityPipe[indexPrice]

  const priceScrewMaterial = useAppSelector(getPriceScrewSelector) || 0
  const allPriceScrewMaterial = (priceScrewMaterial * quantityScrew).toFixed(1)

  const rows = [
    createData(chosenListMaterial, 'м2', quantityList, allPriceListMaterial),
    createData(chosenPipeMaterial, 'мп', quantityPipe[indexPrice], allPricePipeMaterial),
    createData(
      chosenPipeMaterial === '-' ? '-' : 'Саморез',
      'шт',
      quantityScrew,
      allPriceScrewMaterial
    ),
  ]

  return (
    <Container>
      <Box sx={{ marginBottom: 2 }}> Общая площадь поверхности : {quantityList} м2</Box>
      <Box sx={{ marginBottom: 2 }}> Шаг ячейки : {quantityPipe[indexStep]} м</Box>
      <TableContainer component={Paper} sx={{ minWidth: 500, maxWidth: 600 }}>
        <Table aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Наименование</StyledTableCell>
              <StyledTableCell align="right">Ед.</StyledTableCell>
              <StyledTableCell align="right">Количество</StyledTableCell>
              <StyledTableCell align="right">Сумма</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <StyledTableRow key={index}>
                <StyledTableCell component="th" scope="row">
                  {row.name}
                </StyledTableCell>
                <StyledTableCell align="right">{row.units}</StyledTableCell>
                <StyledTableCell align="right">{row.quantity}</StyledTableCell>
                <StyledTableCell align="right">{row.sum}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box sx={{ marginTop: 1 }}>
        {' '}
        Итого сумма :{' '}
        {Number(allPriceScrewMaterial) +
          Number(allPriceListMaterial) +
          Number(allPricePipeMaterial)}
      </Box>
    </Container>
  )
}
