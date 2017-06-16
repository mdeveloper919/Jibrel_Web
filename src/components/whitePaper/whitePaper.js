import React from 'react';
import ReactDOM from 'react-dom';
import './whitePaper.css'

import Abstract from './abstract'
import Ethereum from './ethereum'
import Tethered from './tethered'
import Exchange from './exchange'
import Publicblockchain from './publicblockchain'
import Implementation from './implementation'
import Security from './security'
import Traditional from './traditional'
import Systemarch from './systemarch'
import Guarantor from './guarantor'
import Applayer from './applayer'
import Ownershipint from './ownershipint'
import Ownershipstep from './ownershipstep'
import Ownershipout from './ownershipout'
import Fees from './fees'
import Oversight from './oversight'
import Ethbc from './ethbc'
import Crydr from './crydr'
import Curr from './curr'
import Moneymark from './moneymark'
import Otherfi from './otherfi'
import Jdb from './jdb'
import Assetport from './assetport'
import Jnt from './jnt'
import Infrastructure from './infrastructure'
import Onchain from './onchain'
import Crydrcontract from './crydrcontract'
import Jdbsc from './infrastructure'
import Bodc from './bodc'
import Utils from './utils'
import Offchain from './offchain'
import Libraries from './libraries'
import Crydrex from './crydrex'
import Toolkit from './toolkit'
import Decentralize from './decentralize'
import Selfservice from './selfservice'
import Bodao from './bodao'
import Digid from './digid'
import Usecase from './usecase'
import Tradex from './tradex'
import Invest from './invest'
import Hedge from './hedge'
import Globaltrans from './globaltrans'
import Remittances from './remittances'
import Crossborder from './crossborder'
import Currency from './currency'
import Merchant from './merchant'
import Uniwallet from './uniwallet'
import Refer from './refer'



import use_case_1 from '../../resources/use-case-1.png';
import use_case_2 from '../../resources/use-case-2.png';

class WhitePaper extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            windowWidth: window.innerWidth,
            mobileNavVisible: false,
        };
        console.log(window.innerWidth)
    };

    handleResize(){
        this.setState({
            windowWidth: window.innerWidth,
        });
    }

    componentWillMount(){
        this.handleResize();
    }

    componentDidMount() {
        window.addEventListener('resize', this.handleResize=()=>{this.setState({windowWidth: window.innerWidth})});
        window.addEventListener('resize', this.handleResize=()=>{
          if(window.innerWidth <= 1000 && this.state.mobileNavVisible){
            this.setState({mobileNavVisible: true})
          }else{
            this.setState({mobileNavVisible: false})
          }
        });
    }

    componentWillUnmount(){
        window.removeEventListener('resize', this.handleResize=()=>{this.setState({windowWidth: window.innerWidth})});
        window.removeEventListener('resize', this.handleResize=()=>{
          if(window.innerWidth <= 1000 && this.state.mobileNavVisible){
            this.setState({mobileNavVisible: true})
          }else{
            this.setState({mobileNavVisible: false})
          }
        });
    }

    render() {
        return <div className="normal">
            <div className="white_normal" style={{width: this.state.windowWidth <= 1200 ? window.innerWidth*9/10 : 1100}}>
              <h1 style={{fontSize: this.state.windowWidth <= 1000 ? 30 : 42}}>JIBREL NETWORK</h1>
              <p style={{fontSize: this.state.windowWidth <= 1000 ? 16 : null}}>A network to trade and store traditional financial assets on the blockchain</p>
              <p style={{display: 'inline-block', fontSize: this.state.windowWidth <= 1000 ? 16 : 18}}>Download the <a href="https://github.com/Yazan24/jibrelweb/raw/gh-pages/whitepaper.pdf" download="whitepaper"><p style={{display: 'inline-block', fontSize: this.state.windowWidth <= 1000 ? 16 : 18, color: '#4d98ff', cursor: 'pointer'}}>PDF Version</p></a></p>
              <li className="abstract" style={{marginTop: 20, marginBottom: 20, fontWeight: 700, color: '#d3d3d3', width: '100%', textAlign: 'center'}}>ABSTRACT</li>
              <div style={{width: '100%', textAlign: 'center'}}>
              {Abstract.split("\n").map(i => {
                  return <li className="abstract" style={{width: this.state.windowWidth <= 700 ? window.innerWidth*9/10 : 650}}>{i}</li>;
              })}
              </div>

              <h1 style={{fontSize: this.state.windowWidth <= 1000 ? 26 : null, marginTop: 75}}>1. INTRODUCTION</h1>

              {Ethereum.split("\n").map(i => {
                  return <li className="title_p">{i}</li>;
              })}



              <h1 style={{fontSize: this.state.windowWidth <= 1000 ? 26 : null}}>2. TRADITIONAL ASSET-BACKED TOKENS</h1>

              {Traditional.split("\n").map(i => {
                  return <li className="title_p">{i}</li>;
              })}



              <h1 style={{fontSize: this.state.windowWidth <= 1000 ? 26 : null}}>3. SYSTEM ARCHITECTURE</h1>

              {Systemarch.split("\n").map(i => {
                  return <li className="title_p">{i}</li>;
              })}

              <li className="title_pp" style={{fontSize: 18, marginTop: 40, marginBottom: 20}}>3.1 Public Blockchain</li>

              {Publicblockchain.split("\n").map(i => {
                  return <li className="title_p">{i}</li>;
              })}

              <li className="title_pp" style={{fontSize: 18, marginTop: 40, marginBottom: 20}}>3.2 Cryptocurrency Exchanges</li>

              {Exchange.split("\n").map(i => {
                  return <li className="title_p">{i}</li>;
              })}


              <li className="title_pp" style={{fontSize: 18, marginTop: 40, marginBottom: 20}}>3.3 Tethered Tokens</li>

              {Tethered.split("\n").map(i => {
                  return <li className="title_p">{i}</li>;
              })}


              <li className="title_pp" style={{fontSize: 18, marginTop: 0, marginBottom: 20}}>3.4 Guarantor</li>

              {Guarantor.split("\n").map(i => {
                  return <li className="title_p">{i}</li>;
              })}


              <li className="title_pp" style={{fontSize: 18, marginTop: 40, marginBottom: 20}}>3.5 Application Layer, Libraries & Templates</li>

              {Applayer.split("\n").map(i => {
                  return <li className="title_p">{i}</li>;
              })}


              <li className="title_pp" style={{fontSize: 18, marginTop: 40, marginBottom: 20}}>3.6 Ownership & Transfers</li>

              {Ownershipint.split("\n").map(i => {
                  return <li className="title_p">{i}</li>;
              })}

              {Ownershipstep.split("\n").map(i => {
                  return <li className="title_p">{i}</li>;
              })}

              {Ownershipout.split("\n").map(i => {
                  return <li className="title_p">{i}</li>;
              })}


              <li className="title_pp" style={{fontSize: 18, marginTop: 40, marginBottom: 20}}>3.7 Fees & Charges</li>

              {Fees.split("\n").map(i => {
                  return <li className="title_p">{i}</li>;
              })}

              <li className="title_pp" style={{fontSize: 18, marginTop: 40, marginBottom: 20}}>3.8 Oversight / Regulation</li>

              {Oversight.split("\n").map(i => {
                  return <li className="title_p">{i}</li>;
              })}



              <h1 style={{fontSize: this.state.windowWidth <= 1000 ? 26 : null}}>4. JIBREL NETWORK IMPLEMENTATION</h1>

              {Implementation.split("\n").map(i => {
                  return <li className="title_p">{i}</li>;
              })}

              <li className="title_pp" style={{fontSize: 18, marginTop: 40, marginBottom: 20}}>4.1 Ethereum Blockchain</li>

              {Ethbc.split("\n").map(i => {
                  return <li className="title_p">{i}</li>;
              })}

              <li className="title_pp" style={{fontSize: 18, marginTop: 40, marginBottom: 20}}>4.2 Crypto Depository Receipts (CryDR)</li>

              {Crydr.split("\n").map(i => {
                  return <li className="title_p">{i}</li>;
              })}

              <li className="title_sp" style={{fontSize: 18, marginTop: 40, marginBottom: 20}}>4.2.1 Currencies / Fiat (CryDR)</li>

              {Curr.split("\n").map(i => {
                  return <li className="title_p">{i}</li>;
              })}

              <li className="title_sp" style={{fontSize: 18, marginTop: 40, marginBottom: 20}}>4.2.2 Money Market Instruments</li>

              {Moneymark.split("\n").map(i => {
                  return <li className="title_p">{i}</li>;
              })}

              <li className="title_sp" style={{fontSize: 18, marginTop: 40, marginBottom: 20}}>4.2.3 Other Financial Instruments</li>

              {Otherfi.split("\n").map(i => {
                  return <li className="title_p">{i}</li>;
              })}

              <li className="title_pp" style={{fontSize: 18, marginTop: 40, marginBottom: 20}}>4.3 Jibrel Decentral Bank (JDB)</li>

              {Jdb.split("\n").map(i => {
                  return <li className="title_p">{i}</li>;
              })}

              <li className="title_pp" style={{fontSize: 18, marginTop: 40, marginBottom: 20}}>4.4 Asset Portals</li>

              {Assetport.split("\n").map(i => {
                  return <li className="title_p">{i}</li>;
              })}

              <li className="title_pp" style={{fontSize: 18, marginTop: 40, marginBottom: 20}}>4.5 Jibrel Network Token (JNT)</li>

              {Jnt.split("\n").map(i => {
                  return <li className="title_p">{i}</li>;
              })}


              <h1 style={{fontSize: this.state.windowWidth <= 1000 ? 26 : null}}>5. INFRASTRUCTURE</h1>

              {Infrastructure.split("\n").map(i => {
                  return <li className="title_p">{i}</li>;
              })}

              <li className="title_pp" style={{fontSize: 18, marginTop: 40, marginBottom: 20}}>5.1 On-chain Infrastructure</li>

              {Onchain.split("\n").map(i => {
                  return <li className="title_p">{i}</li>;
              })}


              <li className="title_sp" style={{fontSize: 18, marginTop: 40, marginBottom: 20}}>5.1.1 CryDR Smart Contracts</li>

              {Crydrcontract.split("\n").map(i => {
                  return <li className="title_p">{i}</li>;
              })}


              <li className="title_sp" style={{fontSize: 18, marginTop: 40, marginBottom: 20}}>5.1.2 Jibrel Decentral Bank Smart Contract</li>

              {Jdbsc.split("\n").map(i => {
                  return <li className="title_p">{i}</li>;
              })}




              <li className="title_sp" style={{fontSize: 18, marginTop: 40, marginBottom: 20}}>5.1.3 Board of Directors Smart Contract</li>

              {Bodc.split("\n").map(i => {
                  return <li className="title_p">{i}</li>;
              })}


              <li className="title_sp" style={{fontSize: 18, marginTop: 40, marginBottom: 20}}>5.1.3 Helpers / Utils (Auxilary Smart Contracts) (BODC)</li>

              {Utils.split("\n").map(i => {
                  return <li className="title_p">{i}</li>;
              })}


              <li className="title_pp" style={{fontSize: 18, marginTop: 40, marginBottom: 20}}>5.2 Off-chain Infrastructure</li>

              {Offchain.split("\n").map(i => {
                  return <li className="title_p">{i}</li>;
              })}


              <li className="title_sp" style={{fontSize: 18, marginTop: 40, marginBottom: 20}}>5.2.1 Libraries & Templates</li>

              {Libraries.split("\n").map(i => {
                  return <li className="title_p">{i}</li>;
              })}




              <li className="title_sp" style={{fontSize: 18, marginTop: 40, marginBottom: 20}}>5.2.2 CryDR Explorer</li>

              {Crydrex.split("\n").map(i => {
                  return <li className="title_p">{i}</li>;
              })}




              <li className="title_sp" style={{fontSize: 18, marginTop: 40, marginBottom: 20}}>5.2.3 Board of Director Tool-kit</li>

              {Toolkit.split("\n").map(i => {
                  return <li className="title_p">{i}</li>;
              })}

              <h1 style={{fontSize: this.state.windowWidth <= 1000 ? 26 : null}}>6. FULLY DECENTRALIZED OPERATIONS</h1>

              {Decentralize.split("\n").map(i => {
                  return <li className="title_p">{i}</li>;
              })}

              <li className="title_pp" style={{fontSize: 18, marginTop: 40, marginBottom: 20}}>6.1 Self-service Portals</li>

              {Selfservice.split("\n").map(i => {
                  return <li className="title_p">{i}</li>;
              })}


              <li className="title_pp" style={{fontSize: 18, marginTop: 40, marginBottom: 20}}>6.2 Board of Directors DAO</li>

              {Bodao.split("\n").map(i => {
                  return <li className="title_p">{i}</li>;
              })}


              <li className="title_pp" style={{fontSize: 18, marginTop: 40, marginBottom: 20}}>6.3 On-chain Digital Identity / KYC / AML</li>

              {Digid.split("\n").map(i => {
                  return <li className="title_p">{i}</li>;
              })}

              <h1 style={{fontSize: this.state.windowWidth <= 1000 ? 26 : null}}>7. USE-CASES</h1>

              {Usecase.split("\n").map(i => {
                  return <li className="title_p">{i}</li>;
              })}

              <li className="title_pp" style={{fontSize: 18, marginTop: 40, marginBottom: 20}}>7.1 Traditional / Digital Asset Exchange</li>

              {Tradex.split("\n").map(i => {
                  return <li className="title_p">{i}</li>;
              })}


              <li className="title_sp" style={{fontSize: 18, marginTop: 40, marginBottom: 20}}>7.1.1 Investment Platform</li>

              {Invest.split("\n").map(i => {
                  return <li className="title_p">{i}</li>;
              })}


              <li className="title_sp" style={{fontSize: 18, marginTop: 40, marginBottom: 20}}>7.1.2 Hedging Tokens</li>

              {Hedge.split("\n").map(i => {
                  return <li className="title_p">{i}</li>;
              })}

              <li className="title_pp" style={{fontSize: 18, marginTop: 40, marginBottom: 20}}>7.2 Global Transfers</li>

              {Globaltrans.split("\n").map(i => {
                  return <li className="title_p">{i}</li>;
              })}


              <li className="title_sp" style={{fontSize: 18, marginTop: 40, marginBottom: 20}}>7.1.1 Remittances</li>

              {Remittances.split("\n").map(i => {
                  return <li className="title_p">{i}</li>;
              })}


              <li className="title_sp" style={{fontSize: 18, marginTop: 40, marginBottom: 20}}>7.1.2 Universal Wallet</li>

              {Uniwallet.split("\n").map(i => {
                  return <li className="title_p">{i}</li>;
              })}

              <li className="title_pp" style={{fontSize: 18, marginTop: 40, marginBottom: 20}}>7.3 Cross-border Payments</li>

              {Crossborder.split("\n").map(i => {
                  return <li className="title_p">{i}</li>;
              })}


              <li className="title_sp" style={{fontSize: 18, marginTop: 40, marginBottom: 20}}>7.3.1 Currency API</li>

              {Currency.split("\n").map(i => {
                  return <li className="title_p">{i}</li>;
              })}


              <li className="title_sp" style={{fontSize: 18, marginTop: 40, marginBottom: 20}}>7.3.2 Merchant API</li>

              {Merchant.split("\n").map(i => {
                  return <li className="title_p">{i}</li>;
              })}

              <h1 style={{fontSize: this.state.windowWidth <= 1000 ? 26 : null}}>8. REFERENCES</h1>

              {Refer.split("\n").map(i => {
                  return <li className="refer_p">{i}</li>;
              })}


            </div>
        </div>
    }
}

export default WhitePaper;
