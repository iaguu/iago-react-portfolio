import React from "react";
import Card from "../../components/ui/Card/Card.jsx";
import Chip from "../../components/ui/Chip/Chip.jsx";
import "./about.scss";

export default function About() {
  return (
    <div className="about">
      <div className="pageHead">
        <h1>Sobre</h1>
        <p>
          Sou builder: transformo problemas operacionais em sistemas com fluxo claro, dados consistentes e automações úteis.
        </p>
      </div>

      <div className="aboutGrid">
        <Card className="box">
          <div className="box__title">Domínios</div>
          <div className="tagGrid">
            {[
              "Frontend (React/Electron)",
              "APIs e integrações",
              "Automação e scripts",
              "UX para sistemas",
              "Linux e ambientes",
              "Cybersecurity (labs)",
            ].map((t) => (
              <Chip key={t}>{t}</Chip>
            ))}
          </div>
        </Card>

        <Card className="box">
          <div className="box__title">Como eu trabalho</div>
          <div className="steps">
            <div>1) Defino o fluxo e o modelo de dados</div>
            <div>2) Modularizo responsabilidades (UI, dados, serviços)</div>
            <div>3) Deixo observável (logs/diagnóstico)</div>
            <div>4) Automação para reduzir fricção</div>
          </div>
        </Card>
      </div>
    </div>
  );
}
