import * as React from 'react';
import Box from '@mui/material/Box';
function Item(props) {
    const { sx, ...other } = props;
    return (
        <Box
            sx={{
                bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : '#64b5f6'),
                color: (theme) => (theme.palette.mode === 'grey' ? 'grey.600' : 'grey.900'),
                border: '1px solid',
                borderColor: (theme) =>
                    theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
                p: 1,
                borderRadius: 2,
                fontSize: '0.650rem',
                fontWeight: '700',
                ...sx,
            }}
            {...other}
        />
    );
}
const MoreInfoBox = (props) => {
    return(
    <div style={{ width: '100%' }}>
        <Box
            sx={{
                display: 'grid',
                gap: 1,
                gridTemplateColumns: 'repeat(2, 1fr)',
            }}
        >
            <Item>Market Cap : ${props.Data.market_cap}</Item>
            <Item>Fully Diluted Valuation : ${props.Data.fully_diluted_valuation}</Item>
            <Item>Total Volume : ${props.Data.total_volume}</Item>
            <Item>Circulation Supply : ${props.Data.circulating_supply}</Item>
            <Item>Max Supply : ${props.Data.max_supply}</Item>
            <Item>Total Supply : ${props.Data.total_supply}</Item>
            <Item>All Time High : ${props.Data.ath}</Item>
            <Item>All Time Low : ${props.Data.atl}</Item>
        </Box>
    </div>
    )
}

export default MoreInfoBox;