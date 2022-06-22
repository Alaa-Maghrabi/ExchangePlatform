import React, { useEffect, useState } from "react"
import "./Exchanger.css";
import GalleryModal from "./GalleryModal";
import CustomBtn from './CustomBtn';

const Moralis = require('moralis');

// Connect the Moralis server
const serverUrl = "https://7wqjkn4step0.usemoralis.com:2053/server";
const appId = "mMGEOLWm7x7ayKaRgIdoNWsreOKAHL0Ulu17qZ8I";

Moralis.start({ serverUrl, appId });

class Exchanger extends React.Component {
    constructor(props) {
      super(props);
      this.state = { currentIndex: null,
                     imgUrls: [],
                     selectedNFT: null, 
                    };
      this.closeModal = this.closeModal.bind(this);
      this.findNext = this.findNext.bind(this);
      this.findPrev = this.findPrev.bind(this);
      this.renderImageContent = this.renderImageContent.bind(this);
      this.extractnft = this.extractnft.bind(this);
    }
    
    async extractnft(){
        let account = Moralis.User.current();
        console.log("Here is the account", account)
        if(account){
          const NFT = await Moralis.Web3API.account.getNFTs({chain: "rinkeby"});
          let i = 0;
          console.log(NFT.result);

          while(i< NFT.result.length){
              let url = NFT.result[i].token_uri;
             
              await fetch(url)
              .then(res => res.json())
              .then(out =>{
                  if(out.image)
                  {
                    console.log(url);
                    this.setState(state => ({
                      imgUrls: [...state.imgUrls, out.image]
                    }))     
                  }
              })
              .catch(error =>{
                  console.log(error);
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
        this.setState({selectedNFT: src})
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
      render(){
        return ( 
            <div className= "gallery-container">
                <div className="gallery-grid">
                    {this.state.imgUrls.map(this.renderImageContent)}
                </div>  
                <GalleryModal 
                    closeModal={this.closeModal} 
                    findPrev={this.findPrev} 
                    findNext={this.findNext} 
                    hasPrev={this.state.currentIndex > 0} 
                    hasNext={this.state.currentIndex + 1 < this.state.imgUrls.length} 
                    src={this.state.imgUrls[this.state.currentIndex]} 
                />
                <div className="button-center">
                  <CustomBtn onClick={this.extractnft} txt="Load NFTs"/>
                </div>
                <div >
                  <h3>The NFT selected for trade</h3>
                  <img src={this.state.selectedNFT} width={250} height={250} />
                </div>
            </div>
        )
      }    
}

export default Exchanger;

