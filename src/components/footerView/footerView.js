import React from 'react';
import ReactDOM from 'react-dom';
import Images from './images'
import './footerView.css'

import { BrowserRouter, Route, Link } from 'react-router-dom'

var Scroll  = require('react-scroll');
var scroll     = Scroll.animateScroll;

class FooterView extends React.Component {
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
      if(this.state.windowWidth <= 1000) {
          return <div className="footer_normal">
                    <div className="footer_div_mobile">
                      <div className="footer_view_mobile">
                        <div className="logo-div-mobile">
                          <img src={Images.Jibrel_Black}/>Jibrel
                          <div className="footer_icon_div">Copyright © 2017 Jibrel. All rights reserved.</div>
                        </div>
                        <div className="right-div-mobile">
                          Network
                          <div className="item-div"><Link to="/whitePaper" onClick={() => scroll.scrollTo(0)} className="item-link">White Paper</Link></div>
                          <div className="item-div"><Link to="/roadMap" onClick={() => scroll.scrollTo(0)} className="item-link">Roadmap</Link></div>
                          <div className="item-div"><Link to="/faq" onClick={() => scroll.scrollTo(0)} className="item-link">FAQ</Link></div>
                          <div className="item-div"><Link to="/about" onClick={() => scroll.scrollTo(0)} className="item-link">About</Link></div>
                          <div className="item-div"><Link to="/pocaWallet" onClick={() => scroll.scrollTo(0)} className="item-link">Poca Wallet</Link></div>
                        </div>
                        <div className="right-div-mobile">
                          Community
                          <div className="item-div"><img src={Images.twitter_logo_1}/>Twitter</div>
                          <div className="item-div"><img src={Images.reddit_character}/>Reddit</div>
                          <div className="item-div"><img src={Images.bitcoin_logo}/>Bitcointalk</div>
                          <div className="item-div"><img src={Images.twitter_logo_1}/>Youtube</div>
                          <div className="item-div"><img src={Images.twitter_logo_1}/>Telegram</div>
                          <div className="item-div"><img src={Images.slack_symbol_1}/>Slack</div>
                        </div>
                        <div className="developers-div">
                          Developers
                          <div className="item-div">Github</div>
                        </div>
                      </div>
                    </div>
                  </div>
          ;
      } else {
          return  <div className="footer_normal">
                    <div className="footer_div">
                      <div className="footer_view" style={{width: this.state.windowWidth >= 1200 ? 1100 : '90%'}}>
                        <div className="logo-div">
                          <img src={Images.Jibrel_Black}/>Jibrel
                          <div className="footer_icon_div">Copyright © 2017 Jibrel. All rights reserved.</div>
                        </div>
                        <div className="right-div">
                          Network
                          <div className="item-div"><Link to="/whitePaper" onClick={() => scroll.scrollTo(0)} className="item-link">White Paper</Link></div>
                          <div className="item-div"><Link to="/roadMap" onClick={() => scroll.scrollTo(0)} className="item-link">Roadmap</Link></div>
                          <div className="item-div"><Link to="/faq" onClick={() => scroll.scrollTo(0)} className="item-link">FAQ</Link></div>
                          <div className="item-div"><Link to="/about" onClick={() => scroll.scrollTo(0)} className="item-link">About</Link></div>
                          <div className="item-div"><Link to="/pocaWallet" onClick={() => scroll.scrollTo(0)} className="item-link">Poca Wallet</Link></div>
                        </div>
                        <div className="right-div">
                          Community
                          <div className="item-div"><img src={Images.twitter_logo_1}/>Twitter</div>
                          <div className="item-div"><img src={Images.reddit_character}/>Reddit</div>
                          <div className="item-div"><img src={Images.bitcoin_logo}/>Bitcointalk</div>
                          <div className="item-div"><img src={Images.twitter_logo_1}/>Youtube</div>
                          <div className="item-div"><img src={Images.twitter_logo_1}/>Telegram</div>
                          <div className="item-div"><img src={Images.slack_symbol_1}/>Slack</div>
                        </div>
                        <div className="developers-div">
                          Developers
                          <div className="item-div"><img src={Images.github}/>Github</div>
                        </div>
                      </div>
                    </div>
                  </div>
          ;
      }
    }
}

export default FooterView;
