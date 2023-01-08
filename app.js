//! ||||||||||||//
//!  PAGE ITEMS //
//! ||||||||||||//
const delateDBBtn = document.querySelector("#delate_DB_Btn");
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
const BODY = document.querySelector("body");
//~ !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
const closeBtns = document.querySelectorAll(".close_modal_btn");
//~ !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
const basicDataBtn = document.querySelector("#basic_data_btn");
const evoChainBtn = document.querySelector("#evo_chain_btn");
//~ !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//^ !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
const frafgmentPersonalizedThemeBtns = document.createDocumentFragment();
const themeBtnTemplate = document.querySelector("#theme_btn_template").content;
const personalizedBtnsContainer = document.querySelector("#personalized_themes_btns_container");
//^ !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
const configBtns = document.querySelectorAll(".config_btn");
const configMenu = document.querySelector("#config_menu");

const themeBtns = document.querySelectorAll(".theme_btn");
//^ !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
const searchInputNumber = document.querySelector("#search_input_number");
const searchInputName = document.querySelector("#search_input_name");
const searchBtn = document.querySelector("#search_btn");
//^ !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
const langMenuBtns = document.querySelectorAll(".lang_menu_modal_btn");
const langBtnsModal = document.querySelectorAll(".lang_modal_action_btn");
const langMenuNavBtns = document.querySelectorAll(".lang_menu_btn");
const langMenuNav = document.querySelector(".lang_menu_nav");
const langMenuModalStart = document.querySelector("#lang_menu_modal_start");
const langMenuModalTheme = document.querySelector("#lang_menu_modal_theme");
const langMenuModalPersonalizedTheme = document.querySelector("#lang_menu_modal_personalized_theme");
const langMenuModalfav = document.querySelector("#lang_menu_modal_fav");
//^ !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
const fragmentListVarieties = document.createDocumentFragment();
const selectionListTemplate = document.querySelector("#option_list_template").content;
const optionListTemplate = document.querySelector("#option_list_btn_template").content;
const searchBtnsContainer = document.querySelector("#search_varieties_btns_container");
const savePokemonBtn = document.querySelector("#save_pokemon_btn");
const imgContainer = document.querySelector("#img_container");
const btnPrevious = document.querySelector(".previous_btn");
const btnNext = document.querySelector(".next_btn");

//^ !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
const fragmentFavCards = document.createDocumentFragment();
//~ !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
const favCardsContainer = document.querySelector("#fav_cards_container");
const nameOptioListFavBtn = document.querySelector("#name_option_list_fav_btn");
const idOptioListFavBtn = document.querySelector("#id_option_list_fav_btn");
//^ !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

//~ !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
const dataContainer = document.querySelector(".data_container");
const pokeImg = document.querySelector("#poke_img");
const pokeId = document.querySelector("#poke_id");
const pokeName = document.querySelector("#poke_name");
const pokeTypes = document.querySelector("#poke_types");
const pokeBg = document.querySelector(".poke_bg");
const evoSubtitle = document.querySelector("#evo_subtitle");
//^ !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
const fragmentEvoCards = document.createDocumentFragment();
//~ !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
const evoCardTemplate = document.querySelector("#evo_card_template").content;
const evoCardsContainer = document.querySelector("#btns_evo_chain_container");
//^ !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//! !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
const modal = document.querySelector(".modal");
//! !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//^ !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
const startModal = document.querySelector("#start_modal");
//~ !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
const titleStartModal = document.querySelector("#title_start_modal");
const textStartModal = document.querySelector("#text_start_modal");
const startBtns = document.querySelectorAll(".start_modal_btn");
const acceptBtnStartModal = document.querySelector("#accept_start_modal_btn");
const deniedBtnStartModal = document.querySelector("#denied_start_modal_btn");
//~ !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//^ !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
const alertModal = document.querySelector("#alert_modal");
//~ !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
const acceptBtnAlertModal = document.querySelector("#accept_alert_modal_btn");
const titleAlertModal = document.querySelector("#title_alert_modal");
const textAlertModal = document.querySelector("#text_alert_modal");
//~ !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//^ !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
const innerAlertModal = document.querySelector("#inner_alert_modal");
//~ !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
const acceptBtnInnerAlertModal = document.querySelector("#accept_inner_alert_modal_btn");
const titleInnerAlertModal = document.querySelector("#title_inner_alert_modal");
const textInnerAlertModal = document.querySelector("#text_inner_alert_modal");
//~ !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//^ !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
const extraModal = document.querySelector("#extra_modal");
//^ !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//^ !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
const themeModal = document.querySelector("#theme_modal");
//~ !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
const themeActionBtns = document.querySelectorAll(".theme_modal_btn");
//~ !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//^ !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
const personalizedThemeModal = document.querySelector("#personalized_theme_modal");
//~ !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
const pikerThemeModalBtns = document.querySelectorAll(".piker_theme_modal_btn");
const deletePersonalizedThemeBtn = document.querySelector("#delete_changes_btn");
const themeNameInput = document.querySelector("#name_input");
const colorPikers = document.querySelectorAll(".color_piker");
const personalizedActionBtns = document.querySelectorAll(".personalized_action_btn");
//~ !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//^ !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
const favModal = document.querySelector("#fav_modal");
//~ !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
const favCardTemplate = document.querySelector("#fav_card_template").content;
const titlefavModal = document.querySelector("#title_fav_modal");

const favListFirstBtnText = document.querySelector("#option_list_fav_first_text");
//^ !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

//! |||||||||||||||||||||||||||||||//
//!  BASIC VARIABLES AND CONSTANTS //
//! |||||||||||||||||||||||||||||||//
//& SALVAR TEMAS Y QUE EL TEMA CAMBIE  */
//^ !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
const close = "close";
const open = "open";
const accepted = "accepted";
const denied = "denied";
const save = "save";
const cancel = "cancel";
//^ !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
const es = "es";
const en = "en";
//^ !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

const block = "block";
const flex = "flex";
//^ !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
const lightT = "light_theme";
const darkT = "dark_theme";
const personalizedT = "personalized_theme";
//^ !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
let storageContent = "";
const DB_NAME = "pokedex_storage";
//~ !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
const storageAlert = "page_alert_status";
const storageView = "page_view_count";
const storageThemes = "page_themes";
const storageThemeSaved = "theme_saved";
const storageSaved = "saved_pokemon";
const storageBackgrounds = "background_colors";
//~ !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
let itsFirstPokemonSearch = true;
//~ !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
const errorText = "Error";
const goodText = "Good";
const bienText = "Bien";
const esIncName = "Ese es un nombre incorrecto";
const enIncName = "That's a incorrect name";
const esEmptyThemeName = "Agrega un nombre para tu nuevo tema";
const enEmptyThemeName = "Add a name to your new theme";
const esEmpty = "Debe de llenar algun campo antes de hacer la busqueda";
const enEmpty = "You need to fill some data to search";
const esNameNoSearch = "Busca tus pokemon favoritos por nombre o por numero ID";
const enNameNoSearch = "Search your favorite pokemon by name or ID number";
//^ !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
let optionListVarients;
let optionListVarientsArrow;
let optionListVarientsBtns;
const optionListFav = document.querySelector("#option_list_fav");
const optionListFavArrow = document.querySelector("#arrow_btn_select_list_fav_svg");
const optionListFavFirstBtnText = document.querySelector("#option_list_fav_first_text");
const optionListFavBtns = document.querySelectorAll(".option_list_fav_btn");

let pastModal = "";
let currentPersonilizedTheme = {};
//^ !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
let configMenuStatus = close;
let themeModalStatus = close;
let alertModalStatus = close;
let startModalStatus = close;
let favModalStatus = close;
let personalizedThemeModalStatus = close;
let langMenuNavStatus = close;
let langMenuModalStartStatus = close;
let langMenuModalThemeStatus = close;
let langMenuModalPersonalizedThemeStatus = close;
let langMenuModalfavStatus = close;
let selectListVarientsStatus = close;
//^ !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
let currentLang = es;
//^ !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
const pokemonSearch = [];
const pokemonTypesEn = [];
const pokemonTypesEs = [];
const currentPokemonFlavors = [];
let currentPokemon = 1;
//^ !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
let speciesLink = "";
let evoChainLink = "";
let itemToSave = {};
//^ !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
const pokeThemes = {};
//^ !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//! ||||||||||||||//
//!  DATA OBJECTS //
//! ||||||||||||||//
//^ !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
let storagePokedex = {
    page_alert_status: open,
    page_themes: [
        {
            tag: "personalized_theme",
            name: "Entropia",
            bgColor: "#5f9ea0",
            firstColor: "#f5abef",
            textColor: "#000000",
            bgAccent: "#ffffff",
        },
        {
            tag: "personalized_theme",
            name: "Infierno",
            bgColor: "#E5E5E5",
            firstColor: "#CCA43B",
            textColor: "#363636",
            bgAccent: "#242F40",
        },
        {
            tag: "personalized_theme",
            name: "Durazno Dulce",
            bgColor: "#D57A66",
            firstColor: "#CA6680",
            textColor: "#000000",
            bgAccent: "#EDC79B",
        },
    ],
    theme_saved: {},
    page_view_count: 0,
    saved_pokemon: [],
    background_colors: {
        ghost: {
            img: "url(./assets/images/ghost.jpg)",
            bg: "linear-gradient(darkgray, darkslateblue, black)",
            url: "https://cdn.pixabay.com/photo/2015/05/20/22/58/lost-places-776297_1280.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            color: "darkslateblue",
        },
        fire: {
            img: "url(./assets/images/fire.webp)",
            bg: "linear-gradient(yellow, red, crimson, black)",
            url: "https://cdn.pixabay.com/photo/2022/08/19/09/05/volcano-7396466_1280.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            color: "red",
        },
        water: {
            img: "url(./assets/images/water.jpg)",
            bg: "linear-gradient(skyblue,darkblue, black )",
            url: "https://images.pexels.com/photos/62307/air-bubbles-diving-underwater-blow-62307.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            color: "skyblue",
        },
        ground: {
            img: "url(./assets/images/ground.jpg)",
            bg: "linear-gradient(saddlebrown, black)",
            url: "https://images.pexels.com/photos/1000057/pexels-photo-1000057.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            color: "saddlebrown",
        },
        rock: {
            img: "url(./assets/images/rock.jpg)",
            bg: "linear-gradient(saddlebrown,  black)",
            url: "https://upload.wikimedia.org/wikipedia/commons/7/76/Gobustan_Rock_Art_Cultural_Landscape%2C_semi-arid_landscape.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            color: "saddlebrown",
        },
        grass: {
            img: "url(./assets/images/grass.jpg)",
            bg: "linear-gradient( lightgreen, darkgreen, black)",
            url: "https://cdn.pixabay.com/photo/2019/07/15/12/10/grass-4339191_1280.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            color: "darkgreen",
        },
        bug: {
            img: "url(./assets/images/grass2.jpg)",
            bg: "linear-gradient(yellow,hsl(130, 70%, 15%), black)",
            url: "https://cdn.pixabay.com/photo/2019/08/29/19/48/cobweb-4439844_1280.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            color: "hsl(130, 70%, 15%)",
        },
        normal: {
            img: "url(./assets/images/normal.jpg)",
            bg: "linear-gradient(lightgray, black)",
            url: "https://images.pexels.com/photos/1757363/pexels-photo-1757363.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            color: "lightgray",
        },
        psychic: {
            img: "url(./assets/images/psychic.jpg)",
            bg: "linear-gradient( yellow, darkslateblue)",
            url: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/9962c0a5-f99e-4770-9d7e-769e56273503/d5j881f-a8e5bd4e-775b-4b2d-9b38-67ac746b3b07.jpg/v1/fill/w_1600,h_901,q_75,strp/it_s_a_loonie_espiral_world__by_wolfepaw_d5j881f-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9OTAxIiwicGF0aCI6IlwvZlwvOTk2MmMwYTUtZjk5ZS00NzcwLTlkN2UtNzY5ZTU2MjczNTAzXC9kNWo4ODFmLWE4ZTViZDRlLTc3NWItNGIyZC05YjM4LTY3YWM3NDZiM2IwNy5qcGciLCJ3aWR0aCI6Ijw9MTYwMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.QadKhgiC3sxmD4DQr99L4JpzLUFfS_JEi1_eEwiZDL4",
            color: "darkslateblue",
        },
        poison: {
            img: "url(./assets/images/poison.jpg)",
            bg: "linear-gradient(black, darkslateblue)",
            url: "https://cdn.pixabay.com/photo/2020/12/09/09/04/ink-5816825_1280.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            color: "darkslateblue",
        },
        fighting: {
            img: "url(./assets/images/fighting.jpg)",
            bg: "linear-gradient(black, crimson)",
            url: "https://images.pexels.com/photos/260447/pexels-photo-260447.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            color: "crimson",
        },
        electric: {
            img: "url(./assets/images/electric.jpg)",
            bg: "linear-gradient( yellow, orange, black)",
            url: "https://get.pxhere.com/photo/lightning-thunderstorm-weather-sky-night-forward-clouds-nature-storm-electricity-light-storm-clouds-dark-high-voltage-threatening-energy-night-thunderstorm-dangerous-thunder-atmospheric-lightning-weft-force-of-nature-lights-cloud-atmosphere-daytime-white-lighting-cumulus-atmospheric-phenomenon-water-line-tree-electric-blue-wind-landscape-space-meteorological-phenomenon-darkness-evening-midnight-city-horizon-1639008.jpg",
            color: "yellow",
        },
        dark: {
            img: "url(./assets/images/dark.jpg)",
            bg: "linear-gradient( black, darkgray)",
            url: "https://cdn.pixabay.com/photo/2016/11/25/23/15/moon-1859616_1280.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            color: "darkgray",
        },
        fairy: {
            img: "url(./assets/images/fairy.jpg)",
            bg: "linear-gradient( pink, darkslateblue, black)",
            url: "https://cdn.pixabay.com/photo/2018/04/03/20/29/forest-3287976_1280.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            color: "pink",
        },
        ice: {
            img: "url(./assets/images/ice.jpg)",
            bg: "linear-gradient( skyblue, deepskyblue, black)",
            url: "https://cdn.pixabay.com/photo/2016/11/29/01/21/cold-1866516_1280.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            color: "deepskyblue",
        },
        flying: {
            img: "url(./assets/images/flying.jpg)",
            bg: "linear-gradient( skyblue, saddlebrown)",
            url: "https://cdn.pixabay.com/photo/2018/04/16/16/16/sunset-3325080_1280.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            color: "skyblue",
        },
        dragon: {
            img: "url(./assets/images/dragon.jpg)",
            bg: "linear-gradient(black, crimson, yellow)",
            url: "https://images.pexels.com/photos/849385/pexels-photo-849385.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            color: "crimson",
        },
        steel: {
            img: "url(./assets/images/steel.jpg)",
            bg: "linear-gradient(135deg, darkgray, black, lightgray, gray, black, gray, darkgray)",
            url: "http://ignition.eg2.fr/wp-content/uploads/2016/03/DSC04077.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            color: "darkgray",
        },
    },
};
//^ !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

//! |||||||||||||||||//
//!  BASIC FUNCTIONS //
//! |||||||||||||||||//
//^ !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
const changeToHexa = (valueToCheck) => {
    let firstLeter = valueToCheck.trim().split("")[0];
    if (firstLeter === "r") {
        let splited = valueToCheck.split("(")[1].split(")")[0];
        splited = splited.split(",");
        let search = splited.map((digit) => {
            digit = parseInt(digit).toString(16);
            return digit.length === 1 ? "0" + digit : digit;
        });
        return "#" + search.join("");
    }
};
const setCurrentColors = () => {
    const target = document.querySelector(`.${BODY.className}`);
    const targetStyle = getComputedStyle(target);
    const getBgColorStyle = targetStyle.getPropertyValue("--bgColor");
    const getFirstColorStyle = targetStyle.getPropertyValue("--firstColor");
    const getTextColorStyle = targetStyle.getPropertyValue("--textColor");
    const getBgAccentStyle = targetStyle.getPropertyValue("--bgAccent");
    /* console.log(getBgColorStyle, getFirstColorStyle, getTextColorStyle, getBgAccentStyle); */
    currentBgColor = changeToHexa(getBgColorStyle);
    currentFirstColor = changeToHexa(getFirstColorStyle);
    currentTextColor = changeToHexa(getTextColorStyle);
    currentBgAccent = changeToHexa(getBgAccentStyle);
    /* console.log(currentBgColor, currentFirstColor, currentTextColor, currentBgAccent); */

    colorPikers.forEach((btn) => {
        let target = btn.getAttribute("data-name");
        switch (target) {
            case "bgColor":
                btn.value = currentBgColor;
                break;
            case "firstColor":
                btn.value = currentFirstColor;
                break;
            case "textColor":
                btn.value = currentTextColor;
                break;
            case "bgAccent":
                btn.value = currentBgAccent;
        }
        /* console.log(btn.value, target); */
    });
};
const deleteChildElements = (parentElement) => {
    let child = parentElement.lastElementChild;
    while (child) {
        parentElement.removeChild(child);
        child = parentElement.lastElementChild;
    }
};
const deleteArrElements = (parentElement) => {
    while (parentElement.length > 0) {
        parentElement.forEach((item) => {
            parentElement.pop(item);
        });
    }
};
//^ !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

const properCase = (string) => {
    return `${string[0].toUpperCase()}${string.slice(1).toLowerCase()}`;
};

//! CREATE CHARTS TRY //

/* const ctx = document.getElementById("myChart").getContext("2d");
const chart = new Chart(ctx, {
    type: "radar",

    data: {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [
            {
                label: "Jose",
                backgroundColor: "rgba(135, 206, 235,.5)",
                borderColor: "transparent",
                data: [0, 10, 15, 45, 40, 16, 20],
            },
            {
                label: "Pedro",
                backgroundColor: "red",
                borderColor: "transparent",
                data: [30, 40, 6, 16, 20, 26, 2],
            },
        ],
    },

    options: {}, 
});
*/
//! CREATE CHARTS TRY //
//^^ ************************************************************************** *//
const next = () => {
    if (configMenuStatus === open) {
        configMenuStatus = close;
        console.log("closing config menu");
        closeMenu(configMenu);
    }
    if (langMenuNavStatus === open) {
        langMenuNavStatus = close;
        console.log("closing config menu lang menu");
        closeMenu(langMenuNav);
    }

    if (selectListVarientsStatus === open) {
        selectListActions(optionListVarients, optionListVarientsArrow);
    }
    if (itsFirstPokemonSearch === true) {
        itsFirstPokemonSearch = false;
        currentPokemon = 1;
        catchEmAll(currentPokemon);
    } else if (itsFirstPokemonSearch === false) {
        if (currentPokemon >= 1 && currentPokemon <= 897) {
            currentPokemon++;
            catchEmAll(currentPokemon);
        } else if (currentPokemon === 898) {
            currentPokemon = 1;
            catchEmAll(currentPokemon);
        }
    }
};
const previous = () => {
    if (configMenuStatus === open) {
        configMenuStatus = close;
        console.log("closing config menu");
        closeMenu(configMenu);
    }
    if (langMenuNavStatus === open) {
        langMenuNavStatus = close;
        console.log("closing config menu lang menu");
        closeMenu(langMenuNav);
    }

    if (selectListVarientsStatus === open) {
        selectListActions(optionListVarients, optionListVarientsArrow);
    }
    if (itsFirstPokemonSearch === true) {
        itsFirstPokemonSearch = false;
        currentPokemon = 898;
        catchEmAll(currentPokemon);
    } else if (itsFirstPokemonSearch === false) {
        if (currentPokemon >= 2 && currentPokemon <= 898) {
            currentPokemon--;
            catchEmAll(currentPokemon);
        } else if (currentPokemon === 1) {
            currentPokemon = 898;
            catchEmAll(currentPokemon);
        }
    }
};
//^ !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
const sanitizeInput = (inputValue) => {
    const div = document.createElement("div");
    div.textContent = inputValue;
    return div.innerHTML;
};
//^ !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
const animationIn = (item, display, delay = 250) => {
    item.style.display = display;
    const timer = delay + 200;
    setTimeout(() => {
        item.animate([{ opacity: `0` }, { opacity: `1` }], { duration: delay, fill: `forwards` });
    }, timer);
};
const animationOut = (item, delay = 250) => {
    const timer = delay + 200;
    item.animate([{ opacity: `1` }, { opacity: `0` }], { duration: delay, fill: `forwards` });
    setTimeout(() => {
        item.style.display = `none`;
    }, timer);
};
//^ !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
const openMenu = (menu, delay = 250) => {
    menu.style.display = "flex";
    setTimeout(() => {
        menu.style.opacity = "1";
    }, delay);
};
const closeMenu = (menu, delay = 250) => {
    menu.style.opacity = "0";
    setTimeout(() => {
        menu.style.display = "none";
    }, delay);
};
//! /
const closeInnerModal = () => {};

//! /
//^ !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
const changeLang = (lang) => {
    const varietiesListFirstBtnText = document.querySelector("#option_list_varients_first_text");
    if (lang === es) {
        currentLang = es;
        console.log("cambiando idioma a español");

        if (pokemonTypesEs.length === 1) {
            pokeTypes.textContent = pokemonTypesEs[0];
        } else if (pokemonTypesEs.length > 1) {
            pokeTypes.textContent = pokemonTypesEs.join("/");
        } else if (pokemonTypesEs.length === 0) {
            pokeTypes.textContent = esNameNoSearch;
        }
        if (varietiesListFirstBtnText) {
            varietiesListFirstBtnText.textContent = "Variantes";
        }
        searchInputName.setAttribute("placeholder", "Nombre");
        titleStartModal.textContent = "Bienvenido";
        textStartModal.textContent = "Estas entrando a una pagina fan made, la unica intension es entretenimiento";
        evoSubtitle.textContent = "Cadena De Evolución";
        titlefavModal.textContent = "Favoritos";
        favListFirstBtnText.textContent = "Ordenar";
        nameOptioListFavBtn.textContent = "Nombre";
        acceptBtnStartModal.textContent = "Aceptar";
        deniedBtnStartModal.textContent = "Rechazar";
    } else if (lang === en) {
        currentLang = en;
        console.log("cambiando idioma a ingles");
        if (pokemonTypesEn.length === 1) {
            pokeTypes.textContent = pokemonTypesEn[0];
        } else if (pokemonTypesEn.length > 1) {
            pokeTypes.textContent = pokemonTypesEn.join("/");
        } else if (pokemonTypesEn.length === 0) {
            pokeTypes.textContent = enNameNoSearch;
        }
        if (varietiesListFirstBtnText) {
            varietiesListFirstBtnText.textContent = "Varieties";
        }
        searchInputName.setAttribute("placeholder", "Name");
        titleStartModal.textContent = "Welcome";
        textStartModal.textContent = "You'r enter in a fan made page, only with the propouse of training";
        evoSubtitle.textContent = "Evolution Chain";
        titlefavModal.textContent = "Favorite";
        favListFirstBtnText.textContent = "Sort";
        nameOptioListFavBtn.textContent = "Name";
        acceptBtnStartModal.textContent = "Accept";
        deniedBtnStartModal.textContent = "Denied";
    }

    document.documentElement.setAttribute("lang", currentLang);
};
//^^ ************************************************************************** *//
const lunchAlert = (alertError) => {
    alertModalStatus = open;
    animationIn(modal);
    titleAlertModal.textContent = errorText;
    if (alertError === "name") {
        if (currentLang === es) {
            textAlertModal.textContent = esIncName;
        } else if (currentLang === en) {
            textAlertModal.textContent = enIncName;
        }
    }
    setTimeout(() => {
        animationIn(alertModal);
    }, 1000);
};
const fetchFunc = async (url) => {
    try {
        const fetching = await fetch(url);
        return fetching.json();
    } catch (error) {
        console.log(error);
    }
};
const createEvoCard = async (id, name, img) => {
    const cardClone = evoCardTemplate.cloneNode(true);
    const cardImg = cardClone.querySelector(".card_img");
    const cardId = cardClone.querySelector(".card_id");
    const cardName = cardClone.querySelector(".card_name");
    const cardBtn = cardClone.querySelector(".card_btn");
    cardBtn.setAttribute("data-name", name);
    cardImg.setAttribute("src", img);
    cardImg.setAttribute("alt", name);
    /*     console.log(name); */
    cardName.textContent = properCase(name);
    cardId.textContent = id;
    fragmentEvoCards.appendChild(cardClone);
};
const createFavCard = async (id, name, img) => {
    const cardClone = favCardTemplate.cloneNode(true);
    const cardImg = cardClone.querySelector(".fav_card_img");
    const cardId = cardClone.querySelector(".fav_card_id");
    const cardName = cardClone.querySelector(".fav_card_name");
    const searchCardBtn = cardClone.querySelector(".search_fav_card_btn");
    const deleteCardBtn = cardClone.querySelector(".delete_fav_card_btn");
    cardImg.setAttribute("src", img);
    cardImg.setAttribute("alt", name);
    searchCardBtn.setAttribute("data-id", id);
    deleteCardBtn.setAttribute("data-id", id);
    searchCardBtn.id = `search_fav_card_btn_${name}`;
    deleteCardBtn.id = `delete_fav_card_btn_${name}`;
    /*     console.log(name); */
    cardName.textContent = properCase(name);
    cardId.textContent = id;
    fragmentFavCards.appendChild(cardClone);
};
const setFavCardBtns = () => {
    //! ARREGLAR LOS BOTONES DE LAS TARJETAS FAV //
    const favCardBtns = document.querySelectorAll(".fav_card_btn");
    favCardBtns.forEach((btn) => {
        btn.addEventListener("click", (e) => {
            let btnName = e.target.getAttribute("data-name");
            let btnId = e.target.getAttribute("data-id");
            if (btnName === "search_fav") {
                console.log("buscando fav");
                console.log(btnId);
                catchEmAll(btnId);
                animationOut(favModal);
                favModalStatus = close;
                setTimeout(() => animationOut(modal), 250);
            } else if (btnName === "delete_fav") {
                console.log("borrando fav");
                console.log(btnId);
            }
        });
    });
    //! ARREGLAR LOS BOTONES DE LAS TARJETAS FAV //
};
const createEvoChainBtns = async (speciesLink) => {
    deleteChildElements(evoCardsContainer);
    deleteChildElements(fragmentEvoCards);
    /* ! INTERNAL FUNCTIONS */

    const createEvoData = async (speciesList) => {
        speciesList.forEach(async (specie) => {
            const evoTypeData = await fetchFunc(specie.species.url);
            const evoTypeId = evoTypeData.id;
            const fetchEvoType = await fetchFunc(`https://pokeapi.co/api/v2/pokemon/${evoTypeId}`);
            const evoTypeImg = fetchEvoType.sprites.front_default;
            const evoTypeName = fetchEvoType.name;

            /* console.log(fetchEvoType); */

            /* console.log(evoTypeId, evoTypeName); */
            /* console.log(evoTypeImg); */
            createEvoCard(evoTypeId, evoTypeName, evoTypeImg);
            evoCardsContainer.appendChild(fragmentEvoCards);
            const nextEvoData = specie.evolves_to;
            evoTypesCount++;
            if (nextEvoData) {
                /* console.log(nextEvoData); */
                createEvoData(nextEvoData);
                if (evoTypesCount === 1) {
                    /* console.log(`Tienes 1na evolucion`); */
                } else {
                    /* console.log(`Tienes ${evoTypesCount} evoluciones`); */
                }
            } else {
                /* console.log(`No tienes ${evoTypesCount + 1} evoluciones`); */
            }
        });
    };
    /*! EXTRA DATA */
    const pokeExtraData = await fetchFunc(speciesLink);
    /* console.log(pokeExtraData); */

    const dataColor = pokeExtraData.color.name;
    const dataEvoChainLink = pokeExtraData.evolution_chain.url;
    /* console.log(dataEvoChainLink); */
    const dataEvoChain = await fetchFunc(dataEvoChainLink);
    /* console.log(dataEvoChain); */
    /* console.log(dataEvoChain.chain.species.name); */

    const fetchEvolvesFromDataPokemonId = await fetchFunc(dataEvoChain.chain.species.url);
    const fetchEvolvesFromData = await fetchFunc(`https://pokeapi.co/api/v2/pokemon/${fetchEvolvesFromDataPokemonId.id}`);
    /* console.log(fetchEvolvesFromData); */
    /* console.log(fetchEvolvesFromData.id, fetchEvolvesFromData.name); */
    /*  console.log(fetchEvolvesFromData.sprites.front_default); */
    const evoFromPokeId = fetchEvolvesFromData.id;
    const evoFromPokeName = fetchEvolvesFromData.name;
    const evoFromPokeImg = fetchEvolvesFromData.sprites.front_default;
    createEvoCard(evoFromPokeId, evoFromPokeName, evoFromPokeImg);
    evoCardsContainer.appendChild(fragmentEvoCards);
    const firstEvoData = dataEvoChain.chain.evolves_to;
    const hasEvoTypes = firstEvoData.length > 0;
    let evoTypesCount = 0;

    switch (hasEvoTypes) {
        case false:
            console.log("No tiene evolucion");
            break;
        case true:
            createEvoData(firstEvoData);
            break;
    }
    setTimeout(() => {
        const cardBtns = document.querySelectorAll(".card_btn");
        cardBtns.forEach((btn) => {
            btn.addEventListener("click", async () => catchEmAll(btn.getAttribute("data-name")));
        });
    }, 500);
};
const createPokeData = async (data) => {
    if (data) {
        deleteArrElements(pokemonTypesEn);
        deleteArrElements(pokemonTypesEs);
        deleteChildElements(searchBtnsContainer);
        deleteChildElements(fragmentListVarieties);
        deleteArrElements(currentPokemonFlavors);
        searchInputNumber.value = "";
        searchInputNumber.value = "";
        pokeImg.classList.remove("animation_spin");
        speciesLink = data.species.url;
        const speciesData = await fetchFunc(speciesLink);
        console.log(speciesData);
        const {
            base_happiness,
            shape,
            color,
            generation,
            habitat,
            forms_switchable: switchableForms,
            gender_rate: genderRate,
            growth_rate: growthRate,
            has_gender_differences: genderDifferences,
            is_baby: isBaby,
            is_legendary: isLegendary,
            is_mythical: isMythical,
            pal_park_encounters: palParkEncounters,
            pokedex_numbers: pokedexNumbers,
            varieties,
        } = speciesData;
        console.log(generation);
        createEvoChainBtns(speciesLink);
        //! PRUEBA DE LISTA DE VARIEDADES  //
        /* console.log(varieties.length); */
        if (varieties.length > 1) {
            /* console.log("este pokemon tiene variantes"); */
            const selectionListTemplateClone = selectionListTemplate.cloneNode(true);
            const newList = selectionListTemplateClone.querySelector("#option_list_varients");
            const varietiesListFirstBtnText = selectionListTemplateClone.querySelector("#option_list_varients_first_text");
            if (currentLang === es) {
                varietiesListFirstBtnText.textContent = "Variantes";
            } else if (currentLang === en) {
                varietiesListFirstBtnText.textContent = "Varients";
            }
            varieties.forEach((variation) => {
                /* console.log(variation); */
                /* console.log(variation.pokemon.name); */

                //~~  */
                const optionListTemplateClone = optionListTemplate.cloneNode(true);
                const newOptionBtn = optionListTemplateClone.querySelector(".option_list_varients_btn");

                newOptionBtn.id = variation.pokemon.name;
                newOptionBtn.setAttribute("data-url", variation.pokemon.url);
                newOptionBtn.textContent = properCase(variation.pokemon.name);
                newList.appendChild(newOptionBtn);
                //~~  */
            });

            fragmentListVarieties.appendChild(newList);
            searchBtnsContainer.appendChild(fragmentListVarieties);

            optionListVarients = document.querySelector("#option_list_varients");
            optionListVarientsArrow = document.querySelector("#arrow_btn_option_list_varients_svg");
            optionListVarientsBtns = document.querySelectorAll(".option_list_varients_btn");
            optionListVarientsBtns.forEach((btn) => {
                //* console.log(optionType);

                btn.addEventListener("click", async () => {
                    const actionName = btn.getAttribute("data-name");
                    if (actionName === "open-close") {
                        selectListActions(optionListVarients, optionListVarientsArrow);
                    } else if (actionName === "item") {
                        let newSearch = await fetchFunc(btn.getAttribute("data-url"));
                        /* console.log(newSearch); */
                        selectListActions(optionListVarients, optionListVarientsArrow);
                        catchEmAll(btn.id);
                    }
                });
            });
        } else if (varieties.length === 1) {
            /* console.log("este pokemon no tiene variantes"); */
        }
        //! PRUEBA DE LISTA DE VARIEDADES  //
        //! PRUEBAS DETALLES TIPO DE EVOLUCION  */
        evoChainLink = speciesData.evolution_chain.url;
        const evoData = await fetchFunc(evoChainLink);
        console.log(evoData.chain);
        const pokemonEvoDetails = evoData.chain.evolves_to.filter((item) => item.species.name === data.name);
        if (pokemonEvoDetails.length >= 1) {
            const typesOfEvolution = pokemonEvoDetails[0].evolution_details;
            console.log("evo data", typesOfEvolution);
            typesOfEvolution.forEach((type) => {
                /* console.log(type); */
                if (type.trigger.name === "use-item") {
                    console.log("Item de evolucion type item - ", type.item.name);
                } else if (type.trigger.name === "Level-up" || type.trigger.name === "level-up") {
                    console.log("Level-up type data", type);
                } else {
                    console.log("data type evolucion no capturada", type);
                }
            });
        }
        //! PRUEBAS DETALLES TIPO DE EVOLUCION  */
        /* console.log(dataName); */
        //! PRUEBA DE DATOS A IMPRIMIR  /
        const pokeFlavors = speciesData.flavor_text_entries;
        pokeFlavors.forEach((flavor) => {
            /* console.log(flavor); */
            if (flavor.language.name === en || flavor.language.name === es) {
                /* console.log(flavor); */
                currentPokemonFlavors.push(flavor);
            }
        });
        const pokemonFlavorsEn = currentPokemonFlavors.filter((flavor) => flavor.language.name === en);
        const pokemonFlavorsEs = currentPokemonFlavors.filter((flavor) => flavor.language.name === es);
        console.log("flavors en ingles", pokemonFlavorsEn);
        console.log("flavors en español", pokemonFlavorsEs);
        //! PRUEBA DE DATOS A IMPRIMIR  /

        const artworkImg = data.sprites.other["official-artwork"]["front_default"];
        const dataName = properCase(data.name);
        const dataId = data.id;
        /* console.log(dataId); */
        currentPokemon = dataId;
        updatePokedex();

        itemToSave = {
            name: data.name,
            id: data.id,
            sprite: data.sprites.front_default,
        };

        if (data.types.length > 1) {
            data.types.forEach(async (type) => {
                const typeData = await fetchFunc(type.type.url);
                const typeLangName = typeData.names;
                typeLangName.forEach(async (lang) => {
                    const langName = lang.language.name;
                    switch (langName) {
                        case es:
                            pokemonTypesEs.push(properCase(lang.name));
                            break;
                        case en:
                            pokemonTypesEn.push(properCase(lang.name));
                            break;
                    }
                });

                switch (currentLang) {
                    case es:
                        pokeTypes.textContent = pokemonTypesEs.join("/");
                        break;
                    case en:
                        pokeTypes.textContent = pokemonTypesEn.join("/");
                        break;
                }
            });
            /*  for (let i = 0; i < data.types.length; i++) {
            pokemonTypes.push(properCase(data.types[i].type.name));
        }
        pokeTypes.textContent = pokemonTypes.join(" / "); */
        } else if (data.types.length === 1) {
            const typeData = await fetchFunc(data.types[0].type.url);
            const typeLangName = typeData.names;
            typeLangName.forEach(async (lang) => {
                const langName = lang.language.name;
                switch (langName) {
                    case es:
                        pokemonTypesEs.push(properCase(lang.name));
                        break;
                    case en:
                        pokemonTypesEn.push(properCase(lang.name));
                        break;
                }
            });

            switch (currentLang) {
                case es:
                    pokeTypes.textContent = pokemonTypesEs[0];
                    break;
                case en:
                    pokeTypes.textContent = pokemonTypesEn[0];
                    break;
            }
        }

        const newBackground = storagePokedex[storageBackgrounds][data.types[0].type.name].url;
        pokeBg.style.background = `url(${newBackground})`;
        pokeImg.setAttribute("src", artworkImg);
        pokeImg.setAttribute("alt", dataName);
        pokeName.textContent = dataName;
        pokeId.textContent = dataId;
    }
};
//&OPEN SELECT LIST--START
const selectListActions = (list, arrowList) => {
    if (selectListVarientsStatus === close) {
        selectListVarientsStatus = open;
        arrowList.style.transform = "rotate(180deg)";
        list.style.height = "fit-content";
    } else if (selectListVarientsStatus === open) {
        selectListVarientsStatus = close;
        arrowList.style.transform = "rotate(0)";
        list.style.height = "3rem";
    }
};
const catchEmAll = async (id) => {
    if (itsFirstPokemonSearch === true) {
        itsFirstPokemonSearch = false;
    }
    try {
        const data = await fetchFunc(`https://pokeapi.co/api/v2/pokemon/${id}`);

        console.log("Primera fetch data", data);
        createPokeData(data);
    } catch (error) {
        lunchAlert("name");
        console.log(error);
    }
};
catchEmAll("eevee");
const searchFunction = () => {
    let myName = searchInputName.value.toLowerCase();
    let myNumber = searchInputNumber.value;
    if (itsFirstPokemonSearch === true) {
        itsFirstPokemonSearch = false;
    }
    if (myName === "" && myNumber === "") {
        titleAlertModal.textContent = errorText;
        if (currentLang === es) {
            textAlertModal.textContent = esEmpty;
        } else if (currentLang === en) {
            textAlertModal.textContent = enEmpty;
        }
        animationIn(modal, block, 1000);
        setTimeout(() => animationIn(alertModal, block, 1000), 1500);
    } else if (myNumber === "" || myNumber === null || myNumber === NaN) {
        currentPokemon = myName;
    } else if (myName === "") {
        currentPokemon = myNumber;
    }

    catchEmAll(currentPokemon);

    //*console.log(currentPokemon);
};
//^^ ************************************************************************** *//
const langMenuModalActions = (action) => {
    console.log(action);
    switch (action) {
        case "lang_nav":
            if (langMenuNavStatus === close) {
                langMenuNavStatus = open;
                openMenu(langMenuNav);
            } else if (langMenuNavStatus === open) {
                langMenuNavStatus = close;
                closeMenu(langMenuNav);
            }
            break;
        case "lang_start":
            if (langMenuModalStartStatus === close) {
                langMenuModalStartStatus = open;
                openMenu(langMenuModalStart);
            } else if (langMenuModalStartStatus === open) {
                langMenuModalStartStatus = close;
                closeMenu(langMenuModalStart);
            }
            break;
        case "lang_theme":
            if (langMenuModalThemeStatus === close) {
                langMenuModalThemeStatus = open;
                openMenu(langMenuModalTheme);
            } else if (langMenuModalThemeStatus === open) {
                langMenuModalThemeStatus = close;
                closeMenu(langMenuModalTheme);
            }
            break;
        case "lang_personalized_theme":
            if (langMenuModalPersonalizedThemeStatus === close) {
                langMenuModalPersonalizedThemeStatus = open;
                openMenu(langMenuModalPersonalizedTheme);
            } else if (langMenuModalPersonalizedThemeStatus === open) {
                langMenuModalPersonalizedThemeStatus = close;
                closeMenu(langMenuModalPersonalizedTheme);
            }
            break;
        case "lang_fav":
            if (langMenuModalfavStatus === close) {
                langMenuModalfavStatus = open;
                openMenu(langMenuModalfav);
            } else if (langMenuModalfavStatus === open) {
                langMenuModalfavStatus = close;
                closeMenu(langMenuModalfav);
            }
            break;
    }
};
//^ !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
const startModalActions = (action) => {
    console.log(action);
    if (action === accepted) {
        updatePokedex();
        storagePokedex[storageAlert] = close;
    } else if (action === denied) {
        console.log(denied);
    }
    animationOut(startModal, 500);
    setTimeout(() => {
        animationOut(modal, 500);
    }, 1500);
    savePokedex();
};
const configMenuActions = () => {
    if (configMenuStatus === close) {
        configMenuStatus = open;
        console.log("open config menu");
        openMenu(configMenu);
    } else if (configMenuStatus === open) {
        configMenuStatus = close;
        console.log("closing config menu");
        closeMenu(configMenu);
    }
};
const configMenuOptions = (option) => {
    console.log(option);
    if (option === "open-close") {
        configMenuActions();
    } else if (option === "lang_nav") {
        console.log("abriendo menu lang nav");
    } else if (option === "theme") {
        themeMenuActions();
        configMenuActions();
    } else if (option === "fav") {
        favMenuActions();
        configMenuActions();
    } else {
        configMenuActions();
    }
};
//^ !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
const savePokemonFav = () => {
    console.log("preparando salvar pokemon function");
    console.log(itemToSave);
    const actualDate = new Date();
    updatePokedex();
    if (storagePokedex[storageSaved].length === 0) {
        storagePokedex[storageSaved].push(itemToSave);
        console.log(storagePokedex);
        console.log("Salvando por primera vez pokemon en favoritos");
        savePokedex();
    } else if (storagePokedex[storageSaved].length >= 1) {
        console.log(storagePokedex[storageSaved]);
        const cleanIndex = storagePokedex[storageSaved].filter((item) => item.id !== itemToSave.id);
        console.log(cleanIndex);
        cleanIndex.push(itemToSave);
        storagePokedex[storageSaved] = cleanIndex;
        /* storagePokedex[storageSaved].forEach((item) => {
            console.log(item);
            switch (itemToSave.id === item.id) {
                case false:
                    storagePokedex[storageSaved].push(itemToSave);
                    console.log(storagePokedex);
                    console.log("Salvando pokemon en favoritos");
                    break;
                case true:
                    console.log("Este pokemon ya se encuentra en favoritos");
                    break;
            }
        }); */

        console.log("Salvando pokemon, actualizando base de favoritos");
        savePokedex();
    }
};
//! CHECAR LOS BOTONES DE POKEMON FAVORITOS, QUE DESPLIEGUEN INFORMACION, CREAR FILTRO (FECHA, ID, NOMBRE), CREAR UN NUEVO ITEMcARD CON FECHA Y QUE PUEDA GENERARLE  //

const favCardBtnsActions = (btn) => {
    console.log(btn);
    console.log(btn.getAttribute("data-name"));
    console.log(btn.getAttribute("data-id"));
};
const favMenuActions = () => {
    deleteChildElements(fragmentFavCards);
    deleteChildElements(favCardsContainer);
    if (favModalStatus === close) {
        oldTheme = BODY.className;
        favModalStatus = open;
        animationIn(modal, block, 500);
        setTimeout(() => animationIn(favModal, block, 500), 1500);
    } else if (favModalStatus === open) {
        favModalStatus = close;
        animationOut(favModal, 500);
        setTimeout(() => {
            animationOut(modal, 500);
        }, 1500);
    }
    updatePokedex();
    storagePokedex[storageSaved].forEach((item) => {
        createFavCard(item.id, item.name, item.sprite, item.date);
    });

    favCardsContainer.appendChild(fragmentFavCards);

    setTimeout(() => setFavCardBtns(), 100);
};
const themeMenuActions = () => {
    if (themeModalStatus === close) {
        oldTheme = BODY.className;
        themeModalStatus = open;
        animationIn(modal, block, 500);
        setTimeout(() => animationIn(themeModal, block, 500), 1500);
    } else if (themeModalStatus === open) {
        themeModalStatus = close;
        animationOut(themeModal, 500);
        setTimeout(() => {
            animationOut(modal, 500);
        }, 1500);
    }
};
const updatePokedex = () => {
    storagePokedex = JSON.parse(localStorage.getItem(DB_NAME));
    console.log("Pokedex Updated");
};
const savePokedex = () => {
    localStorage.setItem(DB_NAME, JSON.stringify(storagePokedex));
    console.log("Storage Updated", JSON.parse(localStorage.getItem(DB_NAME)));
};
//^^ ************************************************************************** *//
const personalizedProperty = (id, propertyName, propertyValue) => {
    const currentItem = document.querySelector(`.${id}`);
    currentItem.style.setProperty(propertyName, propertyValue);
};
//^^ ************************************************************************** *//

const changeBasicTheme = (tm) => {
    if (!tm) {
        const date = new Date();
        const time = date.getHours();
        const isNight = time < 8 || time > 19;
        switch (isNight) {
            case true:
                currentTheme = darkT;
                BODY.className = currentTheme;
                currentPersonilizedTheme = {
                    tag: darkT,
                    name: darkT,
                    bgColor: "",
                    firstColor: "",
                    textColor: "",
                    bgAccent: "",
                };
                setCurrentColors();
                break;
            case false:
                currentTheme = lightT;
                BODY.className = currentTheme;
                currentPersonilizedTheme = {
                    tag: lightT,
                    name: lightT,
                    bgColor: "",
                    firstColor: "",
                    textColor: "",
                    bgAccent: "",
                };
                setCurrentColors();
                break;
            default:
                console.log("tienes un problema con tu funcion changeTheme");
                nn;
        }
    } else {
        BODY.className = tm;
        BODY.removeAttribute("style");
        currentPersonilizedTheme = {
            tag: tm,
            name: tm,
            bgColor: "",
            firstColor: "",
            textColor: "",
            bgAccent: "",
        };
    }
};
const changePersonalizedTheme = (tm) => {
    storagePokedex[storageThemes].forEach((item) => {
        if (item.name === tm) {
            BODY.className = personalizedT;
            currentBgColor = item.bgColor;
            currentFirstColor = item.firstColor;
            currentTextColor = item.textColor;
            currentBgAccent = item.bgAccent;
            currentPersonilizedTheme = {
                tag: personalizedT,
                name: item.name,
                bgColor: currentBgColor,
                firstColor: currentFirstColor,
                textColor: currentTextColor,
                bgAccent: currentBgAccent,
            };
            personalizedProperty(personalizedT, `--bgColor`, currentBgColor);
            personalizedProperty(personalizedT, `--firstColor`, currentFirstColor);
            personalizedProperty(personalizedT, `--textColor`, currentTextColor);
            personalizedProperty(personalizedT, `--bgAccent`, currentBgAccent);
        }
    });
};
//^^ ************************************************************************** *//

const deletePersonalizedTheme = () => {
    console.log("borrando edicion de tema personalizado");

    BODY.removeAttribute("style");
    setCurrentColors();
};
const createPersonalizedBtns = () => {
    deleteChildElements(frafgmentPersonalizedThemeBtns);
    deleteChildElements(personalizedBtnsContainer);
    storagePokedex[storageThemes].forEach((theme) => {
        let cloneTemplate = themeBtnTemplate.cloneNode(true);
        let btn = cloneTemplate.querySelector(".personalized_theme_btn");
        btn.textContent = theme.name;
        btn.setAttribute("data-name", theme.name);
        frafgmentPersonalizedThemeBtns.appendChild(cloneTemplate);
    });
    personalizedBtnsContainer.appendChild(frafgmentPersonalizedThemeBtns);
    const personalizedThemeBtns = document.querySelectorAll(".personalized_theme_btn");
    personalizedThemeBtns.forEach((btn) => btn.addEventListener("click", () => changePersonalizedTheme(btn.getAttribute("data-name"))));
};
const checkStorageAnswer = () => {
    storageContent = JSON.parse(localStorage.getItem(DB_NAME));
    if (!storageContent) {
        savePokedex();
        changeBasicTheme();
        console.log("local storage item is created");
        animationIn(modal, block, 500);
        setTimeout(() => animationIn(startModal, block, 500), 1500);
    } else if (storageContent && storageContent[storageAlert] === open) {
        updatePokedex();
        storagePokedex[storageView] = storageContent[storageView] + 1;
        savePokedex();
        console.log(`local storage item answer= ${storagePokedex[storageAlert]}, page views= ${storagePokedex[storageView]}`);

        animationIn(modal, block, 500);
        setTimeout(() => animationIn(startModal, block, 500), 1500);
    } else if (storageContent && storageContent[storageAlert] === close) {
        updatePokedex();
        storagePokedex[storageAlert] = storageContent[storageAlert];
        storagePokedex[storageView] = storageContent[storageView] + 1;
        savePokedex();
        console.log(`local storage item answer= ${storagePokedex[storageAlert]}, page views= ${storagePokedex[storageView]}`);
    }

    if (storageContent && storageContent[storageThemes].length > 0) {
        console.log("tienes temas");
        createPersonalizedBtns();
    }
    if (storageContent && storageContent[storageThemeSaved] !== {} && storageContent && storageContent[storageThemeSaved]["tag"] === personalizedT) {
        console.log(storageContent[storageThemeSaved]);
        BODY.className = personalizedT;
        personalizedProperty(personalizedT, `--bgColor`, storageContent[storageThemeSaved]["bgColor"]);
        personalizedProperty(personalizedT, `--firstColor`, storageContent[storageThemeSaved]["firstColor"]);
        personalizedProperty(personalizedT, `--textColor`, storageContent[storageThemeSaved]["textColor"]);
        personalizedProperty(personalizedT, `--bgAccent`, storageContent[storageThemeSaved]["bgAccent"]);
        currentPersonilizedTheme = storageContent[storageThemeSaved];
    } else if (storageContent && storageContent[storageThemeSaved] !== {} && storageContent && storageContent[storageThemeSaved]["tag"] !== personalizedT) {
        changeBasicTheme(storageContent[storageThemeSaved]["tag"]);
    }
};
checkStorageAnswer();
//^^ ************************************************************************** *//
const personalizedThemeActionsBtnsActiions = (tm) => {
    if (tm === "new_theme") {
        oldTheme = BODY.className;
        BODY.className = personalizedT;
        setCurrentColors();
        animationOut(themeModal);
        themeModalStatus = close;
        setTimeout(() => {
            animationIn(personalizedThemeModal, block);
            personalizedThemeModalStatus = open;
        }, 1500);
    } else if (tm === "edit_theme") {
        console.log("checando edit");
    }
};
const themeActionsBtnsActions = (action) => {
    if (action === "delete") {
        BODY.className = oldTheme;
        deletePersonalizedTheme();
    } else if (action === "try") {
        themeModalStatus = close;
        animationOut(themeModal);
        setTimeout(() => {
            animationOut(modal);
        }, 1000);
    } else if (action === cancel) {
        themeModalStatus = close;
        BODY.className = oldTheme;
        deletePersonalizedTheme();
        animationOut(themeModal);
        setTimeout(() => {
            animationOut(modal);
        }, 1000);
    } else if (action === save) {
        themeModalStatus = close;
        storagePokedex[storageThemeSaved] = currentPersonilizedTheme;
        savePokedex();
        animationOut(personalizedThemeModal);
        setTimeout(() => {
            animationOut(modal);
        }, 1000);
    }
};
const pikerThemeActionBtns = (action) => {
    console.log(action);
    if (action === cancel) {
        console.log("Tema personalizado cancelado");
        deletePersonalizedTheme();
        BODY.className = oldTheme;
        animationOut(personalizedThemeModal);
        setTimeout(() => {
            animationIn(themeModal, block);
        }, 1000);
    } else if (action === save) {
        console.log("Tema personalizado salvado");
        currentTheme = personalizedT;
        if (themeNameInput.value !== "") {
            console.log(themeNameInput.value);
            const newItem = {
                name: themeNameInput.value,
                bgColor: currentBgColor,
                firstColor: currentFirstColor,
                textColor: currentTextColor,
                bgAccent: currentBgAccent,
            };
            storagePokedex[storageThemes].push(newItem);
            console.log(storagePokedex);
            createPersonalizedBtns();
            savePokedex();
            animationOut(personalizedThemeModal);
            setTimeout(() => {
                animationIn(themeModal, block);
            }, 1000);
        } else {
            animationOut(personalizedThemeModal);
            pastModal = personalizedThemeModal;
            setTimeout(() => {
                titleAlertModal.textContent = errorText;
                if (currentLang === es) {
                    textAlertModal.textContent = esEmptyThemeName;
                } else if (currentLang === en) {
                    textAlertModal.textContent = enEmptyThemeName;
                }
                animationIn(alertModal, block);
            }, 1000);
        }
    }
};
//^ !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//! ARREGLAR EL BOTON DE CERRAR Y CHECRA SI LAS ACCIONES ESTAN BIEN //
const closeModal = (action) => {
    console.log(action);
    switch (action) {
        case "close_fav":
            console.log(action);
            animationOut(favModal);
            setTimeout(() => animationOut(modal), 500);
            favModalStatus = close;
            break;
        case "close_theme":
            console.log(action);
            animationOut(themeModal);
            setTimeout(() => animationOut(modal), 500);
            themeModalStatus = close;
            break;
        case "close_personalized_theme":
            console.log(action);
            animationOut(personalizedThemeModal);
            setTimeout(() => animationOut(modal), 500);
            personalizedThemeModalStatus = close;
            break;
    }
};
closeBtns.forEach((btn) => {
    btn.addEventListener("click", () => closeModal(btn.getAttribute("data-name")));
});
colorPikers.forEach((btn) => {
    btn.addEventListener("input", () => {
        let target = btn.getAttribute("data-name");
        let value = btn.value;
        switch (target) {
            case "bgColor":
                currentBgColor = value;
                break;
            case "firstColor":
                currentFirstColor = value;
                break;
            case "textColor":
                currentTextColor = value;
                break;
            case "bgAccent":
                currentBgAccent = value;
        }
        console.log(value, target);
        setTimeout(() => {
            personalizedProperty(personalizedT, `--${target}`, value);
        }, 250);
    });
});

//! |||||||||||||||||||||//
//!  ADD EVENT LISTENERS //
//! |||||||||||||||||||||//

startBtns.forEach((btn) => {
    btn.addEventListener("click", () => startModalActions(btn.getAttribute("data-name")));
});

langMenuBtns.forEach((btn) => {
    btn.addEventListener("click", () => langMenuModalActions(btn.getAttribute("data-name")));
});
langBtnsModal.forEach((btn) => {
    btn.addEventListener("click", () => {
        console.log(btn.getAttribute("data-name"));
        changeLang(btn.getAttribute("data-name"));
    });
});
langMenuNavBtns.forEach((btn) => {
    btn.addEventListener("click", () => changeLang(btn.getAttribute("data-name")));
});
configBtns.forEach((btn) => {
    btn.addEventListener("click", () => configMenuOptions(btn.getAttribute("data-name")));
});
themeBtns.forEach((btn) => {
    btn.addEventListener("click", () => changeBasicTheme(btn.getAttribute("data-name")));
});
themeActionBtns.forEach((btn) => {
    btn.addEventListener("click", () => themeActionsBtnsActions(btn.getAttribute("data-name")));
});
personalizedActionBtns.forEach((btn) => {
    btn.addEventListener("click", () => personalizedThemeActionsBtnsActiions(btn.getAttribute("data-name")));
});
pikerThemeModalBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        pikerThemeActionBtns(btn.getAttribute("data-name"));
    });
});
acceptBtnAlertModal.addEventListener("click", () => {
    console.log("click activo");
    animationOut(alertModal);
    setTimeout(() => animationIn(pastModal, block, 1000));
});

searchBtn.addEventListener("click", searchFunction);
searchInputNumber.addEventListener("click", () => (searchInputName.value = ""));

searchInputName.addEventListener("click", () => (searchInputNumber.value = ""));
savePokemonBtn.addEventListener("click", savePokemonFav);
btnNext.addEventListener("click", next);
btnPrevious.addEventListener("click", previous);
deletePersonalizedThemeBtn.addEventListener("click", deletePersonalizedTheme);
//^ !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
optionListFavBtns.forEach((btn) => {
    btn.addEventListener("click", () => selectListActions(optionListFav, optionListFavArrow));
});
//! |||||||||||||||||||||||||//
//!  DELETE WHEN YOUR FINISH //
//! |||||||||||||||||||||||||//
//* DELETE
delateDBBtn.addEventListener("click", () => {
    localStorage.removeItem(DB_NAME);
    console.log("Borrando localStorage");
});
