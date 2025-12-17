import React, { useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import Card from "../../components/ui/Card/Card.jsx";
import Chip from "../../components/ui/Chip/Chip.jsx";
import Button from "../../components/ui/Button/Button.jsx";
import { projects } from "../../data/projects.js";
import "./projectDetail.scss";

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = useMemo(() => projects.find((p) => p.slug === slug), [slug]);

  if (!project) {
    return (
      <div className="detail">
        <div className="pageHead">
          <h1>Projeto não encontrado</h1>
          <p>Verifique o link ou volte para a lista.</p>
        </div>
        <Button as={Link} to="/projetos" variant="primary">Voltar</Button>
      </div>
    );
  }

  return (
    <div className="detail">
      <div className="pageHead">
        <Link className="back" to="/projetos">← Voltar para Projetos</Link>
        <h1>{project.title}</h1>
        <p>{project.tagline}</p>
        <div className="stack">
          {project.stack.map((s) => <Chip key={s}>{s}</Chip>)}
        </div>
      </div>

      <div className="detailGrid">
        <Card className="box">
          <div className="box__title">Visão geral</div>
          <div className="box__text">{project.description}</div>
        </Card>

        <Card className="box">
          <div className="box__title">Destaques</div>
          <div className="list">
            {project.highlights.map((h) => <div key={h}>• {h}</div>)}
          </div>
        </Card>

        <Card className="box">
          <div className="box__title">Sinais (métricas)</div>
          <div className="metrics">
            {project.metrics.map((m) => (
              <div key={m.label} className="metric">
                <div className="metric__label">{m.label}</div>
                <div className="metric__value">{m.value}</div>
              </div>
            ))}
          </div>

          <div className="actions">
            {project.links.github ? (
              <Button as="a" href={project.links.github} target="_blank" rel="noreferrer" variant="primary">
                GitHub
              </Button>
            ) : null}
            {project.links.demo ? (
              <Button as="a" href={project.links.demo} target="_blank" rel="noreferrer" variant="ghost">
                Demo
              </Button>
            ) : null}
          </div>
        </Card>
      </div>
    </div>
  );
}
