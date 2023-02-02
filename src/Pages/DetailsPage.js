import * as React from 'react';
import Container from '@mui/material/Container';
import DetailsCard from '../Components/DetailsCard';

const DetailsPage = () => {

    return (
        <Container maxWidth="sm" sx={{ mt: 4 }}>
           <DetailsCard/>
        </Container>
    );
}
export default DetailsPage