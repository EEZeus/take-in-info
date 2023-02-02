import * as React from 'react';
import { styled } from '@mui/material/styles';
import Styles from './DetailsCard.module.css'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useSelector } from 'react-redux'
import Container from '@mui/material/Container';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import CallMissedOutgoingRoundedIcon from '@mui/icons-material/CallMissedOutgoingRounded';
import MilitaryTechRoundedIcon from '@mui/icons-material/MilitaryTechRounded';
import MoreInfoBox from './MoreInfoBox';

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



const DetailsCard = () => {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const currentId = useSelector(state => state.Fetch.currentId)
    const currentIdData = useSelector(state => state.Fetch.data[currentId])

    return (
        <Container maxWidth="80%" sx={{ mt: 4 }}>
            <Card sx={{
                bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : '#906697'),
                color: (theme) => (theme.palette.mode === 'dark' ? 'dark.300' : 'dark.800'),
                border: '1px solid',
                borderColor: (theme) =>
                    theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
                p: 1,
                borderRadius: 2,
                fontSize: '0.600rem',
                fontWeight: '900'
            }}>
                <CardHeader
                    avatar={
                        <Avatar src={currentIdData.image} aria-label="recipe">
                        </Avatar>
                    }
                    title={currentIdData.name}
                    subheader={currentIdData.symbol.toUpperCase()}
                    action={
                        <div className={Styles['font-large']}>
                            <h3 className={+currentIdData.price_change_percentage_24h > 0 ? Styles.increase : Styles.decrease}>{currentIdData.price_change_percentage_24h}%</h3>
                        </div>
                    }
                />
                <CardContent>
                    <List sx={{ width: '100%', maxWidth: 500, bgcolor: '#82488c', borderRadius: '10px' }}>
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar style={{ backgroundColor: '#64b5f6' }}>
                                    <AttachMoneyIcon />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary={`$${currentIdData.current_price}`} secondary="Price" />
                        </ListItem>
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar style={{ backgroundColor: '#64b5f6' }}>
                                    <CallMissedOutgoingRoundedIcon />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary={`$${currentIdData.low_24h} / $${currentIdData.high_24h}`} secondary="Low/High (24h)" />
                        </ListItem>
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar style={{ backgroundColor: '#64b5f6' }}>
                                    <MilitaryTechRoundedIcon />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary={`#${currentIdData.market_cap_rank}`} secondary="Market Cap Rank" />
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
                        <MoreInfoBox Data={currentIdData} />
                    </CardContent>
                </Collapse>
            </Card>
        </Container>
    );
}
export default DetailsCard;