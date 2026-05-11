export default function sitemap() {
  const baseUrl = "https://www.studiodimartino.eu";

  const routes = [
    "",
    "/estetica-dentale",
    "/implantologia",
    "/ortodonzia",
    "/igiene-prevenzione",
    "/odontoiatria-generale",
    "/contatti",
    "/il-team",
    "/info-pazienti",
    "/istruzioni-ortodontiche",
    "/emergenza-dentista-agliana",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}