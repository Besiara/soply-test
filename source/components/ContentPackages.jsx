import * as React from 'react';
import * as ReactDOM from 'react-dom';

export class ContentPackages extends React.Component {

    constructor(props) {
        super(props);
    }
    render() {
        return (
            <section className="content-packages bg-xs" id="packages">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 col-md-offset-2">
                            <h3>Content Packages</h3>
                            <div className="section-headline-text">Choose one of our recommended packages or mix your own.</div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="responsive-margin">
                            <div className="row">
                                <div className="col-sm-4">
                                    <div className="content-packages__column column-1">
                                        <div className="content-packages__column__header">
                                            <h4>Simple</h4>
                                            <span>8 pieces of content per month</span>
                                        </div>
                                        <div className="content-packages__column__body">
                                            <ul>
                                                <li>Photo <span>x3</span></li>
                                                <li>Video <span>x1</span></li>
                                                <li>Illustration / Graphic <span>x3</span></li>
                                                <li>Animation <span>x1</span></li>
                                            </ul>
                                        </div>
                                        <div className="js--content-packages--form content-packages--form">
                                            <form>
                                                <input type="hidden" name="photos" value="3"/>
                                                <input type="hidden" name="videos" value="1"/>
                                                <input type="hidden" name="illustrations" value="3"/>
                                                <input type="hidden" name="animations" value="1"/>
                                                <div className="period">
                                                    <label>Period</label>
                                                    <select className="input js--input-type">
                                                        <option>One off</option>
                                                        <option>3 months</option>
                                                        <option>6 months</option>
                                                        <option>12 months</option>
                                                    </select>
                                                </div>
                                                <div className="budget">
                                                    <label>Budget</label>
                                                    <input type="number" min="0" step="1" className="input input-budget"
                                                           name="budget" placeholder="0"/>
                                                </div>
                                                <div className="submit">
                                                    <input type="submit" className="submit"/>
                                                </div>
                                            </form>
                                        </div>
                                        <div className="content-packages__column__footer">
                                            <a className="js--content-packages__column" href="#">Select</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-4">
                                    <div className="content-packages__column column-2 state">
                                        <div className="content-packages__column__header">
                                            <h4>Premium</h4>
                                            <span>24 pieces of content per month</span>
                                        </div>
                                        <div className="content-packages__column__body">
                                            <ul>
                                                <li>Photo <span>x10</span></li>
                                                <li>Video <span>x2</span></li>
                                                <li>Illustration / Graphic <span>x10</span></li>
                                                <li>Animation <span>x2</span></li>
                                            </ul>
                                        </div>
                                        <div className="js--content-packages--form content-packages--form">
                                            <form>
                                                <input type="hidden" name="photos" value="10"/>
                                                <input type="hidden" name="videos" value="2"/>
                                                <input type="hidden" name="illustrations" value="10"/>
                                                <input type="hidden" name="animations" value="2"/>
                                                <div className="period">
                                                    <label>Period</label>
                                                    <select className="input js--input-type">
                                                        <option>One off</option>
                                                        <option>3 months</option>
                                                        <option>6 months</option>
                                                        <option>12 months</option>
                                                    </select>
                                                </div>
                                                <div className="budget">
                                                    <label>Budget</label>
                                                    <input type="number" min="0" step="1" className="input input-budget"
                                                           name="budget" placeholder="0"/>
                                                </div>
                                                <div className="submit">
                                                    <input type="submit" className="submit"/>
                                                </div>
                                            </form>
                                        </div>
                                        <div className="content-packages__column__footer">
                                            <a className="js--content-packages__column" href="#">Select</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-4">
                                    <div className="content-packages__column column-3">
                                        <div className="content-packages__column__header">
                                            <h4>Custom</h4>
                                            <span>As many as needed</span>
                                        </div>
                                        <div className="content-packages__column__body">
                                            <ul>
                                                <li>Photo</li>
                                                <li>Video</li>
                                                <li>Illustration / Graphic</li>
                                                <li>Animation</li>
                                            </ul>
                                        </div>
                                        <div className="js--content-packages--form content-packages--form">
                                            <form>
                                                <div>
                                                    <label className="custom">Photo</label>
                                                    <input type="number" min="0" step="1" className="input input-custom"
                                                           name="photos" placeholder="0"/>
                                                </div>
                                                <div>
                                                    <label className="custom">Video</label>
                                                    <input type="number" min="0" step="1" className="input input-custom"
                                                           name="videos" placeholder="0"/>
                                                </div>
                                                <div>
                                                    <label className="custom">Illustration / Graphic</label>
                                                    <input type="number" min="0" step="1" className="input input-custom"
                                                           name="illustrations" placeholder="0"/>
                                                </div>
                                                <div>
                                                    <label className="custom">Animation</label>
                                                    <input type="number" min="0" step="1" className="input input-custom"
                                                           name="animations" placeholder="0"/>
                                                </div>
                                                <div className="period">
                                                    <label>Period</label>
                                                    <select className="input js--input-type">
                                                        <option>One off</option>
                                                        <option>3 months</option>
                                                        <option>6 months</option>
                                                        <option>12 months</option>
                                                    </select>
                                                </div>
                                                <div className="budget">
                                                    <label>Budget</label>
                                                    <input type="number" min="0" step="1" className="input input-budget"
                                                           name="budget" placeholder="0"/>
                                                </div>
                                                <div className="submit">
                                                    <input type="submit" className="submit"/>
                                                </div>
                                            </form>
                                        </div>
                                        <div className="content-packages__column__footer">
                                            <a className="js--content-packages__column" href="#">Select</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );

    }
}












