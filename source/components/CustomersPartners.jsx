import * as React from 'react';
import * as ReactDOM from 'react-dom';

let partners = [
    {
        logo: 'https://soply.com/assets-2015/static/images/customers-partners/dentsu-aegis-network.png'
    },
    {
        logo: 'https://soply.com/assets-2015/static/images/customers-partners/kende-co.png'
    },
    {
        logo: 'https://soply.com/assets-2015/static/images/customers-partners/vizeum.png'
    },
    {
        logo: 'https://soply.com/assets-2015/static/images/customers-partners/lowe.png'
    },
    {
        logo: 'https://soply.com/assets-2015/static/images/customers-partners/kinder.png'
    },
    {
        logo: 'https://soply.com/assets-2015/static/images/customers-partners/danfoss.png'
    },
    {
        logo: 'https://soply.com/assets-2015/static/images/customers-partners/tictac.png'
    },
    {
        logo: 'https://soply.com/assets-2015/static/images/customers-partners/seb.png'
    },
    {
        logo: 'https://soply.com/assets-2015/static/images/customers-partners/grundfos.png'
    },
    {
        logo: 'https://soply.com/assets-2015/static/images/customers-partners/dsb.png'
    },
    {
        logo: 'https://soply.com/assets-2015/static/images/customers-partners/danske-bank.png'
    },
    {
        logo: 'https://soply.com/assets-2015/static/images/customers-partners/politikens-forlag.png'
    },
    {
        logo: 'https://soply.com/assets-2015/static/images/customers-partners/ramboll.png'
    },
    {
        logo: 'https://soply.com/assets-2015/static/images/customers-partners/sund-forskning-dk.png'
    },
    {
        logo: 'https://soply.com/assets-2015/static/images/customers-partners/oxygen-accelerator.png'
    },
    {
        logo: 'https://soply.com/assets-2015/static/images/customers-partners/uk-trade-investment.png'
    }
];

export class CustomersPartners extends React.Component{
    constructor(props) {
        super(props);
    }


    render() {

        let partnerTemplate = partners.map((item, index)=>(
                <li className="col-xs-4 col-sm-3 col-md-3" key={index}>
                    <img className="img-fluid" src={item.logo} alt=""/>
                </li>
            ))
        return (
            <section className="customers-partners">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 col-md-offset-2">
                            <h3>Customers &amp; Partners</h3>
                            <div className="section-headline-text">Some of our amazing partners, brands, clients and supporters.</div>
                        </div>
                    </div>
                    <ul className="row responsive-margin">
                        {partnerTemplate}
                    </ul>
                </div>
            </section>
        );
    }
}