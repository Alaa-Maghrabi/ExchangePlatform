(this.webpackJsonptutorial_react=this.webpackJsonptutorial_react||[]).push([[0],{365:function(e,t,n){},366:function(e,t,n){},634:function(e,t){},682:function(e,t){},749:function(e,t,n){},764:function(e,t,n){"use strict";n.r(t);var a=n(3),s=n.n(a),r=n(132),c=n.n(r),i=(n(365),n(5)),o=n(4),l=n(10),d=n(6),u=n(7),p=(n(366),n(354)),h=n(787),b=n(56),f=n(70),j=n.p+"static/media/logo.7f799ddd.svg",x=n.p+"static/media/logoMobile.1b06bd40.svg",g=n(783),m=n(784),O=n(86),v=n(121),y=n(2),w=n.n(y),I=n(780),S=n(8),k=Object(b.a)({root:{display:"flex",alignItems:"center",justifyContent:"center",height:"44px",padding:"0 25px",boxSizing:"border-box",borderRadius:0,background:"#4f25f7",color:"#fff",transform:"none",boxShadow:"6px 6px 0 0 #c7d8ed",transition:"background .3s,border-color .3s,color .3s","&:hover":{backgroundColor:"#4f25f7"},"&:disabled":{background:"#fff",color:"#ccc",cursor:"no-drop"}},label:{textTransform:"capitalize"}})(I.a);var U=function(e){return Object(S.jsx)(k,{onClick:e.onClick,disabled:e.disabled,variant:"contained",children:e.txt})},C=n(781),N=Object(C.a)({container:{position:"relative",display:"inline-block"},dropdown:{position:"absolute",right:"0",left:"0",width:"168px",zIindex:"2"},ul_style:{listStyle:"none",padding:"0",margin:"0"},li_style:{padding:"10px 12px",cursor:"pointer",background:"rgba(0,0,0,0.25)","&:hover":{background:"#3498db"}}}),A=n(238),T=function(e){var t=N(),n=Object(a.useState)("Connect Wallet"),s=Object(v.a)(n,2),r=s[0],c=s[1],i=Object(a.useState)(null),o=Object(v.a)(i,2),l=(o[0],o[1]),d=Object(a.useState)(null),u=Object(v.a)(d,2),p=(u[0],u[1]),h=Object(a.useState)(!1),b=Object(v.a)(h,2),f=b[0],j=b[1];function x(){return(x=Object(O.a)(w.a.mark((function t(){var n;return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=A.User.current()){t.next=5;break}return t.next=4,A.authenticate({signingMessage:"Log in using Moralis"}).then((function(e){console.log("logged in user:",e),console.log(e.get("ethAddress"))})).catch((function(e){console.log(e)}));case 4:n=t.sent;case 5:return t.next=7,g(n);case 7:n&&j(!f),e.onUserChange(n.get("ethAddress"));case 9:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function g(e){return m.apply(this,arguments)}function m(){return(m=Object(O.a)(w.a.mark((function e(t){var n,a;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.get("ethAddress"),l(n),e.next=4,A.Web3API.account.getNativeBalance({chain:"rinkeby"});case 4:a=e.sent,p((a.balance/Math.pow(10,18)).toFixed(3)),console.log(n),c(n.substring(0,6).concat(" . . . ",n.substring(n.length-6,n.length)));case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function y(){return(y=Object(O.a)(w.a.mark((function e(){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A.User.logOut();case 2:console.log("logged out"),c("Connect Wallet");case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return A.start({serverUrl:"https://7wqjkn4step0.usemoralis.com:2053/server",appId:"mMGEOLWm7x7ayKaRgIdoNWsreOKAHL0Ulu17qZ8I"}),Object(S.jsxs)("div",{className:t.container,children:[Object(S.jsx)(U,{onClick:function(){return x.apply(this,arguments)},txt:r}),f&&Object(S.jsx)("div",{className:t.dropdown,children:Object(S.jsxs)("ul",{className:t.ul_style,children:[Object(S.jsx)("li",{className:t.li_style,children:"Option 1"}),Object(S.jsx)("li",{className:t.li_style,children:"Option 2"}),Object(S.jsx)("li",{className:t.li_style,children:"Option 3"}),Object(S.jsx)("li",{className:t.li_style,children:Object(S.jsx)("div",{onClick:function(){return y.apply(this,arguments)},children:"Log Out"})})]})})]})},F={bar:Object(f.a)({paddingTop:"1.15rem",backgroundColor:"#fff"},"@media (max-width:780px)",{flexDirection:"column"}),logo:Object(f.a)({width:"15%"},"@media (max-width:780px)",{display:"none"}),logoMobile:Object(f.a)({width:"100%",display:"none"},"@media (max-width:780px)",{display:"inline-block"}),menuItem:Object(f.a)({cursor:"pointer",flexGrow:1,"&:hover":{color:"#4f25c8"}},"@media (max-width:780px)",{paddingBottom:"1rem"})},D=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).handleUserChange=a.handleUserChange.bind(Object(l.a)(a)),a.state={currentUser:null},a}return Object(o.a)(n,[{key:"handleUserChange",value:function(e){this.setState({currentUser:e}),this.props.onFinalUserChange(this.state.currentUser)}},{key:"render",value:function(){var e=this.props.classes;return Object(S.jsxs)(g.a,{position:"sticky",color:"rgba(0, 0, 0, 0.87)",className:e.bar,children:[Object(S.jsx)("img",{src:j,className:e.logo}),Object(S.jsx)("img",{src:x,className:e.logoMobile}),Object(S.jsx)(m.a,{variant:"h6",className:e.menuItem,children:"About"}),Object(S.jsx)(m.a,{variant:"h6",className:e.menuItem,children:"Blog"}),Object(S.jsx)(m.a,{variant:"h6",className:e.menuItem,children:"Demos"}),Object(S.jsx)(m.a,{variant:"h6",className:e.menuItem,children:"Contact Us"}),Object(S.jsx)(T,{onUserChange:this.handleUserChange})]})}}]),n}(s.a.Component),E=Object(b.a)(F)(D),M=n(785),W=n(786),_=n(349),L=n.n(_),R=n(350),P=n.n(R),B=n(351),H=n.n(B),Y=n(352),q=n.n(Y);var z=function(){return Object(S.jsxs)(M.a,{children:[Object(S.jsx)(W.a,{color:"red",label:"Facebook",value:"recents",icon:Object(S.jsx)(L.a,{style:{fill:"#3b5998"}})}),Object(S.jsx)(W.a,{label:"Twitter",value:"favorites",icon:Object(S.jsx)(P.a,{style:{fill:"#1DA1F2"}})}),Object(S.jsx)(W.a,{label:"Instagram",value:"nearby",icon:Object(S.jsx)(H.a,{style:{fill:" #C13584"}})}),Object(S.jsx)(W.a,{label:"YouTube",value:"folder",icon:Object(S.jsx)(q.a,{style:{fill:"#c4302b"}})})]})},K=n(57),G=(n(749),n(238));G.start({serverUrl:"https://7wqjkn4step0.usemoralis.com:2053/server",appId:"mMGEOLWm7x7ayKaRgIdoNWsreOKAHL0Ulu17qZ8I"});var J=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).state={currentIndex:null,imgUrls:[],currentUser:null,selectedNFT:null,secondAddress:"",nftAddresses:[],nftIds:[],swapId:null,swapUser:null,swapUser2:null,secondUserApproval:null},a.closeModal=a.closeModal.bind(Object(l.a)(a)),a.findNext=a.findNext.bind(Object(l.a)(a)),a.findPrev=a.findPrev.bind(Object(l.a)(a)),a.renderImageContent=a.renderImageContent.bind(Object(l.a)(a)),a.extractnft=a.extractnft.bind(Object(l.a)(a)),a.startExchange=a.startExchange.bind(Object(l.a)(a)),a}return Object(o.a)(n,[{key:"extractnft",value:function(){var e=Object(O.a)(w.a.mark((function e(){var t,n=this;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=G.User.current(),console.log("Here is the account",t.get("ethAddress")),!t){e.next=4;break}return e.delegateYield(w.a.mark((function e(){var t,a,s;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,G.Web3API.account.getNFTs({chain:"rinkeby"});case 2:t=e.sent,a=0;case 4:if(!(a<t.result.length)){e.next=11;break}return s=t.result[a].token_uri,e.next=8,fetch(s).then((function(e){return e.json()})).then((function(e){e.image&&(n.setState((function(t){return{imgUrls:[].concat(Object(K.a)(t.imgUrls),[e.image])}})),n.setState((function(e){return{nftAddresses:[].concat(Object(K.a)(e.nftAddresses),[t.result[a].token_address])}})),n.setState((function(e){return{nftIds:[].concat(Object(K.a)(e.nftIds),[t.result[a].token_id])}})))})).catch((function(e){}));case 8:a++,e.next=4;break;case 11:case"end":return e.stop()}}),e)}))(),"t0",4);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"renderImageContent",value:function(e,t){var n=this;return Object(S.jsx)("div",{onClick:function(a){return n.openModal(a,t,e)},children:Object(S.jsx)("img",{src:e},e)})}},{key:"openModal",value:function(e,t,n){this.setState({currentIndex:t}),this.setState({selectedNFT:n}),this.props.onNFTChange(n)}},{key:"closeModal",value:function(e){void 0!=e&&e.preventDefault(),this.setState({currentIndex:null})}},{key:"findPrev",value:function(e){void 0!=e&&e.preventDefault(),this.setState((function(e){return{currentIndex:e.currentIndex-1}}))}},{key:"findNext",value:function(e){void 0!=e&&e.preventDefault(),this.setState((function(e){return{currentIndex:e.currentIndex+1}}))}},{key:"handleChange",value:function(e){this.setState({secondAddress:e})}},{key:"approve",value:function(){var e=Object(O.a)(w.a.mark((function e(t){var n;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,G.enableWeb3();case 2:return n={contractAddress:t,functionName:"setApprovalForAll",abi:[{inputs:[{internalType:"address",name:"operator",type:"address"},{internalType:"bool",name:"approved",type:"bool"}],name:"setApprovalForAll",outputs:[],stateMutability:"nonpayable",type:"function"}],params:{operator:"0x02f40094De2Df2a34609897c9D8a364Aa976427d",approved:!0}},e.next=5,G.executeFunction(n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"startExchange",value:function(){var e=Object(O.a)(w.a.mark((function e(t,n,a){var s,r,c=this;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,G.enableWeb3();case 2:return s={contractAddress:"0x02f40094De2Df2a34609897c9D8a364Aa976427d",functionName:"startExchange",abi:[{inputs:[{internalType:"address",name:"secondUser",type:"address"},{internalType:"address[]",name:"nftAddresses",type:"address[]"},{internalType:"uint256[]",name:"nftIds",type:"uint256[]"},{internalType:"uint128[]",name:"nftAmounts",type:"uint128[]"}],name:"startExchange",outputs:[],stateMutability:"payable",type:"function"}],params:{secondUser:t,nftAddresses:n,nftIds:a,nftAmounts:[0]},msgValue:1e14},e.next=5,G.executeFunction(s);case 5:return r=e.sent,e.next=8,r.wait(1).then((function(e){console.log(r.blockHash),console.log(e),c.setState({swapId:parseInt(e.logs[2].topics[3]),swapUser:e.logs[2].topics[1],swapUser2:e.logs[2].topics[2]})})).catch((function(e){console.log("FAILED"),console.log(e)}));case 8:this.props.onSwapChange(this.state.swapId,this.state.swapUser,this.state.swapUser2),this.state.sendFunction();case 10:case"end":return e.stop()}}),e,this)})));return function(t,n,a){return e.apply(this,arguments)}}()},{key:"acceptExchange",value:function(){var e=Object(O.a)(w.a.mark((function e(t,n,a){var s,r,c=this;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,G.enableWeb3();case 2:return s={contractAddress:"0x02f40094De2Df2a34609897c9D8a364Aa976427d",functionName:"acceptExchange",abi:[{inputs:[{internalType:"uint64",name:"swapId",type:"uint64"},{internalType:"address[]",name:"nftAddresses",type:"address[]"},{internalType:"uint256[]",name:"nftIds",type:"uint256[]"},{internalType:"uint128[]",name:"nftAmounts",type:"uint128[]"}],name:"acceptExchange",outputs:[],stateMutability:"payable",type:"function"}],params:{swapId:t,nftAddresses:n,nftIds:a,nftAmounts:[0]},msgValue:1e14},e.next=5,G.executeFunction(s);case 5:return r=e.sent,e.next=8,r.wait(1).then((function(){console.log("transaction done"),c.setState({secondUserApproval:!0})})).catch((function(e){console.log(e),c.setState({secondUserApproval:!1})}));case 8:case"end":return e.stop()}}),e)})));return function(t,n,a){return e.apply(this,arguments)}}()},{key:"confirmExchange",value:function(){var e=Object(O.a)(w.a.mark((function e(t){var n;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,G.enableWeb3();case 2:return n={contractAddress:"0x02f40094De2Df2a34609897c9D8a364Aa976427d",functionName:"confirmExchange",abi:[{inputs:[{internalType:"uint64",name:"swapId",type:"uint64"}],name:"confirmExchange",outputs:[],stateMutability:"nonpayable",type:"function"}],params:{swapId:t}},e.next=5,G.executeFunction(n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return this.setState({currentUser:this.props.user}),Object(S.jsxs)("div",{className:"gallery-container",children:[Object(S.jsx)("div",{className:"gallery-grid",children:this.state.imgUrls.map(this.renderImageContent)}),Object(S.jsx)("div",{className:"button-center",children:Object(S.jsx)(U,{onClick:this.extractnft,txt:"Load NFTs"})}),Object(S.jsxs)("div",{children:[Object(S.jsx)("h3",{children:"The NFT selected for trade"}),Object(S.jsx)("img",{src:this.state.imgUrls[this.state.currentIndex],width:250,height:250})]}),Object(S.jsxs)("div",{children:[Object(S.jsx)("h3",{children:"The recipient address"}),Object(S.jsx)("input",{type:"text",value:this.state.secondAddress,onChange:function(t){return e.handleChange(t.target.value)}}),Object(S.jsx)("div",{className:"button-center",children:Object(S.jsx)(U,{onClick:function(){return e.startExchange(e.state.secondAddress,[e.state.nftAddresses[e.state.currentIndex]],[e.state.nftIds[e.state.currentIndex]])},txt:"Exchange NFTs"})}),Object(S.jsxs)("div",{className:"button-center",children:[Object(S.jsx)(U,{disabled:!this.state.swapId&&!(this.state.currentUser==this.state.swapUser2&&this.state.currentUser),onClick:function(){return e.acceptExchange(e.state.swapId,[e.state.nftAddresses[e.state.currentIndex]],[e.state.nftIds[e.state.currentIndex]])},txt:"Approve Exchange"}),Object(S.jsx)(U,{disabled:!this.state.secondUserApproval,onClick:function(){return e.confirmExchange(e.state.swapId)},txt:"Confirm Exchange"})]})]})]})}}]),n}(s.a.Component),V=J,Z=n(353),Q=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).connect=function(){var e=new Z.a(a.state.swapUserSent);e.on("open",(function(t){a.setState({myId:t,peer:e})})),e.on("connection",(function(e){e.on("data",(function(e){console.log(e),a.setState({nftReceived:e.nft,swapId:e.swapId,messages:[].concat(Object(K.a)(a.state.messages),[e])}),console.log(a.state)}))}))},a.send=function(){var e=a.state.peer.connect(a.state.friendId);e.on("open",(function(){var t={sender:a.state.myId,message:a.state.message,nft:a.state.nftSent,swapId:a.state.swapIdSent};e.send(t),a.setState({messages:[].concat(Object(K.a)(a.state.messages),[t]),message:""})}))},a.state={myId:"",friendId:"",peer:{},message:"",messages:[],nftSent:"",nftReceived:"",swapIdSent:null,swapUserSent:null,swapUser2Sent:null,swapId:null,swapUser:null,swapUser2:null,visited:!1},a}return Object(o.a)(n,[{key:"componentDidUpdate",value:function(e,t){t.nftSent!==this.state.nftSent&&this.send(),0==this.state.visited&&(this.setState({visited:!0}),this.connect())}},{key:"render",value:function(){var e=this;return this.setState({nftSent:this.props.nftSrc,swapIdSent:this.props.swapId,swapUserSent:this.props.swapUser,swapUser2Sent:this.props.swapUser2}),Object(S.jsxs)("div",{className:"wrapper",children:[Object(S.jsx)("h1",{children:"The chatting service"}),Object(S.jsxs)("div",{className:"col",children:[Object(S.jsxs)("h3",{children:["Your Room ID : ",this.state.myId," "]}),"Connect to:",Object(S.jsx)("input",{type:"text",value:this.state.friendId,onChange:function(t){e.setState({friendId:t.target.value})}}),Object(S.jsx)("br",{}),Object(S.jsx)("label",{children:"Message:"}),Object(S.jsx)("input",{type:"text",value:this.state.message,onChange:function(t){e.setState({message:t.target.value})}}),Object(S.jsx)("button",{onClick:this.send,children:"Send"}),this.state.messages.map((function(e,t){return Object(S.jsxs)("div",{children:[Object(S.jsxs)("h3",{children:[e.sender,":"]}),Object(S.jsx)("p",{children:e.message})]},t)})),Object(S.jsxs)("h3",{children:["Your swap ID : ",this.state.swapId||this.state.swapIdSent," "]})]}),Object(S.jsxs)("div",{className:"col",children:[Object(S.jsx)("h3",{children:"Buying the following NFT"}),Object(S.jsx)("h4",{children:"Received"}),Object(S.jsx)("img",{src:this.state.nftReceived,width:250,height:250}),Object(S.jsx)("h4",{children:"Sent"}),Object(S.jsx)("img",{src:this.state.nftSent,width:250,height:250})]})]})}}]),n}(s.a.Component),X=Object(p.a)({palette:{primary:{main:"#2e1667"},secondary:{main:"#c7d8ed"}},typography:{fontFamily:["Roboto"],h4:{fontWeight:600,fontSize:28,lineHeight:"2rem"},h5:{fontWeight:100,lineHeight:"2rem"}}}),$=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).handleNFTChange=a.handleNFTChange.bind(Object(l.a)(a)),a.handleSwapChange=a.handleSwapChange.bind(Object(l.a)(a)),a.handleUserChange=a.handleUserChange.bind(Object(l.a)(a)),a.state={nftSent:"",currentUser:null,swapId:null,swapUser:null,swapUser2:null,sendFunction:null},a}return Object(o.a)(n,[{key:"handleNFTChange",value:function(e){this.setState({nftSent:e})}},{key:"handleSwapChange",value:function(e,t,n){this.setState({swapId:e,swapUser:t,swapUser2:n})}},{key:"handleUserChange",value:function(e){this.setState({currentUser:e})}},{key:"render",value:function(){var e=this.props.classes;return Object(S.jsx)("div",{className:"App",children:Object(S.jsxs)(h.a,{theme:X,children:[Object(S.jsx)(E,{onFinalUserChange:this.handleUserChange}),Object(S.jsxs)("div",{className:e.wrapper,children:[Object(S.jsx)(m.a,{variant:"h4",className:e.bigSpace,color:"primary",children:"These are the NFTs linked to your wallet"}),Object(S.jsx)(m.a,{variant:"h5",className:e.littleSpace,color:"primary",children:"You can browse these NFTs by clicking on them and selecting which one to trade. The one selected will be displayed by itself and will be tradeable"})]}),Object(S.jsx)(V,{user:this.state.currentUser,onNFTChange:this.handleNFTChange,onSwapChange:this.handleSwapChange}),Object(S.jsx)("div",{className:e.bigSpace,children:Object(S.jsx)(Q,{nftSrc:this.state.nftSent,swapId:this.state.swapId,swapUser:this.state.currentUser,swapUser2:this.state.swapUser2})}),Object(S.jsx)("div",{className:e.bigSpace,children:Object(S.jsx)(z,{})})]})})}}]),n}(s.a.Component),ee=Object(b.a)((function(e){return{wrapper:{width:"65%",margin:"auto",textAlign:"center"},bigSpace:{marginTop:"5rem"},littleSpace:{marginTop:"2.5rem"},grid:{display:"flex",justifyContent:"center",alignItems:"center",flexWrap:"wrap"}}}))($),te=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,788)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,r=t.getLCP,c=t.getTTFB;n(e),a(e),s(e),r(e),c(e)}))};c.a.render(Object(S.jsx)(s.a.StrictMode,{children:Object(S.jsx)(ee,{})}),document.getElementById("root")),te()}},[[764,1,2]]]);
//# sourceMappingURL=main.cb76020c.chunk.js.map