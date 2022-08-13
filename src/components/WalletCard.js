import React, {useState } from "react"
import CustomBtn from './CustomBtn';
import {makeStyles} from "@material-ui/core/styles"; 

const styles = makeStyles({
    container:{
        position: "relative",
        display: "inline-block",
    },
    dropdown:{
        position: "absolute",
        right: "0",
        left: "0",
        width: "168px",
        zIindex: "2",
    },
    
    ul_style:{
        listStyle: "none",
        padding: "0",
        margin: "0",
    },

    li_style:{
        padding: "10px 12px",
        cursor: "pointer",
        background: 'rgba(0,0,0,0.25)',
        '&:hover': {
            background: '#3498db'
          }
    },

})

const Moralis = require('moralis');

const WalletCard = (props) =>{

    const classes = styles();

    const [connButtonText, setConnButtonText] = useState('Connect Wallet');
    const [defaultAccount, setDefaultAccount] = useState(null);
	const [userBalance, setUserBalance] = useState(null);
    const [showResults, setShowResults] = useState(false)

    // Connect the Moralis server
    const serverUrl = "https://7wqjkn4step0.usemoralis.com:2053/server";
    const appId = "mMGEOLWm7x7ayKaRgIdoNWsreOKAHL0Ulu17qZ8I";

    Moralis.start({ serverUrl, appId });

    /* Authentication code */
    async function login() {
        let user = Moralis.User.current();
        if (!user) {
            user = await Moralis.authenticate({ signingMessage: "Log in using Moralis" })
            .then(function (user) {
                console.log("logged in user:", user);
                console.log(user.get("ethAddress"));
            })
            .catch(function (error) {
            console.log(error);
            });
        }
        
        await accounthandler(user)
        if(user) setShowResults(!showResults);
        props.onUserChange(user.get("ethAddress"));
    }

    async function accounthandler(account) {
        
        const acc_address = account.get("ethAddress");
        setDefaultAccount(acc_address);
        
        const balance = await Moralis.Web3API.account.getNativeBalance({chain: "rinkeby"}); 
        setUserBalance((balance.balance/10**18).toFixed(3));

        console.log(acc_address);
        setConnButtonText((acc_address.substring(0,6)).concat(
            " . . . ", 
            (acc_address.substring(acc_address.length-6,acc_address.length))
        )); 
                     
    }


    async function logOut() {
        await Moralis.User.logOut();
        console.log("logged out");
        setConnButtonText('Connect Wallet');
    }
    

    return ( 
        <div className={classes.container}>
			<CustomBtn onClick={login} txt={connButtonText}/>
            {showResults && (
                <div className={classes.dropdown}>
                    <ul className={classes.ul_style}>
                        <li className={classes.li_style}>
                            Option 1
                        </li>
                        <li className={classes.li_style}>
                            Option 2
                        </li>
                        <li className={classes.li_style}>
                            Option 3
                        </li>
                        <li className={classes.li_style}>
                            <div onClick={logOut}>Log Out</div>
                        </li>
                    </ul>
                </div>
            )}

        </div>
     )
}
           /* <Typography variant="h6" className='accountDisplay'>
				Address: {defaultAccount}
			</Typography>
            <Typography variant="h6" className='balanceDisplay'>
				Balance: {userBalance}
			</Typography>*/
export default WalletCard;