import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import AppealForm from "./appeal-form";

export default function AppealAssessmentPage() {
    return (
        <div className="flex flex-col min-h-dvh bg-background">
            <Header />
            <main className="flex-1">
                <section id="appeal-assessment" className="py-24 sm:py-32">
                    <div className="container mx-auto px-6 lg:px-8">
                        <div className="mx-auto max-w-2xl text-center">
                            <h1 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl font-headline">
                                AI-Powered Appeal Assessment
                            </h1>
                            <p className="mt-4 text-lg leading-8 text-muted-foreground">
                                Get an instant analysis of your unban appeal. Our AI assesses the likelihood of success based on Instagram's policies and provides actionable suggestions.
                            </p>
                        </div>
                        <div className="mx-auto mt-16 max-w-xl sm:mt-20">
                            <AppealForm />
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
