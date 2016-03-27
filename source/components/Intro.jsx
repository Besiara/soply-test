import * as React from 'react';
import * as ReactDOM from 'react-dom';

export class Intro extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            height: 10
        };
    }
    updateDimensions= () =>  {
        let w = window,
            d = document,
            documentElement = d.documentElement,
            body = d.getElementsByTagName('body')[0],
            height = w.innerHeight|| documentElement.clientHeight|| body.clientHeight;
        this.setState({height});
    }
    componentWillMount() {
        this.updateDimensions();
    }
    scrollToContent(e) {
        e.preventDefault();
        window.scrollTo(0, this.state.height);
    }
    componentDidMount() {
        window.addEventListener("resize", this.updateDimensions);
    }
    componentWillUnmount() {
        window.removeEventListener("resize", this.updateDimensions);
    }
    render() {
        let introStyle = {
            height: this.state.height,
            backgroundImage: 'url(' + this.props.introBackground + ')'
        };
        return (
            <div id="intro" style={introStyle}>
                <div className="hero hero-sm va-container">
                    <div className="va-middle">
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-8 col-sm-offset-2 col-md-10 col-md-offset-1 col-lg-12 col-lg-offset-0">
                                    <div className="hero-text-2">{this.props.introSubHeader}</div>
                                    <h1>{this.props.introHeader}</h1>
                                    <div className="col-md-12 margin-top">
                                        <a className="soply-button" href="#" onClick={(e)=>this.scrollToContent(e)}>Get Started</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );

    }
}