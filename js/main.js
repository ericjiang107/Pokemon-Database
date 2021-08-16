// Get data function
function getData() {
    let pokemonName = document.querySelector('#card-id').value
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
    .then(response => response.json())
    .then(info => {
        console.log(info)
        let name = (`${pokemonName}`)
        name = name.charAt(0).toUpperCase() + name.slice(1); // charAt() gives you the first index of the string
        // .toUpperCase() capitalizes everything in the string
        // .slide() slices the specified index value
        document.querySelector('#poke_name').innerHTML = name

        // To display 2 abilities - assuming a pokemon has 2
        let ability1 = (info.abilities[0].ability.name);
        let ability2 = (info.abilities[1].ability.name);
        let comma = ' , ';
        document.querySelector('#poke_ability').innerHTML = ability1.concat(comma, ability2)

        // To display type and capitalize it
        // Something to keep in mind: if function for if a pokemon has more than 1 type
        let type = (info.types[0].type.name)
        type = type.charAt(0).toUpperCase() + type.slice(1);
        document.querySelector('#poke-type').innerHTML = type
        console.log(type)

        // Display weaknesses -- Need for function to display all weaknesses (at least 2)
        // Need to find a way to access an url inside
        // let weak = (info.types[0].type.url)
        // document.querySelector('#poke-weakness').innerHTML = weak
        // console.log(weak)
        
        // Pic -- use img tag to render the link for the pokemon 
        let pic = (info.sprites.front_default)
        document.getElementById('imageSource').src = pic
        // get specific image based on search using getElementById('image source id').src 
    })
}

