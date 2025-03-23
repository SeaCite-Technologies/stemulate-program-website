import { FC } from "react"
import { StandartLayout } from "@/layout/navbar"
import { LandingHero } from "@/components/landing/hero"
import { WhyResearch } from "@/components/landing/why-research"
import { WorkWithExperts } from "@/components/landing/work-with-experts"
import { ResearchAreas } from "@/components/landing/research-areas"
import { FAQ } from "@/components/landing/faq"

const LandingPageContent: FC = () => {
  return (
    <>
      <LandingHero />
      <WhyResearch />
      <WorkWithExperts />
      <FAQ />
      <ResearchAreas />
    </>
  )
}
export const LandingPage = () => (
  <StandartLayout Component={LandingPageContent} />
)
