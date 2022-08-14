import React from "react"
import "./Exchanger.css";
import CustomBtn from './CustomBtn';

const Moralis = require('moralis');

// Connect the Moralis server
const serverUrl = "https://7wqjkn4step0.usemoralis.com:2053/server";
const appId = "mMGEOLWm7x7ayKaRgIdoNWsreOKAHL0Ulu17qZ8I";
//const Web3 = require('web3');

Moralis.start({ serverUrl, appId });

class Exchanger extends React.Component {
    constructor(props) {
      super(props);
      this.state = { currentIndex: null,
                     imgUrls: [],
                     currentUser: null,
                     selectedNFT: null,
                     secondAddress: "", 
                     nftAddresses: [],
                     nftIds: [],
                     swapId: null,
                     swapUser: null,
                     swapUser2: null,
                     secondUserApproval: null,
                    };
      this.closeModal = this.closeModal.bind(this);
      this.findNext = this.findNext.bind(this);
      this.findPrev = this.findPrev.bind(this);
      this.renderImageContent = this.renderImageContent.bind(this);
      this.extractnft = this.extractnft.bind(this);
      this.startExchange = this.startExchange.bind(this);
    }
    
    async extractnft(){
        let account = Moralis.User.current();
        console.log("Here is the account", account.get("ethAddress"));
        //this.setState({currentUser: account.get("ethAddress")});
        
        if(account){
          const NFT = await Moralis.Web3API.account.getNFTs({chain: "rinkeby"});
          let i = 0;
          while(i< NFT.result.length){
              let url = NFT.result[i].token_uri;              
              await fetch(url)
              .then(res => res.json())
              .then(out =>{
                  if(out.image)
                  {
                    //console.log(url);
                    this.setState(state => ({
                      imgUrls: [...state.imgUrls, out.image]
                    }))
                    this.setState(state => ({
                      nftAddresses: [...state.nftAddresses, NFT.result[i].token_address]
                    }))
                    this.setState(state => ({
                      nftIds: [...state.nftIds, NFT.result[i].token_id]
                    }))
                  }
              })
              .catch(error =>{
                  //console.log(error);
              });
              i++;
          }
        }
    }

    renderImageContent(src, index) {
        return (
          <div onClick={(e) => this.openModal(e, index, src)}>
            <img src={src} key={src} />
          </div>
        ) 
      }
      
      openModal(e, index, src) {
        this.setState ({ currentIndex: index });
        this.setState({selectedNFT: src});
        this.props.onNFTChange(src);
      }
      
      closeModal(e) {
        if (e != undefined) {
          e.preventDefault();
        }
        this.setState ({ currentIndex: null });
      }
      
      findPrev(e) {
        if (e != undefined) {
          e.preventDefault();
        }
        this.setState(prevState => ({
            currentIndex: prevState.currentIndex -1
          }));
      }
      
      findNext(e) {
        if (e != undefined) {
          e.preventDefault();
        }
        this.setState(prevState => ({
            currentIndex: prevState.currentIndex + 1
          }));
      }
      
      handleChange(value) {
        this.setState({secondAddress: value});
      }

      async approve(nftAddresses){
        await Moralis.enableWeb3();

        let options = {
          contractAddress: nftAddresses,
          functionName:"setApprovalForAll",
          abi:[{
              "inputs": [
                {
                  "internalType": "address",
                  "name": "operator",
                  "type": "address"
                },
                {
                  "internalType": "bool",
                  "name": "approved",
                  "type": "bool"
                }
              ],
              "name": "setApprovalForAll",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            }],
          params:{
            operator: "0xC72CfA31d4BDe7F44dfb910d9497441db825AE0F",
            approved: true
          },
        }
        await Moralis.executeFunction(options);        
        
      }

      async startExchange(secondAddress, nftAddresses, nftIds){
        await Moralis.enableWeb3();

        let options = {
          contractAddress: "0xC72CfA31d4BDe7F44dfb910d9497441db825AE0F",
          functionName:"startExchange",
          abi:[{
              "inputs": [
                {
                  "internalType": "address",
                  "name": "secondUser",
                  "type": "address"
                },
                {
                  "internalType": "address[]",
                  "name": "nftAddresses",
                  "type": "address[]"
                },
                {
                  "internalType": "uint256[]",
                  "name": "nftIds",
                  "type": "uint256[]"
                },
                {
                  "internalType": "uint128[]",
                  "name": "nftAmounts",
                  "type": "uint128[]"
                }
              ],
              "name": "startExchange",
              "outputs": [],
              "stateMutability": "payable",
              "type": "function"
          }],
          params:{
            secondUser: secondAddress,
            nftAddresses: nftAddresses,
            nftIds: nftIds,
            nftAmounts: [0]
          },
          msgValue: 100000000000000
        }
        //await this.approve(nftAddresses[0]);
        let result =  await Moralis.executeFunction(options);
        await result.wait(1)
              .then((res) => {
                console.log(result.blockHash);
                console.log(res);
                this.setState({swapId: parseInt(res.logs[2].topics[3]),
                                swapUser: res.logs[2].topics[1],
                                swapUser2: res.logs[2].topics[2]});
              })
              .catch((e) =>{
                console.log("FAILED");
                console.log(e);
              })
        
        
        this.props.onSwapChange(this.state.swapId, this.state.swapUser, this.state.swapUser2);
        this.state.sendFunction();
      }

      async acceptExchange(_swapId, nftAddresses, nftIds){
        await Moralis.enableWeb3();
        let options = {
          contractAddress: "0xC72CfA31d4BDe7F44dfb910d9497441db825AE0F",
          functionName:"acceptExchange",
          abi:[{
              "inputs": [
                {
                  "internalType": "uint64",
                  "name": "swapId",
                  "type": "uint64"
                },
                {
                  "internalType": "address[]",
                  "name": "nftAddresses",
                  "type": "address[]"
                },
                {
                  "internalType": "uint256[]",
                  "name": "nftIds",
                  "type": "uint256[]"
                },
                {
                  "internalType": "uint128[]",
                  "name": "nftAmounts",
                  "type": "uint128[]"
                }
              ],
              "name": "acceptExchange",
              "outputs": [],
              "stateMutability": "payable",
              "type": "function" 
            }],
          params:{
            swapId: _swapId,
            nftAddresses: nftAddresses,
            nftIds: nftIds,
            nftAmounts: [0]
          },
          msgValue: 100000000000000
        }
        //await this.approve(nftAddresses);
        let transaction = await Moralis.executeFunction(options);
        await transaction.wait(1)
              .then(() => {
                console.log("transaction done");
                this.setState({secondUserApproval: true});
              })
              .catch((e) => {
                console.log(e);
                this.setState({secondUserApproval: false});
              })
      }

      async confirmExchange(_swapId){
        await Moralis.enableWeb3();
        let options = {
          contractAddress: "0xC72CfA31d4BDe7F44dfb910d9497441db825AE0F",
          functionName:"confirmExchange",
          abi:[{
              "inputs": [
                {
                  "internalType": "uint64",
                  "name": "swapId",
                  "type": "uint64"
                }
              ],
              "name": "confirmExchange",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            }],
          params:{
            swapId: _swapId
          },
        }
        await Moralis.executeFunction(options);
      }

      render(){
        this.state.currentUser = this.props.user;
        return ( 
            <div className= "gallery-container">
                <div className="gallery-grid">
                    {this.state.imgUrls.map(this.renderImageContent)}
                </div>  
                
                <div className="button-center">
                  <CustomBtn onClick={this.extractnft} txt="Load NFTs"/>
                </div>
                <div >
                  <h3>The NFT selected for trade</h3>
                  <img src={this.state.imgUrls[this.state.currentIndex]} width={250} height={250} />
                </div>
                
                <div >
                  <h3>The recipient address</h3>
                  <input
                      type="text"
                      value={this.state.secondAddress} 
                      onChange={e => this.handleChange(e.target.value)}
                      />

                    <div className="button-center">
                      <CustomBtn onClick={() => this.startExchange( this.state.secondAddress,
                                                                    [this.state.nftAddresses[this.state.currentIndex]],
                                                                    [this.state.nftIds[this.state.currentIndex]])}
                                 txt="Exchange NFTs"/>
                    </div>
                    <div className="button-center">
                      <CustomBtn  disabled={!this.state.swapId && !(this.state.currentUser==this.state.swapUser2 && this.state.currentUser)}  
                                  onClick={() => this.acceptExchange(this.state.swapId,
                                                                    [this.state.nftAddresses[this.state.currentIndex]],
                                                                    [this.state.nftIds[this.state.currentIndex]])} 
                                  txt="Approve Exchange"/>
                      <CustomBtn  disabled={!this.state.secondUserApproval} 
                                  onClick={() => this.confirmExchange(this.state.swapId)} 
                                  txt="Confirm Exchange"/>
                    </div>
                </div>
                   
            </div>
        )
      }    
}

export default Exchanger;

/*
<GalleryModal 
                    closeModal={this.closeModal} 
                    findPrev={this.findPrev} 
                    findNext={this.findNext} 
                    hasPrev={this.state.currentIndex > 0} 
                    hasNext={this.state.currentIndex + 1 < this.state.imgUrls.length} 
                    src={this.state.imgUrls[this.state.currentIndex]} 
                />

                <CustomBtn disabled={this.state.swapId}  onClick={() => this.acceptExchange(
                                                            this.state.swapId,
                                                            this.state.nftAddresses[this.state.currentIndex],
                                                            [this.state.nftIds[this.state.currentIndex]])} txt="Approve Exchange"/>
                */