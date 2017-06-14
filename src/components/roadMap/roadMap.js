import React from 'react';
import ReactDOM from 'react-dom';
import './roadMap.css'
import Images from './images'

class RoadMap extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            windowWidth: window.innerWidth,
            mobileNavVisible: false,
        };
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
        const styles = {
          ver_line_div: {
            width: this.state.windowWidth <= 1000 ? window.innerWidth*9/100-17.5 : window.innerWidth*8/100-17.5
          },
          right_div: {
            width: this.state.windowWidth <= 1000 ? window.innerWidth*4/9 : window.innerWidth*4/9
          }
        };
        return <div className="normal">
            <div className="road_normal" style={{width: this.state.windowWidth <= 1200 ? window.innerWidth*9/10 : 1100}}>
              <h1 style={{fontSize: this.state.windowWidth <= 1000 ? 30 : 42}}>IMPLEMENTATION ROADMAP</h1>
              <p style={{fontSize: this.state.windowWidth <= 1000 ? 16 : null}}>High-level strategic and implementation roadmap</p>
              <p style={{display: 'inline-block', fontSize: this.state.windowWidth <= 1000 ? 16 : 18}}>Is something unclear?<br/>Email us at <p style={{display: 'inline-block', fontSize: this.state.windowWidth <= 1000 ? 16 : 18, color: '#4d98ff', cursor: 'pointer'}}>questions@jibrel.network</p></p>
              <table className="table">
                <tr>
                  <td className="td_1">
                  </td>
                  <td className="td_2">
                    <div className="hor_line_div" style={{borderWidth: 0}}/>
                    <div className="ver_div">
                      <div style={styles.ver_line_div} className="ver_line_div">
                        <div className="ver_line" style={{borderWidth: 0}}/>
                      </div>
                      <div className="img_div">
                        <img src={Images.idea}/>
                      </div>
                      <div style={styles.ver_line_div} className="ver_line_div">
                        <div className="ver_line"/>
                      </div>
                    </div>
                    <div className="hor_line_div"/>
                  </td>
                  <td className="td_3">
                    <div style={styles.right_div} className="right_div_1">
                      <div className="text_div_1">IDEATION<div className="text_div_1" style={{fontSize: 12}}>JULY 2016<div className="text_div_2">jibrel is conceptualized as a tool for migrant workers to send money home</div></div></div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="td_1">
                    <div style={styles.right_div} className="right_div_1">
                      <div className="text_div_1">EVOLUTION / EARLY DESIGN<div className="text_div_1" style={{fontSize: 12}}>DECEMBER 2016<div className="text_div_2">jibrel evolves into a full payment/remittance solution</div></div></div>
                    </div>
                  </td>
                  <td className="td_2">
                    <div className="hor_line_div"/>
                    <div className="ver_div">
                      <div style={styles.ver_line_div} className="ver_line_div">
                        <div className="ver_line"/>
                      </div>
                      <div className="img_div">
                        <img src={Images.architecture}/>
                      </div>
                      <div style={styles.ver_line_div} className="ver_line_div">
                        <div className="ver_line" style={{borderWidth: 0}}/>
                      </div>
                    </div>
                    <div className="hor_line_div"/>
                  </td>
                  <td className="td_3">
                  </td>
                </tr>
                <tr>
                  <td className="td_1">
                  </td>
                  <td className="td_2">
                    <div className="hor_line_div"/>
                    <div className="ver_div">
                      <div style={styles.ver_line_div} className="ver_line_div">
                        <div className="ver_line" style={{borderWidth: 0}}/>
                      </div>
                      <div className="img_div">
                        <img src={Images.settings}/>
                      </div>
                      <div style={styles.ver_line_div} className="ver_line_div">
                        <div className="ver_line"/>
                      </div>
                    </div>
                    <div className="hor_line_div"/>
                  </td>
                  <td className="td_3">
                    <div style={styles.right_div} className="right_div_1">
                      <div className="text_div_1">INTERNAL PROOF OF CONCEPT<div className="text_div_1" style={{fontSize: 12}}>MARCH 2017<div className="text_div_2">Internal testing of tethered jiblet tokens and jiblet central bank concept</div></div></div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="td_1">
                  </td>
                  <td className="td_2">
                    <div className="hor_line_div"/>
                    <div className="ver_div">
                      <div style={styles.ver_line_div} className="ver_line_div">
                        <div className="ver_line" style={{borderWidth: 0}}/>
                      </div>
                      <div className="img_div">
                        <img src={Images.wallet}/>
                      </div>
                      <div style={styles.ver_line_div} className="ver_line_div">
                        <div className="ver_line"/>
                      </div>
                    </div>
                    <div className="hor_line_div"/>
                  </td>
                  <td className="td_3">
                    <div style={styles.right_div} className="right_div_1">
                      <div className="text_div_1">P2P FIAT WALLET EARLY DESIGN<div className="text_div_1" style={{fontSize: 12}}>APRIL 2017<div className="text_div_2">early development of front-end client(UI - no logic)</div></div></div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="td_1">
                    <div style={styles.right_div} className="right_div_1">
                      <div className="text_div_1">INCORPORATION OF QUBIST LABS / ORGANIZATIONAL ROADMAP<div className="text_div_1" style={{fontSize: 12}}>MAY 2017<div className="text_div_2">company incorporation and organizational/legal roadmap definition</div></div></div>
                    </div>
                  </td>
                  <td className="td_2">
                    <div className="hor_line_div"/>
                    <div className="ver_div">
                      <div style={styles.ver_line_div} className="ver_line_div">
                        <div className="ver_line"/>
                      </div>
                      <div className="img_div">
                        <img src={Images.diploma}/>
                      </div>
                      <div style={styles.ver_line_div} className="ver_line_div">
                        <div className="ver_line" style={{borderWidth: 0}}/>
                      </div>
                    </div>
                    <div className="hor_line_div"/>
                  </td>
                  <td className="td_3">
                  </td>
                </tr>
                <tr>
                  <td className="td_1">
                  </td>
                  <td className="td_2">
                    <div className="hor_line_div"/>
                    <div className="ver_div">
                      <div style={styles.ver_line_div} className="ver_line_div">
                        <div className="ver_line" style={{borderWidth: 0}}/>
                      </div>
                      <div className="img_div">
                        <img src={Images.text_document}/>
                      </div>
                      <div style={styles.ver_line_div} className="ver_line_div">
                        <div className="ver_line"/>
                      </div>
                    </div>
                    <div className="hor_line_div"/>
                  </td>
                  <td className="td_3">
                    <div style={styles.right_div} className="right_div_1">
                      <div className="text_div_1">PUBLICATION OF WHITE PAPER<div className="text_div_1" style={{fontSize: 12}}>MAY 2017<div className="text_div_2">release of jibrel/proof of capital adequacy white paper</div></div></div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="td_1">
                    <div style={styles.right_div} className="right_div_1">
                      <div className="text_div_1">LAUNCH OF WEBSITE/BOUNTY CAMPAIGNS<div className="text_div_1" style={{fontSize: 12}}>JUNE 2017<div className="text_div_2">jibrel makes first contact and finds a place to call home on the blockchain</div></div></div>
                    </div>
                  </td>
                  <td className="td_2">
                    <div className="hor_line_div"/>
                    <div className="ver_div">
                      <div style={styles.ver_line_div} className="ver_line_div">
                        <div className="ver_line"/>
                      </div>
                      <div className="img_div">
                        <img src={Images.home}/>
                      </div>
                      <div style={styles.ver_line_div} className="ver_line_div">
                        <div className="ver_line" style={{borderWidth: 0}}/>
                      </div>
                    </div>
                    <div className="hor_line_div"/>
                  </td>
                  <td className="td_3">
                  </td>
                </tr>

                <tr>
                  <td className="td_1">
                  </td>
                  <td className="td_2">
                    <div className="hor_line_div_gray"/>
                    <div className="ver_div">
                      <div style={styles.ver_line_div} className="ver_line_div">
                        <div className="ver_line_gray" style={{borderWidth: 0}}/>
                      </div>
                      <div className="img_div_gray">
                        <img className="img_gray" src={Images.get_money}/>
                      </div>
                      <div style={styles.ver_line_div} className="ver_line_div">
                        <div className="ver_line_gray"/>
                      </div>
                    </div>
                    <div className="hor_line_div_gray"/>
                  </td>
                  <td className="td_3">
                    <div style={styles.right_div} className="right_div_1_gray">
                      <div className="text_div_1_gray">REGISTRATION OF THE JIBREL FOUNDATION<div className="text_div_1_gray" style={{fontSize: 12}}>JULY 2017<div className="text_div_2">jibrel foundation incorporation in Zug, Switzerland</div></div></div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="td_1">
                    <div style={styles.right_div} className="right_div_1_gray">
                      <div className="text_div_1_gray">INITIAL COIN OFFERING(ICO)<div className="text_div_1_gray" style={{fontSize: 12}}>AUGUST 2017<div className="text_div_2">jibrel network foundation fundraiser</div></div></div>
                    </div>
                  </td>
                  <td className="td_2">
                    <div className="hor_line_div_gray"/>
                    <div className="ver_div">
                      <div style={styles.ver_line_div} className="ver_line_div">
                        <div className="ver_line_gray"/>
                      </div>
                      <div className="img_div_gray">
                        <img className="img_gray" src={Images.Jibrel_Logo}/>
                      </div>
                      <div style={styles.ver_line_div} className="ver_line_div">
                        <div className="ver_line_gray" style={{borderWidth: 0}}/>
                      </div>
                    </div>
                    <div className="hor_line_div_gray"/>
                  </td>
                  <td className="td_3">
                  </td>
                </tr>
                <tr>
                  <td className="td_1">
                  </td>
                  <td className="td_2">
                    <div className="hor_line_div_gray"/>
                    <div className="ver_div">
                      <div style={styles.ver_line_div} className="ver_line_div">
                        <div className="ver_line_gray" style={{borderWidth: 0}}/>
                      </div>
                      <div className="img_div_gray">
                        <img className="img_gray" src={Images.smartphone}/>
                      </div>
                      <div style={styles.ver_line_div} className="ver_line_div">
                        <div className="ver_line_gray"/>
                      </div>
                    </div>
                    <div className="hor_line_div_gray"/>
                  </td>
                  <td className="td_3">
                    <div style={styles.right_div} className="right_div_1_gray">
                      <div className="text_div_1_gray">POCA WALLET LIMITED BETA<div className="text_div_1_gray" style={{fontSize: 12}}>SEPTEMBER 2017<div className="text_div_2">limited beta of poca wallet for testing</div></div></div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="td_1">
                    <div style={styles.right_div} className="right_div_1_gray">
                      <div className="text_div_1_gray">JIBREL PLATFORM ALPHA<div className="text_div_1_gray" style={{fontSize: 12}}>DECEMBER 2017<div className="text_div_2">limited demo of jibrel trading platform</div></div></div>
                    </div>
                  </td>
                  <td className="td_2">
                    <div className="hor_line_div_gray"/>
                    <div className="ver_div">
                      <div style={styles.ver_line_div} className="ver_line_div">
                        <div className="ver_line_gray"/>
                      </div>
                      <div className="img_div_gray">
                        <img className="img_gray" src={Images.switch_1}/>
                      </div>
                      <div style={styles.ver_line_div} className="ver_line_div">
                        <div className="ver_line_gray" style={{borderWidth: 0}}/>
                      </div>
                    </div>
                    <div className="hor_line_div_gray"/>
                  </td>
                  <td className="td_3">
                  </td>
                </tr>
                <tr>
                  <td className="td_1">
                  </td>
                  <td className="td_2">
                    <div className="hor_line_div_gray"/>
                    <div className="ver_div">
                      <div style={styles.ver_line_div} className="ver_line_div">
                        <div className="ver_line_gray" style={{borderWidth: 0}}/>
                      </div>
                      <div className="img_div_gray">
                        <img className="img_gray" src={Images.balance}/>
                      </div>
                      <div style={styles.ver_line_div} className="ver_line_div">
                        <div className="ver_line_gray"/>
                      </div>
                    </div>
                    <div className="hor_line_div_gray"/>
                  </td>
                  <td className="td_3">
                    <div style={styles.right_div} className="right_div_1_gray">
                      <div className="text_div_1_gray">FULL LEGAL, COMPLIANCE AND REGULATORY BUILD-OUT<div className="text_div_1_gray" style={{fontSize: 12}}>Q1 2018<div className="text_div_2">obtain necessary legal and regulatory paperwork to commercially launch</div></div></div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="td_1">
                    <div style={styles.right_div} className="right_div_1_gray">
                      <div className="text_div_1_gray">JIBREL NETWORK & POCA WALLET LAUNCH<div className="text_div_1_gray" style={{fontSize: 12}}>Q1 2018<div className="text_div_2">full launch of jibrel remittance and payment network/poca wallet</div></div></div>
                    </div>
                  </td>
                  <td className="td_2">
                    <div className="hor_line_div_gray"/>
                    <div className="ver_div">
                      <div style={styles.ver_line_div} className="ver_line_div">
                        <div className="ver_line_gray"/>
                      </div>
                      <div className="img_div_gray">
                        <img className="img_gray" src={Images.rocket_launch}/>
                      </div>
                      <div style={styles.ver_line_div} className="ver_line_div">
                        <div className="ver_line_gray" style={{borderWidth: 0}}/>
                      </div>
                    </div>
                    <div className="hor_line_div_gray"/>
                  </td>
                  <td className="td_3">
                  </td>
                </tr>
              </table>

              <table className="table">
                <tr style={{height:10}}>
                  <td className="td_1_sub">
                  </td>
                  <td className="td_2_sub">
                    <div className="line_div"/>
                  </td>
                  <td className="td_3_sub">
                    <div className="text_div_1" style={{fontSize: 12, marginLeft: 10}}>Milestone A - 300 MN JNT Sold</div>
                  </td>
                </tr>
              </table>

              <table className="table">
                <tr>
                  <td className="td_1">
                  </td>
                  <td className="td_2">
                    <div className="hor_line_div_gray"/>
                    <div className="ver_div">
                      <div style={styles.ver_line_div} className="ver_line_div">
                        <div className="ver_line_gray" style={{borderWidth: 0}}/>
                      </div>
                      <div className="img_div_gray">
                        <img className="img_gray" src={Images.Jibrel_Logo}/>
                      </div>
                      <div style={styles.ver_line_div} className="ver_line_div">
                        <div className="ver_line_gray"/>
                      </div>
                    </div>
                    <div className="hor_line_div_gray"/>
                  </td>
                  <td className="td_3">
                    <div style={styles.right_div} className="right_div_1_gray">
                      <div className="text_div_1_gray">BUILD-OUT OF FIRST OF THREE JIBREL EXCHANGES<div className="text_div_1_gray" style={{fontSize: 12}}>Q2 2018<div className="text_div_2">build-out jibrel exchange along remittance corridor(e.g.UAE - India)</div></div></div>
                    </div>
                  </td>
                </tr>
              </table>

              <table className="table">
                <tr style={{height:10}}>
                  <td className="td_1_sub">
                    <div className="text_div_1" style={{textAlign: 'right', marginRight: 10, fontSize: 12}}>Milestone B - 600 MN JNT Sold</div>
                  </td>
                  <td className="td_2_sub">
                    <div className="line_div"/>
                  </td>
                  <td className="td_3_sub">
                  </td>
                </tr>
              </table>

              <table className="table">
                <tr>
                  <td className="td_1">
                    <div style={styles.right_div} className="right_div_1_gray">
                      <div className="text_div_1_gray">BECOME A FULLY REGULATED FINANCIAL INSTITUTION<div className="text_div_1_gray" style={{fontSize: 12}}>Q3 2018<div className="text_div_2">fully build-out jibrel central bank, facilitating new use-cases (hedging)</div></div></div>
                    </div>
                  </td>
                  <td className="td_2">
                    <div className="hor_line_div_gray"/>
                    <div className="ver_div">
                      <div style={styles.ver_line_div} className="ver_line_div">
                        <div className="ver_line_gray"/>
                      </div>
                      <div className="img_div_gray">
                        <img className="img_gray" src={Images.bank}/>
                      </div>
                      <div style={styles.ver_line_div} className="ver_line_div">
                        <div className="ver_line_gray" style={{borderWidth: 0}}/>
                      </div>
                    </div>
                    <div className="hor_line_div_gray"/>
                  </td>
                  <td className="td_3">
                  </td>
                </tr>
              </table>

              <table className="table" style={{marginBottom: 30}}>
                <tr style={{height:10}}>
                  <td className="td_1_sub">
                  </td>
                  <td className="td_2_sub">
                    <div className="line_div"/>
                  </td>
                  <td className="td_3_sub">
                    <div className="text_div_1" style={{fontSize: 12, marginLeft: 10}}>Milestone A - 1200 MN JNT Sold</div>
                  </td>
                </tr>
              </table>

            </div>
        </div>
    }
}

export default RoadMap;
