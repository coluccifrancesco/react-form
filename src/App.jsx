import { useState, useEffect } from 'react'
import './App.css'

function App() {

  const titles = [
  {
    id: 1,
    titolo: "Intelligenza Artificiale: Come sta trasformando il settore sanitario nel 2025"
  },
  {
    id: 2,
    titolo: "Cybersecurity: Le nuove minacce ransomware e come proteggersi efficacemente"
  },
  {
    id: 3,
    titolo: "Cloud Computing: Migrazione multi-cloud e strategie di ottimizzazione dei costi"
  },
  {
    id: 4,
    titolo: "Sviluppo Web: Framework JavaScript più performanti per applicazioni enterprise"
  },
  {
    id: 5,
    titolo: "DevOps: Automazione CI/CD e containerizzazione con Docker e Kubernetes"
  },
  {
    id: 6,
    titolo: "Machine Learning: Algoritmi di deep learning per l'analisi predittiva"
  },
  {
    id: 7,
    titolo: "Blockchain: Implementazione di smart contracts per la supply chain"
  },
  {
    id: 8,
    titolo: "Mobile Development: App native vs cross-platform, quale scegliere?"
  },
  {
    id: 9,
    titolo: "Database: Confronto tra SQL e NoSQL per big data e performance"
  },
  {
    id: 10,
    titolo: "IoT: Sensori intelligenti e città smart, il futuro della connettività"
  },
  {
    id: 11,
    titolo: "Quantum Computing: Progressi nella crittografia quantistica e applicazioni"
  },
  {
    id: 12,
    titolo: "UX/UI Design: Principi di accessibilità e design inclusivo per il web"
  },
  {
    id: 13,
    titolo: "API Development: REST vs GraphQL, best practices per microservizi"
  },
  {
    id: 14,
    titolo: "Automazione: RPA e workflow intelligenti per ottimizzare i processi"
  },
  {
    id: 15,
    titolo: "Data Science: Visualizzazione dati e storytelling per business intelligence"
  }
  ];

  let [title, setTitle] = useState('');                   // array statico
  let [titlesList, setTitlesList] = useState(titles);     // array dinamico (il valore iniziale è l'array statico)

  const addTitle = e => {
    e.preventDefault();

    const id = titlesList[titlesList.length - 1].id + 1

    setTitlesList([...titlesList, {id, titolo:title}]);
  };

  const removeTask = (idToRemove) => {
    const updatedTitles = titlesList.filter(title => title.id !== idToRemove);
    setTitlesList(updatedTitles);
  };
  
  
  // useEffect(()=>{
  //   console.log('Componente montato!');
  //   return console.log('Componente smontato');
  // },[]);
 
  // useEffect(()=>{
  //   console.log('EUREKA!');
  // },[titles]);


  return (

    <>
      <div className='d-flex justify-content-center align-items-center flex-column mt-5'>
      
        <ul className='list-group'>
          
          {titlesList.map((title)=>{
            
            return <li key={title.id} className='list-group-item d-flex justify-content-between align-items-center gap-3'>
              
              {/* 
                Esercizio
                Milestone 1
                Creare una pagina che visualizzi una lista di titles, 
                mostrandone solo il titolo. 
              */}
            
              {title.titolo}

              <div className='gap-2 d-sm-flex align-items-center'>
                <button className='btn btn-light my-1'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pen" viewBox="0 0 16 16">
                  <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001m-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708z"/>
                  </svg>
                </button>
                
                <button onClick={() => {removeTask(title.id)}} className='btn btn-danger my-1'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash-fill" viewBox="0 0 16 16">
                  <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0"/>
                  </svg>
                </button>
              </div>
            </li>
          
          })}
        
        </ul>


        {/* 
        Milestone 2
        Aggiungiamo in pagina un semplice form con un campo input in cui inserire 
        il titolo di un nuovo title del blog.  
        */}

        <div className='formContainer my-5'>
          
          {/* Al submit del form, 
          mostrare la lista degli titles aggiornati. */}

          <form onSubmit={addTitle} 
          className='d-flex justify-content-between flex-nowrap m-3'>
            
            <input 
            value={title} 
            onChange={e=>setTitle(e.target.value)}
            type='text' className='form-control' id='inputTitle' placeholder="Insert article's title here" />

            <button className='btn btn-primary' type='submit'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cloud-upload-fill" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M8 0a5.53 5.53 0 0 0-3.594 1.342c-.766.66-1.321 1.52-1.464 2.383C1.266 4.095 0 5.555 0 7.318 0 9.366 1.708 11 3.781 11H7.5V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11h4.188C14.502 11 16 9.57 16 7.773c0-1.636-1.242-2.969-2.834-3.194C12.923 1.999 10.69 0 8 0m-.5 14.5V11h1v3.5a.5.5 0 0 1-1 0"/>
                </svg>
            </button>
          
          </form>
      
        </div>
      </div>
    </>
  )
}




// BONUS
// Aggiungere la possibilità di cancellare ciascun title utilizzando un'icona.
// Implementare la funzionalità di modifica del titolo di un post

export default App