import './App.css';
import {RepoContainer} from './components/RepoContainer/RepoContainer';
import {Aside} from './components/Aside/Aside'
import {useState, useEffect} from 'react';

const userURL= 'https://api.github.com/users/sebastianabril';
const reposURL = 'https://api.github.com/users/sebastianabril/repos';

function App() {

  const [data, setData] = useState([]);
  useEffect( ()=>{
      fetch(reposURL)
          .then( (response) => response.json())
          .then((info)=> setData(info) )
  },[]);

  const [userData, setUserData] = useState([]);
  useEffect(()=>{
    fetch(userURL)
      .then((response)=> response.json())
      .then( (info)=> setUserData(info));
  },[])

  console.log(userData);
  return (
    <div className="App">
      <Aside 
       avatar_url = {userData.avatar_url}
       name = {userData.name}
       login = {userData.login}
       bio = {userData.bio}
       followers = {userData.followers}
       following = {userData.following}
       location = {userData.location}
      />
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








   
  

    
