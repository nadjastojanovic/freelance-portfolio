import Head from "next/head";
import { FeatureSection } from "@/components/sections/FeatureSection";
import {
  Header,
  HeroSection,
  TestimonialSection,
  FaqSection,
  Footer,
  PricingSection,
  PortfolioSection,
  LargeFeatureSection,
  CtaSection,
} from "../components/sections";

import {
  header,
  faqs,
  testimonials,
  features,
  paketi,
  paketiOdrzavanja,
  portfolio,
  cms,
  footer,
} from "@/data";

export default function Home() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <title>Dizajn i izrada sajtova | Nađa Stojanović</title>

        <meta
          name="description"
          content="Nudim kompletna web rješenja — od dizajna i razvoja do hostinga i održavanja. Specijalizovana sam za izradu modernih, responzivnih sajtova koji su brzi, sigurni i optimizovani za sve uređaje. Pomozi svom brendu da zasija online."
        />
        <meta
          name="keywords"
          content="izrada sajtova Crna Gora, web sajt, web dizajn, freelance web developer, freelance web design, Podgorica, Crna Gora, e-commerce, portfolio"
        />
        <meta name="author" content="Nađa Stojanović" />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content="Profesionalna izrada sajtova u Crnoj Gori | Nađa Stojanović"
        />
        <meta
          property="og:description"
          content="Kreiram moderne, responzivne sajtove za mala preduzeća u Crnoj Gori."
        />
        <meta
          property="og:image"
          content="https://nadjastojanovic.dev/og-image.png"
        />
        <meta property="og:url" content="https://nadjastojanovic.dev/" />
        <meta property="og:type" content="website" />
      </Head>
      <Header
        logo={header.logo}
        links={header.links}
        social={header.social}
        buttons={header.buttons}
      />
      <HeroSection
        id="home"
        badge={{
          href: "#paketi",
          icon: "tabler:arrow-right",
          label: "Dizajn i izrada sajtova za mala preduzeća",
        }}
        title="Vaš brend i vaša priča, sada uz sajt koji ostavlja utisak!"
        description="Kroz blisku saradnju oblikujemo modernu, responzivnu stranicu koja govori srcu Vaših mušterija i gradi povjerenje."
        buttons={[
          {
            href: "#portfolio",
            label: "Portfolio",
            color: "light",
            variant: "link",
          },
          {
            href: "https://form.typeform.com/to/ofVVdkQm",
            label: "Upit za nove klijente",
            target: "_blank",
            color: "dark",
            icon: "tabler:arrow-right",
          },
        ]}
        image={{
          src: "./hero.png",
          alt: "Dizajn proces na laptopu",
          className: "w-full h-auto",
        }}
        url="https://www.secernapasta.me"
      />
      <FeatureSection
        id="features"
        title="Da li ste spremni da podnignete Vaš brend na sljedeći nivo?"
        description="Od Vaše vizije, preko prve skice, do vrha Google pretrage - zajedno stvaramo web priču koja traje."
        features={features}
        badge={{
          leading: true,
          icon: "tabler:briefcase-2",
          label: "USLUGE",
        }}
        cmsLabel="Ukoliko imate omiljenu CMS platformu, ja ću se prilagoditi Vašem izboru da bi Vi mogli lakše da ažurirate sajt."
        cms={cms}
      />
      <PortfolioSection
        id="portfolio"
        title="Moj rad"
        badge={{
          leading: true,
          icon: "tabler:comet",
          label: "PORTFOLIO",
        }}
        description="Pogledajte neke od sajtova na kojima sam radila."
        items={portfolio}
      />
      <PricingSection
        id="paketi"
        title="Odaberite Vaš paket"
        description="Nudim različite planove prilagođene Vašim potrebama i budžetu."
        badge={{
          leading: true,
          icon: "tabler:package",
          label: "PAKETI",
        }}
        paketi={paketi}
      />
      <LargeFeatureSection
        reverse={true}
        title="Održavanje i podrška"
        description="Ne dozvolite da Vaše mušterije odu zbog nedostupnog ili sporog sajta."
        list={paketiOdrzavanja}
        image={{
          src: "./phone-mockup.png",
          alt: "Mobilni telefon sa otvorenim nedostupnim sajtom u pretraživaču",
          className:
            "w-full aspect-square object-contain -rotate-6 hover:rotate-0 duration-300 ease-in-out",
        }}
      />
      <TestimonialSection
        id="testimonials"
        title="Šta o meni kažu"
        description="Prava iskustva i rezultati koji govore sami za sebe."
        badge={{
          leading: true,
          icon: "tabler:heart",
          label: "UTISCI",
        }}
        testimonials={testimonials}
      />
      <FaqSection
        id="faqs"
        title="FAQ - Česta pitanja"
        description="Pronađite odgovore na neka od pitanja sa kojim se često susrećem. Ako imate još neko pitanje, slobodno me kontaktirajte."
        buttons={[
          {
            label: "Javite se putem mejla",
            href: "mailto:info@nadjastojanovic.dev",
            color: "primary",
            target: "_blank",
            variant: "link",
            icon: "tabler:arrow-right",
          },
        ]}
        faqs={faqs}
      />
      <CtaSection
        title="Šta čekate?"
        description="Zamislite sajt koji savršeno odražava Vaš brend, privlači prave posjetioce i pretvara ih u lojalne mušterije. Popunite upitnik za nove klijente sada i pretvorimo Vašu viziju u realnost!"
        buttons={[
          {
            label: "Upit za nove klijente",
            href: "https://form.typeform.com/to/ofVVdkQm",
            target: "_blank",
            color: "dark",
          },
        ]}
      />
      <Footer
        id="footer"
        copyright={footer.copyright}
        logo={footer.logo}
        social={footer.social}
        links={footer.links}
      />
    </>
  );
}
