import * as React from 'react';
import * as ReactDOM from 'react-dom';

import * as constants from '../constants';

export class BlogPost extends React.Component{
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
        this.state.creativesNum=parseInt(this.state.creativesNum)+10;
        this.setState({creativesNum: this.state.creativesNum});
    }
    render() {

        let postsTemplate = constants.POSTS.value.map((item, index)=>
            (
                <article className="text not-page" key={index}>
                    <div className="post-wrapper clearfix">
                        <div className="post">
                            <h2><a href="https://en.wikipedia.org/wiki/Chuck_Norris">Chuck Norris</a></h2>
                            <div className="body-text">
                                <p>{item.joke}</p>
                            </div>
                        </div>
                    </div>
                </article>
            ))
        return (
            <section className="curated-photographers">
                <div className="container">
                    <div className="responsive-margin">
                        <div className="row">
                            <div className="text-md-center">
                                <h3>
                                    {this.props.creativesHeader} <a className={this.props.creativesLinkHeader ? '' : 'hidden'} href="#">{this.props.creativesLinkHeader}</a>
                                </h3>
                                <div className="section-headline-text">{this.props.creativesSubHeader}</div>
                            </div>
                        </div>
                        <div className="row">
                            {postsTemplate.slice(this.props.creativesStartNum,this.state.creativesNum)}
                        </div>
                        <div className="row">
                            <div className="col-md-4 col-md-offset-4">
                                <div className="see-more-photographers">
                                    <a href="#" onClick={(e)=>this.showMore(e)}>More Posts</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
