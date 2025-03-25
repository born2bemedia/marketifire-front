import { Asterisk } from '@/shared/ui/icons/fill';
import { Line } from '@/shared/ui/icons/outline/line';
import { LineMob } from '@/shared/ui/icons/outline/lineMob';
import { Tag } from '@/shared/ui/kit/tag/tag';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import st from './marketfire-approach.module.scss';

export function MarketfireApproach() {
  return (
    <div className={st.layout}>
      <section className={st.titleLayout}>
        <Tag color="yellow">
          <Asterisk />
          <Text>Success Through Strategic Precision</Text>
        </Tag>
        <Title level={2}>The Marketifire Approach</Title>
        <Text className={st.text}>
          Success doesn&apos;t happen by chance — it&apos;s built through
          strategic planning, continuous optimization, and smart execution. Our
          approach focuses on understanding your market, crafting tailored
          strategies, and scaling precisely to ensure sustained growth and real
          impact.
        </Text>
      </section>
      <section className={st.lineLayout}>
        <div className={st.card}>
          <div className={st.cardNumber}>01</div>
          <div className={st.cardContent}>
            <Title level={3}>Understand Your Market</Title>
            <Text className={st.text}>
              Every strategy starts with in-depth market research and competitor
              analysis.
            </Text>
          </div>
        </div>
        <div className={st.card}>
          <div className={st.cardNumber}>02</div>
          <div className={st.cardContent}>
            <Title level={3}>Define Your Strategy</Title>
            <Text className={st.text}>
              We craft a clear, customized plan based on your goals and
              audience.
            </Text>
          </div>
        </div>
        <div className={st.card}>
          <div className={st.cardNumber}>03</div>
          <div className={st.cardContent}>
            <Title level={3}>Optimize & Scale</Title>
            <Text className={st.text}>
              Continuous testing, refinement, and execution to ensure long-term
              success.
            </Text>
          </div>
        </div>
        <Line className={st.line} />
        <LineMob className={st.lineMob} />
      </section>
    </div>
  );
}
