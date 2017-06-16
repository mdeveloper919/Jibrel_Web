import React from 'react';
import ReactDOM from 'react-dom';
import './about.css'
import Images from './images'

class About extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            windowWidth: window.innerWidth,
            mobileNavVisible: false,
            team: [
              {
                icon: 'http://i.imgur.com/dGtsE7A.png',
                name: 'VICTOR MEZRIN',
                role: 'TECHNICAL LEAD',
                title: 'Back-end development, smart-contract dev',
                linkedin: 'https://www.linkedin.com/in/victormezrin',
                email: 'mailto:victor@jibrel.network',
                slack: '',
                github: 'https://github.com/jibreldao'
              },
              {
                icon: 'http://i.imgur.com/hcOA6d2.png',
                name: 'YAZAN BARGHUTHI',
                role: 'STRATEGY LEAD',
                title: 'Front-end development, business development',
                linkedin: 'https://www.linkedin.com/in/yazanbarghuthi',
                email: 'mailto:Yazan@jibrel.network',
                slack: '',
                github: 'https://github.com/jibreldao'
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
            <div className="about_normal"  style={{width: this.state.windowWidth <= 1200 ? window.innerWidth*9/10 : 1100}}>
              <h1 style={{fontSize: this.state.windowWidth <= 1000 ? 30 : 42}}>ABOUT US (TEAM)</h1>
              <p style={{fontSize: this.state.windowWidth <= 1000 ? 16 : null}}>Information on the team developing jibrel (qubist labs)</p>
              <p style={{display: 'inline-block', fontSize: this.state.windowWidth <= 1000 ? 16 : 18}}>Want to contribute?<br/>Email us at <a href="mailto:careers@jibrel.network"><p style={{display: 'inline-block', fontSize: this.state.windowWidth <= 1000 ? 16 : 18, color: '#4d98ff', cursor: 'pointer'}}>careers@jibrel.network</p></a></p>

              {
                this.state.windowWidth <= 1000 ? (
                  <div className="about_div">
                    {
                      this.state.team.map((member, i) =>
                        <div key={i} className="member_div_mobile">
                          <img src={member.icon} className="member_icon"/>
                          <div className="name_h1" style={{marginTop: 10}}>{member.name}</div>
                          <div className="name_h1">{member.role}</div>
                          <div className="title_i">
                            {member.title}
                            <div className="line"/>
                            <div className="social_div">
                              {
                                member.linkedin != '' && <a href={member.linkedin}><img src={Images.linkedin} className="social_icon"/></a>
                              }
                              {
                                member.email != '' && <a href={member.email}><img src={Images.email} className="social_icon"/></a>
                              }
                              {
                                member.slack != '' && <img src={Images.slack_symbol} className="social_icon"/>
                              }
                              {
                                member.github != '' && <a href={member.github}><img src={Images.github} className="social_icon"/></a>
                              }
                            </div>
                          </div>
                        </div>
                      )
                    }
                  </div>
                ) : (
                  <div className="about_div">
                    {
                      this.state.team.map((member, i) =>
                        <div key={i} className="member_div">
                          <img src={member.icon} className="member_icon"/>
                          <div className="name_h1" style={{marginTop: 10}}>{member.name}</div>
                          <div className="name_h1">{member.role}</div>
                          <div className="title_i">
                            {member.title}
                            <div className="line"/>
                            <div className="social_div">
                              {
                                member.linkedin != '' && <a href={member.linkedin}><img src={Images.linkedin} className="social_icon"/></a>
                              }
                              {
                                member.email != '' && <a href={member.email}><img src={Images.email} className="social_icon"/></a>
                              }
                              {
                                member.slack != '' && <img src={Images.slack_symbol} className="social_icon"/>
                              }
                              {
                                member.github != '' && <a href={member.github}><img src={Images.github} className="social_icon"/></a>
                              }
                            </div>
                          </div>
                        </div>
                      )
                    }
                  </div>
                )
              }

            </div>
        </div>
    }
}

export default About;
