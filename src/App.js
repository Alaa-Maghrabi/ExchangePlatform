import logo from './logo.svg';
import './App.css';
import { createMuiTheme, ThemeProvider, withStyles} from '@material-ui/core/styles';
import NavBar from './components/NavBar';
import Grid from './components/Grid';
import {Typography} from '@material-ui/core'
import Footer from './components/Footer';
import Exchanger from './components/Exchanger';
import Chat from './components/Chat';
import React from 'react';


const theme = createMuiTheme({
  palette: {
    primary: {
      main:"#2e1667",
    },
    secondary: {
      main:"#c7d8ed",
    },
  },
  typography: {
    fontFamily: [
      'Roboto'
    ],
    h4: {
      fontWeight: 600,
      fontSize: 28,
      lineHeight: '2rem',
      },
    h5: {
      fontWeight: 100,
      lineHeight: '2rem',
    },
  },
});

const useStyles = theme =>({
  wrapper: {
    width: "65%",
    margin: "auto",
    textAlign: "center"
  },
  bigSpace: {
    marginTop: "5rem"
  },
  littleSpace:{
    marginTop: "2.5rem",
  },
  grid:{
    display: "flex", 
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap", 
  },
})

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleNFTChange = this.handleNFTChange.bind(this);
    this.handleSwapChange = this.handleSwapChange.bind(this);
    this.handleUserChange = this.handleUserChange.bind(this);
    this.state = {nftSent: '',
                  currentUser: null,
                  swapId: null,
                  swapUser: null,
                  swapUser2: null,
                  sendFunction: null};
  }

  handleNFTChange(nftSentSrc) {
    this.setState({nftSent: nftSentSrc});
  }

  handleSwapChange(swapId_, swapUser_, swapUser2_){
    this.setState({swapId: swapId_,
                  swapUser: swapUser_,
                  swapUser2: swapUser2_});

  }

  handleUserChange(user_){
    this.setState({currentUser: user_});
  }

  render(){
    const { classes } = this.props;
    
    return (
      <div className="App">
        <ThemeProvider theme={theme}>
          <NavBar 
            onFinalUserChange = {this.handleUserChange}/>
          <div className={classes.wrapper}>
            <Typography variant="h4" className={classes.bigSpace} color="primary">
              These are the NFTs linked to your wallet
            </Typography>
            <Typography variant="h5" className={classes.littleSpace} color="primary">
              You can browse these NFTs by clicking on them and selecting which one to trade. The one selected will be displayed by itself and will be tradeable
            </Typography>
          </div>
          <Exchanger 
            user = {this.state.currentUser}
            onNFTChange={this.handleNFTChange}
            onSwapChange={this.handleSwapChange}/>
          <div className={classes.bigSpace}>
            <Chat 
              nftSrc = {this.state.nftSent}
              swapId = {this.state.swapId}
              swapUser = {this.state.currentUser}
              swapUser2 = {this.state.swapUser2}/>
          </div>
          <div className={classes.bigSpace}>
            <Footer/>
          </div>
        </ThemeProvider>
      </div>
    );
  }
}

/*
<div className={`${classes.grid} ${classes.bigSpace}`}>
          <Grid icon={<SecurityIcon style={{fill: "#4360A6", height:"125", width:"125"}}/>}  title="Secure" btnTitle="Show me More" />
          <Grid icon={<EventNoteIcon style={{fill: "#449A76", height:"125", width:"125"}}/>} title="Reliable" btnTitle="Show me More"/>
          <Grid icon={<TrendingUpIcon style={{fill: "#D05B2D", height:"125", width:"125"}}/>}  title="Performant" btnTitle="Show me More"/>
        </div>
        <div className={`${classes.grid} ${classes.littleSpace}`}>  
          <Grid icon={<ImportExportIcon style={{fill: "#5EA780", height:"125", width:"125"}}/>}  title="Modular" btnTitle="Show me More"/>
          <Grid icon={<ComputerIcon style={{fill: "#E69426", height:"125", width:"125"}}/>}  title="Multi-Platform" btnTitle="Show me More"/>
          <Grid icon={<HttpIcon style={{fill: "#2EA09D", height:"125", width:"125"}}/>} title="Connected" btnTitle="Show me More"/>
        </div>
*/
export default withStyles(useStyles)(App)