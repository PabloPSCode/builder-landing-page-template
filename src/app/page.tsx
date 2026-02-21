"use client";

import FadeContainer from "@/components/animations-and-loading/FadeContainer";
import RevealContainer from "@/components/animations-and-loading/RevealContainer";
import ZoomContainer from "@/components/animations-and-loading/ZoomContainer";
import Button from "@/components/buttons/Button";
import Footer from "@/components/elements/Footer";
import { HeroSection } from "@/components/elements/HeroSection";
import LandingHeader from "@/components/elements/LandingHeader";
import { Section } from "@/components/elements/Section";
import Paragraph from "@/components/typography/Paragraph";
import Subtitle from "@/components/typography/Subtitle";
import Title from "@/components/typography/Title";
import { homePageMock } from "@/mocks/home-page";
import { DeviceMobileIcon, MapPinIcon } from "@phosphor-icons/react";
import Image from "next/image";
import { useState } from "react";

interface OverlayCollectionCardProps {
  title: string;
  description: string;
  imageUrl: string;
  eyebrow?: string;
  className?: string;
}

function OverlayCollectionCard({
  title,
  description,
  imageUrl,
  eyebrow,
  className,
}: OverlayCollectionCardProps) {
  return (
    <article
      className={`group relative isolate overflow-hidden ${className ?? ""}`}
    >
      <Image
        src={imageUrl}
        alt={title}
        width={1200}
        height={900}
        className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#1f1712]/80 via-[#1f1712]/30 to-transparent" />
      <div className="absolute bottom-0 left-0 z-10 flex w-full flex-col gap-2 p-6 md:p-8">
        {eyebrow ? (
          <Subtitle
            content={eyebrow}
            element="h6"
            className="text-[11px] font-semibold tracking-[0.26em] text-white"
          />
        ) : null}
        <Title
          content={title}
          element="h3"
          className="text-3xl md:text-5xl font-medium leading-none text-white"
        />
        <Paragraph
          content={description}
          className="max-w-md text-sm md:text-lg text-white"
        />
      </div>
    </article>
  );
}

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const currentYear = new Date().getFullYear();

  return (
    <div className="overflow-x-hidden bg-background text-foreground">
      <LandingHeader.Root
        size="md"
        bordered
        sticky
        className="z-50 bg-background/95 backdrop-blur"
      >
        <LandingHeader.Left>
          <Image
            src="/sketch_logo.png"
            alt="mansion_logo"
            width={32}
            height={32}
            className="w-12 h-12 sm:w-16 sm:h-16"
          />
        </LandingHeader.Left>

        <LandingHeader.Center>
          <LandingHeader.Nav className="w-auto gap-8">
            {homePageMock.navItems.map((item) => (
              <LandingHeader.Nav.Item key={item.href} href={item.href}>
                {item.label}
              </LandingHeader.Nav.Item>
            ))}
          </LandingHeader.Nav>
        </LandingHeader.Center>

        <LandingHeader.Right className="relative gap-2 sm:gap-3">
          <LandingHeader.MobileMenuToggle
            open={mobileMenuOpen}
            onToggle={setMobileMenuOpen as never}
          />

          <LandingHeader.MobileMenuPanel
            open={mobileMenuOpen}
            cta={
              <LandingHeader.CTA
                label="SOLICITAR PROJETO"
                className="w-full justify-center rounded-none bg-primary-500 px-5 py-3 text-[11px] tracking-[0.18em] text-[#fff7ee]"
              />
            }
          >
            {homePageMock.navItems.map((item) => (
              <LandingHeader.Nav.Item
                key={`mobile-${item.href}`}
                href={item.href}
              >
                {item.label}
              </LandingHeader.Nav.Item>
            ))}
          </LandingHeader.MobileMenuPanel>

          <Button
            label="SOLICITAR PROJETO"
            className="text-white font-bold rounded-none"
          />
        </LandingHeader.Right>
      </LandingHeader.Root>

      <main className="flex flex-col">
        <HeroSection
          size="full"
          backgroundImageLocalPath={homePageMock.hero.imageUrl}
          sectionClassName="relative min-h-[88vh] !items-start !justify-end !px-4 !py-12 md:!py-20"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#1c140f]/75 via-[#2f241c]/45 to-[#1a140f]/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a130f]/70 via-transparent to-transparent" />
          <div className="relative z-10 mx-auto w-full max-w-7xl">
            <RevealContainer once className="max-w-3xl space-y-5 md:space-y-7">
              <Subtitle
                content={homePageMock.hero.eyebrow}
                element="h6"
                className="text-[11px] md:text-[13px] font-semibold tracking-[0.3em] text-white"
              />
              <Title
                content={homePageMock.hero.title}
                element="h1"
                className="whitespace-pre-line text-6xl md:text-8xl font-medium leading-[0.92] text-white"
              />
              <Subtitle
                content={homePageMock.hero.description}
                className="text-xl text-white/70"
              />
              <div>
                <Button
                  label={homePageMock.hero.ctaLabel}
                  variant="filled"
                  className="rounded-none bg-primary-500 px-8 py-4 text-[11px] font-semibold tracking-[0.24em] text-[#fff9f1] hover:opacity-90"
                />
              </div>
            </RevealContainer>
          </div>
        </HeroSection>

        <div id="colecoes">
          <Section
            size="middle"
            sectionClassName="max-w-[1600px] px-4 py-16 md:px-8 md:py-20"
          >
            <FadeContainer
              once
              className="mx-auto mb-10 flex max-w-3xl flex-col items-center gap-3 text-center md:mb-14"
            >
              <Subtitle
                content={homePageMock.browse.eyebrow}
                element="h6"
                className="text-[11px] md:text-[13px] font-semibold tracking-[0.3em] text-primary-500"
              />
              <Title
                content={homePageMock.browse.title}
                element="h2"
                className="text-5xl md:text-7xl font-medium leading-none"
              />
            </FadeContainer>

            <div className="grid gap-5 md:grid-cols-5">
              <ZoomContainer once className="md:col-span-3">
                <OverlayCollectionCard
                  title={homePageMock.collectionCards[0].title}
                  description={homePageMock.collectionCards[0].description}
                  imageUrl={homePageMock.collectionCards[0].imageUrl}
                  className="h-[420px] md:h-[620px]"
                />
              </ZoomContainer>
              <RevealContainer once className="md:col-span-2">
                <OverlayCollectionCard
                  title={homePageMock.collectionCards[1].title}
                  description={homePageMock.collectionCards[1].description}
                  imageUrl={homePageMock.collectionCards[1].imageUrl}
                  className="h-[420px] md:h-[620px]"
                />
              </RevealContainer>
            </div>
          </Section>
        </div>

        <Section
          size="middle"
          sectionClassName="max-w-[1600px] px-4 py-4 md:px-8 md:py-8"
        >
          <div className="grid w-full overflow-hidden border border-secondary-200 bg-[#f4ede5] md:grid-cols-2">
            <ZoomContainer once className="h-full">
              <div className="relative h-[420px] md:h-full md:min-h-[620px]">
                <Image
                  src={homePageMock.featuredCollection.imageUrl}
                  alt={homePageMock.featuredCollection.title}
                  fill
                  className="object-cover"
                />
              </div>
            </ZoomContainer>

            <RevealContainer once className="flex items-center">
              <div className="flex w-full flex-col gap-5 px-6 py-10 md:px-12 md:py-16">
                <Subtitle
                  content={homePageMock.featuredCollection.eyebrow}
                  element="h6"
                  className="text-[11px] md:text-[13px] font-semibold tracking-[0.3em] text-primary-500"
                />
                <Title
                  content={homePageMock.featuredCollection.title}
                  element="h2"
                  className="text-5xl md:text-7xl font-medium leading-none"
                />
                <Paragraph
                  content={homePageMock.featuredCollection.description}
                  className="max-w-xl text-base md:text-3xl text-foreground/70"
                />
                <div>
                  <Button
                    label={homePageMock.featuredCollection.ctaLabel}
                    variant="filled"
                    className="rounded-none bg-primary-500 px-8 py-4 text-[11px] font-semibold tracking-[0.24em] text-[#fff9f1] hover:opacity-90"
                  />
                </div>
              </div>
            </RevealContainer>
          </div>
        </Section>

        <Section
          size="middle"
          sectionClassName="max-w-[1600px] px-4 py-12 md:px-8 md:py-14"
        >
          <div className="grid w-full gap-5 md:grid-cols-3">
            {homePageMock.styleCards.map((card, index) => (
              <ZoomContainer key={card.title} once delay={index + 1}>
                <OverlayCollectionCard
                  title={card.title}
                  description={card.description}
                  imageUrl={card.imageUrl}
                  eyebrow={index === 1 ? "COLEÇÃO" : undefined}
                  className="h-[460px]"
                />
              </ZoomContainer>
            ))}
          </div>
        </Section>

        <div id="projetos">
          <HeroSection
            size="full"
            backgroundImageLocalPath={homePageMock.projectsShowcase.imageUrl}
            sectionClassName="relative mt-4 min-h-[62vh] !items-start !justify-center !px-4 !py-16"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#2d2119]/78 via-[#2d2119]/40 to-[#2d2119]/22" />
            <div className="relative z-10 mx-auto w-full max-w-7xl">
              <RevealContainer
                once
                className="max-w-4xl space-y-5 md:space-y-7"
              >
                <Subtitle
                  content={homePageMock.projectsShowcase.eyebrow}
                  element="h6"
                  className="text-[11px] md:text-[13px] font-semibold tracking-[0.28em] text-white"
                />
                <Title
                  content={homePageMock.projectsShowcase.title}
                  element="h2"
                  className="text-6xl md:text-8xl font-medium leading-[0.93] text-white"
                />
                <Subtitle
                  content={homePageMock.projectsShowcase.description}
                  className="max-w-3xl text-base md:text-3xl text-white/80"
                />
                <div>
                  <Button
                    label={homePageMock.projectsShowcase.ctaLabel}
                    variant="filled"
                    className="rounded-none bg-primary-500 px-8 py-4 text-[11px] font-semibold tracking-[0.24em] text-[#fff9f1] hover:opacity-90"
                  />
                </div>
              </RevealContainer>
            </div>
          </HeroSection>
        </div>

        <div id="sobre">
          <Section
            size="middle"
            sectionClassName="max-w-[1600px] px-4 py-16 md:px-8 md:py-20"
          >
            <FadeContainer
              once
              className="mx-auto mb-10 max-w-3xl space-y-3 text-center"
            >
              <Subtitle
                content="SOBRE O ESTÚDIO"
                element="h6"
                className="text-[11px] md:text-[13px] font-semibold tracking-[0.28em] text-primary-500"
              />
              <Title
                content="Do conceito ao detalhamento"
                element="h2"
                className="text-5xl md:text-7xl font-medium leading-none"
              />
              <Paragraph
                content="Trabalhamos com método, repertório técnico e sensibilidade para transformar casas em espaços que traduzem estilo de vida."
                className="text-base md:text-3xl text-foreground/70"
              />
            </FadeContainer>

            <div className="grid w-full gap-4 md:grid-cols-2">
              <RevealContainer once className="h-full">
                <div className="flex h-full flex-col gap-3 border border-secondary-200 bg-bg-card p-6 md:p-8">
                  <MapPinIcon
                    className="h-7 w-7 text-primary-600"
                    weight="regular"
                  />
                  <Subtitle
                    content="Atendimento presencial"
                    element="h4"
                    className="text-2xl md:text-3xl font-medium"
                  />
                  <Paragraph
                    content="Joao Monlevade - MG, com visitas técnicas sob agendamento para obras e reformas residenciais."
                    className="text-sm md:text-lg text-foreground/75"
                  />
                </div>
              </RevealContainer>

              <ZoomContainer once className="h-full">
                <div className="flex h-full flex-col gap-3 border border-secondary-200 bg-bg-card p-6 md:p-8">
                  <DeviceMobileIcon
                    className="h-7 w-7 text-primary-600"
                    weight="regular"
                  />
                  <Subtitle
                    content="Contato direto"
                    element="h4"
                    className="text-2xl md:text-3xl font-medium"
                  />
                  <Paragraph
                    content="Telefone principal: 3191234-1234. Retorno rápido para orçamento, briefing e agenda de reunião."
                    className="text-sm md:text-lg text-foreground/75"
                  />
                </div>
              </ZoomContainer>
            </div>
          </Section>
        </div>
      </main>

      <Footer.Root className="mt-4" bordered>
        <Footer.Top columns={4} bordered>
          <Footer.Column
            title={homePageMock.brandName}
            items={[...homePageMock.footer.columns.studio] as never}
          />
          <Footer.Column
            title="Menu"
            items={[...homePageMock.footer.columns.menu] as never}
          />
          <Footer.Column
            title="Serviços"
            items={[...homePageMock.footer.columns.services] as never}
          />
          <Footer.Column
            title="Contato"
            items={[...homePageMock.footer.columns.contact] as never}
          />
        </Footer.Top>

        <Footer.SocialRow
          items={homePageMock.footer.socialItems as never}
          iconsClassName="text-foreground/70 hover:text-foreground"
          bordered
        />

        <Footer.Bottom>
          <div className="flex w-full flex-col items-center justify-between gap-2 text-center sm:flex-row sm:text-left">
            <Paragraph
              content={`© ${currentYear} ${homePageMock.brandName}. Todos os direitos reservados.`}
              className="text-xs md:text-sm text-foreground/70"
            />
            <Paragraph
              content="Template de referência para arquitetos e designers de casas."
              className="text-xs md:text-sm text-foreground/60"
            />
          </div>
        </Footer.Bottom>
      </Footer.Root>
    </div>
  );
}
