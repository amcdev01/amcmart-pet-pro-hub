import { Smartphone, Building2, Copy, Check } from "lucide-react";
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PAYMENT_INFO, COMPANY_INFO } from "@/lib/constants";

interface PaymentInfoProps {
  quoteId?: string;
  amount?: string;
}

const PaymentInfo = ({ quoteId, amount }: PaymentInfoProps) => {
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const CopyButton = ({ text, field }: { text: string; field: string }) => (
    <Button
      variant="ghost"
      size="icon"
      className="h-8 w-8"
      onClick={() => copyToClipboard(text, field)}
    >
      {copiedField === field ? (
        <Check className="h-4 w-4 text-green-500" />
      ) : (
        <Copy className="h-4 w-4" />
      )}
    </Button>
  );

  return (
    <div className="space-y-6">
      {/* Payment Header */}
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-2">Payment Information</h2>
        <p className="text-muted-foreground">
          Complete your payment using any of the methods below
        </p>
        {quoteId && (
          <p className="mt-2 text-sm bg-primary/10 text-primary px-3 py-1 rounded-full inline-block">
            Quote ID: {quoteId}
          </p>
        )}
        {amount && (
          <p className="mt-2 text-lg font-semibold">
            Amount: ৳{amount}
          </p>
        )}
      </div>

      {/* Mobile Payments */}
      <div className="grid md:grid-cols-2 gap-4">
        {/* bKash */}
        <Card className="border-pink-200 bg-gradient-to-br from-pink-50 to-white dark:from-pink-950/20 dark:to-background">
          <CardHeader className="pb-3">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-pink-500 rounded-lg flex items-center justify-center">
                <Smartphone className="h-6 w-6 text-white" />
              </div>
              <div>
                <CardTitle className="text-pink-600">{PAYMENT_INFO.bkash.name}</CardTitle>
                <CardDescription>{PAYMENT_INFO.bkash.type}</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center justify-between bg-white dark:bg-background rounded-lg p-3 border">
              <span className="font-mono text-lg font-semibold">{PAYMENT_INFO.bkash.number}</span>
              <CopyButton text={PAYMENT_INFO.bkash.number} field="bkash" />
            </div>
            <p className="text-sm text-muted-foreground">{PAYMENT_INFO.bkash.instructions}</p>
          </CardContent>
        </Card>

        {/* Nagad */}
        <Card className="border-orange-200 bg-gradient-to-br from-orange-50 to-white dark:from-orange-950/20 dark:to-background">
          <CardHeader className="pb-3">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center">
                <Smartphone className="h-6 w-6 text-white" />
              </div>
              <div>
                <CardTitle className="text-orange-600">{PAYMENT_INFO.nagad.name}</CardTitle>
                <CardDescription>{PAYMENT_INFO.nagad.type}</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center justify-between bg-white dark:bg-background rounded-lg p-3 border">
              <span className="font-mono text-lg font-semibold">{PAYMENT_INFO.nagad.number}</span>
              <CopyButton text={PAYMENT_INFO.nagad.number} field="nagad" />
            </div>
            <p className="text-sm text-muted-foreground">{PAYMENT_INFO.nagad.instructions}</p>
          </CardContent>
        </Card>
      </div>

      {/* Bank Transfer */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center">
              <Building2 className="h-6 w-6 text-secondary-foreground" />
            </div>
            <div>
              <CardTitle>Bank Transfer</CardTitle>
              <CardDescription>Direct bank deposit option</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-1">
              <p className="text-sm text-muted-foreground">Bank Name</p>
              <p className="font-medium">{PAYMENT_INFO.bankTransfer.bankName}</p>
            </div>
            <div className="space-y-1">
              <p className="text-sm text-muted-foreground">Account Name</p>
              <p className="font-medium">{PAYMENT_INFO.bankTransfer.accountName}</p>
            </div>
            <div className="space-y-1">
              <p className="text-sm text-muted-foreground">Account Number</p>
              <div className="flex items-center gap-2">
                <p className="font-mono font-medium">{PAYMENT_INFO.bankTransfer.accountNumber}</p>
                <CopyButton text={PAYMENT_INFO.bankTransfer.accountNumber} field="account" />
              </div>
            </div>
            <div className="space-y-1">
              <p className="text-sm text-muted-foreground">Branch</p>
              <p className="font-medium">{PAYMENT_INFO.bankTransfer.branchName}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Important Note */}
      <div className="bg-muted/50 rounded-xl p-4 border border-border">
        <h3 className="font-semibold mb-2">📝 After Payment</h3>
        <p className="text-sm text-muted-foreground mb-3">{PAYMENT_INFO.paymentNote}</p>
        <div className="flex flex-wrap gap-2">
          <a
            href={`https://wa.me/${COMPANY_INFO.phone.replace(/[^0-9]/g, "")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors"
          >
            <Smartphone className="h-4 w-4" />
            WhatsApp
          </a>
          <a
            href={`mailto:${COMPANY_INFO.email}?subject=Payment Confirmation${quoteId ? ` - Quote ${quoteId}` : ""}`}
            className="inline-flex items-center gap-2 text-sm bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors"
          >
            Email Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default PaymentInfo;