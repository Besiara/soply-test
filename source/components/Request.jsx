import * as React from 'react';
import * as ReactDOM from 'react-dom';

import Geosuggest from '../../node_modules/react-geosuggest/module/Geosuggest.js';
import {DateInputComponent, DateFormats } from "react-controlled-date-input";

export class Request extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            showForm: false,
            profession:"photographer",
            eventType:"event",
            location:"Any location",
            year: "",
            month: "",
            date: ""
        };
    }
    onDateChange(year, month, date) {
        this.setState({ year, month, date });
    }
    setLocationToNull() {
        let input=this.refs.locationInput;
        input.update("");
        input.focus();
    }
    showFullForm() {
        this.setState({ showForm: true });
    }
    hideFullForm() {
        this.setState({ showForm: false });
    }
    onProfessionChangeHandler(e) {
        this.setState({profession: e.target.value});
    }
    onEventTypeChangeHandler(e) {
        this.setState({eventType: e.target.value});
    }
    onLocationChange(e){
        this.setState({location: e.label});
    }
    render() {
        let fixtures = [
            {label: 'Any Location'}
        ];
        console.log (this.showForm);
        return (
            <section className="request">
                <form method="POST" action="/briefs/create/quick" id="quick-brief">
                    <div className="hero-form">
                        <div className="container">
                            <div className={this.state.showForm ? 'hidden' : ''}>
                                <div className="row">
                                    <span className="hidden-sm-down">Request a</span>
                                    <select className="input js--input-profession valid"
                                            value={this.state.profession}
                                            onChange={(e)=>this.onProfessionChangeHandler(e)}
                                            name="creativeType">
                                        <option value="photographer">photographer</option>
                                        <option value="videographer">videographer</option>
                                        <option value="illustrator">illustrator</option>
                                        <option value="animator">animator</option>
                                        <option value="designer">designer</option>
                                        <option value="photographer_videographer">photographer and videographer</option>
                                    </select>
                                    <span className="hidden-sm-down">for an</span>
                                    <select className="input js--input-type valid"
                                            value={this.state.eventType}
                                            onChange={(e)=>this.onEventTypeChangeHandler(e)}
                                            name="briefType">
                                        <option value="marketing">marketing material</option>
                                        <option value="showreel">showreel</option>
                                        <option value="video">video</option>
                                        <option value="animation">animation</option>
                                        <option value="illustration">illustration</option>
                                        <option value="design">design</option>
                                        <option value="wedding">wedding</option>
                                        <option value="conference">conference</option>
                                        <option value="crowdfunding">crowdfunding campaign</option>
                                        <option value="event">event</option>
                                        <option value="business">business</option>
                                        <option value="property">property</option>
                                        <option value="newborn">newborn</option>
                                        <option value="portrait">portrait</option>
                                        <option value="nature">nature/wildlife shoot</option>
                                        <option value="travel">travel shoot</option>
                                        <option value="other">something different</option>
                                    </select>
                                    <span className="hidden-sm-down">in</span>
                                    <span className="relative">
                                        <Geosuggest ref="locationInput"
                                                    className="locations js--locations"
                                                    placeholder="City, Country"
                                                    fixtures={fixtures}
                                                    onSuggestSelect={(suggest)=>this.onLocationChange(suggest)}
                                                    location={new google.maps.LatLng(53.558572, 9.9278215)}
                                                    radius="20" />
                                        <div className="search-ico" onClick={()=>this.setLocationToNull()}></div>
                                    </span>
                                    <a  className="confirm js--hero-form-continue" onClick={()=>this.showFullForm()}>Continue</a>
                                </div>
                            </div>
                            <div className={this.state.showForm ? '' : 'hidden'}>
                                <div className="col-md-12 fullForm">
                                    <h3>Request</h3>
                                    <div className="section-headline-text">
                                        <p>Great, you need a {this.state.profession} for an {this.state.eventType} in {this.state.location}.</p>
                                        <p>Please fill out these remaining details.</p>
                                        <div className="col-md-3 col-md-offset-3 dateGroup">
                                            <h4>Date</h4>
                                            <DateInputComponent
                                                className="input"
                                                onChange={()=>this.onDateChange()}
                                                dateFormat={DateFormats.DDMMYYYY}/>
                                        </div>
                                        <div className="col-md-3">
                                            <h4>Budget</h4>
                                            <input type="number" className="input input-budget numeric-only" name="budget" placeholder="0" min="0"/>
                                        </div>
                                        <div className="col-md-3 col-md-offset-3">
                                            <h4>Email</h4>
                                            <input type="text" className="input input-contact" name="email" placeholder="name@example.com" value="" title=""/>
                                        </div>
                                        <div className="col-md-3">
                                            <h4>Telephone <small>optional</small></h4>
                                            <input type="text" className="input input-contact" name="telephone" placeholder="+44 (0) 1234 567890"/>
                                        </div>
                                        <div className="col-md-6 col-md-offset-3 margin-bottom">
                                            <h4>Description <small>optional</small></h4>
                                            <textarea rows="5" cols="50" className="input" name="description"></textarea>
                                        </div>
                                        <div className="col-xs-10 col-xs-offset-1 col-md-6 col-md-offset-3 section-headline-text">
                                            <ol className="text-xs-left">
                                                <li>Submit your job for <em>free</em>.</li>
                                                <li>Receive custom quotes from professionals.</li>
                                                <li>Choose your favorite creative.</li>
                                            </ol>
                                            <p className="margin-bottom">You don't pay until you select a creative. We'll securely process your payment.</p>
                                            <div className="col-md-12">
                                                <a className="go-back confirm js--go-back" onClick={()=>this.hideFullForm()}>Back</a>
                                                <input type="submit" className="confirm" value="Submit"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </section>

        );

    }
}
