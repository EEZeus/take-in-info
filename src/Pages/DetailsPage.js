import * as React from 'react';
import Styles from './DetailsPage.module.css'
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useSelector } from 'react-redux'
import Container from '@mui/material/Container';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import CallMissedOutgoingRoundedIcon from '@mui/icons-material/CallMissedOutgoingRounded';
import MilitaryTechRoundedIcon from '@mui/icons-material/MilitaryTechRounded';
import Box from '@mui/material/Box';

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

function Item(props) {
    const { sx, ...other } = props;
    return (
      <Box
        sx={{
          bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : '#fff'),
          color: (theme) => (theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800'),
          border: '1px solid',
          borderColor: (theme) =>
            theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
          p: 1,
          borderRadius: 2,
          fontSize: '0.600rem',
          fontWeight: '600',
          ...sx,
        }}
        {...other}
      />
    );
  }

const DetailsPage = () => {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const currentId = useSelector(state => state.Fetch.currentId)
    const currentIdData = useSelector(state => state.Fetch.data[currentId])

    return (
        <Container maxWidth="sm" sx={{ mt: 4 }}>
            <Card sx={{ maxWidth: 600 }}>
                <CardHeader
                    avatar={
                        <Avatar src={currentIdData.image} aria-label="recipe">
                        </Avatar>
                    }
                    title={currentIdData.name}
                    subheader={currentIdData.symbol}
                    action={
                        <h3>{currentIdData.price_change_percentage_24h}%</h3>
                    }
                />
                <CardContent>
                    <List sx={{ width: '100%', maxWidth: 400, bgcolor: 'background.paper' }}>
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar>
                                    <AttachMoneyIcon />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary={`$${currentIdData.current_price}`} secondary="Price" />
                        </ListItem>
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar>
                                    <CallMissedOutgoingRoundedIcon />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary={`$${currentIdData.low_24h} / $${currentIdData.high_24h}`} secondary="Low/High (24h)" />
                        </ListItem>
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar>
                                    <MilitaryTechRoundedIcon />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary={currentIdData.market_cap_rank} secondary="Market Cap Rank" />
                        </ListItem>
                    </List>
                </CardContent>
                <CardActions disableSpacing>
                    <p>More Details</p>
                    <ExpandMore
                        expand={expanded}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                    >
                        <ExpandMoreIcon />
                    </ExpandMore>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                        <div style={{ width: '100%' }}>
                            <Box
                                sx={{
                                    display: 'grid',
                                    gap: 1,
                                    gridTemplateColumns: 'repeat(2, 1fr)',
                                }}
                            >
                                <Item>Market Cap : ${currentIdData.market_cap}</Item>
                                <Item>Fully Diluted Valuation : ${currentIdData.fully_diluted_valuation}</Item>
                                <Item>Total Volume : ${currentIdData.total_volume}</Item>
                                <Item>Circulation Supply : ${currentIdData.circulating_supply}</Item>
                                <Item>Max Supply : ${currentIdData.max_supply}</Item>
                                <Item>Total Supply : ${currentIdData.total_supply}</Item>
                                <Item>All Time High : ${currentIdData.ath}</Item>
                                <Item>All Time Low : ${currentIdData.atl}</Item>
                            </Box>
                        </div>
                    </CardContent>
                </Collapse>
            </Card>
        </Container>
    );
    // <Box sx={{ flexGrow: 1 }}>
    //     <Grid container spacing={2}>
    //         <Grid item xs={6} md={8}>
    //             <Item >
    //                 <span>
    //                     <img src={currentIdData.image} className={Styles.symbol} alt="symbol-icon" />
    //                     <h2>{currentIdData.name}</h2>
    //                 </span>
    //             </Item>
    //         </Grid>
    //         <Grid item xs={6} md={4}>
    //             <Item>xs=6 md=4</Item>
    //         </Grid>
    //         <Grid item xs={6} md={4}>
    //             <Item>xs=6 md=4</Item>
    //         </Grid>
    //         <Grid item xs={6} md={8}>
    //             <Item>xs=6 md=8</Item>
    //         </Grid>
    //     </Grid>
    // </Box>
}
export default DetailsPage