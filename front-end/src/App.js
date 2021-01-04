import React, {useState, useEffect} from 'react'
import Header from './components/Header'
import api from './services/api'

function App() {

  const [projects, setProjects] = useState([])

  useEffect(() => {
    api.get('projeto').then(response => {
      setProjects(response.data)
    })
  }, {})

  async function handleAddProject(){ 
   
    //([ ...projects, 'Projeto criado em: ${Date.now()}'])
    const response = await api.post('projeto', {
      title: "Projeto estático",
      dev: "Samuel"
    })

    const projeto = response.data
    setProjects([ ...projects, projeto])

  }


  return (
    <>
      <Header title="React">
        <ul>
          {projects.map(project => (
            <li key={project.id}>
              {project.title}
            </li>
          ))}
        </ul>
      </Header>

      <button type="button" onClick={handleAddProject}>
        Adicionar Projeto
      </button>

    </>
  )
}

export default App;
