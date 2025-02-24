import { useState } from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import Content from './components/content/Content'
import projectsData from '../public/data/projects.json'
import experienceData from '../public/data/experiences.json'
import skillsData from "../public/data/skills.json"
import './App.css'

function App() {
  const [language, setLanguage] = useState('FR');
  const [page, setPage] = useState('home');
  const [count, setCount] = useState(0);

  return (
    <>
      <Header language={language} setLanguage={setLanguage} setPage={setPage}/>
      <div id="container">
        <Nav language={language} setPage={setPage} setCount={setCount}/>
        {page !== 'projects'
          ? null
          : count === 0
          ? <button style={{opacity: 0}}>{'<'}</button>
          : <button onClick={() => setCount(count - 1)}>{'<'}</button>}
        {page !== 'cv'
          ? null
          : count === 0
          ? <button style={{opacity: 0}}>{'<'}</button>
          : <button onClick={() => setCount(count - 1)}>{'<'}</button>}
        {page !== 'skills'
          ? null
          : count === 0
          ? <button style={{opacity: 0}}>{'<'}</button>
          : <button onClick={() => setCount(count - 1)}>{'<'}</button>}
        {page === 'contact'
          ? <h2>{language === 'FR'
                   ? 'Contactez-moi'
                 : language === 'EN'
                   ? 'Contact me'
                 : language === 'IT'
                   ? 'Contattami'
                 : null}</h2>
        : page === 'projects'
            ? <h2>{language === 'FR'
                      ? `Projets ${count+1}/${projectsData.projects.length}
                      : ${projectsData.projects[count].title[language]}`
                    : language === 'EN'
                      ? `Projects ${count+1}/${projectsData.projects.length}
                      : ${projectsData.projects[count].title[language]}`
                    : language === 'IT'
                      ? `Progetti ${count+1}/${projectsData.projects.length}
                      : ${projectsData.projects[count].title[language]}`
                    : null}</h2>
        : page === 'cv'
            ? <h2>{language === 'FR'
                      ? `${experienceData.fr[count].title} ${count+1}/${experienceData.fr.length}`
                    : language === 'EN'
                      ? `${experienceData.en[count].title} ${count+1}/${experienceData.fr.length}`                    
                    : language === 'IT'
                      ? `${experienceData.it[count].title} ${count+1}/${experienceData.fr.length}`
                    : null}</h2>
        : page === 'skills'
            ? <h2>{language === 'FR'
                      ? `${skillsData.fr[count].category} ${count+1}/${skillsData.fr.length}`
                    : language === 'EN'
                      ? `${skillsData.en[count].category} ${count+1}/${skillsData.fr.length}`                    
                    : language === 'IT'
                      ? `${skillsData.it[count].category} ${count+1}/${skillsData.fr.length}`
                    : null}</h2>
        : null}
        <Content language={language} page={page} count={count} setpage={setPage}/>
        {page !== 'projects' 
          ? null
          : count >= projectsData.projects.length-1 
          ? <button style={{opacity: 0}}>{'>'}</button>
          : <button onClick={() => setCount(count + 1)}>{'>'}</button>}
        {page !== 'cv' 
          ? null
          : count >= experienceData.fr.length-1 
          ? <button style={{opacity: 0}}>{'>'}</button>
          : <button onClick={() => setCount(count + 1)}>{'>'}</button>}
        {page !== 'skills' 
          ? null
          : count >= skillsData.fr.length-1 
          ? <button style={{opacity: 0}}>{'>'}</button>
          : <button onClick={() => setCount(count + 1)}>{'>'}</button>}
      </div>
    </>
  )
}

export default App
