import * as React from 'react';
import * as ReactDOM from 'react-dom';

import * as constants from '../constants';

export class ProfilesShort extends React.Component{
    propTypes: {
        data: React.PropTypes.array.isRequired
        }
    constructor(props) {
        super(props);
    }
    render() {

        let cardTemplate = constants.CREATIVES.map((item, index)=>
            (
                <div className="col-md-4" key={index}>
                    <a className="profileLink" href={item.profileLink}>
                        <div className="curated-photograhers-card">
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
                    </a>
                </div>
            ))
        return (
            <section className="curated-photographers">
                <div className="container">
                    <div className="row">
                            {cardTemplate}
                    </div>
                </div>
            </section>
        );
    }
}
