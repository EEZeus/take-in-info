import * as React from 'react';
import Styles from './Table.module.css'
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux'
import { Actions } from '../Store/Redux';
import { Link } from 'react-router-dom'

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 16,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

function createData(name, symbol, currentPrice, marketCapRank) {
    return { name, symbol, currentPrice, marketCapRank };
}

const CustomizedTables = () => {
    const dispatch = useDispatch()

    const Data = useSelector(state => state.Fetch.data)

    const rows = [];

    for (let item of Data) {
        const symbol = <span><img src={item.image} className={Styles.symbol} alt='icon' />{item.symbol}</span>
        rows.push(createData(item.name, symbol, item.current_price, item.market_cap_rank))
    }
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 400 }} align='center' aria-label="customized table">
                <TableHead>
                    <TableRow >
                        <StyledTableCell>Name</StyledTableCell>
                        <StyledTableCell align="center">Symbol</StyledTableCell>
                        <StyledTableCell align="center">Current Price&nbsp;($)</StyledTableCell>
                        <StyledTableCell align="center">Market Cap Rank</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <StyledTableRow key={row.name}>

                            <StyledTableCell component="th" scope="row">
                                <Link className={Styles.link} to="/details"
                                    onClick={() => {
                                        dispatch(Actions.pickId({ currentId: row.marketCapRank - 1 }))
                                    }}>
                                    {row.name}
                                </Link>
                            </StyledTableCell>
                            <StyledTableCell align="center">
                                <Link className={Styles.link} to="/details">
                                    {row.symbol}
                                </Link>
                            </StyledTableCell>
                            <StyledTableCell align="center">{row.currentPrice}</StyledTableCell>
                            <StyledTableCell align="center">{row.marketCapRank}</StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer >
    );
}
export default CustomizedTables;