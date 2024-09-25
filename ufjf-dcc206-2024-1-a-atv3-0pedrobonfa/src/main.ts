import './style.css'
import './style.css'



interface Pokemon
{
  name: string;
  id: number;
  url: string;
}




async function fetchPokemonDetails() {
  
  const response = await fetch("https://pokeapi.co/api/v2/pokemon/1");
  if (!response.ok) {
    throw new Error(`Erro na rede: ${response.statusText}`);
  }

  const data: Pokemon = await response.json();

  console.log(`Nome: ${data.name}`);
  
  console.log(`ID: ${data.id}`);

  
}

fetchPokemonDetails();