import { htmlTemplate } from '@/features/letters/components/html-template';

export function orderLetter({
  orderNumber,
  username,
  total,
  orderDate,
  description,
}: {
  orderNumber: string;
  username: string;
  orderDate: string;
  description: string;
  total: number;
}) {
  return htmlTemplate({
    body: `
      <header class="header">
        <img class="headerLogo img" src='https://marketifire.com/full-logo.png' alt='full-logo' width="145" height="26" />
        <section class="balloons marginLeft">
          <img src='https://marketifire.com/letters/0.png' alt='zero-balloon' />
          <img src='https://marketifire.com/letters/1.png' alt='one-balloon' />
        </section>
      </header>
      <div class="main">
        <h1 class="heading">Confirmation - ${orderNumber}</h1>
        <p class="p">Dear <strong class="strong">${username}</strong></p>
        <p class="p">
          We are pleased to confirm that we’ve received your order for our business and marketing consulting 
          services. At Marketfire, we are committed to delivering outstanding results tailored specifically 
          to your business’s needs.
        </p>
        <ul class="p" style="padding: 0">
          Below are the details of your order:
          <li class="list">Order Number: ${orderNumber}</li>
          <li class="list">Order Date: ${orderDate}</li>
          <li class="list">Description of Services: ${description}</li>
          <li class="list">Total Amount Due: ${total}</li>
        </ul>
        <p class="p">
          We will send you the necessary payment details shortly. Once payment is received, we will begin 
          processing your order promptly.
        </p>
        <p class="p">
          Should you have any questions or need further clarification, please feel free to reach out.
        </p>
        <p class="p">
          Thank you for choosing Marketfire. We are excited to work with you and help you achieve your 
          business goals.
        </p>
        <p class="p">
          Best regards, <br /><strong class="strong">The Marketfire Team</strong>
        </p>
      </div>
      <footer class="footer"> 
        <a class="link uppercase" href='https://marketifire.com/contacts'>Contact Us</a>
        <a class="link marginLeft" href='mailto:info@marketifire.com'>info@marketifire.com</a>
      </footer>
    `,
    style: `
      .header {
        background-color: #FFF;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      
      .img {
        margin: auto 0; 
      }
      
      .headerLogo {
        padding: 10px 40px;
      }
      
      .list {
        list-style-type: disc;
        margin-left: 20px;
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
      
      .uppercase {
        text-transform: uppercase;
      }
    `,
  });
}
