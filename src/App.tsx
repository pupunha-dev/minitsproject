import { useState } from "react"

import { Header } from "./components/Header"
import logo from "./assets/react.svg"
import { MetaList } from "./components/MetaList";

export interface IMeta {
  id: number;
  title: string;
  description: string;
}

function App() {

  const [meta, setMeta] = useState<IMeta[]>([]);

  function handleMeta() {
    setMeta(prevMeta => {
      const novaMeta: IMeta = {
        id: Math.random(),
        title: 'Something else...',
        description: 'Alguma coisa sobre o curso de ts e react.'
      }
      return [...prevMeta, novaMeta]
    })
  }

  return (
    <section>
      <Header image={{ src: logo, alt: 'Logo project' }}>Header do nosso App</Header>
      <button onClick={handleMeta}>Click</button>
      <MetaList meta={meta} />
    </section>
  )
}

export default App
