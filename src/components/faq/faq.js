import React from 'react';
import ReactDOM from 'react-dom';
import './faq.css'
import Images from './images'

class FAQ extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            windowWidth: window.innerWidth,
            mobileNavVisible: false,
            organization: false,
            jibrel: false,
            qubist: false,
            help: false
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
        return <div className="normal">
            <div className="faq_normal"  style={{width: this.state.windowWidth <= 1200 ? window.innerWidth*9/10 : 1100}}>
              <h1 style={{fontSize: this.state.windowWidth <= 1000 ? 30 : 42}}>FREQUENTLY ASKED QUESTIONS (FAQ)</h1>
              <p style={{fontSize: this.state.windowWidth <= 1000 ? 16 : null}}>Commonly asked questions about the jibrel network and their respective answers</p>
              <p style={{display: 'inline-block', fontSize: this.state.windowWidth <= 1000 ? 16 : 18}}>Did we miss something?<br/>Email us at <p style={{display: 'inline-block', fontSize: this.state.windowWidth <= 1000 ? 16 : 18, color: '#4d98ff', cursor: 'pointer'}}>questions@jibrel.network</p></p>

              <div className="box_div" style={{fontSize: this.state.windowWidth <= 1000 ? 18 : null}}>
                ORGANIZATION
                <img src={this.state.organization ? Images.close : Images.add} className="img_icon" style={{position: 'absolute', right: 10, marginTop: 9}} onClick={e=>this.setState({organization: !this.state.organization})}/>
              </div>
              {
                this.state.organization ? (
                  <div>
                    <div className="box_div_gray" style={{fontSize: this.state.windowWidth <= 1000 ? 18 : null}}>
                      what is the jibrel network?
                      <img src={this.state.jibrel ? Images.close_gray : Images.add_gray} className="img_icon" style={{position: 'absolute', right: 10, marginTop: 9}} onClick={e=>this.setState({jibrel: !this.state.jibrel})}/>
                    </div>
                    {
                      this.state.jibrel ? (
                        <div className="description_div" style={{fontSize: this.state.windowWidth <= 1000 ? 18 : 22}}>
                          Jibrel network is a foundation aimed at facilitating easier movement of money in developing and emerging markets. Jibrel is dedicated to transparency and fairness. Jibrel is fully compliant with all relevant anti-money laundering (AML), know-your-customer (KYC) and know-your-business (KYB) regulations
                        </div>
                      ) : null
                    }

                    <div className="box_div_gray" style={{fontSize: this.state.windowWidth <= 1000 ? 18 : null}}>
                      who is qubist labs?
                      <img src={this.state.qubist ? Images.close_gray : Images.add_gray} className="img_icon" style={{position: 'absolute', right: 10, marginTop: 9}} onClick={e=>this.setState({qubist: !this.state.qubist})}/>
                    </div>
                    {
                      this.state.qubist ? (
                        <div className="description_div" style={{fontSize: this.state.windowWidth <= 1000 ? 18 : 22}}>
                          Jibrel network is a foundation aimed at facilitating easier movement of money in developing and emerging markets. Jibrel is dedicated to transparency and fairness. Jibrel is fully compliant with all relevant anti-money laundering (AML), know-your-customer (KYC) and know-your-business (KYB) regulations
                        </div>
                      ) : null
                    }

                    <div className="box_div_gray" style={{fontSize: this.state.windowWidth <= 1000 ? 18 : null, marginBottom: 10}}>
                      are you looking for help?
                      <img src={this.state.help ? Images.close_gray : Images.add_gray} className="img_icon" style={{position: 'absolute', right: 10, marginTop: 9}} onClick={e=>this.setState({help: !this.state.help})}/>
                    </div>
                    {
                      this.state.help ? (
                        <div className="description_div" style={{fontSize: this.state.windowWidth <= 1000 ? 18 : 22}}>
                          Jibrel network is a foundation aimed at facilitating easier movement of money in developing and emerging markets. Jibrel is dedicated to transparency and fairness. Jibrel is fully compliant with all relevant anti-money laundering (AML), know-your-customer (KYC) and know-your-business (KYB) regulations
                        </div>
                      ) : null
                    }
                  </div>
                ) : null
              }

              <div className="box_div" style={{fontSize: this.state.windowWidth <= 1000 ? 18 : null}}>
                JIBREL NETWORK TOKENS & JIBLETS
                <img src={this.state.tokens ? Images.close : Images.add} className="img_icon" style={{position: 'absolute', right: 10, marginTop: 9}} onClick={e=>this.setState({tokens: !this.state.tokens})}/>
              </div>
              {
                this.state.tokens ? (
                  <div className="description_div" style={{fontSize: this.state.windowWidth <= 1000 ? 18 : 22}}>
                    Jibrel network is a foundation aimed at facilitating easier movement of money in developing and emerging markets. Jibrel is dedicated to transparency and fairness. Jibrel is fully compliant with all relevant anti-money laundering (AML), know-your-customer (KYC) and know-your-business (KYB) regulations
                  </div>
                ) : null
              }

              <div className="box_div" style={{fontSize: this.state.windowWidth <= 1000 ? 18 : null, marginBottom: !this.state.fundraising ? 30 : null}}>
                FUNDRAISING / ICO
                <img src={this.state.fundraising ? Images.close : Images.add} className="img_icon" style={{position: 'absolute', right: 10, marginTop: 9}} onClick={e=>this.setState({fundraising: !this.state.fundraising})}/>
              </div>
              {
                this.state.fundraising ? (
                  <div className="description_div" style={{fontSize: this.state.windowWidth <= 1000 ? 18 : 22}}>
                    Jibrel network is a foundation aimed at facilitating easier movement of money in developing and emerging markets. Jibrel is dedicated to transparency and fairness. Jibrel is fully compliant with all relevant anti-money laundering (AML), know-your-customer (KYC) and know-your-business (KYB) regulations
                  </div>
                ) : null
              }

            </div>
        </div>
    }
}

export default FAQ;
