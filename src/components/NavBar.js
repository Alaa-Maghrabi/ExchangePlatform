import React, {useState} from 'react'
import CustomBtn from './CustomBtn'
import logo from '../logo.svg'
import logoMobile from '../logoMobile.svg'
import {Container, Toolbar, Typography} from '@material-ui/core'
import {withStyles} from "@material-ui/core/styles"; 
import WalletCard from './WalletCard'

const useStyles = {
    bar:{
        paddingTop: "1.15rem",
        backgroundColor: "#fff",
        ['@media (max-width:780px)']: { 
           flexDirection: "column"
          }
    },
    logo: {
        width: "15%", 
        ['@media (max-width:780px)']: { 
           display: "none"
           }
    },
    logoMobile:{
        width: "100%", 
        display: "none", 
        ['@media (max-width:780px)']: { 
            display: "inline-block"
            }
    },
    menuItem: {
        cursor: "pointer", 
        flexGrow: 1,
        "&:hover": {
            color:  "#4f25c8"
        },
        ['@media (max-width:780px)']: { 
            paddingBottom: "1rem"    }
    }
}

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.handleUserChange = this.handleUserChange.bind(this);
        this.state = {currentUser: null};
      }

    handleUserChange(user_){
        this.setState({currentUser: user_});
        this.props.onFinalUserChange(this.state.currentUser);
      }

    render(){
        const { classes } = this.props;
        
        return (
                <Toolbar position="sticky" color="rgba(0, 0, 0, 0.87)" className={classes.bar}>   
                    <img src={logo} className={classes.logo}/> 
                    <img src={logoMobile} className={classes.logoMobile}/> 
                    <Typography variant="h6" className={classes.menuItem}>
                    About
                    </Typography>
                    <Typography variant="h6" className={classes.menuItem}>
                        Blog
                    </Typography>
                    <Typography variant="h6" className={classes.menuItem}>
                        Demos 
                    </Typography>
                    <Typography variant="h6" className={classes.menuItem}>
                        Contact Us 
                    </Typography>
                    <WalletCard
                        onUserChange={this.handleUserChange}/>
                </Toolbar>
        )
    }
}

export default withStyles(useStyles)(NavBar)