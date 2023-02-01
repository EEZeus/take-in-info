import React from 'react'
import './MainPage.module.css'
import Table from '../Components/Table'

const MainPage = (props)=>{
    return(
    <React.Fragment>
        <Table/>
        {props.errorMessage}
    </React.Fragment>
    )
}

 export default MainPage;