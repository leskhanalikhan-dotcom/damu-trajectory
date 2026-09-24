export default function PostersPage() {
  const posters = [
    {
      k: "01",
      lines: ["EVERYONE HAS A STARTING POINT.", "WHAT’S YOURS?"],
    },
    {
      k: "02",
      lines: ["WHAT IF", "YOU’RE CAPABLE", "OF MORE", "THAN YOU THINK?"],
    },
    {
      k: "03",
      lines: ["YOUR PATH", "ISN’T READY-MADE.", "YOU BUILD IT."],
    },
    {
      k: "04",
      lines: ["THERE IS", "NO SINGLE", "RIGHT PATH."],
    },
  ];

  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      <p className="mono text-[10px] tracking-[0.35em] text-[#3d7cff]">
        PRINT SYSTEM · TEASERS
      </p>
      <h1 className="mt-4 text-3xl uppercase md:text-5xl">Posters</h1>
      <p className="mt-3 max-w-xl text-sm text-[#8a8f99]">
        Physical teasers for school walls. Scan leads here. Not “vote for.”
      </p>
      <div className="mt-12 grid gap-8 md:grid-cols-2">
        {posters.map((p) => (
          <article
            key={p.k}
            className="flex min-h-[420px] flex-col justify-between border border-[#e8e4dc]/15 bg-[#0b1424] p-8"
          >
            <p className="mono text-[10px] tracking-[0.3em] text-[#8a8f99]">
              POSTER {p.k} / ?
            </p>
            <div className="space-y-2 text-2xl uppercase leading-tight tracking-tight">
              {p.lines.map((l) => (
                <p key={l}>{l}</p>
              ))}
            </div>
            <div>
              <div className="mb-4 h-16 w-16 border border-[#e8e4dc]/30" aria-hidden />
              <p className="mono text-[10px] tracking-[0.3em]">
                DAMU TRAJECTORY
                <br />
                SCAN TO ENTER
              </p>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
