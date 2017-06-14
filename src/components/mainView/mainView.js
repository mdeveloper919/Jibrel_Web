import React from 'react';
import ReactDOM from 'react-dom';
import Images from './images'
import './mainView.css'

import { BrowserRouter, Route, Link } from 'react-router-dom'

import Autocomplete from './Autocomplete'
import { getStates, matchStateToTerm, sortStates, styles } from './utils'

import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

import Pagination from '../../components/pagination/pagination';
import FooterView from '../../components/footerView/footerView';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

var Scroll  = require('react-scroll');
var scroll     = Scroll.animateScroll;

class MainView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            windowWidth: window.innerWidth,
            mobileNavVisible: false,
            index: 0,
            flag: 0,
            everyone: [
              {
                icon : Images.investor,
                title: "Investors",
                sub_title: "Low Risk Indirect Crypto-investment",
                description: "Investors gain indirect access to the high-returns of the emerging cryptoeconomy without the risk"
              },
              {
                icon : Images.dao,
                title: "Decentralized Organizations",
                sub_title: "Crypto-hedging with Backed Tokens",
                description: "Decentralized organizations and funds can store funding or hedge using asset-backed ERC-20 tokens"
              },
              {
                icon : Images.merchant,
                title: "Business & Merchants",
                sub_title: "Global Payments Platform / Solution",
                description: "Business and merchants can set-up global payment channels in minutes, no exchange fees, no transfer fees"
              },
              {
                icon : Images.users,
                title: "End-Users",
                sub_title: "Poca(Proof-of-Capital) Wallet",
                description: "Our universal wallet allows anyone to send or receive money anywhere in any currency, with no fees"
              },
              {
                icon : Images.coding,
                title: "Developers",
                sub_title: "User-friendly Libraries & Toolkits",
                description: "Developers can build their own instruments, tools and applications that leverage asset backed tokens"
              },
              {
                icon : Images.crypto,
                title: "Cryptoeconomy",
                sub_title: "Improved Market Stability",
                description: "Crypto-projects are protected against market downturns by diversifying their funding into traditional holdings"
              }
            ]
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

        var countDownDate = new Date("Jul 17, 2017 12:00:00").getTime();

        var x = setInterval(() => {

          var now = new Date().getTime();

          var distance = countDownDate - now;

          var days = Math.floor(distance / (1000 * 60 * 60 * 24));
          var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
          var seconds = Math.floor((distance % (1000 * 60)) / 1000);

          this.setState({days, hours, minutes, seconds})

          if (distance < 0) {
            clearInterval(x);
          }
        }, 1000);

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

    iconView(){
      return <div className="icon_div" style={{width: this.state.windowWidth >= 1200 ? 1100 : '80%'}}>
        <img src={Images.a_data_pro}/>
        <img src={Images.c_contentfw}/>
        <img src={Images.cision}/>
        <img src={Images.corporate_excellence}/>
        <img src={Images.data_scouting}/>
        <img src={Images.cision}/>
        <img src={Images.corporate_excellence}/>

      </div>
    }

    handleChangeIndex = (index) => {
      this.setState({
        index,
      });
    };

    slide1(){
      if(this.state.windowWidth <= 1100) {
        return <div className="slide_div" style={{width: '100%', marginTop: this.state.windowWidth >= 700 ? null : 155}}>
          <div style={{position: 'relative', margin: 'auto', fontSize: 15, fontWeight: 300, color: '#ffffff',  width: this.state.windowWidth >= 700 ? 600 : '90%', height: this.state.windowWidth >= 700 ? 60 : '18%', marginTop: 15}}>the jibrel network allows anyone to digitize, list, trade and sell traditional assets, such as currencies, bonds and other instruments, on-chain</div>
          <img src={Images.macbookjibrel} style={{width: this.state.windowWidth <= 600 && '90%', height: this.state.windowWidth <= 600 && window.innerWidth/2}}/>
        </div>
      }else{
        return <div className="slide_div">
            <div style={{position: 'relative', margin: 'auto', fontSize: 18, fontWeight: 300, color: '#ffffff', width: 600, height: 60, marginTop: 15}}>the jibrel network allows anyone to digitize, list, trade and sell traditional assets, such as currencies, bonds and other instruments, on-chain</div>
            <img src={Images.macbookjibrel}/>
        </div>
      }
    }

    slide2(){
      if(this.state.windowWidth <= 1000) {
        return <div className="slide_div" style={{width: '100%', marginTop: this.state.windowWidth >= 700 ? null : 155}}>
          <div style={{position: 'relative', margin: 'auto', fontSize: 15, fontWeight: 300, color: '#ffffff',  width: this.state.windowWidth >= 700 ? 600 : '90%', height: this.state.windowWidth >= 700 ? 60 : '18%', marginTop: 15}}>users can deposit cash, money market instruments or create their own Crypto Depository Receipts(CryDRs) and benefit from <i>on-chain / off-chain arbitrage</i></div>
          <img src={Images.iphonejibrel} style={{width: this.state.windowWidth <= 600 && '90%', height: this.state.windowWidth <= 600 && window.innerWidth/2}}/>
        </div>
      }else{
        return <div className="slide_div">
          <div style={{position: 'relative', margin: 'auto', fontSize: 18, fontWeight: 300, color: '#ffffff', width: 600, height: 60, marginTop: 15}}>users can deposit cash, money market instruments or create their own Crypto Depository Receipts(CryDRs) and benefit from <i>on-chain / off-chain arbitrage</i></div>
          <img src={Images.iphonejibrel}/>
        </div>
      }
    }

    slide3(){
      if(this.state.windowWidth <= 1000) {
        return <div className="slide_div" style={{width: '100%', marginTop: this.state.windowWidth >= 700 ? null : 140}}>
          <div style={{position: 'relative', margin: 'auto', fontSize: 15, fontWeight: 300, color: '#ffffff',  width: this.state.windowWidth >= 700 ? 600 : '90%', height: this.state.windowWidth >= 700 ? 60 : '18%', marginTop: 15}}>decentralized organizations and funds that are overexposed in digital currencies can hedge their positions with money market tokens</div>
          <img src={Images.browserjibrel} style={{width: this.state.windowWidth <= 600 && '70%', height: this.state.windowWidth <= 600 && window.innerWidth/2}}/>
        </div>
      }else{
        return <div className="slide_div">
          <div style={{position: 'relative', margin: 'auto', fontSize: 18, fontWeight: 300, color: '#ffffff', width: 600, height: 60, marginTop: 15}}>decentralized organizations and funds that are overexposed in digital currencies can hedge their positions with money market tokens</div>
          <img src={Images.browserjibrel}/>
        </div>
      }
    }

    swipeView(){
      return <div className="swipe_view">
          <AutoPlaySwipeableViews enableMouseEvents index={this.state.index} onChangeIndex={this.handleChangeIndex}  interval={6000}>
            {this.slide1()}
            {this.slide2()}
            {this.slide3()}
          </AutoPlaySwipeableViews>
          <Pagination
            dots={3}
            index={this.state.index}
            onChangeIndex={this.handleChangeIndex}
            slide_idx={1}
          />
        </div>
    }

    bankingView(){
      if(this.state.windowWidth <= 1000) {
        return <div className="banking_view" style={{height: 'auto'}}>
              <li className="title_li" style={{fontSize: 20}}>Consumer Banking</li>
              <li className="subtitle_li" style={{fontSize: 16}}>(Individuals)</li>
              <li className="desciption_li">We're helping everyone leverage the power of blockchain technology, without the risk - your money, in every currency, everywhere - no fees, ever</li>
              <div className="slide_button" style={{display: 'inline-block', marginTop: 15, width: window.innerWidth*6/10}}><li>POCA WALLET</li></div>

              <li className="title_li" style={{fontSize: 20}}>Corporate Banking</li>
              <li className="subtitle_li" style={{fontSize: 16}}>(Businesses)</li>
              <li className="desciption_li">Manage your global payables and receivables without the unnecessary costs and high fees, send or receive money from anywhere, without the fees</li>
              <div className="slide_button" style={{display: 'inline-block', marginTop: 15, width: window.innerWidth*6/10}}><li>POCA BUSINESS</li></div>

              <li className="title_li" style={{fontSize: 20}}>Crypto-Banking</li>
              <li className="subtitle_li" style={{fontSize: 16}}>(DAOs)</li>
              <li className="desciption_li">Protect your project funding buy opening a money market account - invest in certificates of deposits to ensure your funding is protected from volatility</li>
              <div className="slide_button" style={{display: 'inline-block', marginTop: 15, width: window.innerWidth*6/10, marginBottom: '5%'}}><li>POCA CRYPTO</li></div>

          </div>
      }else{
        return <div className="banking_view" style={{width: this.state.windowWidth >= 1200 ? 1100 : '90%'}}>
            <div className="inner_div">
              <li className="title_li" style={{fontSize: 20}}>Consumer Banking</li>
              <li className="subtitle_li" style={{fontSize: 16}}>(Individuals)</li>
              <li className="desciption_li">We're helping everyone leverage the power of blockchain technology, without the risk - your money, in every currency, everywhere - no fees, ever</li>
              <div className="slide_button" style={{display: 'inline-block', marginTop: 15, width: 250}}><li>POCA WALLET</li></div>
            </div>
            <div className="inner_div">
              <li className="title_li" style={{fontSize: 20}}>Corporate Banking</li>
              <li className="subtitle_li" style={{fontSize: 16}}>(Businesses)</li>
              <li className="desciption_li">Manage your global payables and receivables without the unnecessary costs and high fees, send or receive money from anywhere, without the fees</li>
              <div className="slide_button" style={{display: 'inline-block', marginTop: 15, width: 250}}><li>POCA BUSINESS</li></div>
            </div>
            <div className="inner_div">
              <li className="title_li" style={{fontSize: 20}}>Crypto-Banking</li>
              <li className="subtitle_li" style={{fontSize: 16}}>(DAOs)</li>
              <li className="desciption_li">Protect your project funding buy opening a money market account - invest in certificates of deposits to ensure your funding is protected from volatility</li>
              <div className="slide_button" style={{display: 'inline-block', marginTop: 15, width: 250}}><li>POCA CRYPTO</li></div>
            </div>
          </div>
      }
    }

    countDownTimer(){

      if(this.state.windowWidth <= 1000) {
        return <div className="count_view">
              Fundraiser
              <div style={{position: 'relative', margin: 'auto', fontSize: 24, fontWeight: 100, color: '#000000'}}>Our fundraiser starts on <li style={{display: 'inline-block', color: '#000000', fontWeight: 300}}>July 17, 2017</li> at <li style={{display: 'inline-block', color: '#000000', fontWeight: 300}}>12:00PM GMT</li></div>
              <div className="about_div" style={{marginTop: 25}}>
                <div className="member_div_mobile" style={{fontFamily: 'Courier New', fontSize: 90}}>
                  {this.state.days}
                  <div style={{fontFamily: 'Courier New', color: '#d3d3d3', fontSize: 28, marginTop: 40}}>
                    DAYS
                  </div>
                </div>
                <div className="member_div_mobile" style={{fontFamily: 'Courier New', fontSize: 90}}>
                  {this.state.hours}
                  <div style={{fontFamily: 'Courier New', color: '#d3d3d3', fontSize: 28, marginTop: 40}}>
                    HOURS
                  </div>
                </div>
                <div className="member_div_mobile" style={{fontFamily: 'Courier New', fontSize: 90}}>
                  {this.state.minutes}
                  <div style={{fontFamily: 'Courier New', color: '#d3d3d3', fontSize: 28, marginTop: 40}}>
                    MINUTES
                  </div>
                </div>
                <div className="member_div_mobile" style={{fontFamily: 'Courier New', fontSize: 90}}>
                  {this.state.seconds}
                  <div style={{fontFamily: 'Courier New', color: '#d3d3d3', fontSize: 28, marginTop: 40}}>
                    SECONDS
                  </div>
                </div>
              </div>
          </div>
      }else{
        return <div className="count_view" style={{width: this.state.windowWidth >= 1200 ? 1100 : '90%'}}>
              Fundraiser
              <div style={{position: 'relative', margin: 'auto', fontSize: 24, fontWeight: 100, color: '#000000'}}>Our fundraiser starts on <li style={{display: 'inline-block', color: '#000000', fontWeight: 300}}>July 17, 2017</li> at <li style={{display: 'inline-block', color: '#000000', fontWeight: 300}}>12:00PM GMT</li></div>
              <div className="about_div" style={{marginTop: 25}}>
                <div className="member_div" style={{fontFamily: 'Courier New', fontSize: 90}}>
                  {this.state.days}
                  <div style={{fontFamily: 'Courier New', color: '#d3d3d3', fontSize: 28, marginTop: 40}}>
                    DAYS
                  </div>
                </div>
                <div className="member_div" style={{fontFamily: 'Courier New', fontSize: 90}}>
                  {this.state.hours}
                  <div style={{fontFamily: 'Courier New', color: '#d3d3d3', fontSize: 28, marginTop: 40}}>
                    HOURS
                  </div>
                </div>
                <div className="member_div" style={{fontFamily: 'Courier New', fontSize: 90}}>
                  {this.state.minutes}
                  <div style={{fontFamily: 'Courier New', color: '#d3d3d3', fontSize: 28, marginTop: 40}}>
                    MINUTES
                  </div>
                </div>
                <div className="member_div" style={{fontFamily: 'Courier New', fontSize: 90}}>
                  {this.state.seconds}
                  <div style={{fontFamily: 'Courier New', color: '#d3d3d3', fontSize: 28, marginTop: 40}}>
                    SECONDS
                  </div>
                </div>
              </div>
          </div>
      }
    }

    setEmail(value){
      this.setState({ value })
      if(value == ''){
        this.setState({ flag: 0 })
      }
    }

    emailPart(){
      if(this.state.windowWidth <= 1000) {
        return <div className="email_view">
              <div style={{marginBottom: 25, color: this.state.flag == 1 && '#2CB186'}}>{this.state.flag == 0 ? 'Sign-up for fundraiser updates' : "Thanks for signing-up. We'll keep you posted!"}</div>
              <div className="email-box">
                <Autocomplete
                  value={this.state.value}
                  inputProps={{ id: 'states-autocomplete' }}
                  items={getStates()}
                  getItemValue={(item) => item.name}
                  shouldItemRender={matchStateToTerm}
                  sortItems={sortStates}
                  onChange={(event, value) => this.setEmail(value)}
                  onSelect={value => this.setState({ value, flag: 1 })}
                  renderItem={(item, isHighlighted) => (
                    <div
                      style={isHighlighted ? styles.highlightedItem : styles.item}
                      key={item.index}
                    >{item.name}</div>
                  )}
                />
                <div className="right-box">
                  <img src={Images.email}/>
                </div>
              </div>
          </div>
      }else{
        return <div className="email_view" style={{width: this.state.windowWidth >= 1200 ? 1100 : '90%'}}>
            <div style={{marginBottom: 25, color: this.state.flag == 1 && '#2CB186'}}>{this.state.flag == 0 ? 'Sign-up for fundraiser updates' : "Thanks for signing-up. We'll keep you posted!"}</div>
            <div className="email-box">
              <Autocomplete
                value={this.state.value}
                inputProps={{ id: 'states-autocomplete' }}
                items={getStates()}
                getItemValue={(item) => item.name}
                shouldItemRender={matchStateToTerm}
                sortItems={sortStates}
                onChange={(event, value) => this.setEmail(value)}
                onSelect={value => this.setState({ value, flag: 1 })}
                renderItem={(item, isHighlighted) => (
                  <div
                    style={isHighlighted ? styles.highlightedItem : styles.item}
                    key={item.index}
                  >{item.name}</div>
                )}
              />
              <div className="right-box">
                <img src={Images.email}/>
              </div>
            </div>
          </div>
      }
    }

    everyone(){
      if(this.state.windowWidth <= 1000) {
        return <div className="email_view">
              <div style={{marginBottom: 25}}>Something for everyone...</div>
              {
                this.state.everyone.map((every, i) =>
                  <div key={i} className="every_div">
                    <img src={every.icon}/>
                    <div className="title-div" style={{marginTop: 10}}>{every.title}</div>
                    <div className="sub-title">{every.sub_title}</div>
                    <div className="description-div" style={{width: this.state.windowWidth <= 600 && '90%'}}>
                      {every.description}
                    </div>
                  </div>
                )
              }
          </div>
      }else{
        return <div className="email_view" style={{width: this.state.windowWidth >= 1200 ? 1100 : '90%'}}>
            <div style={{marginBottom: 25}}>Something for everyone...</div>
            {
              this.state.everyone.map((every, i) =>
                <div key={i} className="every_div">
                  <img src={every.icon}/>
                  <div className="title-div" style={{marginTop: 10}}>{every.title}</div>
                  <div className="sub-title">{every.sub_title}</div>
                  <div className="description-div">
                    {every.description}
                  </div>
                </div>
              )
            }
          </div>
      }
    }

    roadmap(){
      if(this.state.windowWidth <= 1000) {
        return <div className="email_view">
              <div style={{marginBottom: 10, color: '#1155cc', fontSize: 40, fontWeight: 300}}>Roadmap</div>
              <div>High-level Implementation Strategy</div>
              <img src={Images.roadmap} className="roadmap-img"/>
              <div className="roadmap-div">
                <Link to="/roadMap" style={{textDecoration: 'none'}} onClick={() => scroll.scrollTo(0)}><div className="roadmap-text">VIEW FULL ROADMAP</div></Link>
              </div>
          </div>
      }else{
        return <div className="email_view" style={{width: this.state.windowWidth >= 1200 ? 1100 : '90%'}}>
            <div style={{marginBottom: 10, color: '#1155cc', fontSize: 40, fontWeight: 300}}>Roadmap</div>
            <div>High-level Implementation Strategy</div>
            <img src={Images.roadmap} className="roadmap-img"/>
            <div className="roadmap-div">
              <Link to="/roadMap" style={{textDecoration: 'none'}} onClick={() => scroll.scrollTo(0)}><div className="roadmap-text">VIEW FULL ROADMAP</div></Link>
            </div>
          </div>
      }
    }

    renderNavigation() {
        if(this.state.windowWidth <= 1000) {
            return <div className="normal">
                      <div className="top-view" style={{height: this.state.windowWidth <= 600 && 550}}>
                        <div className="title_div" style={{fontSize: this.state.windowWidth >= 700 ? 30 : 26, marginTop: 50}}>the <li style={{display: 'inline-block', color: '#ffffff', fontWeight: 300}}>jibrel</li> network</div>
                        <div className="button-div">
                          <div className="platform">
                            <div className="platform-text">Platform</div>
                          </div>
                          <div className="white-paper">
                            <Link to="/whitePaper" style={{textDecoration: 'none'}} onClick={() => scroll.scrollTo(0)}><div className="white-paper-text">White Paper</div></Link>
                          </div>
                        </div>
                        {this.swipeView()}
                      </div>
                      {this.iconView()}
                      <div style={{display: 'inline-block', width: this.state.windowWidth >= 1200 ? 1100 : '90%', height: 1, backgroundColor: '#d3d3d3'}}/>
                      {this.countDownTimer()}
                      <div style={{display: 'inline-block', width: this.state.windowWidth >= 1200 ? 1100 : '90%', height: 1, backgroundColor: '#d3d3d3', marginTop: 50}}/>
                      {this.emailPart()}
                      <div style={{display: 'inline-block', width: this.state.windowWidth >= 1200 ? 1100 : '90%', height: 1, backgroundColor: '#d3d3d3', marginTop: 40}}/>
                      {this.everyone()}
                      <div style={{display: 'inline-block', width: this.state.windowWidth >= 1200 ? 1100 : '90%', height: 1, backgroundColor: '#d3d3d3', marginTop: 20}}/>
                      {this.roadmap()}
                      <div style={{display: 'inline-block', width: this.state.windowWidth >= 1200 ? 1100 : '90%', height: 1, backgroundColor: '#d3d3d3', marginTop: 30}}/>
                      <h2 style={{fontSize: 24}}>How does the jibrel network work?</h2>
                      <iframe src="https://player.vimeo.com/video/183530279" width={'90%'} height={window.innerWidth*9/18.3}></iframe>
                      {this.bankingView()}
                    </div>
            ;
        } else {
            return  <div className="normal">
                      <div className="top-view">
                        <div className="title_div">the <li style={{display: 'inline-block', color: '#ffffff', fontWeight: 300}}>jibrel</li> network</div>
                        <div className="button-div">
                          <div className="platform">
                            <div className="platform-text">Platform</div>
                          </div>
                          <div className="white-paper">
                            <Link to="/whitePaper" style={{textDecoration: 'none'}} onClick={() => scroll.scrollTo(0)}><div className="white-paper-text">White Paper</div></Link>
                          </div>
                        </div>
                        {this.swipeView()}
                      </div>
                      {this.iconView()}
                      <div style={{display: 'inline-block', width: this.state.windowWidth >= 1200 ? 1100 : '90%', height: 1, backgroundColor: '#d3d3d3'}}/>
                      {this.countDownTimer()}
                      <div style={{display: 'inline-block', width: this.state.windowWidth >= 1200 ? 1100 : '90%', height: 1, backgroundColor: '#d3d3d3', marginTop: 50}}/>
                      {this.emailPart()}
                      <div style={{display: 'inline-block', width: this.state.windowWidth >= 1200 ? 1100 : '90%', height: 1, backgroundColor: '#d3d3d3', marginTop: 40}}/>
                      {this.everyone()}
                      <div style={{display: 'inline-block', width: this.state.windowWidth >= 1200 ? 1100 : '90%', height: 1, backgroundColor: '#d3d3d3', marginTop: 20}}/>
                      {this.roadmap()}
                      <div style={{display: 'inline-block', width: this.state.windowWidth >= 1200 ? 1100 : '90%', height: 1, backgroundColor: '#d3d3d3', marginTop: 30}}/>
                      <h2>How does the jibrel network work?</h2>
                      <iframe src="https://player.vimeo.com/video/183530279" width={this.state.windowWidth >= 1200 ? 1100 : '90%'} height={this.state.windowWidth >= 1200 ? 620 : window.innerWidth*9/16-70}></iframe>
                      {this.bankingView()}
                    </div>
            ;
        }
    }

    render() {
        return <div>
                        {this.renderNavigation()}
                        <FooterView/>
            </div>
    }
}

export default MainView;
