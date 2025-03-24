import { ApplicationForm } from "@/components/application/application-form"
import { ProgramInfo } from "@/components/application/program-info"
import { StandartLayout } from "@/layout/navbar"

const ApplicationFormPageContent: React.FC = () => {
  return (
    <>
      <main className="min-h-screen bg-white py-8 px-4 md:px-8">
        <div className="max-w-4xl mx-auto space-y-8">
          <ProgramInfo />
          <ApplicationForm />
        </div>
      </main>
    </>
  )
}

export const ApplicationFormPage: React.FC = () => (
  <StandartLayout>
    <ApplicationFormPageContent />
  </StandartLayout>
)
