import React, { Component } from "react";
import SinglePartner from "./SinglePartner";
import partnerImage1 from '../../../Media/partners/partner1.png'
import partnerImage2 from '../../../Media/partners/partner2.png'
import partnerImage3 from '../../../Media/partners/partner3.png'
import partnerImage4 from '../../../Media/partners/partner4.png'
import partnerImage5 from '../../../Media/partners/partner5.png'
import partnerImage6 from '../../../Media/partners/partner6.png'
import partnerImage7 from '../../../Media/partners/partner7.png'
import partnerImage8 from '../../../Media/partners/partner8.png'
export default class Partner extends Component {
  render() {
    return (
      <section id="partners" className="partners">
        <div className="container">
          <h2>{this.props.title}</h2>
          <div className="partners__list">
            <SinglePartner partnerImage={partnerImage1}/>
            <SinglePartner partnerImage={partnerImage2}/>
            <SinglePartner partnerImage={partnerImage3}/>
            <SinglePartner partnerImage={partnerImage4}/>
            <SinglePartner partnerImage={partnerImage5}/>
            <SinglePartner partnerImage={partnerImage6}/>
            <SinglePartner partnerImage={partnerImage7}/>
            <SinglePartner partnerImage={partnerImage8}/>
          </div>
        </div>
      </section>
    );
  }
}
