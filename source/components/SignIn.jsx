import * as React from 'react';
import * as ReactDOM from 'react-dom';

export class SignIn extends React.Component{

    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="modal signInPopUp fade" id="myModal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-sm">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                            <h4 className="modal-title" id="myModalLabel">Sign In</h4>
                        </div>
                        <form>
                            <div className="modal-body">
                                <ul className="nav nav-tabs" role="tablist">
                                    <li className="nav-item">
                                        <a className="nav-link active" data-toggle="tab" href="#signin" role="tab">Sign In</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" data-toggle="tab" href="#recover" role="tab">Recover</a>
                                    </li>
                                </ul>
                                <div className="tab-content">
                                    <div className="tab-pane active" id="signin" role="tabpanel">
                                        <div className="form-group row">
                                            <div className="input-group col-sm-12">
                                                <label className="control-label">Username/Email <span className="form-required">*</span></label>
                                                <input type="text" className="form-control input" id="email" name="usernameOrEmail" placeholder="Username/Email"/>
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <div className="input-group col-sm-12">
                                                <label className="control-label">Password <span className="form-required">*</span></label>
                                                <input type="password" className="form-control input" id="password" name="password" placeholder="Password"/>
                                            </div>
                                        </div>
                                        <input type="submit" className="center-block confirm" value="Sign In"/>
                                    </div>
                                    <div className="tab-pane" id="recover" role="tabpanel">
                                        <div className="form-group row">
                                            <div className="input-group col-sm-12">
                                                <label className="control-label">Username/Email <span className="form-required">*</span></label>
                                                <input type="text" className="form-control input" id="email" name="usernameOrEmail" placeholder="Username/Email"/>
                                            </div>
                                        </div>
                                        <input type="submit" className="center-block confirm" value="Recover"/>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        );

    }
}