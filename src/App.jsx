import {
  ArrowRight,
  CalendarDots,
  CheckCircle,
  FileArrowDown,
  GlobeHemisphereWest,
  ShieldCheck,
  WarningCircle,
} from "@phosphor-icons/react";
import { motion } from "framer-motion";

const metrics = [
  { value: "183", label: "días de referencia para residencia fiscal" },
  { value: "9,99 €", label: "precio del PDF listo para auditoría" },
  { value: "2", label: "fuentes oficiales enlazadas en la experiencia" },
];

const steps = [
  {
    title: "Añade tus periodos",
    description:
      "Registra estancias en España o la UE por rangos de fecha y evita perder el contexto entre viajes, entradas y salidas.",
    icon: CalendarDots,
  },
  {
    title: "Visualiza tu exposición",
    description:
      "Controla los días acumulados, los restantes y el porcentaje consumido frente al umbral de 183 días.",
    icon: GlobeHemisphereWest,
  },
  {
    title: "Genera el informe",
    description:
      "Desbloquea un PDF profesional con tus datos para documentación interna, revisión fiscal o preparación de auditoría.",
    icon: FileArrowDown,
  },
];

const whatCounts = [
  "Cualquier día con presencia física en España, aunque sea parcial.",
  "Los días de llegada y salida computan como días completos.",
  "Las ausencias temporales pueden seguir sumando al total.",
  "También cuentan los días en islas y otros territorios españoles.",
];

const exceptions = [
  "Personal diplomático y consular con tratamiento específico.",
  "Programas temporales de estudios con supuestos particulares.",
  "Trabajadores transfronterizos sujetos a reglas diferentes.",
  "Tratados de doble imposición que pueden prevalecer sobre la norma interna.",
  "Vínculos económicos y familiares que siguen importando en el análisis final.",
];

const sources = [
  {
    name: "Agencia Tributaria",
    href: "https://sede.agenciatributaria.gob.es/",
    detail: "Referencia oficial en España para residencia y obligaciones fiscales.",
  },
  {
    name: "Comisión Europea",
    href: "https://taxation-customs.ec.europa.eu/",
    detail: "Marco de fiscalidad y unión aduanera a nivel comunitario.",
  },
];

const marquee = [
  "Regla de 183 días",
  "Seguimiento por periodos",
  "Fuentes oficiales",
  "PDF listo para auditoría",
  "Diseñado para nómadas fiscales",
  "Cumplimiento documental",
];

const reveal = {
  hidden: { opacity: 0, y: 32 },
  show: (index = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.08,
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

function SectionEyebrow({ children }) {
  return (
    <span className="inline-flex items-center rounded-full border border-cyan-950/10 bg-white/70 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-cyan-900 shadow-[inset_0_1px_0_rgba(255,255,255,0.5)] backdrop-blur">
      {children}
    </span>
  );
}

function App() {
  return (
    <div className="min-h-[100dvh] bg-stone-100 text-slate-950">
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute left-[-10%] top-[-8rem] h-[30rem] w-[30rem] rounded-full bg-cyan-300/30 blur-3xl" />
        <div className="absolute right-[-8%] top-[14rem] h-[28rem] w-[28rem] rounded-full bg-emerald-200/40 blur-3xl" />
        <div className="absolute bottom-[-10rem] left-[20%] h-[24rem] w-[24rem] rounded-full bg-white/70 blur-3xl" />
        <div className="noise-mask absolute inset-0 opacity-40" />
      </div>

      <header className="sticky top-0 z-50 border-b border-black/5 bg-stone-100/75 backdrop-blur-xl">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-5 py-4 sm:px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/30 bg-slate-950 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.2)]">
              <ShieldCheck size={22} weight="fill" />
            </div>
            <div>
              <p className="font-display text-lg font-semibold tracking-tight">Calculadora Fiscal 183</p>
              <p className="text-sm text-slate-600">Residencia fiscal con contexto, criterio y diseño premium</p>
            </div>
          </div>
          <a
            href="#cta"
            className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition duration-200 hover:-translate-y-[1px] hover:bg-cyan-900 active:translate-y-0 active:scale-[0.98]"
          >
            Ver propuesta
            <ArrowRight size={16} weight="bold" />
          </a>
        </div>
      </header>

      <main>
        <section className="mx-auto grid min-h-[100dvh] max-w-[1400px] grid-cols-1 gap-12 px-5 py-14 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:py-20">
          <motion.div
            initial="hidden"
            animate="show"
            variants={reveal}
            className="flex flex-col justify-center"
          >
            <SectionEyebrow>Tax Nomad Utility</SectionEyebrow>
            <h1 className="mt-6 max-w-4xl font-display text-5xl font-semibold tracking-tighter text-slate-950 sm:text-6xl lg:text-7xl">
              Convierte la regla de los 183 días en una decisión clara, visual y defendible.
            </h1>
            <p className="mt-6 max-w-[64ch] text-base leading-8 text-slate-600 sm:text-lg">
              Esta landing recoge el contenido esencial de la calculadora fiscal para nómadas:
              seguimiento de estancias, control de exposición fiscal, explicación de la norma,
              excepciones relevantes y acceso a un PDF listo para auditoría por 9,99 €.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {metrics.map((metric, index) => (
                <motion.div
                  key={metric.label}
                  custom={index}
                  initial="hidden"
                  animate="show"
                  variants={reveal}
                  className="rounded-[2rem] border border-white/50 bg-white/70 p-5 shadow-diffusion backdrop-blur-xl"
                >
                  <p className="font-display text-3xl font-semibold tracking-tight text-slate-950">{metric.value}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{metric.label}</p>
                </motion.div>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#cta"
                className="inline-flex items-center gap-2 rounded-full bg-cyan-700 px-6 py-4 text-sm font-semibold text-white shadow-glow transition duration-200 hover:-translate-y-[1px] hover:bg-cyan-800 active:translate-y-0 active:scale-[0.98]"
              >
                Descargar enfoque premium
                <ArrowRight size={16} weight="bold" />
              </a>
              <a
                href="#sources"
                className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white/75 px-6 py-4 text-sm font-semibold text-slate-900 transition duration-200 hover:-translate-y-[1px] hover:border-slate-950 active:translate-y-0 active:scale-[0.98]"
              >
                Revisar fuentes oficiales
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex items-center justify-center"
          >
            <div className="grid w-full gap-5 sm:grid-cols-2 lg:grid-cols-6">
              <div className="relative overflow-hidden rounded-[2.5rem] border border-white/50 bg-slate-950 p-7 text-white shadow-diffusion sm:col-span-2 lg:col-span-4">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.22),transparent_45%)]" />
                <p className="relative text-sm uppercase tracking-[0.2em] text-cyan-200">Snapshot de la experiencia</p>
                <div className="relative mt-8 grid gap-4">
                  <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]">
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="text-sm text-slate-300">Estado actual</p>
                        <p className="mt-2 font-display text-4xl tracking-tight">146 días</p>
                      </div>
                      <span className="inline-flex items-center gap-2 rounded-full bg-emerald-400/15 px-3 py-1 text-xs font-semibold text-emerald-200">
                        <span className="h-2 w-2 rounded-full bg-emerald-300 animate-pulseSoft" />
                        Seguro
                      </span>
                    </div>
                    <div className="mt-5 h-3 overflow-hidden rounded-full bg-white/10">
                      <div className="h-full w-[79.7%] rounded-full bg-gradient-to-r from-cyan-300 via-cyan-400 to-emerald-300" />
                    </div>
                    <p className="mt-3 text-sm text-slate-300">Quedan 37 días antes del umbral fiscal.</p>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]">
                      <p className="text-sm text-slate-300">Rangos registrados</p>
                      <ul className="mt-4 space-y-3 text-sm text-white/90">
                        <li className="flex items-center justify-between rounded-2xl bg-white/5 px-3 py-3">
                          <span>14 ene - 22 feb</span>
                          <span>40 días</span>
                        </li>
                        <li className="flex items-center justify-between rounded-2xl bg-white/5 px-3 py-3">
                          <span>05 abr - 29 may</span>
                          <span>55 días</span>
                        </li>
                        <li className="flex items-center justify-between rounded-2xl bg-white/5 px-3 py-3">
                          <span>10 sep - 30 oct</span>
                          <span>51 días</span>
                        </li>
                      </ul>
                    </div>
                    <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]">
                      <p className="text-sm text-slate-300">Informe premium</p>
                      <div className="mt-4 rounded-[1.5rem] border border-cyan-300/15 bg-cyan-300/10 p-4">
                        <p className="text-sm uppercase tracking-[0.18em] text-cyan-200">Audit-ready</p>
                        <p className="mt-3 text-sm leading-6 text-slate-100">
                          Reporte generado bajo estándares de cumplimiento de la UE con datos del usuario y rangos consolidados.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="overflow-hidden rounded-[2.5rem] border border-slate-200/60 bg-white/80 p-6 shadow-diffusion backdrop-blur-xl sm:col-span-1 lg:col-span-2 lg:row-span-2">
                <p className="text-sm uppercase tracking-[0.22em] text-slate-500">Qué incluye</p>
                <div className="mt-6 space-y-5">
                  {[
                    "Seguimiento de días por rango",
                    "Resumen de uso del límite",
                    "Explicación legal clara",
                    "Fuentes oficiales enlazadas",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <CheckCircle size={20} weight="fill" className="mt-0.5 text-cyan-700" />
                      <p className="text-sm leading-6 text-slate-700">{item}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-8 rounded-[1.75rem] border border-amber-200 bg-amber-50 p-5">
                  <div className="flex items-start gap-3">
                    <WarningCircle size={22} weight="fill" className="mt-0.5 text-amber-600" />
                    <p className="text-sm leading-6 text-amber-900">
                      La calculadora es informativa y no sustituye asesoramiento fiscal o legal personalizado.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        <section className="overflow-hidden border-y border-black/5 bg-slate-950 py-4 text-white">
          <div className="marquee-track flex min-w-max gap-4">
            {[...marquee, ...marquee].map((item, index) => (
              <span
                key={`${item}-${index}`}
                className="inline-flex items-center gap-4 px-4 font-display text-xl tracking-tight text-white/85"
              >
                <span>{item}</span>
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-300" />
              </span>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-[1400px] px-5 py-24 sm:px-8">
          <div className="max-w-3xl">
            <SectionEyebrow>Flujo</SectionEyebrow>
            <h2 className="mt-5 font-display text-4xl font-semibold tracking-tighter text-slate-950 sm:text-5xl">
              Una utilidad fiscal pensada para aportar claridad, no fricción.
            </h2>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.article
                  key={step.title}
                  custom={index}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.25 }}
                  variants={reveal}
                  className="rounded-[2.5rem] border border-white/50 bg-white/70 p-8 shadow-diffusion backdrop-blur-xl"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-950 text-white">
                    <Icon size={24} weight="duotone" />
                  </div>
                  <p className="mt-8 text-sm uppercase tracking-[0.18em] text-slate-500">Paso {index + 1}</p>
                  <h3 className="mt-3 font-display text-3xl font-semibold tracking-tight text-slate-950">{step.title}</h3>
                  <p className="mt-4 text-base leading-8 text-slate-600">{step.description}</p>
                </motion.article>
              );
            })}
          </div>
        </section>

        <section className="mx-auto grid max-w-[1400px] grid-cols-1 gap-6 px-5 pb-24 sm:px-8 lg:grid-cols-[0.88fr_1.12fr]">
          <motion.article
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            variants={reveal}
            className="rounded-[2.5rem] border border-slate-200/70 bg-white/70 p-8 shadow-diffusion backdrop-blur-xl"
          >
            <SectionEyebrow>Marco normativo</SectionEyebrow>
            <h2 className="mt-5 font-display text-4xl font-semibold tracking-tighter text-slate-950">
              Qué es la regla de los 183 días
            </h2>
            <p className="mt-6 text-base leading-8 text-slate-600">
              Es uno de los criterios más utilizados por España y otros países de la UE para determinar
              residencia fiscal. Alcanzar o superar 183 días dentro de un año natural puede implicar
              ser considerado residente fiscal y tributar por la renta mundial.
            </p>
            <div className="mt-10 rounded-[2rem] border border-cyan-200/60 bg-cyan-50 p-6">
              <p className="text-sm uppercase tracking-[0.2em] text-cyan-800">Posicionamiento del producto</p>
              <p className="mt-3 text-base leading-7 text-cyan-950">
                La calculadora convierte este criterio en un panel entendible, accionable y documentable para
                personas con movilidad internacional.
              </p>
            </div>
          </motion.article>

          <div className="grid gap-6">
            <motion.article
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              variants={reveal}
              className="rounded-[2.5rem] border border-slate-200/70 bg-slate-950 p-8 text-white shadow-diffusion"
            >
              <p className="text-sm uppercase tracking-[0.2em] text-cyan-200">Qué cuenta como día</p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {whatCounts.map((item) => (
                  <div
                    key={item}
                    className="rounded-[1.75rem] border border-white/10 bg-white/5 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]"
                  >
                    <p className="text-sm leading-7 text-slate-100">{item}</p>
                  </div>
                ))}
              </div>
            </motion.article>

            <motion.article
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              variants={reveal}
              className="rounded-[2.5rem] border border-slate-200/70 bg-white/80 p-8 shadow-diffusion backdrop-blur-xl"
            >
              <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Excepciones y matices</p>
              <div className="mt-6 grid gap-3">
                {exceptions.map((item) => (
                  <div key={item} className="flex gap-3 rounded-[1.5rem] border border-slate-200 bg-stone-50 px-4 py-4">
                    <span className="mt-2 h-2.5 w-2.5 rounded-full bg-cyan-700" />
                    <p className="text-sm leading-7 text-slate-700">{item}</p>
                  </div>
                ))}
              </div>
            </motion.article>
          </div>
        </section>

        <section id="sources" className="mx-auto max-w-[1400px] px-5 pb-24 sm:px-8">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-[0.8fr_1.2fr]">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              variants={reveal}
              className="rounded-[2.5rem] border border-white/50 bg-white/70 p-8 shadow-diffusion backdrop-blur-xl"
            >
              <SectionEyebrow>Fuentes</SectionEyebrow>
              <h2 className="mt-5 font-display text-4xl font-semibold tracking-tighter text-slate-950">
                Base informativa respaldada por organismos oficiales
              </h2>
              <p className="mt-5 text-base leading-8 text-slate-600">
                La experiencia original enlaza directamente las referencias que ayudan a contextualizar la regla,
                sin prometer una sustitución del criterio profesional.
              </p>
            </motion.div>

            <div className="grid gap-6">
              {sources.map((source, index) => (
                <motion.a
                  key={source.name}
                  href={source.href}
                  target="_blank"
                  rel="noreferrer"
                  custom={index}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.25 }}
                  variants={reveal}
                  className="group rounded-[2.5rem] border border-slate-200/70 bg-slate-950 p-8 text-white shadow-diffusion transition duration-300 hover:-translate-y-[2px]"
                >
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-sm uppercase tracking-[0.2em] text-cyan-200">Fuente oficial</p>
                      <h3 className="mt-3 font-display text-3xl font-semibold tracking-tight">{source.name}</h3>
                      <p className="mt-4 max-w-[52ch] text-base leading-8 text-slate-300">{source.detail}</p>
                    </div>
                    <ArrowRight
                      size={22}
                      className="shrink-0 transition duration-300 group-hover:translate-x-1"
                      weight="bold"
                    />
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </section>

        <section id="cta" className="px-5 pb-24 sm:px-8">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            variants={reveal}
            className="mx-auto max-w-[1400px] overflow-hidden rounded-[3rem] border border-white/50 bg-slate-950 px-8 py-10 text-white shadow-diffusion sm:px-12 sm:py-14"
          >
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
              <div>
                <SectionEyebrow>Oferta</SectionEyebrow>
                <h2 className="mt-5 font-display text-4xl font-semibold tracking-tighter text-white sm:text-5xl">
                  Presenta la calculadora como un producto fiable, elegante y listo para convertir.
                </h2>
                <p className="mt-6 max-w-[62ch] text-base leading-8 text-slate-300">
                  La propuesta fusiona utilidad práctica, contexto legal, claridad editorial y una salida premium:
                  el PDF audit-ready con los datos del usuario. Todo el contenido base procede del repo
                  `calculadora-fiscal-183`, pero aquí se empaqueta en una landing de posicionamiento superior.
                </p>
              </div>

              <div className="rounded-[2.5rem] border border-white/10 bg-white/5 p-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]">
                <p className="text-sm uppercase tracking-[0.2em] text-cyan-200">Precio actual</p>
                <div className="mt-4 flex items-end gap-3">
                  <span className="font-display text-6xl font-semibold tracking-tighter">9,99</span>
                  <span className="pb-2 text-xl text-slate-300">EUR</span>
                </div>
                <p className="mt-4 text-sm leading-7 text-slate-300">
                  Informe profesional para documentación y preparación ante revisión. Uso informativo, no asesoramiento legal o fiscal.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <a
                    href="mailto:hola@regla183.com"
                    className="inline-flex items-center gap-2 rounded-full bg-cyan-700 px-6 py-4 text-sm font-semibold text-white transition duration-200 hover:-translate-y-[1px] hover:bg-cyan-800 active:translate-y-0 active:scale-[0.98]"
                  >
                    Solicitar demo
                    <ArrowRight size={16} weight="bold" />
                  </a>
                  <a
                    href="https://sede.agenciatributaria.gob.es/"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-4 text-sm font-semibold text-white transition duration-200 hover:-translate-y-[1px] hover:bg-white/10 active:translate-y-0 active:scale-[0.98]"
                  >
                    Revisar contexto fiscal
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </section>
      </main>
    </div>
  );
}

export default App;
