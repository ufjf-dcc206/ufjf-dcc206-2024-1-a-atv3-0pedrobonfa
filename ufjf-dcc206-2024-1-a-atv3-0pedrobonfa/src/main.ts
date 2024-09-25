import './style.css'

interface PokeType{
  type:{
    name:string;
  }
}

interface Pokemon
{
  name: string;
  id: number;
  url: string;
  types: PokeType[];
}


function getRandomNum(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


async function fetchPokemonDetails() {
  
  const response = await fetch("https://pokeapi.co/api/v2/pokemon/"+getRandomNum(1,1025));
  if (!response.ok) {
    throw new Error(`Erro na rede: ${response.statusText}`);
  }

  const data: Pokemon = await response.json();

  console.log(`Nome: ${data.name}`);
  
  console.log(`ID: ${data.id}`);
  
  for(let i=0; i<data.types.length; i++)
  {
    console.log(`Type: ${data.types[i].type.name}`)
  }
    
  
}

fetchPokemonDetails();