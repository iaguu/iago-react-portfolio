import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import Chip from "../../components/ui/Chip/Chip.jsx";
import { projects } from "../../data/projects.js";
import "./projects.scss";

export default function Projects() {
  const [q, setQ] = useState("");

  const filtered = useMemo(() => {
    const s = q.trim().toLowerCase();
    if (!s) return projects;
    return projects.filter((p) => {
      const hay = [p.title, p.tagline, ...(p.stack || [])].join(" ").toLowerCase();
      return hay.includes(s);
    });
  }, [q]);

  return (
    <div className="projects">
      <div className="pageHead">
        <h1>Projetos</h1>
        <p>Seleção orientada a entrega, arquitetura e UX de sistema.</p>
      </div>

      <div className="searchRow">
        <div className="searchIcon" aria-hidden="true">⌕</div>
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          className="searchInput"
          placeholder='Buscar: "Electron", "automação", "cyber"...'
        />
        <div className="searchTag">{filtered.length}</div>
      </div>

      <div className="projectGrid">
        {filtered.map((p) => (
          <Link key={p.slug} to={`/projetos/${p.slug}`} className="projectItem">
            <div className="projectItem__title">{p.title}</div>
            <div className="projectItem__tagline">{p.tagline}</div>
            <div className="projectItem__stack">
              {p.stack.map((s) => <Chip key={s}>{s}</Chip>)}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
