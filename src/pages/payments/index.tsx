import { getMainLayout, HeadMeta, PaymentsComponent } from "@/components";
import s from "./payments.module.scss";

const Payments = () => {
  return (
    <div className={s.root}>
      <HeadMeta title="Payments" />
      <main>
        <PaymentsComponent />
      </main>
    </div>
  );
};

Payments.getLayout = getMainLayout;
export default Payments;
