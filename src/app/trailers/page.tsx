"use client";

import { useState } from "react";

const t1 = [
  "EVERYONE HAS A STARTING POINT.",
  "INTEREST.",
  "CURIOSITY.",
  "WHAT IF?",
  "TRY.",
  "DISCOVER.",
];

const t2fast = [
  "SCIENCE.",
  "DEBATE.",
  "ART.",
  "TECH.",
  "RESEARCH.",
  "PEOPLE.",
  "IDEAS.",
];

export default function TrailersPage() {
  const [which, setWhich] = useState<1 | 2>(1);
  const [i, setI] = useState(0);

  return (
    <main className="screen items-center text-center">
      <p className="mono text-[10px] tracking-[0.35em] text-[#3d7cff]">
        TRAILER SYSTEM
      </p>
      <div className="mt-6 flex gap-3">
        <button
          className="focus-ring mono text-[10px] tracking-[0.3em]"
          onClick={() => {
            setWhich(1);
            setI(0);
          }}
        >
          TRAILER 01
        </button>
        <button
          className="focus-ring mono text-[10px] tracking-[0.3em]"
          onClick={() => {
            setWhich(2);
            setI(0);
          }}
        >
          TRAILER 02
        </button>
      </div>

      {which === 1 && (
        <div className="mt-16">
          <h1 className="max-w-lg text-3xl uppercase tracking-[0.14em] md:text-5xl fade-up">
            {t1[Math.min(i, t1.length - 1)]}
          </h1>
          {i >= t1.length && (
            <p className="mono mt-10 text-[12px] tracking-[0.4em] text-[#3d7cff] fade-up">
              DAMU TRAJECTORY
              <br />
              COMING SOON
            </p>
          )}
          <button
            className="focus-ring mono mt-16 text-[10px] tracking-[0.3em] text-[#8a8f99]"
            onClick={() => setI((n) => n + 1)}
          >
            NEXT FRAME
          </button>
        </div>
      )}

      {which === 2 && (
        <div className="mt-16">
          {i === 0 && (
            <h1 className="text-3xl uppercase tracking-[0.12em] md:text-5xl fade-up">
              You found your starting point.
            </h1>
          )}
          {i === 1 && (
            <h1 className="text-3xl uppercase tracking-[0.12em] md:text-5xl fade-up">
              But where does it lead?
            </h1>
          )}
          {i >= 2 && i < 2 + t2fast.length && (
            <h1 className="text-4xl uppercase tracking-[0.2em] text-[#3d7cff] fade-up">
              {t2fast[i - 2]}
            </h1>
          )}
          {i >= 2 + t2fast.length && (
            <div className="fade-up">
              <h1 className="text-3xl uppercase md:text-5xl">
                There is no single answer.
              </h1>
              <p className="mono mt-8 tracking-[0.35em] text-[#8a8f99]">
                DAMU TRAJECTORY
              </p>
            </div>
          )}
          <button
            className="focus-ring mono mt-16 text-[10px] tracking-[0.3em] text-[#8a8f99]"
            onClick={() => setI((n) => n + 1)}
          >
            NEXT FRAME
          </button>
        </div>
      )}
    </main>
  );
}
