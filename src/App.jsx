import { useState } from 'react'
import WebViewWarning from './components/WebViewWarning'
import Header from './components/Header'
import Nav from './components/Nav'
import Content from './components/Content'
import projectsData from '../public/data/projects.json'
import experienceData from '../public/data/experiences.json'
import skillsData from "../public/data/skills.json"
import './style/main.scss';

function App() {
  const [language, setLanguage] = useState('FR');
  const [page, setPage] = useState('home');
  const [count, setCount] = useState(0);

  const handleLeftClick = () => {
      setCount(count - 1)
      window.scrollTo({  top: window.innerWidth <= 540 ?  64 : 128, behavior: 'smooth' })
  }

  const handleRightClick = () => {
    setCount(count + 1)
    window.scrollTo({ top: window.innerWidth <= 540 ?  64 : 128, behavior: 'smooth' })
}

  return (
    <>
      <WebViewWarning />
      <Header language={language} setLanguage={setLanguage} setPage={setPage} setCount={setCount}/>
      <Nav language={language} setPage={setPage} setCount={setCount}/>
      <div id="container">
        {page !== 'projects'
          ? null
          : count === 0
          ? <button style={{opacity: 0}} id='left'>{'<'}</button>
          : <button onClick={() => handleLeftClick(count - 1)} id='left'>{'<'}</button>}
        {page !== 'cv'
          ? null
          : count === 0
          ? <button style={{opacity: 0}} id='left'>{'<'}</button>
          : <button onClick={() => handleLeftClick(count - 1)} id='left'>{'<'}</button>}
        {page !== 'skills'
          ? null
          : count === 0
          ? <button style={{opacity: 0}} id='left'>{'<'}</button>
          : <button onClick={() => handleLeftClick(count - 1)} id='left'>{'<'}</button>}
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
                      ? `${projectsData.projects[count].title[language]} : ${count+1}/${projectsData.projects.length}
                     `
                    : language === 'EN'
                      ? `${projectsData.projects[count].title[language]} : ${count+1}/${projectsData.projects.length}`
                    : language === 'IT'
                      ? `${projectsData.projects[count].title[language]} : ${count+1}/${projectsData.projects.length}`
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
                      ? `${skillsData.FR[count].category} ${count+1}/${skillsData.FR.length}`
                    : language === 'EN'
                      ? `${skillsData.EN[count].category} ${count+1}/${skillsData.FR.length}`                    
                    : language === 'IT'
                      ? `${skillsData.IT[count].category} ${count+1}/${skillsData.FR.length}`
                    : null}</h2>
        : null}
        <Content language={language} page={page} count={count} setpage={setPage} />
        {page !== 'projects' 
          ? null
          : count >= projectsData.projects.length-1 
          ? <button style={{opacity: 0}} id='right'>{'>'}</button>
          : <button onClick={() => handleRightClick(count + 1)} id='right'>{'>'}</button>}
        {page !== 'cv' 
          ? null
          : count >= experienceData.fr.length-1 
          ? <button style={{opacity: 0}} id='right'>{'>'}</button>
          : <button onClick={() => handleRightClick(count + 1)} id='right'>{'>'}</button>}
        {page !== 'skills' 
          ? null
          : count >= skillsData.FR.length-1 
          ? <button style={{opacity: 0}} id='right'>{'>'}</button>
          : <button onClick={() => handleRightClick(count + 1)} id='right'>{'>'}</button>}
      </div>
    </>
  )
}

export default App
