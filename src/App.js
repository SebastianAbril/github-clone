import './App.css';
import {RepoContainer} from './components/RepoContainer/RepoContainer';
import {useState, useEffect} from 'react';

const URL = 'https://api.github.com/users/sebastianabril/repos';

function App() {

  const [data, setData] = useState([])
  useEffect( ()=>{
      fetch(URL)
          .then( (response) => response.json())
          .then((info)=> setData(info) )
  },[]);

  return (
    <div className="App">
      <div className="Repositories">
        {data.map((repo) =>{
          return(
            <RepoContainer 
            name={repo.name}
            fork={repo.fork}
            forkURL={repo.forks_url}
            description={repo.description}
              />
          )
        })}
      </div>

    </div>
  );
}

export default App;








   
  

    
