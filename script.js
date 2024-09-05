function buscarPokemon() {
    const pokemonName = document.getElementById('pokemonNome').value.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;
    
    fetch(url)
        .then(response => response.json())
        .then(data => {
            document.getElementById('pokemonImg').src = data.sprites.front_default;
            document.getElementById('pokemonId').textContent = `ID: ${data.id}`;
            document.getElementById('nomePokemon').textContent = `Name: ${data.name}`;
        })
        .catch(error => {
            document.getElementById('pokemonImg').src = '';
            document.getElementById('pokemonId').textContent = 'Pokémon não encontrado';
            document.getElementById('nomePokemon').textContent = '';
            console.error('Error:', error);
        });
}   