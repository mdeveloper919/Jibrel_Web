import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import logo from '../../resources/Jibrel Logo (1).jpg';
import logo_black from '../../resources/Jibrel Logo Black.png';
import data from './data.js';
import './main.css'

var Scroll  = require('react-scroll');
var scroll     = Scroll.animateScroll;

class NavContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            windowWidth: window.innerWidth,
            mobileNavVisible: false,
            items: {data},
            addClass: '',
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


    handleNavClick(){
        if(!this.state.mobileNavVisible){
            this.setState({
                mobileNavVisible: true,
            });
        } else {
            this.setState({
                mobileNavVisible: false,
            });
        }

    };

    navClick(value, i){
      for (var i = 0; i < this.state.items.data.length; i++){
        this.state.items.data[i].state = false
      }
      value.state = !value.state
    }
    logoClick(){
      for (var i = 0; i < this.state.items.data.length; i++){
        this.state.items.data[i].state = false
      }
    }

    //i have to clean code here to not repeat it...
    navigationLinks(){
        let item = this.state.items.data;
        //let newClass = this.state.addClass;
        let arrayMenu = [];
        item.map((value, i)=>{console.log(value);
            arrayMenu.push(<Link key={i} to={value.url}><div className={value.state ? "li-normal-click" : "li-normal"} onClick={()=>this.navClick(value, i)}>{value.text}</div></Link>);
        });
        return arrayMenu;
    }

    renderMobileNav() {
        if(this.state.mobileNavVisible){
            let item = this.state.items.data;
            //let newClass = this.state.addClass;
            let arrayMenu = [];
            item.map((value, i)=>{
                arrayMenu.push(<Link style={{textDecoration: 'none'}} key={i} to={value.url}><li className={value.state ? "li-mobile-click" : "li-mobile"} onClick={e=>{this.handleNavClick(e); this.navClick(value, i)}}>{value.text}</li></Link>);
            });
            return arrayMenu;
        }
    }

    renderNavigation() {
        if(this.state.windowWidth <= 1000) {
            return <div className="mobile">
                        {
                          this.state.mobileNavVisible ? (
                            <i onClick={e=>this.handleNavClick(e)} className="fa fa-times fa-1x" aria-hidden="true"></i>
                          ) : (
                            <i onClick={e=>this.handleNavClick(e)} className="fa fa-bars fa-1x" aria-hidden="true"></i>
                          )
                        }
                        <li className="mobile-center" onClick={()=>this.logoClick()}><Link style={{textDecoration: 'none', color: '#333333', }} to="/"><img src={logo_black}/></Link></li>
                        <div className="pig-button" style={{width: 30, position: 'absolute', right: 18, top: 22}} onClick={()=>this.logoClick()}><Link to="/" onClick={() => scroll.scrollTo(550)}><img src={require('../../resources/piggy-bank.png')} style={{paddingRight: 0}}/></Link></div>
                        <ul className="nav-mobile" style={this.state.mobileNavVisible ? {backgroundColor: '#ffffff', height: window.innerHeight} : null}>
                            {this.renderMobileNav()}
                        </ul>
                </div>
            ;
        } else {
            return <div className="nav_normal">
                        <ul>
                            <li className="li-logo" style={{marginRight: this.state.windowWidth <= 1200 && '9%'}} onClick={()=>this.logoClick()}><Link to="/"><img src={logo}/><li className="logo-text">jibrel<br/>network</li></Link></li>
                            {this.navigationLinks()}
                            <div className="pig-button" style={{marginLeft: this.state.windowWidth <= 1200 && '35'}} onClick={()=>this.logoClick()}><Link to="/" onClick={() => scroll.scrollTo(650)}><img src={require('../../resources/piggy-bank.png')}/><li>Fundraiser</li></Link></div>
                        </ul>
                </div>
            ;
        }
    }

    render() {
        return <div>
                    <nav>
                        {this.renderNavigation()}
                    </nav>
            </div>
    }
}

export default NavContainer;
