'use client';

import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import st from './addresses.module.scss';

export function Addresses() {
  return (
    <section className={st.layout}>
      <article className={st.cardLayout}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2661.1489325270036!2d17.1744713!3d48.1652108!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476c8f2443609905%3A0xa651c9e30198b82e!2sARUBA%20Bussines%20Center%2C%20Galvaniho%207D%2C%20821%2004%20Ru%C5%BEinov%2C%20Slovakia!5e0!3m2!1sen!2sua!4v1743008125905!5m2!1sen!2sua"
          style={{
            border: 0,
            height: '188px',
            width: '100%',
            borderRadius: '22px',
          }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <section className={st.text}>
          <Title level={4} color="black60" uppercase>
            Where We Work
          </Title>
          <Text color="black100" size="xl" weight={500}>
            Galvaniho 7/D, 821 04 Bratislava, Slovakia
          </Text>
        </section>
      </article>
      <article className={st.cardLayout}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2661.192291182198!2d17.1758044!3d48.1643751!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476c8f252cc886e3%3A0xc778aee3b64d5c5c!2sGalvani%20Business%20Center%20IVElektrolux!5e0!3m2!1sen!2sua!4v1743008401926!5m2!1sen!2sua"
          style={{
            border: 0,
            height: '188px',
            width: '100%',
            borderRadius: '22px',
          }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <section className={st.text}>
          <Title level={4} color="black60" uppercase>
            Official Correspondence
          </Title>
          <Text color="black100" size="xl" weight={500}>
            Biskupa Kondého Street 5138/30, 929 01 Dunajská Streda, Slovakia
          </Text>
        </section>
      </article>
    </section>
  );
}
