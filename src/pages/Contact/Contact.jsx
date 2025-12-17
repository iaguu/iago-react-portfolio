import React, { useState } from "react";
import Card from "../../components/ui/Card/Card.jsx";
import Button from "../../components/ui/Button/Button.jsx";
import "./contact.scss";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const email = "iago@email.com";

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1400);
    } catch {
      // ignore
    }
  }

  return (
    <div className="contact">
      <div className="pageHead">
        <h1>Contato</h1>
        <p>Se você quer alguém que entrega sistema de verdade (com clareza e acabamento), vamos conversar.</p>
      </div>

      <div className="contactGrid">
        <Card className="box">
          <div className="box__title">Canais</div>
          <div className="channels">
            <a href="https://github.com/iaguu" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/iaguu" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href={`mailto:${email}`}>{email}</a>
          </div>

          <div className="actions">
            <Button onClick={copyEmail} variant="primary">
              {copied ? "Copiado" : "Copiar email"}
            </Button>
            <Button as="a" href={`mailto:${email}?subject=Contato%20Portfolio`} variant="ghost">
              Abrir email
            </Button>
          </div>
        </Card>

        <Card className="box">
          <div className="box__title">Nota</div>
          <div className="box__text">
            Sugestão: personalize seus links e email antes de publicar.
            Também dá para adicionar uma seção “cases” com prints, métricas e decisões técnicas por feature.
          </div>
        </Card>
      </div>
    </div>
  );
}
