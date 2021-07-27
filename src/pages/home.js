import pessoa from '../assets/pessoa.png'
import "../styles/home.css"
import botao from '../assets/botao.png'


function Home() {
  return (

    <div className= "principal">

        <img 

        className = "pessoa"
        src= {pessoa} 
        alt="pessoa" />

        
      

      <main>

        <div className = "olá">
          
          <p>Assita as gravações das aulas</p>

        </div>

        <div className = "button">

          <Button onClick = "start">

            <img 

            src= {botao}
            alt="start button" />
            <p>Start</p>

          </Button>
        </div>
      </main>
    </div>
    
  )
}

export default Home;

