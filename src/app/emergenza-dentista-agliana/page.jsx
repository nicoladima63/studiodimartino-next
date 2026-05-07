import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
    title: "Dentista Urgente Agliana | Emergenze e Dolore ai Denti",
    description:
        "Dentista ad Agliana per urgenze: mal di denti, infezioni, gonfiore, denti rotti. Intervento rapido e gestione del dolore. Chiama subito lo studio.",
    path: "/emergenza-dentista-agliana",
    keywords: [
        "dentista urgente Agliana",
        "emergenza dentista Agliana",
        "mal di denti Agliana",
        "urgenza dentale Prato",
        "dentista urgente Montemurlo",
    ],
});

export default function EmergenzaDentalePage() {
    return (
        <div>
            <Header />

            <Hero
                title="Dentista Urgente ad Agliana"
                subtitle="Gestiamo dolore ai denti, infezioni e urgenze odontoiatriche. Chiama subito."
                showButtons={false}
            />

            <section className="py-16 w-full bg-white">
                <div className="max-w-4xl mx-auto px-4">

                    <h1 className="text-3xl md:text-4xl font-bold text-[#2F4F4F] mb-6">
                        Emergenze dentali ad Agliana
                    </h1>

                    <p className="text-gray-600 mb-4">
                        Se hai dolore forte ai denti, gonfiore o un dente rotto, è importante intervenire subito.
                        Lo Studio Dentistico Di Martino ad Agliana gestisce quotidianamente urgenze odontoiatriche.
                    </p>

                    <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-6">
                        <h2 className="text-xl font-bold text-red-700 mb-2">
                            Hai dolore adesso?
                        </h2>
                        <p className="text-gray-700 mb-4">
                            Chiama subito lo studio per essere valutato il prima possibile.
                        </p>

                        <a
                            href="tel:+390574712060"
                            className="inline-block bg-red-600 text-white px-6 py-3 rounded-lg font-semibold"
                        >
                            Chiama ora
                        </a>
                    </div>

                    <h2 className="text-2xl font-bold text-[#2F4F4F] mt-10 mb-4">
                        Quando è un’emergenza
                    </h2>

                    <ul className="list-disc ml-6 space-y-2 text-gray-600 mb-6">
                        <li>Dolore dentale intenso e continuo</li>
                        <li>Gonfiore del viso o delle gengive</li>
                        <li>Dente rotto o trauma</li>
                        <li>Ascesso o infezione</li>
                        <li>Perdita improvvisa di un dente</li>
                    </ul>

                    <h2 className="text-2xl font-bold text-[#2F4F4F] mt-10 mb-4">
                        Cosa fare nell’attesa
                    </h2>

                    <p className="text-gray-600 mb-4">
                        Evita automedicazioni e contatta lo studio il prima possibile per una valutazione.
                        Intervenire tempestivamente riduce complicazioni e dolore.
                    </p>

                    <h2 className="text-2xl font-bold text-[#2F4F4F] mt-10 mb-4">
                        Perché rivolgersi a noi
                    </h2>

                    <ul className="list-disc ml-6 space-y-2 text-gray-600 mb-6">
                        <li>Studio attivo ad Agliana da oltre 30 anni</li>
                        <li>Gestione rapida delle urgenze</li>
                        <li>Approccio conservativo e mirato al dolore</li>
                        <li>Esperienza su casi complessi</li>
                    </ul>

                    <div className="mt-10 bg-gray-50 rounded-lg p-6 border border-gray-200">
                        <h3 className="text-xl font-bold text-[#2F4F4F] mb-3">
                            Intervento rapido
                        </h3>
                        <p className="text-gray-600 mb-4">
                            In caso di dolore acuto, contatta subito lo studio.
                        </p>

                        <a
                            href="tel:+390574712060"
                            className="inline-flex items-center justify-center bg-black text-white px-6 py-3 rounded-lg font-semibold"
                        >
                            Chiama lo studio
                        </a>
                    </div>

                </div>
            </section>

            <Footer />
        </div>
    );
}
