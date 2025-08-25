import { pokemons } from "./pokemons.js";

const input = document.getElementById('input')
const wrapper = document.getElementById('wrapper')

function renderList(item) {
    wrapper.innerHTML = ''
    item.map(pokemon => {
        const div = document.createElement('div')
        div.classList.add('card')
        div.innerHTML = `
        <div class="card bg-[#FFFF00] w-[250px] h-[380px] shadow-sm text-black">
            <div class="flex justify-end">
                <span class="text-white rounded-tr-md w-max bg-[#FF0000] ">${pokemon.num}</span>
            </div>
            <h2 class="card-title mx-auto pb-1">${pokemon.name}</h2>
            <figure>
                <img 
                    src="${pokemon.img}"
                    alt="Shoes" />
            </figure>
            <div class="card-body">
                <h2 class="font-semibold text-lg bg-[#C4E4FF] w-max rounded-lg p-1 mx-auto">${pokemon.type}</h2>
                <p class="text-center text-[16px] font-bold pb-[-90px]">Candy count: ${pokemon.candy_count}</p>
                <p class="text-center text-[16px] font-bold">${pokemon.weight}</p>
                <p class="text-[#80007C] font-black text-[14px] text-center">${pokemon.weaknesses}</p>
                </div>
                <div class="flex justify-start">
                    <span class="w-max bg-[#00FFFF] text-black rounded-bl-md ">${pokemon.spawn_time}</span>
                </div>
        </div>
        `
        wrapper.appendChild(div)
    })
}
renderList(pokemons)

input.addEventListener('input', () => {
    const qwery = input.value.toLowerCase()
    const filtered = pokemons.filter(pok => pok.name.toLowerCase().includes(qwery))
    renderList(filtered)
})

console.log(pokemons);

const btnaZ = document.getElementById('it')
const btnzA = document.getElementById('itvacha')
btnaZ.addEventListener('click', () => {
  const sorted = [...pokemons].sort((a, b) =>
    String(a.name).localeCompare(String(b.name))
  );
  renderList(sorted);
});

btnzA.addEventListener('click', () => {
  const sorted = [...pokemons].sort((a, b) =>
    String(b.name).localeCompare(String(a.name))
  );
  renderList(sorted);
});
// const music = document.getElementById('music')
// const Doc = document.getElementById('Doc')
// const anim = document.getElementById('anim')
// const drama = document.getElementById('drama')
// const fam = document.getElementById('fam')
// const Sport = document.getElementById('Sport')

const filterButtons = document.querySelectorAll("ul button[data-type]");

filterButtons.forEach(button => {
    button.addEventListener("click", () => {
        const weaknessType = button.dataset.type.toLowerCase();
        const filteredList = pokemons.filter(pokemon =>
            pokemon.weaknesses.some(weakness =>
                weakness.trim().toLowerCase() === weaknessType
            )
        );
        renderList(filteredList);
    });
});
