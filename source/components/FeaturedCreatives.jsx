import * as React from 'react';
import * as ReactDOM from 'react-dom';


import * as constants from '../constants';

export class FeaturedCreatives extends React.Component{
    propTypes: {
        data: React.PropTypes.array.isRequired
        }
    constructor(props) {
        super(props);
        this.state = {
            creativesNum: this.props.creativesNum
        };
    }
    showMore(e){
        e.preventDefault();
        this.state.creativesNum=parseInt(this.state.creativesNum)+2;
        this.setState({creativesNum: this.state.creativesNum});
    }
    render() {

        let cardTemplate = constants.CREATIVES.map((item, index)=>
        (
            <div className="col-md-6" key={index}>
                <div className="curated-photograhers-card">
                    <div className="curated-photograhers-card__photo">
                        <img src={item.photo}/>
                    </div>
                    <div className="curated-photographers-card__profile">
                        <div className="curated-photograhers-card__profile__photo">
                            <img src={item.profile}/>
                        </div>
                        <div className="curated-photographers-card__profile__text">
                            <h4>{item.name}</h4>
                            <div className="curated-photographers-card__profile__text--location">
                                {item.location}
                            </div>
                        </div>
                    </div>
                    <div className="curated-photographers-card__tag">
                        {item.tags.join(", ")}
                    </div>
                </div>
            </div>
        ))
        return (
            <section className="curated-photographers">
                <div className="container">
                    <div className="row">
                        <div className="text-md-center">
                            <h3>
                                {this.props.creativesHeader} <a className={this.props.creativesLinkHeader ? '' : 'hidden'} href="#">{this.props.creativesLinkHeader}</a>
                            </h3>
                            <div className="section-headline-text">{this.props.creativesSubHeader}</div>
                        </div>
                    </div>
                    <div className="row">
                        {cardTemplate.slice(this.props.creativesStartNum,this.state.creativesNum)}
                    </div>
                    <div className="row">
                        <div className="col-md-4 col-md-offset-4">
                            <div className="see-more-photographers">
                                <a href="#" onClick={(e)=>this.showMore(e)}>More Creatives</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
