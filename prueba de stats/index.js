const searchApi = (id) => `https://pokeapi.co/api/v2/pokemon/${id}`;

const BODY = document.querySelector("BODY");
const currentStats = {
    name: "Pokemon Status",
    children: [],
};
const fetchData = async (link) => {
    const raw = await fetch(link);
    const data = await raw.json();
    console.log(data);
    console.log(typeof data);
    const { name: dataName, id: dataId, height: pokemonHeight, weight: pokemonWeight, abilities, base_experience: pokemonExperience, held_items: pokemonHeldItems, stats } = data;

    // ! ! //
    console.log(pokemonExperience);
    console.table(pokemonHeldItems);

    console.table(stats);
    stats.forEach((type) => {
        console.log(type);
        currentStats.children.push({ name: type.stat.name, value: type.base_stat });
    });
    console.table(currentStats.children);

    currentStats.children.forEach((item) => {
        console.log(item.name);
        document.querySelectorAll(".graph_stat").forEach((bar) => {
            bar.getAttribute("data-value");
            if (item.name === bar.getAttribute("data-value")) {
                console.log(item);
                bar.style.width = item.value + "px";
            }
        });
    });
    // ! ! //
};
fetchData(searchApi(249));
/* fetchData() */
