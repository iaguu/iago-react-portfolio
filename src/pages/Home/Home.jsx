import React from "react";
import { Link } from "react-router-dom";
import Card from "../../components/ui/Card/Card.jsx";
import Button from "../../components/ui/Button/Button.jsx";
import Chip from "../../components/ui/Chip/Chip.jsx";
import { projects } from "../../data/projects.js";
import "./home.scss";

export default function Home() {
  const featured = projects.slice(0, 3);

  return (
    <div className="home">
      <section className="hero">
        <div className="hero__bg" aria-hidden="true" />
        <div className="hero__content">
          <div className="hero__chips">
            <Chip>React</Chip>
            <Chip>Electron</Chip>
            <Chip>Automação</Chip>
            <Chip>Cyber</Chip>
          </div>

          <h1 className="hero__title">
            Construo sistemas reais, automações inteligentes e interfaces premium — com foco em performance e operação.
          </h1>

          <p className="hero__subtitle">
            Portfolio orientado a produto: decisões arquiteturais, integração, dados, UX e entrega. Sem enfeite.
          </p>

          <div className="hero__actions">
            <Button as={Link} to="/projetos" variant="primary">Ver projetos</Button>
            <Button as={Link} to="/contato" variant="ghost">Falar comigo</Button>
          </div>

          <div className="hero__meta">
            <span>São Paulo (SP)</span>
            <span>•</span>
            <span>Dev + Automation + Security</span>
          </div>
        </div>
      </section>

      <section className="grid2">
        <Card className="panel">
          <div className="panel__kicker">O que você encontra aqui</div>
          <div className="panel__title">Projetos com operação real</div>
          <div className="panel__text">
            Eu priorizo fluxo, consistência de dados e automações que reduzam fricção. A estética acompanha a função.
          </div>
          <div className="panel__bullets">
            <div>• Arquitetura e decisões</div>
            <div>• UX de sistema (menos cliques)</div>
            <div>• Integração, automação e segurança</div>
          </div>
        </Card>

        <Card className="panel">
          <div className="panel__kicker">Minha abordagem</div>
          <div className="panel__title">Produto primeiro, tecnologia certa</div>
          <div className="panel__text">
            Defino o fluxo, modelo os dados, isolo responsabilidades e deixo observável (logs, métricas e rotinas).
          </div>
          <div className="panel__tags">
            {["Design System", "Data integrity", "CLI/Scripts", "Observability", "Hardening"].map((t) => (
              <Chip key={t}>{t}</Chip>
            ))}
          </div>
        </Card>
      </section>

      <section className="section">
        <div className="section__head">
          <h2>Projetos em destaque</h2>
          <Link className="section__link" to="/projetos">Ver todos</Link>
        </div>

        <div className="cards">
          {featured.map((p) => (
            <Link key={p.slug} to={`/projetos/${p.slug}`} className="projectCard">
              <div className="projectCard__title">{p.title}</div>
              <div className="projectCard__tagline">{p.tagline}</div>
              <div className="projectCard__stack">
                {p.stack.slice(0, 4).map((s) => <Chip key={s}>{s}</Chip>)}
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
