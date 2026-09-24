"use client";

import { useCallback, useMemo, useRef, useState } from "react";
import {
  brand,
  constellationLabels,
  developKeys,
  endingFromChoices,
  firstSteps,
  labels,
  Lang,
  pathIdFromChoices,
  pullKeys,
  sampleTrajectories,
  stepEchoes,
  storyCopy,
  tryKeys,
} from "@/content/copy";

type Phase =
  | "intro"
  | "hero"
  | "question"
  | "builder"
  | "card"
  | "rest";

export default function Experience() {
  const [phase, setPhase] = useState<Phase>("intro");
  const [introStep, setIntroStep] = useState(0);
  const [q, setQ] = useState(0);
  const [pull, setPull] = useState<string | null>(null);
  const [dev, setDev] = useState<string | null>(null);
  const [tryItem, setTryItem] = useState<string | null>(null);
  const [echo, setEcho] = useState<string | null>(null);
  const [wall, setWall] = useState<string[]>(sampleTrajectories);
  const [draft, setDraft] = useState("");
  const [sound, setSound] = useState(false);
  const [shareOpen, setShareOpen] = useState(false);
  const [shareLang, setShareLang] = useState<Lang>("kk");
  const restRef = useRef<HTMLDivElement>(null);
  const storyRef = useRef<HTMLDivElement>(null);

  const endingKey = useMemo(() => {
    if (!pull || !tryItem) return "DISCOVERY";
    return endingFromChoices(pull, tryItem);
  }, [pull, tryItem]);

  const pid = useMemo(
    () => pathIdFromChoices(pull ?? "", dev ?? "", tryItem ?? ""),
    [pull, dev, tryItem]
  );

  const L = labels.kk;
  const titleKk = pull
    ? L.title[pull as keyof typeof L.title]
    : "АШЫҚ ЖОЛ";

  const skipIntro = () => setPhase("hero");

  const finishIntro = useCallback(() => {
    if (introStep < 2) setIntroStep((s) => s + 1);
    else setPhase("hero");
  }, [introStep]);

  const resetBuilder = () => {
    setPull(null);
    setDev(null);
    setTryItem(null);
    setQ(0);
    setShareOpen(false);
    setPhase("builder");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const shareText = (lang: Lang) => {
    const pack = labels[lang];
    const st = storyCopy[lang];
    const t = pull ? pack.title[pull as keyof typeof pack.title] : "";
    const p = pull ? pack.pull[pull as keyof typeof pack.pull] : "";
    const d = dev ? pack.develop[dev as keyof typeof pack.develop] : "";
    const tr = tryItem ? pack.try[tryItem as keyof typeof pack.try] : "";
    const e = pack.ending[endingKey as keyof typeof pack.ending];
    return [st.yours, t, p, d, tr, e, pid, brand.name].join("\n");
  };

  const pageLink = () =>
    typeof window !== "undefined" ? window.location.origin : "";

  const saveCard = async (lang: Lang) => {
    const payload = `${shareText(lang)}\n#voteforAlikhan\n${pageLink()}`;
    try {
      if (typeof navigator.share === "function") {
        await navigator.share({
          title: brand.kazakh,
          text: payload,
          url: pageLink(),
        });
        setEcho("Сториске жіберу ашылды.");
      } else {
        await navigator.clipboard.writeText(payload);
        setEcho("Сілтеме көшірілді. Сториске қой.");
      }
      setTimeout(() => setEcho(null), 2200);
    } catch {
      try {
        await navigator.clipboard.writeText(payload);
        setEcho("Сілтеме көшірілді.");
      } catch {
        setEcho("Бөлісу қолжетімсіз.");
      }
      setTimeout(() => setEcho(null), 1800);
    }
  };

  const addWall = () => {
    const t = draft.trim();
    if (t.length < 8) return;
    setWall((w) => [t, ...w].slice(0, 24));
    setDraft("");
  };

  return (
    <main className="relative min-h-svh">
      <button
        type="button"
        className="focus-ring mono fixed right-4 top-4 z-[60] text-[10px] tracking-[0.2em] text-[#8a8f99]"
        onClick={() => setSound((s) => !s)}
        aria-pressed={sound}
      >
        ДЫБЫС {sound ? "ҚОСУЛЫ" : "ӨШІРУЛІ"}
      </button>

      {phase === "intro" && (
        <section className="screen items-center text-center" onClick={finishIntro}>
          <p className="mono mb-16 text-[10px] tracking-[0.35em] text-[#8a8f99]">
            {brand.kazakh}
            <span className="mx-3">·</span>
            {brand.author}
          </p>
          {introStep === 0 && (
            <h1 className="max-w-xl text-3xl font-medium tracking-[0.08em] md:text-5xl">
              Әркімнің бастау нүктесі бар.
            </h1>
          )}
          {introStep === 1 && (
            <h1 className="text-3xl font-medium tracking-[0.08em] md:text-5xl">
              Сенікі қайсы?
            </h1>
          )}
          {introStep >= 2 && (
            <div>
              <p className="mono text-[11px] tracking-[0.4em] text-[#3d7cff]">
                SYSTEM 00 · КІРУ
              </p>
              <h1 className="mt-6 text-4xl font-medium tracking-[0.08em] md:text-6xl">
                Даму
                <span className="block">траекториясы</span>
              </h1>
            </div>
          )}
          <button
            type="button"
            className="focus-ring mono absolute bottom-8 text-[10px] tracking-[0.3em] text-[#8a8f99]"
            onClick={(e) => {
              e.stopPropagation();
              skipIntro();
            }}
          >
            КІРІСПЕНІ ӨТКІЗУ
          </button>
        </section>
      )}

      {phase === "hero" && (
        <section className="screen">
          <p className="mono text-[10px] tracking-[0.35em] text-[#3d7cff]">
            SYSTEM 01 · АШЫЛУ
          </p>
          <h1 className="mt-8 max-w-3xl text-4xl font-medium leading-[1.05] tracking-tight md:text-7xl">
            Сенің жолың
            <br />
            дайын емес.
          </h1>
          <p className="mt-8 text-2xl tracking-[0.12em] text-[#8a8f99] md:text-4xl">
            Оны өзің құрасың.
          </p>
          <div className="mt-12 flex flex-wrap gap-x-6 gap-y-2 text-[10px] tracking-[0.2em] text-[#8a8f99] mono">
            {[
              "ҚЫЗЫҒУ",
              "ІЗДЕНІС",
              "ТӘЖІРИБЕ",
              "АДАМДАР",
              "ИДЕЯЛАР",
              "АШЫЛЫМ",
              "ЖОБА",
              "ҚАТЕ",
              "ҚАЙТА СЫНАУ",
              "НӘТИЖЕ",
            ].map((l) => (
              <span key={l}>{l}</span>
            ))}
          </div>
          <button
            type="button"
            className="focus-ring mt-16 self-start border border-[#e8e4dc]/20 px-6 py-3 text-xs tracking-[0.3em] uppercase"
            onClick={() => setPhase("question")}
          >
            Зерттеу
          </button>
          <p className="mono absolute bottom-8 left-6 text-[10px] tracking-[0.3em] text-[#8a8f99]">
            {brand.kazakh} · 01 / 04
          </p>
        </section>
      )}

      {phase === "question" && (
        <section className="screen max-w-3xl">
          <p className="mono text-[10px] tracking-[0.35em] text-[#3d7cff]">
            PATH 001 · ҚЫЗЫҚҚАН АҚЫЛ
          </p>
          <div className="mt-10 space-y-8 text-2xl leading-snug md:text-4xl">
            <p>Не нәрсеге қызығасың?</p>
            <p className="text-[#8a8f99]">Не істеп көрер едің…</p>
            <p>егер сәтсіздік болмайтынын білсең?</p>
            <p className="text-[#8a8f99]">Мүмкін жауап әлі керек емес.</p>
            <p className="text-3xl tracking-tight md:text-5xl">
              Мүмкін саған тек бастау нүктесі керек.
            </p>
          </div>
          <button
            type="button"
            className="focus-ring mt-16 self-start border border-[#3d7cff] px-6 py-3 text-xs tracking-[0.3em] uppercase text-[#3d7cff]"
            onClick={() => setPhase("builder")}
          >
            Траекторияны құру
          </button>
        </section>
      )}

      {phase === "builder" && (
        <section className="screen">
          <p className="mono text-[10px] tracking-[0.35em] text-[#3d7cff]">
            SYSTEM 02 · ҚҰРУ
          </p>
          <h2 className="mt-4 text-3xl tracking-tight md:text-6xl">
            Траекторияңды құр
          </h2>
          <p className="mt-3 text-[#8a8f99]">
            Соңғы нүктені білудің қажеті жоқ.
          </p>

          <div className="mt-10 mono text-[11px] tracking-[0.2em] text-[#8a8f99]">
            {pull && <div>{L.pull[pull as keyof typeof L.pull]}</div>}
            {dev && <div>↓ {L.develop[dev as keyof typeof L.develop]}</div>}
            {tryItem && <div>↓ {L.try[tryItem as keyof typeof L.try]}</div>}
          </div>

          {q === 0 && (
            <ChoiceGrid
              label="СЕНІ НЕ АЛҒА ТАРТАДЫ?"
              items={[...pullKeys]}
              display={(k) => L.pull[k as keyof typeof L.pull]}
              onPick={(v) => {
                setPull(v);
                setQ(1);
              }}
            />
          )}
          {q === 1 && (
            <ChoiceGrid
              label="НЕНІ ДАМЫТҚЫҢ КЕЛЕДІ?"
              items={[...developKeys]}
              display={(k) => L.develop[k as keyof typeof L.develop]}
              onPick={(v) => {
                setDev(v);
                setQ(2);
              }}
            />
          )}
          {q === 2 && (
            <ChoiceGrid
              label="НЕНІ СЫНАП КӨРЕСІҢ?"
              items={[...tryKeys]}
              display={(k) => L.try[k as keyof typeof L.try]}
              onPick={(v) => {
                setTryItem(v);
                setPhase("card");
              }}
            />
          )}
        </section>
      )}

      {phase === "card" && (
        <section className="screen items-center">
          <StoryCard
            innerRef={storyRef}
            lang="kk"
            title={titleKk}
            pull={pull ? L.pull[pull as keyof typeof L.pull] : ""}
            dev={dev ? L.develop[dev as keyof typeof L.develop] : ""}
            tryItem={tryItem ? L.try[tryItem as keyof typeof L.try] : ""}
            ending={L.ending[endingKey as keyof typeof L.ending]}
            pid={pid}
          />
          <button
            type="button"
            className="focus-ring mt-4 w-full max-w-md border border-[#3d7cff] bg-[#3d7cff]/10 px-5 py-3 text-xs uppercase tracking-[0.28em] text-[#3d7cff]"
            onClick={() => setShareOpen(true)}
          >
            Stories
          </button>
          <div className="mt-4 flex flex-wrap gap-3">
            <button
              type="button"
              className="focus-ring border border-[#e8e4dc]/30 px-5 py-3 text-xs uppercase tracking-[0.25em]"
              onClick={resetBuilder}
            >
              Қайта бастау
            </button>
            <button
              type="button"
              className="focus-ring border border-[#3d7cff] px-5 py-3 text-xs uppercase tracking-[0.25em] text-[#3d7cff]"
              onClick={() => setShareOpen(true)}
            >
              Stories
            </button>
            <button
              type="button"
              className="focus-ring px-5 py-3 text-xs uppercase tracking-[0.25em] text-[#8a8f99]"
              onClick={() => {
                setPhase("rest");
                setTimeout(
                  () => restRef.current?.scrollIntoView({ behavior: "smooth" }),
                  50
                );
              }}
            >
              Жалғастыру
            </button>
          </div>
          {echo && <p className="mono mt-4 text-[10px] tracking-[0.3em]">{echo}</p>}
        </section>
      )}

      {shareOpen && pull && dev && tryItem && (
        <div className="fixed inset-0 z-[70] flex items-end justify-center bg-black/70 p-4 md:items-center">
          <div className="w-full max-w-md border border-[#e8e4dc]/15 bg-[#07080b] p-5">
            <p className="mono text-[10px] tracking-[0.3em] text-[#3d7cff]">
              СТОРИС
            </p>
            <h3 className="mt-2 text-xl">Қай тілде бөлісесің?</h3>
            <div className="mt-4 flex gap-2">
              {(["kk", "ru", "en"] as Lang[]).map((lang) => (
                <button
                  key={lang}
                  type="button"
                  className={`focus-ring flex-1 border px-3 py-2 text-xs tracking-[0.12em] ${
                    shareLang === lang
                      ? "border-[#3d7cff] text-[#3d7cff]"
                      : "border-[#e8e4dc]/20 text-[#8a8f99]"
                  }`}
                  onClick={() => setShareLang(lang)}
                >
                  {storyCopy[lang].langName}
                </button>
              ))}
            </div>
            <div className="mt-5 max-h-[50vh] overflow-auto">
              <StoryCard
                lang={shareLang}
                title={
                  labels[shareLang].title[pull as keyof typeof labels.kk.title]
                }
                pull={labels[shareLang].pull[pull as keyof typeof labels.kk.pull]}
                dev={
                  labels[shareLang].develop[
                    dev as keyof typeof labels.kk.develop
                  ]
                }
                tryItem={
                  labels[shareLang].try[tryItem as keyof typeof labels.kk.try]
                }
                ending={
                  labels[shareLang].ending[
                    endingKey as keyof typeof labels.kk.ending
                  ]
                }
                pid={pid}
              />
            </div>
            <p className="mt-3 text-xs text-[#8a8f99]">
              Логотипің кейін қойылады — қазір орны бар. Скрин жасап сториске
              сал, немесе мәтінді көшір.
            </p>
            <div className="mt-4 flex gap-2">
              <button
                type="button"
                className="focus-ring flex-1 border border-[#3d7cff] px-4 py-3 text-xs uppercase tracking-[0.2em] text-[#3d7cff]"
                onClick={() => saveCard(shareLang)}
              >
                Stories · сілтемемен
              </button>
              <button
                type="button"
                className="focus-ring px-4 py-3 text-xs uppercase tracking-[0.2em] text-[#8a8f99]"
                onClick={() => setShareOpen(false)}
              >
                Жабу
              </button>
            </div>
          </div>
        </div>
      )}

      {phase === "rest" && (
        <div ref={restRef}>
          <section className="screen">
            <p className="mono text-[10px] tracking-[0.35em] text-[#3d7cff]">
              SYSTEM 03 · АЛҒАШҚЫ ҚАДАМ
            </p>
            <h2 className="mt-4 max-w-2xl text-3xl leading-tight md:text-6xl">
              Әр траектория бір жерден басталады.
            </h2>
            <p className="mt-4 text-[#8a8f99]">
              Алғашқы қадам үлкен болуы міндетті емес.
            </p>
            <div className="mt-10 grid grid-cols-2 gap-2 md:grid-cols-4">
              {firstSteps.map((s) => (
                <button
                  key={s}
                  type="button"
                  className="focus-ring border border-[#e8e4dc]/15 px-3 py-4 text-left text-[11px] uppercase tracking-[0.12em] hover:border-[#3d7cff]"
                  onClick={() => {
                    const e =
                      stepEchoes[Math.floor(Math.random() * stepEchoes.length)];
                    setEcho(e);
                    setTimeout(() => setEcho(null), 1600);
                  }}
                >
                  {s}
                </button>
              ))}
            </div>
            {echo && (
              <p className="mt-8 text-xl tracking-[0.12em] text-[#3d7cff]">
                {echo}
              </p>
            )}
          </section>

          <section className="screen">
            <p className="mono text-[10px] tracking-[0.35em] text-[#3d7cff]">
              SYSTEM 04 · ӨРІС
            </p>
            <h2 className="mt-4 text-3xl md:text-6xl">
              Бір ғана дұрыс жол жоқ.
            </h2>
            <p className="mt-3 text-[#8a8f99]">Траекторияң өзгеруі мүмкін.</p>
            <p className="mono mt-2 text-[10px] tracking-[0.2em] text-[#8a8f99]">
              Сызық бөлінеді. Тоқтайды. Қайта қосылады. Жаңасы пайда болады.
            </p>
            <div className="relative mt-12 min-h-[280px] border border-[#e8e4dc]/10">
              <div className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#3d7cff]" />
              {constellationLabels.map((lab, i) => {
                const angle = (i / constellationLabels.length) * Math.PI * 2;
                const r = 38;
                const x = 50 + Math.cos(angle) * r;
                const y = 50 + Math.sin(angle) * r;
                return (
                  <span
                    key={lab}
                    className="mono absolute text-[9px] tracking-[0.2em] text-[#8a8f99]"
                    style={{
                      left: `${x}%`,
                      top: `${y}%`,
                      transform: "translate(-50%, -50%)",
                    }}
                  >
                    {lab}
                  </span>
                );
              })}
              <p className="absolute bottom-3 right-3 mono text-[9px] tracking-[0.2em] text-[#8a8f99]">
                МЫСАЛДАР — БЕКІТІЛГЕН САНАТ ЕМЕС
              </p>
            </div>
          </section>

          <section className="screen">
            <h2 className="text-3xl md:text-5xl">Біздің траекториялар</h2>
            <p className="mt-2 text-[#8a8f99]">Жолың қалай көрінуі мүмкін?</p>
            <div className="mt-8 space-y-3">
              {wall.map((t, i) => (
                <p
                  key={`${t}-${i}`}
                  className="border-l border-[#3d7cff]/50 pl-4 text-sm text-[#cfc9be]"
                >
                  {t}
                </p>
              ))}
            </div>
            <div className="mt-8 flex flex-col gap-3 md:flex-row">
              <input
                value={draft}
                onChange={(e) => setDraft(e.target.value.slice(0, 140))}
                placeholder="Қысқа анонимді траектория жаз"
                className="focus-ring flex-1 border border-[#e8e4dc]/15 bg-transparent px-4 py-3 text-sm"
                aria-label="Анонимді траектория"
              />
              <button
                type="button"
                className="focus-ring border border-[#e8e4dc]/30 px-5 py-3 text-xs uppercase tracking-[0.25em]"
                onClick={addWall}
              >
                Қосу
              </button>
            </div>
            <p className="mono mt-3 text-[10px] text-[#8a8f99]">
              Аты-жөні жоқ. Жергілікті прототип.
            </p>
          </section>

          <section className="screen">
            <p className="mono text-[10px] tracking-[0.35em] text-[#3d7cff]">
              REVEAL
            </p>
            <h2 className="mt-4 text-4xl leading-none md:text-7xl">
              Бұл —
              <br />
              Даму траекториясы.
            </h2>
            <ul className="mt-10 space-y-2 text-xl text-[#8a8f99]">
              <li>Бір ғана жол емес.</li>
              <li>Мінсіз жоспар емес.</li>
              <li>Жарыс емес.</li>
              <li className="text-[#e8e4dc]">
                Өз бағытыңды табуға мүмкіндік.
              </li>
            </ul>
            <p className="mt-12 max-w-lg leading-relaxed text-[#cfc9be]">
              Қызығушылықтан — мүмкіндікке.
              <br />
              Мүмкіндіктен — тәжірибеге.
              <br />
              Тәжірибеден — өз жолыңа.
            </p>
          </section>

          <section className="screen max-w-2xl">
            <p className="mono text-[10px] tracking-[0.35em] text-[#3d7cff]">
              ORIGIN
            </p>
            <h2 className="mt-4 text-3xl md:text-5xl">Бұл кім бастады?</h2>
            <p className="mt-6 text-2xl">{brand.author}</p>
            <p className="mt-1 text-sm text-[#8a8f99]">
              10-сынып оқушысы. Мектеп президенттігіне кандидат.
            </p>
            <p className="mt-8 leading-relaxed text-[#cfc9be]">
              Мен көп бағытты зерттедім — ғылым, дебат, зерттеу, жобалар және
              жаңа тәжірибе.
            </p>
            <p className="mt-4 leading-relaxed text-[#cfc9be]">
              Бір нәрсе түсінікті болды: кейде оқушыларда әлеует жетіспейді
              емес. Бастау нүктесі жетіспейді.
            </p>
            <p className="mt-4">Даму траекториясы осы жерден басталады.</p>
          </section>

          <section className="screen max-w-2xl">
            <h2 className="text-3xl md:text-5xl">Әрі қарай не болады?</h2>
            <p className="mt-6 text-[#8a8f99]">Идея</p>
            <p className="mt-2 leading-relaxed">
              Оқушылар қызығушылықты табатын, адамдарды табатын, бар
              мүмкіндіктерді көретін, жоба бастайтын және жаңа бағыттарды
              зерттейтін мектеп ортасы.
            </p>
            <p className="mt-8 text-[#8a8f99]">Не салғым келеді</p>
            <ul className="mt-2 list-disc space-y-2 pl-5 text-[#cfc9be]">
              <li>Мектепте не бар екенін көрудің қарапайым тәсілі.</li>
              <li>Кішкентай алғашқы қадамдар — дайын жүйе емес.</li>
              <li>Қысымсыз траектория бөлісетін орын.</li>
            </ul>
            <p className="mt-6 text-sm text-[#8a8f99]">
              Бұл бағыт. Нәтижеге кепілдік емес.
            </p>
          </section>

          <section className="screen items-center text-center">
            <h2 className="max-w-xl text-3xl leading-tight md:text-5xl">
              Сенің траекторияң басқалардыңдікіндей болуы міндетті емес.
            </h2>
            <p className="mt-6 text-xl text-[#8a8f99]">Сенікі қалай көрінер еді?</p>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <button
                type="button"
                className="focus-ring border border-[#3d7cff] px-6 py-3 text-xs uppercase tracking-[0.25em] text-[#3d7cff]"
                onClick={resetBuilder}
              >
                Қайта құру
              </button>
            </div>
          </section>

          <footer className="screen items-center text-center">
            <p className="text-3xl tracking-[0.08em] md:text-5xl">
              Сенің траекторияң осы жерден басталады.
            </p>
            <p className="mono mt-8 text-[11px] tracking-[0.35em] text-[#8a8f99]">
              {brand.kazakh}
              <br />
              {brand.author}
            </p>
            <button
              type="button"
              className="focus-ring mt-10 text-xs uppercase tracking-[0.3em] text-[#8a8f99]"
              onClick={() => {
                setIntroStep(0);
                setPull(null);
                setDev(null);
                setTryItem(null);
                setQ(0);
                setPhase("intro");
              }}
            >
              Басынан
            </button>
            <p className="mono mt-12 text-[10px] tracking-[0.3em] text-[#8a8f99]">
              <a className="focus-ring underline-offset-4 hover:underline" href="/posters">
                ПОСТЕРЛЕР
              </a>
              <span className="mx-3">·</span>
              <a className="focus-ring underline-offset-4 hover:underline" href="/trailers">
                ТРЕЙЛЕРЛЕР
              </a>
            </p>
          </footer>
        </div>
      )}
    </main>
  );
}

function ChoiceGrid({
  label,
  items,
  display,
  onPick,
}: {
  label: string;
  items: string[];
  display: (k: string) => string;
  onPick: (v: string) => void;
}) {
  return (
    <div className="mt-10">
      <p className="mono text-[11px] tracking-[0.28em] text-[#8a8f99]">{label}</p>
      <div className="mt-5 grid grid-cols-2 gap-2 md:grid-cols-3">
        {items.map((item) => (
          <button
            key={item}
            type="button"
            className="focus-ring min-h-[72px] border border-[#e8e4dc]/15 px-3 py-4 text-left text-xs uppercase tracking-[0.12em] hover:border-[#3d7cff] hover:text-[#3d7cff]"
            onClick={() => onPick(item)}
          >
            {display(item)}
          </button>
        ))}
      </div>
    </div>
  );
}

function StoryCard({
  lang,
  title,
  pull,
  dev,
  tryItem,
  ending,
  pid,
  innerRef,
}: {
  lang: Lang;
  title: string;
  pull: string;
  dev: string;
  tryItem: string;
  ending: string;
  pid: string;
  innerRef?: React.RefObject<HTMLDivElement>;
}) {
  const st = storyCopy[lang];
  return (
    <div
      ref={innerRef}
      className="w-full max-w-md border border-[#e8e4dc]/15 bg-[#0b1424] p-8"
    >
      <div className="mb-6 flex items-center gap-3">
        <img
          src="/logo-alikhan.jpg"
          alt="Vote for Alikhan"
          className="h-12 w-12 rounded-full object-cover"
        />
        <div className="min-w-0">
          <p className="mono text-[9px] tracking-[0.28em] text-[#8a8f99]">
            {brand.name}
          </p>
          <p className="mt-1 text-[11px] tracking-[0.04em] text-[#7aa2ff]">
            #voteforAlikhan
          </p>
        </div>
      </div>
      <p className="mono text-[10px] tracking-[0.35em] text-[#3d7cff]">{st.yours}</p>
      <h2 className="mt-6 text-3xl tracking-[0.08em]">{title}</h2>
      <div className="mono mt-8 space-y-2 text-sm tracking-[0.16em] text-[#8a8f99]">
        <div>{pull}</div>
        <div>↓ {dev}</div>
        <div>↓ {tryItem}</div>
        <div>↓ {ending}</div>
      </div>
      <p className="mono mt-10 text-[10px] tracking-[0.3em]">PATH ID: {pid}</p>
      <p className="mt-8 text-sm text-[#8a8f99]">{st.start}</p>
    </div>
  );
}
