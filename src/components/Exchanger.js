import React, { useEffect, useState } from "react"
import "./Exchanger.css";
import GalleryModal from "./GalleryModal";

const imgUrls = ['https://source.unsplash.com/PC_lbSSxCZE/800x600','https://source.unsplash.com/lVmR1YaBGG4/800x600',
'https://source.unsplash.com/5KvPQc1Uklk/800x600','https://source.unsplash.com/GtYFwFrFbMA/800x600','https://source.unsplash.com/Igct8iZucFI/800x600',
'https://source.unsplash.com/M01DfkOqz7I/800x600','https://source.unsplash.com/MoI_cHNcSK8/800x600','https://source.unsplash.com/M0WbGFRTXqU/800x600',
'https://source.unsplash.com/s48nn4NtlZ4/800x600'];

const Moralis = require('moralis');

// Connect the Moralis server
const serverUrl = "https://7wqjkn4step0.usemoralis.com:2053/server";
const appId = "mMGEOLWm7x7ayKaRgIdoNWsreOKAHL0Ulu17qZ8I";

Moralis.start({ serverUrl, appId });

class Exchanger extends React.Component {
    constructor(props) {
      super(props);
      this.state = { currentIndex: null };
      this.closeModal = this.closeModal.bind(this);
      this.findNext = this.findNext.bind(this);
      this.findPrev = this.findPrev.bind(this);
      this.renderImageContent = this.renderImageContent.bind(this);
    }
    
    async extractnft(){
        let account = Moralis.User.current();
        const NFT = await Moralis.Web3API.account.getNFTs({chain: "rinkeby"});

        /*while(i< NFT.result.length){
            let url = NFT.result[i].token_uri;
            
            await fetch(url)
            .then(res => res.json())
            .then(out =>{
                //console.log('Checkout this JSON! ', out.image);
                setUserNFT(oldArray => [...oldArray, out.image]);
                //setUserNFT(out.image)
            })
            .catch(error =>{
                console.log(error);
                setUserNFT(oldArray => [...oldArray, "None"]);
            });
            i++;
        }*/


    }

    renderImageContent(src, index) {
        return (
          <div onClick={(e) => this.openModal(e, index)}>
            <img src={src} key={src} />
          </div>
        ) 
      }
      
      openModal(e, index) {
        this.setState ({ currentIndex: index });
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
                    {imgUrls.map(this.renderImageContent)}
                </div>  
                <GalleryModal 
                    closeModal={this.closeModal} 
                    findPrev={this.findPrev} 
                    findNext={this.findNext} 
                    hasPrev={this.state.currentIndex > 0} 
                    hasNext={this.state.currentIndex + 1 < imgUrls.length} 
                    src={imgUrls[this.state.currentIndex]} 
                />
            </div>
        )
      }    
}

export default Exchanger;

