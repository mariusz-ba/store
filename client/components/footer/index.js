import React, { Component } from 'react';
import { Wrapper } from '../layout';
import {
  FooterStyled,
  Section,
  Pictures
} from './styles';

export default class Footer extends Component {
  render() {
    return (
      <Wrapper>
        <FooterStyled>
          <Section>
            <h4>PAYMENT INFO</h4>
            <Pictures>
              <img src="/img/payment/visa.png" alt="Visa"/>
              <img src="/img/payment/master-card.png" alt="Master Card"/>
              <img src="/img/payment/paypal.png" alt="PayPal"/>
              <img src="/img/payment/dotpay.jpg" alt="DotPay"/>
            </Pictures>
          </Section>
          <Section>
            <h4>TERMS & CONDITIONS</h4>
            <p>We ship worldwide with the Polish postal service. All packages will be sent with a tracking number. <a href="#">Read more</a></p>
          </Section>
          <Section>
            <h4>NEWS & UPDATES</h4>
            <p>For news and updates please follow us on our <a href="#">Instagram</a>, subscribe on <a href="#">Facebook</a> or follow us on <a href="#">Twitter</a></p>
          </Section>
          <Section>
            <h4>CONTACT</h4>
            <p>If you have any questions or inquiries about our products, please send us an email at <a href="#">hello@fuckinggooddesign.com</a>. We'd love to hear from you.</p>
          </Section>
        </FooterStyled>
      </Wrapper>
    )
  }
}