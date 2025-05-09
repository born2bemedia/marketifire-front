import { htmlTemplate } from '@/features/letters/components/html-template';

export function contactFormLetter({ username }: { username: string }) {
  return htmlTemplate({
    body: `
      <div class="wrapper">
        <header class="header">
        <img class="headerLogo" style="margin: auto 0;" src='https://marketifire.com/full-logo.png' alt='full-logo' width="145" height="26" />
        <section class="balloons marginLeft">
          <img src='https://marketifire.com/letters/0.png' alt='zero-balloon' />
          <img src='https://marketifire.com/letters/1.png' alt='one-balloon' />
        </section>
      </header>
      <div class="main">
        <h1 class="heading">Thank You for Contacting Marketifire</h1>
        <p class="p">Dear <strong class="strong">${username}</strong></p>
        <p class="p">
          Thank you for reaching out to Marketfire for your business and marketing consulting needs!
          We’ve received your request, and our team is excited to assist you in achieving your goals.
        </p>
        <p class="p">
          We will review your information and contact you soon to discuss how we can tailor our services 
          to meet your specific business needs.
        </p>
        <p class="p">
          If you have any additional information or specific preferences in the meantime, please don’t 
          hesitate to let us know.
        </p>
        <p class="p">
          Thank you for choosing Marketfire. We are dedicated to providing high-quality, data-driven strategies 
          that will help your business grow.
        </p>
        <p class="p">
        Kind regards, <br /><strong class="strong">The Marketfire Team</strong>
        </p>
      </div>
      <footer class="footer"> 
        <a class="link uppercase" href='https://marketifire.com/contacts'>Contact Us</a>
        <div class="marginLeft links">
          <a class="link" style="padding-right: 20px" href='mailto:info@marketifire.com'>info@marketifire.com</a>
          <div class="divider" />
          <a class="link" style="padding-left: 20px" href='tel:+421221011939'>+421221011939</a>
        </div>
      </footer>
      </div>
    `,
    style: `
      .wrapper {
        max-width: 696px;
        margin: 0 auto;
        width: 100%;
      }
      
      .links {
        display: flex;
      }
    
      .header {
        background-color: #FFF;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      
      .headerLogo {
        padding: 10px 40px;
      }
      
      .balloons {
        display: flex;
        padding-right: 40px;
      }
      
      .main {
        padding: 40px 40px 80px 40px;
        background-color: #F5F4F2;
      }
      
      .heading {
        font-size: 28px;
        font-style: normal;
        font-weight: 600;
        line-height: 37px;
        letter-spacing: -0.1px;
        color: #000;
      }      
      
      .p {
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        letter-spacing: -0.1px;
        color: #000;
      }
      
      .strong {
        font-weight: 600;
      }
      
      .footer {
        background-color: #F3FF97;
        padding: 20px;
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
      
      .link {
        color: #3B3B35 !important;
        text-decoration: none;
      }
      
      .marginLeft {
        margin-left: auto;
      }
      
      .divider {
        background: #D9D9D9;
        width: 1px;
        height: 18px;
      }
      
      .uppercase {
        text-transform: uppercase;
      }
    `,
  });
}
