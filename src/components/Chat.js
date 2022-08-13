import React from "react";
import { Peer } from "peerjs";

class Chat extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            myId: '',
            friendId: '',
            peer: {},
            message: '',
            messages: [],
            nftSent: '',
            nftReceived: '',
            swapIdSent: null,
            swapUserSent: null,
            swapUser2Sent: null,
            swapId: null,
            swapUser: null,
            swapUser2: null,
            visited: false
        };
    }

    /*componentDidMount() {
        const peer = new Peer(this.state.swapUserSent);

        peer.on('open', (id) => {
            this.setState({
                myId: id,
                peer: peer
            });
        });

        peer.on("connection", (conn) => {
            conn.on("data", (data) => {
                console.log(data);
                this.setState({
                    nftReceived: data.nft,
                    swapId: data.swapId,
                    messages: [...this.state.messages, data]
                });
                console.log(this.state);
            });
        });

    }*/

    connect = () => {
        const peer = new Peer(this.state.swapUserSent);

        peer.on('open', (id) => {
            this.setState({
                myId: id,
                peer: peer
            });
        });

        peer.on("connection", (conn) => {
            conn.on("data", (data) => {
                console.log(data);
                this.setState({
                    nftReceived: data.nft,
                    swapId: data.swapId,
                    messages: [...this.state.messages, data]
                });
                console.log(this.state);
            });
        });

    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.nftSent !== this.state.nftSent) { 
            this.send();
        }
        
        if (this.state.visited == false) { 
            this.setState({visited: true});
            this.connect();
        }
      }

    send = () => {
        const conn = this.state.peer.connect(this.state.friendId);

        conn.on('open', () => {

            const msgObj = {
                sender: this.state.myId,
                message: this.state.message,
                nft: this.state.nftSent,
                swapId: this.state.swapIdSent
            };


            conn.send(msgObj);

            this.setState({
                messages: [...this.state.messages, msgObj],
                message: ''
            });

        });
    }

    render() {
        this.state.nftSent = this.props.nftSrc;
        this.state.swapIdSent = this.props.swapId;
        this.state.swapUserSent = this.props.swapUser;
        this.state.swapUser2Sent = this.props.swapUser2;
        return (
            <div className="wrapper">

                <h1>The chatting service</h1>

                <div className="col">

                    <h3>Your Room ID : {this.state.myId} </h3>

                    Connect to:
                    <input
                        type="text"
                        value={this.state.friendId}
                        onChange={e => { this.setState({ friendId: e.target.value }); }} />
                    <br />

                    <label>Message:</label>
                    <input
                        type="text"
                        value={this.state.message}
                        onChange={e => { this.setState({ message: e.target.value }); }} />
                    <button onClick={this.send}>Send</button>

                    {
                        this.state.messages.map((message, i) => {
                            return (
                                <div key={i}>
                                    <h3>{message.sender}:</h3>
                                    <p>{message.message}</p>
                                </div>
                            )
                        })
                    }
                    <h3>Your swap ID : {this.state.swapId || this.state.swapIdSent} </h3>
                </div>
                <div className="col">
                    <h3>Buying the following NFT</h3>
                    <h4>Received</h4>
                    <img src={this.state.nftReceived} width={250} height={250} />
                    <h4>Sent</h4>
                    <img src={this.state.nftSent} width={250} height={250} />
                </div>
            </div>

        );
    }
}

export default Chat;