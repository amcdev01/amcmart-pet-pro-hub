import { useSearchParams } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import PaymentInfo from "@/components/payment/PaymentInfo";

const Payment = () => {
  const [searchParams] = useSearchParams();
  const quoteId = searchParams.get("quote") || undefined;
  const amount = searchParams.get("amount") || undefined;

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-secondary text-secondary-foreground py-16 md:py-24">
        <div className="container-custom">
          <Breadcrumbs items={[{ label: "Payment" }]} />
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Payment</h1>
            <p className="text-lg text-secondary-foreground/80">
              Complete your payment securely using bKash, Nagad, or bank transfer.
            </p>
          </div>
        </div>
      </section>

      {/* Payment Content */}
      <section className="section-padding bg-background">
        <div className="container-custom max-w-3xl">
          <PaymentInfo quoteId={quoteId} amount={amount} />
        </div>
      </section>
    </Layout>
  );
};

export default Payment;