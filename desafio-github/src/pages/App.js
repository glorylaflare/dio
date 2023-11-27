import { useState } from 'react';
import gitlogo from '../assets/gitlogo.png'
import Input from '../components/Input'
import ItemRepo from '../components/ItemRepo'
import Button from '../components/Button';
import { api } from '../services/api';
import { Container } from './styles'

function App() {

  const [repos, setRepos] = useState([]);
  const [currentRepo, setCurrentRepo] = useState('');

  const handleSearchRepo = async () => {
    const {data} = await api.get(`${currentRepo}`)

    if(data.id) {
      const isExist = repos.find(repo => repo.id === data.id);
      if(!isExist) {
      setRepos(prev => [...prev, data])
      setCurrentRepo('');
      return;
    }
  }}

  const handleRmoveRepo = (id) => {
    const index = repos.findIndex(repo => repo.id === id);
    
    repos.splice(index, 1);
  }

  return (
    <Container>
      <img src={gitlogo} width={72} height={72} alt='gitlogo'/>
      <Input value={currentRepo} onChange={(e) => setCurrentRepo(e.target.value)}/>
      <Button onClick={handleSearchRepo}/>
      {repos.map(repo => <ItemRepo handleRemoveRepo={handleRmoveRepo} repo={repo}/>)}
    </Container>
  );
}

export default App;
