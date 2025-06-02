import Section from "./Section"
import './MainContent.css'

export default function MainContent(){
    return (
        <main className="conteudo">
            <Section title="Sobre nós">
                <p>
                    Disciplina de Desenvolvimento Web 2.
                </p>
            </Section>
            <Section title="Contato">
                <p>
                    Vc pode nos contatar pelo email:
                    <a href="mailto:kimalien307@gmail.com">kimalien307@gmail.com</a>
                </p>
            </Section>
        </main>
    )
}