import Head from "next/head";
import RootLayout from "@/src/components/common/layout/RootLayout";
import DigitalMarketingHero from "@/src/components/hero/DigitalMarketingHero";
import DigitalMarketingBrand from "@/src/components/brand/DigitalMarketingBrand";
import DigitalMarketingTestimonial from "@/src/components/testimonial/DigitalMarketingTestimonial";
import DigitalMarketingWorkflow from "@/src/components/workflow/DigitalMarketingWorkflow";
import DigitalMarketingPrice from "@/src/components/price/DigitalMarketingPrice";


export default function DigitalMarketing() {
  return (
    <div>
      <Head>
        <title>Digital Marketing</title>
        <meta name="description" content="Digital Marketing Description" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <RootLayout header="header1" footer="footer1">
          <DigitalMarketingHero />
          <DigitalMarketingBrand />
          <DigitalMarketingTestimonial />
          <DigitalMarketingWorkflow />
          <DigitalMarketingPrice />
        </RootLayout>
      </main>
    </div>
  );
}
