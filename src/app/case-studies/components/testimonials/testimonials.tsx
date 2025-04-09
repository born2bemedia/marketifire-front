import Link from 'next/link';

import { testimonials } from '@/shared/lib/caseStudies';
import { Asterisk } from '@/shared/ui/icons/fill';
import { Star } from '@/shared/ui/icons/fill/star';
import { Button } from '@/shared/ui/kit/button';
import { Tag } from '@/shared/ui/kit/tag/tag';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import st from './testimonials.module.scss';

export function Testimonials() {
  return (
    <div className={st.layout}>
      <section className={st.titleLayout}>
        <Tag color="yellow">
          <Asterisk />
          <Text>Client Testimonials and Success Stories</Text>
        </Tag>
        <Title level={2}>What Clients Say About Us</Title>
        <Text>
          Here’s how we’ve helped entrepreneurs scale their businesses and
          achieve their goals.
        </Text>
      </section>
      <section className={st.testimonialsLayout}>
        {testimonials.map((testimonial, index) => (
          <div
            className={st.testimonial}
            key={index}
            style={{
              top: `calc(10px + ${index * 70}px)`,
            }}
          >
            <div className={st.stars}>
              {Array.from({ length: testimonial.rating }).map((_, index) => (
                <Star key={index} />
              ))}
            </div>
            <Text>{testimonial.testimonial}</Text>
            <div className={st.author}>
              <Text>
                — {testimonial.author}, {testimonial.role}
              </Text>
            </div>
          </div>
        ))}
      </section>
      <Link href={'/request-form'} className={st.link}>
        <Button size="sm" variant="black">
          Start Optimizing Your Strategy Today
        </Button>
      </Link>
    </div>
  );
}
