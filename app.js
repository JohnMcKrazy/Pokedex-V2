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
const fragmentPersonalizedThemeBtns = document.createDocumentFragment();
const themeBtnTemplate = document.querySelector("#theme_btn_template").content;
const personalizedBtnsContainer = document.querySelector("#personalized_themes_btns_container");
//^ !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

const themeCardTemplate = document.querySelector("#theme_card_template").content;
const fragmentThemeCards = document.createDocumentFragment();

const themeCardContainer = document.querySelector("#personalized_theme_cards_container");
const cancelEditThemesBtn = document.querySelector("#cancel_edit_themes_btn");
//^ !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
const navConfigBtns = document.querySelectorAll(".config_menu_btn_action");
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
const langMenuModalEditPersonalizedThemes = document.querySelector("#lang_menu_modal_edit_personalized_themes");
const langMenuModalEditPersonalizedTheme = document.querySelector("#lang_menu_modal_edit_personalized_theme");
const langMenuModalfav = document.querySelector("#lang_menu_modal_fav");
//^ !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
const fragmentListVarieties = document.createDocumentFragment();
const selectionListTemplate = document.querySelector("#option_list_template").content;
const optionListVarientTemplate = document.querySelector("#option_list_varients_btn_template").content;
const searchBtnsContainer = document.querySelector("#search_varieties_btns_container");
const savePokemonBtn = document.querySelector("#save_pokemon_btn");
const iconHeart = document.querySelector("#icon_heart");
const imgContainer = document.querySelector("#img_container");

const btnPrevious = document.querySelector(".previous_btn");
const btnNext = document.querySelector(".next_btn");

//^ !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
const fragmentFavCards = document.createDocumentFragment();
//~ !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
const favCardsContainer = document.querySelector("#fav_cards_container");
const nameOptioListFavBtn = document.querySelector("#name_option_list_fav_btn");
const idOptioListFavBtn = document.querySelector("#id_option_list_fav_btn");
const typeOptioListFavBtn = document.querySelector("#type_option_list_fav_btn");

const optionListFav = document.querySelector("#option_list_fav");
const optionListFavArrow = document.querySelector("#arrow_btn_select_list_fav_svg");
const optionListFavFirstBtnText = document.querySelector("#option_list_fav_first_text");
const optionListFavBtns = document.querySelectorAll(".option_list_fav_btn");
//^ !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

//~ !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
const pokeImg = document.querySelector("#poke_img");
const pokeId = document.querySelector("#poke_id");
const pokeName = document.querySelector("#poke_name");
const pokeTypes = document.querySelector("#poke_types");
const pokeBg = document.querySelector(".poke_bg");

//^ !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
const fragmentListDescriptions = document.createDocumentFragment();
const optionListDescriptionsTemplate = document.querySelector("#option_list_descriptions_btn_template").content;
const optionListDescriptions = document.querySelector("#option_list_descriptions");
const optionListDescriptionsBtnsContainer = document.querySelector("#option_list_descriptions_btns_container");

const optionListDescriptionsFirstBtnText = document.querySelector("#option_list_descriptions_first_text");
const optionListDescriptionsArrow = document.querySelector("#arrow_btn_select_list_descriptions_svg");
const optionListDescriptionsSearchBtn = document.querySelector(".option_list_descriptions_btn_search");
//~ !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

const pokeDescriptionName = document.querySelector("#poke_data_info_name_description");
const pokeDescription = document.querySelector("#poke_data_info_description");

//~ !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

//^ !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
const descriptionSubtitle = document.querySelector("#description_subtitle");
const evoSubtitle = document.querySelector("#evo_subtitle");
//^ !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
const fragmentEvoCards = document.createDocumentFragment();
//~ !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
const evoCardTemplate = document.querySelector("#evo_card_template").content;
const evoCardsContainer = document.querySelector("#btns_evo_chain_container");
//^ !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//! !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
const modal = document.querySelector("#modal");
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
const titleAlertModal = document.querySelector("#title_modal_alert");
const textAlertModal = document.querySelector("#text_modal_alert");
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
const pikerPersonalizedThemeModalBtns = document.querySelectorAll(".piker_personalized_theme_modal_btn");
const deletePersonalizedThemeBtn = document.querySelector("#delete_changes_btn");
const nameInputPersonalizedTheme = document.querySelector("#name_input_perzonalized_theme");
const colorPikersPersonalizedTheme = document.querySelectorAll(".color_piker_personalized_theme");
const personalizedActionBtns = document.querySelectorAll(".personalized_action_btn");
//~ !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
const editPersonalizedThemesModal = document.querySelector("#edit_personalized_themes_modal");

const pikerEditPersonalizedThemeModalBtns = document.querySelectorAll(".piker_edit_personalized_theme_modal_btn");
const editPersonalizedThemeModal = document.querySelector("#edit_personalized_theme_modal");
const nameInputEditPersonalizedTheme = document.querySelector("#name_input_edit_personalized_theme");
const bgColorPikerEditPersonalizedTheme = document.querySelector("#bg_color_piker_edit_personalized_theme");
const textColorPikerEditPersonalizedTheme = document.querySelector("#text_color_piker_edit_personalized_theme");
const firstColorPikerEditPersonalizedTheme = document.querySelector("#first_color_piker_edit_personalized_theme");
const bgAccentPikerEditPersonalizedTheme = document.querySelector("#bg_accent_color_piker_edit_personalized_theme");
const colorPikersEditPersonalizedTheme = document.querySelectorAll(".color_piker_edit_personalized_theme");
//^ !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
const favModal = document.querySelector("#fav_modal");
//~ !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
const favCardTemplate = document.querySelector("#fav_card_template").content;
const titlefavModal = document.querySelector("#title_fav_modal");
const sortBtns = document.querySelectorAll(".sort_fav_btn");
const favListFirstBtnText = document.querySelector("#option_list_fav_first_text");

const modalFav = document.querySelector("#modal_fav");
const alertModalFav = document.querySelector("#alert_modal_fav");
const langMenuModalfavAlert = document.querySelector("#lang_menu_modal_fav_alert");
const alertModalFavBtns = document.querySelectorAll(".alert_modal_fav_alert_btn");
const nameAlertModalFav = document.querySelector("#pokemon_name_modal_fav_alert");
const idAlertModalFav = document.querySelector("#pokemon_id_modal_fav_alert");
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

let pastModal = "";
let currentPersonilizedTheme = {};

//^ !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

let configMenuStatus = close;
let themeModalStatus = close;
let alertModalStatus = close;
let startModalStatus = close;
let favModalStatus = close;
let alertModalFavStatus = close;
let personalizedThemeModalStatus = close;
let editPersonalizedThemesModalStatus = close;
let editPersonalizedThemeModalStatus = close;
let langMenuNavStatus = close;
let langMenuModalStartStatus = close;
let langMenuModalThemeStatus = close;
let langMenuModalEditPersonalizedThemesStatus = close;
let langMenuModalEditPersonalizedThemeStatus = close;
let langMenuModalPersonalizedThemeStatus = close;
let langMenuModalfavStatus = close;
let langMenuModalfavAlertStatus = close;
let optionListDescriptionsStatus = close;
let optionListVarientsStatus = close;
let optionListFavStatus = close;
//^ !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
let currentLang = es;
//^ !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
let sortedByName = [];
let sortedById = [];
let sortedByType = [];
let sortedByDate = [];
let currentSortedObject = [];
//^ !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
const pokemonSearch = [];
const pokemonTypesEn = [];
const pokemonTypesEs = [];
const currentPokemonFlavors = [];
let currentPokemon = 1;

let currentDeletingPokemonId = 0;
let currentDeletingPokemonName = "";
let currentEditingTheme = "";
//^ !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
let speciesLink = "";
let evoChainLink = "";
let itemToSave = {
    name: "",
    id: "",
    sprites: {
        default: "",
        art: "",
    },
    date: "",
    types: {
        es: "",
        en: "",
    },
};
//^ !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
const pokeThemes = {};
//^ !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//! ||||||||||||||//
//!  DATA OBJECT ARRAY //
//! ||||||||||||||//
const daysOfTheWeek = [
    {
        es: "Domingo",
        en: "Sunday",
    },
    {
        es: "Lunes",
        en: "Monday",
    },
    {
        es: "Martes",
        en: "Tuesday",
    },
    {
        es: "Miercoles",
        en: "Wednesday",
    },
    {
        es: "Jueves",
        en: "Thursday",
    },
    {
        es: "Viernes",
        en: "Friday",
    },
    {
        es: "Sabado",
        en: "Saturday",
    },
];
const monthsOfTheYear = [
    {
        es: "Enero",
        en: "January",
    },
    {
        es: "Febrero",
        en: "February",
    },
    {
        es: "Marzo",
        en: "March",
    },
    {
        es: "Abril",
        en: "April",
    },
    {
        es: "Mayo",
        en: "May",
    },
    {
        es: "Junio",
        en: "June",
    },
    {
        es: "Julio",
        en: "July",
    },
    {
        es: "Agosto",
        en: "August",
    },
    {
        es: "Septiembre",
        en: "September",
    },
    {
        es: "Octubre",
        en: "October",
    },
    {
        es: "Novienbre",
        en: "November",
    },
    {
        es: "Diciembre",
        en: "December",
    },
];
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

    colorPikersPersonalizedTheme.forEach((btn) => {
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
    colorPikersEditPersonalizedTheme.forEach((btn) => {
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

    if (optionListVarientsStatus === open) {
        closeOptionList("option_list_varients");
    }

    if (optionListDescriptionsStatus === open) {
        closeOptionList("option_list_descriptions");
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
        } else if (currentPokemon >= 10001 && currentPokemon <= 10246) {
            currentPokemon = afterPokemon;
            currentPokemon++;
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

    if (optionListVarientsStatus === open) {
        closeOptionList("option_list_varients");
    }

    if (optionListDescriptionsStatus === open) {
        closeOptionList("option_list_descriptions");
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
        } else if (currentPokemon >= 10001 && currentPokemon <= 10246) {
            currentPokemon = afterPokemon;
            currentPokemon--;
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
        textStartModal.textContent = "Estás entrando a una página fan made, la única intención es entretenimiento, toda la información es almacenada en la memoria del navegador, ninguna información es recolectada o vendida";

        optionListDescriptionsFirstBtnText.textContent = "Opciones";
        descriptionSubtitle.textContent = "Descripción";
        evoSubtitle.textContent = "Cadena De Evolución";
        titlefavModal.textContent = "Favoritos";
        favListFirstBtnText.textContent = "Ordenar";
        nameOptioListFavBtn.textContent = "Nombre";
        typeOptioListFavBtn.textContent = "Tipo";
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
        textStartModal.textContent = "You'r enter in a fan made page, the only intention is entertainment, all stored informatio is in the browser's memory, no information is collected or sold";
        optionListDescriptionsFirstBtnText.textContent = "Options";
        descriptionSubtitle.textContent = "Description";
        evoSubtitle.textContent = "Evolution Chain";
        titlefavModal.textContent = "Favorite";
        favListFirstBtnText.textContent = "Sort";
        nameOptioListFavBtn.textContent = "Name";
        typeOptioListFavBtn.textContent = "Type";
        acceptBtnStartModal.textContent = "Accept";
        deniedBtnStartModal.textContent = "Denied";
    }
    if (favModalStatus === open) {
        deleteChildElements(fragmentFavCards);
        deleteChildElements(favCardsContainer);
        updatePokedex();
        if (optionListFavStatus === open) {
            optionListFavActions(optionListFavStatus);
        }
        currentSortedObject.forEach((item) => {
            createFavCard(item.id, item.name, item.types, item.date, item.sprites);
        });
        setTimeout(() => {
            favCardsContainer.appendChild(fragmentFavCards);
        }, 100);
    }
    if (itsFirstPokemonSearch === false) {
        catchEmAll(currentPokemon);
    }
    document.documentElement.setAttribute("lang", currentLang);
};
//^^ ************************************************************************** *//
const lunchAlert = (alertError) => {
    alertModalStatus = open;
    animationIn(modal, flex, 1000);
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
const createFavCardBtns = () => {
    const favCardBtns = document.querySelectorAll(".fav_card_btn");
    favCardBtns.forEach((btn) => {
        btn.addEventListener("click", () => {
            let btnName = btn.getAttribute("data-btnName");
            let dataName = btn.getAttribute("data-name");
            let dataId = btn.getAttribute("data-id");
            if (btnName === "search_fav") {
                console.log("buscando fav");
                console.log(dataId);
                catchEmAll(dataId);
                animationOut(favModal);
                favModalStatus = close;
                setTimeout(() => animationOut(modal), 250);
            } else if (btnName === "delete_fav") {
                console.log("borrando fav");
                console.log(dataId, dataName);
                currentDeletingPokemonId = dataId;
                currentDeletingPokemonName = dataName;
                nameAlertModalFav.textContent = dataName;
                idAlertModalFav.textContent = dataId;
                animationIn(modalFav, flex, 500);
                setTimeout(() => {
                    animationIn(alertModalFav, block, 500);
                    alertModalFavStatus = open;
                }, 1500);
            }
        });
    });
};
const closeOptionList = (list) => {
    switch (list) {
        case "option_list_fav":
            optionListFavStatus = close;
            optionListFavArrow.style.transform = "rotate(0)";
            optionListFav.style.height = "3rem";
            break;
        case "option_list_varients":
            optionListVarientsStatus = close;
            optionListVarientsArrow.style.transform = "rotate(0)";
            optionListVarients.style.height = "3rem";
            break;
        case "option_list_descriptions":
            optionListDescriptionsStatus = close;
            optionListDescriptionsArrow.style.transform = "rotate(0)";
            optionListDescriptions.style.height = "3rem";
            break;
    }
};
const optionListVarientsActions = (status) => {
    if (status === close) {
        optionListVarientsStatus = open;
        optionListVarientsArrow.style.transform = "rotate(180deg)";
        optionListVarients.style.height = "fit-content";
    } else if (status === open) {
        closeOptionList("option_list_varients");
    }
};
const optionListFavActions = (status) => {
    if (status === close) {
        optionListFavStatus = open;
        optionListFavArrow.style.transform = "rotate(180deg)";
        optionListFav.style.height = "fit-content";
    } else if (status === open) {
        closeOptionList("option_list_fav");
    }
};
const optionListFavOptionActions = (action) => {
    let sortedByName = [];
    let sortedById = [];
    if (langMenuModalfavStatus === open) {
        langMenuModalActions("lang_fav");
    }
    if (action === "open-close") {
        console.log(action);
        optionListFavActions(optionListFavStatus);
    } else {
        deleteChildElements(fragmentFavCards);
        deleteChildElements(favCardsContainer);
        updatePokedex();
        optionListFavActions(optionListFavStatus);
        switch (action) {
            case "option_fav_name":
                console.log(action);
                sortedByName = storagePokedex[storageSaved].sort((a, b) => {
                    if (a.name < b.name) {
                        return -1;
                    }
                });
                currentSortedObject = sortedByName;
                console.log(sortedByName);
                break;
            case "option_fav_id":
                console.log(action);
                sortedById = storagePokedex[storageSaved].sort((a, b) => {
                    if (a.id < b.id) {
                        return -1;
                    }
                });
                currentSortedObject = sortedById;
                console.log(sortedById);
                break;
            case "option_fav_type":
                console.log(action);
                sortedByType = storagePokedex[storageSaved].sort((a, b) => {
                    if (a.types.es[0] < b.types.es[0]) {
                        return -1;
                    }
                });
                currentSortedObject = sortedByType;
                console.log(sortedByType);
                break;
            case "option_fav_date":
                console.log(action);
                currentSortedObject = storagePokedex[storageSaved];
                break;
        }
        currentSortedObject.forEach((item) => {
            createFavCard(item.id, item.name, item.types, item.date, item.sprites);
        });

        setTimeout(() => {
            favCardsContainer.appendChild(fragmentFavCards);
            setTimeout(() => {
                createFavCardBtns();
            }, 100);
        }, 100);
    }
};
const createEvoCard = async (id, name, types, img) => {
    const cardClone = evoCardTemplate.cloneNode(true);
    const cardImg = cardClone.querySelector(".card_img");
    const cardId = cardClone.querySelector(".card_id");
    const cardName = cardClone.querySelector(".card_name");
    const cardType = cardClone.querySelector(".card_type");
    const cardBtn = cardClone.querySelector(".card_btn");
    let currentEvoCardTypes = {};
    if (currentLang === es) {
        currentEvoCardTypes = types.es;
    } else if (currentLang === en) {
        currentEvoCardTypes = types.en;
    }
    setTimeout(() => {
        /*  console.log(typeof currentEvoCardTypes); */
        if (typeof currentEvoCardTypes === "object") {
            cardType.textContent = currentEvoCardTypes.join("/");
        } else if (typeof currentEvoCardTypes === "string") {
            cardType.textContent = currentEvoCardTypes;
        }
        cardBtn.setAttribute("data-name", name);
        cardImg.setAttribute("src", img);
        cardImg.setAttribute("alt", name);
        /*     console.log(name); */
        cardName.textContent = properCase(name);
        cardId.textContent = id;
        fragmentEvoCards.appendChild(cardClone);
    }, 100);
};
const createFavCard = async (id, name, types, date, img) => {
    const cardClone = favCardTemplate.cloneNode(true);
    const cardImg = cardClone.querySelector(".fav_card_img");
    const cardId = cardClone.querySelector(".fav_card_id");
    const cardName = cardClone.querySelector(".fav_card_name");
    const cardType = cardClone.querySelector(".fav_card_type");
    const cardDate = cardClone.querySelector(".fav_card_date");
    const cardHour = cardClone.querySelector(".fav_card_hour");
    const searchCardBtn = cardClone.querySelector(".search_fav_card_btn");
    const deleteCardBtn = cardClone.querySelector(".delete_fav_card_btn");

    let currentFavCardTypes = {};
    if (currentLang === es) {
        currentFavCardTypes = types.es;
    } else if (currentLang === en) {
        currentFavCardTypes = types.en;
    }
    setTimeout(() => {
        console.log(typeof currentFavCardTypes);
        if (typeof currentFavCardTypes === "object") {
            cardType.textContent = currentFavCardTypes.join("/");
        } else if (typeof currentFavCardTypes === "string") {
            cardType.textContent = currentFavCardTypes;
        }
        if (img.default !== null) {
            cardImg.setAttribute("src", img.default);
        } else {
            cardImg.setAttribute("src", img.art);
        }

        cardImg.setAttribute("alt", name);
        searchCardBtn.setAttribute("data-id", id);
        deleteCardBtn.setAttribute("data-id", id);
        deleteCardBtn.setAttribute("data-name", name);
        /*     console.log(name); */
        cardName.textContent = properCase(name);
        cardId.textContent = id;
        cardDate.textContent = date["short_date_number"];
        cardHour.textContent = date["time"];
        fragmentFavCards.appendChild(cardClone);
    }, 100);
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
            const evoTypeTypes = {
                es: "",
                en: "",
            };
            const evoTypeTypesEs = [];
            const evoTypeTypesEn = [];
            let evoTypesCount = 0;
            if (fetchEvoType.types.length > 1) {
                fetchEvoType.types.forEach(async (type) => {
                    const typeData = await fetchFunc(type.type.url);
                    typeData.names.forEach(async (lang) => {
                        const langName = lang.language.name;
                        switch (langName) {
                            case es:
                                evoTypeTypesEs.push(properCase(lang.name));
                                break;
                            case en:
                                evoTypeTypesEn.push(properCase(lang.name));
                                break;
                        }
                    });
                });
            } else if (fetchEvoType.types.length === 1) {
                const typeData = await fetchFunc(fetchEvoType.types[0].type.url);
                typeData.names.forEach(async (lang) => {
                    const langName = lang.language.name;
                    switch (langName) {
                        case es:
                            evoTypeTypesEs.push(properCase(lang.name));
                            break;
                        case en:
                            evoTypeTypesEn.push(properCase(lang.name));
                            break;
                    }
                });
            }
            setTimeout(() => {
                evoTypeTypes.es = evoTypeTypesEs;
                evoTypeTypes.en = evoTypeTypesEn;
                createEvoCard(evoTypeId, evoTypeName, evoTypeTypes, evoTypeImg);
                setTimeout(() => {
                    evoCardsContainer.appendChild(fragmentEvoCards);
                }, 100);
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
            }, 100);
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
    const evoFromPokeTypesEs = [];
    const evoFromPokeTypesEn = [];
    const evoFromPokeTypes = {
        es: "",
        en: "",
    };
    if (fetchEvolvesFromData.types.length > 1) {
        fetchEvolvesFromData.types.forEach(async (type) => {
            const typeData = await fetchFunc(type.type.url);
            typeData.names.forEach(async (lang) => {
                const langName = lang.language.name;
                switch (langName) {
                    case es:
                        evoFromPokeTypesEs.push(properCase(lang.name));
                        break;
                    case en:
                        evoFromPokeTypesEn.push(properCase(lang.name));
                        break;
                }
            });
        });
    } else if (fetchEvolvesFromData.types.length === 1) {
        const typeData = await fetchFunc(fetchEvolvesFromData.types[0].type.url);
        typeData.names.forEach(async (lang) => {
            const langName = lang.language.name;
            switch (langName) {
                case es:
                    evoFromPokeTypesEs.push(properCase(lang.name));
                    break;
                case en:
                    evoFromPokeTypesEn.push(properCase(lang.name));
                    break;
            }
        });
    }
    const evoFromPokeId = fetchEvolvesFromData.id;
    const evoFromPokeName = fetchEvolvesFromData.name;
    const evoFromPokeImg = fetchEvolvesFromData.sprites.front_default;
    setTimeout(() => {
        if (evoFromPokeTypes.length > 1) {
            evoFromPokeTypes.es = evoFromPokeTypesEs.join("/");
            evoFromPokeTypes.en = evoFromPokeTypesEn.join("/");
        } else {
            evoFromPokeTypes.es = evoFromPokeTypesEs[0];
            evoFromPokeTypes.en = evoFromPokeTypesEn[0];
        }
        createEvoCard(evoFromPokeId, evoFromPokeName, evoFromPokeTypes, evoFromPokeImg);
        const firstEvoData = dataEvoChain.chain.evolves_to;
        const hasEvoTypes = firstEvoData.length > 0;

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
                btn.addEventListener("click", async () => {
                    catchEmAll(btn.getAttribute("data-name"));
                });
            });
        }, 500);
    }, 100);
};
const optionListDescriptionsActions = (status) => {
    if (status === close) {
        optionListDescriptionsStatus = open;
        optionListDescriptionsArrow.style.transform = "rotate(180deg)";
        optionListDescriptions.style.height = "fit-content";
    } else if (status === open) {
        closeOptionList("option_list_descriptions");
    }
};
let afterPokemon = "";
const createPokeData = async (data) => {
    if (data) {
        if (optionListDescriptionsStatus === open) {
            closeOptionList("option_list_descriptions");
        }
        deleteArrElements(pokemonTypesEn);
        deleteArrElements(pokemonTypesEs);
        deleteChildElements(searchBtnsContainer);
        deleteChildElements(fragmentListVarieties);
        deleteArrElements(currentPokemonFlavors);
        deleteChildElements(optionListDescriptionsBtnsContainer);
        deleteArrElements(fragmentListDescriptions);
        //! ARREGLAR BOTONES DE FLAVOR VERSIONES, QUE SE BORREN  */

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
                const optionListTemplateClone = optionListVarientTemplate.cloneNode(true);
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
                        optionListVarientsActions(optionListVarientsStatus);
                    } else if (actionName === "item") {
                        optionListVarientsActions(optionListVarientsStatus);
                        afterPokemon = data.id;
                        catchEmAll(btn.id);
                    }
                });
            });
        } else if (varieties.length === 1) {
            /* console.log("este pokemon no tiene variantes"); */
        }
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
        //! CREACION DE FLAVORS OBJECT EN IDIOMAS  /
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
        /*  console.log("flavors en ingles", pokemonFlavorsEn);
        console.log("flavors en español", pokemonFlavorsEs); */
        let flavorBtnsData = [];
        if (currentLang === es) {
            flavorBtnsData = pokemonFlavorsEs;
        } else if (currentLang == en) {
            flavorBtnsData = pokemonFlavorsEn;
        }
        //! CREACION DE FLAVORS OBJECT EN IDIOMAS -- END  /
        //! AGREGAR LOS BOTONES DE TEXTOS DESCRIPTIVOS POR EDICION -- START */
        flavorBtnsData.forEach((data) => {
            /* console.log(data.flavor_text); */
            /* console.log(data.version.name); */
            const btnClone = optionListDescriptionsTemplate.cloneNode(true);
            const btnName = btnClone.querySelector(".option_list_btn");
            btnName.textContent = properCase(data.version.name);
            btnName.setAttribute("data-version", data.version.name);
            fragmentListDescriptions.appendChild(btnClone);
        });
        optionListDescriptionsBtnsContainer.appendChild(fragmentListDescriptions);
        setTimeout(() => {
            const descriptionsBtns = document.querySelectorAll(".option_list_descriptions_btn");
            descriptionsBtns.forEach((btn) => {
                /* console.log(btn); */
                btn.addEventListener("click", () => {
                    const changeFlavorTo = flavorBtnsData.filter((item) => {
                        if (item.version.name === btn.getAttribute("data-version")) {
                            return item;
                        }
                    });
                    console.log(flavorBtnsData);
                    console.log(changeFlavorTo);
                    pokeDescriptionName.textContent = properCase(changeFlavorTo[0].version.name);
                    pokeDescription.innerHTML = changeFlavorTo[0].flavor_text.split("\n");
                    optionListDescriptionsActions(optionListDescriptionsStatus);
                });
            });
        }, 100);
        /* console.log(flavorBtnsData); */
        pokeDescriptionName.textContent = properCase(flavorBtnsData[0].version.name);
        pokeDescription.innerHTML = flavorBtnsData[0].flavor_text.split("\n");

        //! AGREGAR LOS BOTONES DE TEXTOS DESCRIPTIVOS POR EDICION -- END */
        //! ******************************************************************************************************************* //
        //! PRUEBA DE DATOS A IMPRIMIR  /
        const artworkImg = data.sprites.other["official-artwork"]["front_default"];
        const dataName = properCase(data.name);
        const dataId = data.id;
        /* console.log(dataId); */
        currentPokemon = dataId;
        updatePokedex();
        //! GENERACION DE DATA HORA Y FECHA --START //
        const dataDate = new Date();
        const date = dataDate.getDate();
        const month = dataDate.getUTCMonth();
        const day = dataDate.getUTCDay();
        const year = dataDate.getUTCFullYear();
        const minutes = dataDate.getMinutes();
        const hours = dataDate.getHours();
        let currentDayOfTheWeek = {};
        let currentMonthOfTheYear = {};

        const currentCompleteDate = {
            year: "",
            month_text: {
                es: "",
                en: "",
            },
            month_number: "",
            date: "",
            time: "",
            short_date_text: {
                es: "",
                en: "",
            },
            short_date_number: "",
            complete_date_es: "",
            complete_date_en: "",
        };
        //! GENERACION DE DATA HORA Y FECHA --END //

        //! OBJETO Y FUNCION PARA SACAR LOS DIAS DE LA SEMANA COMO TEXTO -- START //
        for (let i = 0; i <= daysOfTheWeek.length; i++) {
            if (i === day) {
                currentDayOfTheWeek = daysOfTheWeek[i];
                /*  console.log(currentDayOfTheWeek);
                console.log(currentDayOfTheWeek.es);
                console.log(currentDayOfTheWeek.en); */
            }
        }
        for (let i = 0; i <= monthsOfTheYear.length; i++) {
            if (i === month) {
                currentMonthOfTheYear = monthsOfTheYear[i];
                /* console.log(currentMonthOfTheYear);
                console.log(currentMonthOfTheYear[es]);
                console.log(currentMonthOfTheYear[en]); */
            }
        }
        currentCompleteDate["year"] = year;
        currentCompleteDate["month_text"][es] = currentMonthOfTheYear[es];
        currentCompleteDate["month_text"][en] = currentMonthOfTheYear[en];
        currentCompleteDate["month_number"] = month + 1;
        currentCompleteDate["date"] = date;
        currentCompleteDate["time"] = `${hours}:${minutes}`;
        currentCompleteDate["short_date_text"][es] = `${date}-${currentMonthOfTheYear[es]}-${year}`;
        currentCompleteDate["short_date_text"][en] = `${date}-${currentMonthOfTheYear[en]}-${year}`;
        if (date < 10) {
            date = `0${date}`;
        }
        if (month + 1 < 10) {
            currentCompleteDate["short_date_number"] = `${date}-0${month + 1}-${year}`;
        } else {
            currentCompleteDate["short_date_number"] = `${date}-${month + 1}-${year}`;
        }
        currentCompleteDate["complete_date_es"] = `${currentDayOfTheWeek[es]} ${date} ${currentMonthOfTheYear[es]} ${year}, ${hours}:${minutes}`;
        currentCompleteDate["complete_date_en"] = `${currentDayOfTheWeek[en]} ${date} ${currentMonthOfTheYear[en]} ${year}, ${hours}:${minutes}`;
        //! OBJETO Y FUNCION PARA SACAR LOS DIAS DE LA SEMANA COMO TEXTO -- END //
        //! CREACION DE DATA TIPO/S DE POKEMON //
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
        //! CREACION DE DATA TIPO/S DE POKEMON //
        const newBackground = storagePokedex[storageBackgrounds][data.types[0].type.name].url;
        pokeBg.style.background = `url(${newBackground})`;
        pokeImg.setAttribute("src", artworkImg);
        pokeImg.setAttribute("alt", dataName);
        pokeName.textContent = dataName;
        pokeId.textContent = dataId;
        //! CREACION DE ITEM PARA OBJETO POR SALVAR //
        setTimeout(() => {
            itemToSave = {
                name: dataName,
                id: dataId,
                sprites: {
                    default: data.sprites.front_default,
                    art: artworkImg,
                },
                date: currentCompleteDate,
                types: {
                    es: pokemonTypesEs,
                    en: pokemonTypesEn,
                },
            };
            console.log(itemToSave);
        }, 250);
        //! CREACION DE ITEM PARA OBJETO POR SALVAR //
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
        animationIn(modal, flex, 1000);
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
        case "lang_edit_personalized_themes":
            if (langMenuModalEditPersonalizedThemesStatus === close) {
                langMenuModalEditPersonalizedThemesStatus = open;
                openMenu(langMenuModalEditPersonalizedThemes);
            } else if (langMenuModalEditPersonalizedThemesStatus === open) {
                langMenuModalEditPersonalizedThemesStatus = close;
                closeMenu(langMenuModalEditPersonalizedThemes);
            }
            break;
        case "lang_edit_personalized_theme":
            if (langMenuModalEditPersonalizedThemeStatus === close) {
                langMenuModalEditPersonalizedThemeStatus = open;
                openMenu(langMenuModalEditPersonalizedTheme);
            } else if (langMenuModalEditPersonalizedThemeStatus === open) {
                langMenuModalEditPersonalizedThemeStatus = close;
                closeMenu(langMenuModalEditPersonalizedTheme);
            }
            break;
        case "lang_fav":
            if (langMenuModalfavStatus === close) {
                langMenuModalfavStatus = open;
                openMenu(langMenuModalfav);
                if (optionListFavStatus === open) {
                    optionListFavActions(optionListFavStatus);
                }
            } else if (langMenuModalfavStatus === open) {
                langMenuModalfavStatus = close;
                closeMenu(langMenuModalfav);
            }
            break;
        case "lang_fav_alert":
            if (langMenuModalfavAlertStatus === close) {
                langMenuModalfavAlertStatus = open;
                openMenu(langMenuModalfavAlert);
            } else if (langMenuModalfavAlertStatus === open) {
                langMenuModalfavAlertStatus = close;
                closeMenu(langMenuModalfavAlert);
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
        animationOut(startModal, 500);
        if (langMenuModalStartStatus === open) {
            langMenuModalStartStatus = close;
            closeMenu(langMenuModalStart);
        }
        setTimeout(() => {
            animationOut(modal, 1000);
            savePokedex();
        }, 1000);
    } else if (action === denied) {
        console.log(denied);
        window.location.href = "http://www.google.com";
    }
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
        if (langMenuNavStatus === open) {
            langMenuNavStatus = close;
            console.log("closing config menu lang menu");
            closeMenu(langMenuNav);
        }
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
    const savedAnimation = () => {
        console.log("animacion de corazon");
        iconHeart.style.translate = "50% -110%";
        iconHeart.style.scale = "1.5";
        iconHeart.style.opacity = "1";
        setTimeout(() => {
            iconHeart.style.translate = "50% 50%";
            iconHeart.style.opacity = "0";
            iconHeart.style.scale = "1";
        }, 1000);
    };
    console.log("preparando salvar pokemon function");
    /* console.log(itemToSave); */
    updatePokedex();
    if (itemToSave.name !== "") {
        if (storagePokedex[storageSaved].length === 0) {
            savedAnimation();
            storagePokedex[storageSaved].push(itemToSave);
            console.log(storagePokedex);
            console.log("Salvando por primera vez pokemon en favoritos");
            savePokedex();
        } else if (storagePokedex[storageSaved].length >= 1) {
            /* console.log(storagePokedex[storageSaved]); */
            const pokemonExistInList = storagePokedex[storageSaved].every((item) => item.id !== itemToSave.id);
            console.log(pokemonExistInList);
            switch (pokemonExistInList) {
                case false:
                    break;
                case true:
                    savedAnimation();
                    storagePokedex[storageSaved].push(itemToSave);
                    if (currentSortedObject.length > 1) {
                        currentSortedObject = storagePokedex[storageSaved];
                    }

                    console.log("Salvando pokemon, actualizando base de favoritos");
                    savePokedex();
                    break;
            }
        }
    }
};
//! BOTONES DE ACENDENTE Y DECENDENTE SORT LIST - HACER FUNCION - START  */
const favCardBtnsActions = (btn) => {
    console.log(btn);
    console.log(btn.getAttribute("data-name"));
    console.log(btn.getAttribute("data-id"));
};
//! BOTONES DE ACENDENTE Y DECENDENTE SORT LIST - HACER FUNCION - OVER  */

const createCurrentSortPokemonFav = (list) => {
    list.forEach((item) => {
        createFavCard(item.id, item.name, item.types, item.date, item.sprites);
    });
    setTimeout(() => {
        favCardsContainer.appendChild(fragmentFavCards);
        setTimeout(() => {
            createFavCardBtns();
        }, 100);
    }, 100);
};
const favMenuActions = () => {
    deleteChildElements(fragmentFavCards);
    deleteChildElements(favCardsContainer);
    if (favModalStatus === close) {
        favModalStatus = open;
        animationIn(modal, flex, 1000);
        setTimeout(() => animationIn(favModal, block, 500), 1500);
        updatePokedex();
        if (storagePokedex[storageSaved].length >= 1) {
            console.log("existen salvados en storage");
            switch (currentSortedObject.length >= 1) {
                case true:
                    console.log("existe current sorted object");
                    createCurrentSortPokemonFav(currentSortedObject);
                    break;
                case false:
                    console.log("no existe current sorted object, creando nueva lista");
                    currentSortedObject = storagePokedex[storageSaved];
                    createCurrentSortPokemonFav(currentSortedObject);
                    break;
                default:
                    console.log("este mensaje no deberia de salir, error en la creacion de currentSortedObject");
                    break;
            }
        } else {
            console.log("no existen salvados en storage");
        }
    } else if (favModalStatus === open) {
        favModalStatus = close;
        animationOut(favModal, 500);
        setTimeout(() => {
            animationOut(modal, 1000);
        }, 1500);
    }
};
const themeMenuActions = () => {
    if (themeModalStatus === close) {
        oldTheme = BODY.className;
        themeModalStatus = open;
        animationIn(modal, flex, 500);
        setTimeout(() => animationIn(themeModal, block, 500), 1500);
    } else if (themeModalStatus === open) {
        themeModalStatus = close;
        animationOut(themeModal, 500);
        setTimeout(() => {
            animationOut(modal, 1000);
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
    deleteChildElements(fragmentPersonalizedThemeBtns);
    deleteChildElements(personalizedBtnsContainer);
    storagePokedex[storageThemes].forEach((theme) => {
        let cloneTemplate = themeBtnTemplate.cloneNode(true);
        let btn = cloneTemplate.querySelector(".personalized_theme_btn");
        btn.textContent = theme.name;
        btn.setAttribute("data-name", theme.name);
        fragmentPersonalizedThemeBtns.appendChild(cloneTemplate);
    });
    personalizedBtnsContainer.appendChild(fragmentPersonalizedThemeBtns);
    const personalizedThemeBtns = document.querySelectorAll(".personalized_theme_btn");
    personalizedThemeBtns.forEach((btn) => btn.addEventListener("click", () => changePersonalizedTheme(btn.getAttribute("data-name"))));
};
const checkStorageAnswer = () => {
    console.log(window.navigator.language);
    if (window.navigator.language === "es" || window.navigator.language === "es-ES") {
        console.log("navegador en idioma español");
    } else {
        console.log("navegador en idioma otro idioma no español");
        changeLang(en);
    }
    storageContent = JSON.parse(localStorage.getItem(DB_NAME));
    if (!storageContent) {
        savePokedex();
        changeBasicTheme();
        console.log("local storage item is created");
        animationIn(modal, flex, 500);
        setTimeout(() => animationIn(startModal, block, 500), 1500);
    } else if (storageContent && storageContent[storageAlert] === open) {
        updatePokedex();
        storagePokedex[storageView] = storageContent[storageView] + 1;
        savePokedex();
        console.log(`local storage item answer= ${storagePokedex[storageAlert]}, page views= ${storagePokedex[storageView]}`);

        animationIn(modal, flex, 500);
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
const themeCardBtnActions = () => {
    const actionBtns = document.querySelectorAll(".personalized_theme_card_action");
    actionBtns.forEach((btn) => {
        btn.addEventListener("click", () => {
            console.log(btn.getAttribute("data-name"));
            if (btn.getAttribute("data-name") === "edit_theme") {
                console.log("editar theme");
                animationOut(editPersonalizedThemesModal);
                editPersonalizedThemesModalStatus = close;
                currentEditingTheme = btn.getAttribute("data-id");
                storagePokedex[storageThemes].forEach((item) => {
                    if (item.name === currentEditingTheme) {
                        console.log(item);
                        nameInputEditPersonalizedTheme.value = item.name;
                        bgColorPikerEditPersonalizedTheme.value = item.bgColor;
                        textColorPikerEditPersonalizedTheme.value = item.textColor;
                        firstColorPikerEditPersonalizedTheme.value = item.firstColor;
                        bgAccentPikerEditPersonalizedTheme.value = item.bgAccent;
                    }
                });
                setTimeout(() => {
                    animationIn(editPersonalizedThemeModal, block);
                    editPersonalizedThemeModalStatus = open;
                }, 500);
            } else if (btn.getAttribute("data-name") === "delete_theme") {
                console.log("eliminar theme");
            }
        });
    });
};
const createThemeCard = (data) => {
    console.log(data);
    let cloneCard = themeCardTemplate.cloneNode(true);
    let nameCard = cloneCard.querySelector(".personalized_theme_card_name");
    let backgroundColor = cloneCard.querySelector(".background_color_data");
    let textColor = cloneCard.querySelector(".text_color_data");
    let accentColor = cloneCard.querySelector(".accent_color_data");
    let menuColor = cloneCard.querySelector(".menu_color_data");
    let editBtn = cloneCard.querySelector(".edit_personalized_theme_btn");
    let deleteBtn = cloneCard.querySelector(".delete_personalized_theme_btn");

    editBtn.setAttribute("data-id", data.name);
    deleteBtn.setAttribute("data-id", data.name);
    nameCard.textContent = data.name;
    backgroundColor.style.background = data.bgColor;

    textColor.style.background = data.textColor;

    accentColor.style.background = data.firstColor;

    menuColor.style.background = data.bgAccent;
    fragmentThemeCards.appendChild(cloneCard);
};
const editPersonalizedThemeActions = (tm) => {};
const personalizedThemeActionsBtnsActions = (tm) => {
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
    } else if (tm === "edit_themes") {
        oldTheme = BODY.className;
        BODY.className = personalizedT;
        console.log("checando edit");
        updatePokedex();
        const currentThemes = storagePokedex.page_themes;
        currentThemes.forEach((theme) => {
            createThemeCard(theme);
        });
        animationOut(themeModal);
        themeModalStatus = close;
        setTimeout(() => {
            themeCardContainer.appendChild(fragmentThemeCards);
            animationIn(editPersonalizedThemesModal, block);
            editPersonalizedThemesModalStatus = open;
            setTimeout(() => themeCardBtnActions(), 500);
        }, 1000);
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
        animationOut(themeModal);
        setTimeout(() => {
            animationOut(modal);
        }, 1000);
    }
};
//! ********************************************************************** */
//! YA SE CAMBIA EL ITEM PERO HAY UN BUG DE EDICION DE COLORES, CHECAR CON CALMA  */
const editPikerThemeActions = (action) => {
    console.log(action);
    if (action === cancel) {
        console.log("Tema personalizado cancelado");
        deletePersonalizedTheme();
        BODY.className = oldTheme;
        animationOut(editPersonalizedThemeModal);
        editPersonalizedThemeModalStatus = close;
        setTimeout(() => {
            animationIn(editPersonalizedThemesModal, block);
            editPersonalizedThemesModalStatus = open;
        }, 1000);
    } else if (action === save) {
        console.log("Tema personalizado salvado");
        currentTheme = personalizedT;
        //¿ ****************************************************  */
        if (nameInputEditPersonalizedTheme.value !== "") {
            deleteChildElements(themeCardContainer);
            deleteArrElements(fragmentThemeCards);
            console.log(nameInputEditPersonalizedTheme.value);

            storagePokedex[storageThemes].forEach((item) => {
                if (item.name === currentEditingTheme) {
                    console.log(item);
                    item.name = properCase(nameInputEditPersonalizedTheme.value);
                    item.bgColor = currentBgColor;
                    item.firstColor = currentFirstColor;
                    item.textColor = currentTextColor;
                    item.bgAccent = currentBgAccent;

                    console.log(item);
                }
            });
            savePokedex();

            const currentThemes = storagePokedex[storageThemes];
            currentThemes.forEach((theme) => {
                createThemeCard(theme);
            });
            createPersonalizedBtns();
            animationOut(editPersonalizedThemeModal);
            editPersonalizedThemeModalStatus = close;
            deletePersonalizedTheme();
            setTimeout(() => {
                themeCardContainer.appendChild(fragmentThemeCards);
                animationIn(editPersonalizedThemesModal, block);
                editPersonalizedThemesModalStatus = open;
                setTimeout(() => themeCardBtnActions(), 500);
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

        //¿ **************************************************** */
    }
};
//! ********************************************************************** */
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
        if (nameInputPersonalizedTheme.value !== "") {
            console.log(nameInputPersonalizedTheme.value);
            const newItem = {
                name: nameInputPersonalizedTheme.value,
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
            deletePersonalizedTheme();
            BODY.className = oldTheme;
            animationOut(personalizedThemeModal);
            setTimeout(() => animationOut(modal), 500);
            personalizedThemeModalStatus = close;
            themeModalStatus = close;
            break;
        case "close_edit_personalized_themes":
            console.log(action);
            animationOut(editPersonalizedThemesModal);
            setTimeout(() => animationOut(modal), 500);
            editPersonalizedThemesModalStatus = close;
            themeModalStatus = close;
            break;
    }
};
const alertModalFavActions = (option) => {
    switch (option) {
        case "accept_modal_fav":
            deleteChildElements(fragmentFavCards);
            deleteChildElements(favCardsContainer);
            console.log(currentDeletingPokemonId);
            const newFavPokemons = [];

            console.log(currentSortedObject);
            currentSortedObject.forEach((item) => {
                if (item.id !== parseFloat(currentDeletingPokemonId)) {
                    newFavPokemons.push(item);
                }
            });

            setTimeout(() => {
                console.log(newFavPokemons);
                storagePokedex[storageSaved] = newFavPokemons;
                currentSortedObject = storagePokedex[storageSaved];
                savePokedex();
                animationOut(alertModalFav);
                alertModalFavStatus = close;

                createCurrentSortPokemonFav(currentSortedObject);
                setTimeout(() => {
                    animationOut(modalFav);
                }, 1000);
            }, 500);
            console.log(option);
            break;
        case "cancel_modal_fav":
            console.log(option);
            animationOut(alertModalFav);
            alertModalFavStatus = close;
            setTimeout(() => {
                animationOut(modalFav);
            });
            break;
    }
};
//! ******************************************************************************************************** //
//! ||||||||||||||||//
//!  FOR EACH LOOPS //
//! ||||||||||||||||//

closeBtns.forEach((btn) => {
    btn.addEventListener("click", () => closeModal(btn.getAttribute("data-name")));
});
colorPikersPersonalizedTheme.forEach((btn) => {
    btn.addEventListener("input", () => {
        let target = btn.getAttribute("data-name");
        let value = btn.value;
        console.log(target);
        switch (target) {
            case "bgColor":
                currentBgColor = value;
                break;
            case "textColor":
                currentTextColor = value;
                break;
            case "bgAccent":
                currentBgAccent = value;
                break;
            case "firstColor":
                currentFirstColor = value;
                break;
        }
        console.log(value, target);
        setTimeout(() => {
            personalizedProperty(personalizedT, `--${target}`, value);
        }, 250);
    });
});
//!  PRUEBA DE EDICIION DE TEMAS -- START */
colorPikersEditPersonalizedTheme.forEach((btn) => {
    btn.addEventListener("input", () => {
        let target = btn.getAttribute("data-name");
        let value = btn.value;
        console.log(target);
        switch (target) {
            case "bgColor":
                currentBgColor = value;
                break;
            case "textColor":
                currentTextColor = value;
                break;
            case "bgAccent":
                currentBgAccent = value;
                break;
            case "firstColor":
                currentFirstColor = value;
                break;
        }
        console.log(value, target);
        setTimeout(() => {
            personalizedProperty(personalizedT, `--${target}`, value);
        }, 250);
    });
});
//!  PRUEBA DE EDICIION DE TEMAS -- OVER */
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
navConfigBtns.forEach((btn) => {
    btn.addEventListener("click", () => configMenuOptions(btn.getAttribute("data-name")));
});
themeBtns.forEach((btn) => {
    btn.addEventListener("click", () => changeBasicTheme(btn.getAttribute("data-name")));
});
themeActionBtns.forEach((btn) => {
    btn.addEventListener("click", () => themeActionsBtnsActions(btn.getAttribute("data-name")));
});
personalizedActionBtns.forEach((btn) => {
    btn.addEventListener("click", () => personalizedThemeActionsBtnsActions(btn.getAttribute("data-name")));
});
alertModalFavBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        alertModalFavActions(btn.getAttribute("data-name"));
    });
});
pikerPersonalizedThemeModalBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        pikerThemeActionBtns(btn.getAttribute("data-name"));
    });
});
pikerEditPersonalizedThemeModalBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        editPikerThemeActions(btn.getAttribute("data-name"));
    });
});
optionListFavBtns.forEach((btn) => {
    btn.addEventListener("click", () => optionListFavOptionActions(btn.getAttribute("data-name")));
});
//^ ||||||||||||||||||||||||||||||||||||||||||||||||||||||//
//^ SOLUCIONAR LOS ACOMODOS EN LAS TARJETAS DE FAVORITOS  //
//^ ||||||||||||||||||||||||||||||||||||||||||||||||||||||//
sortBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        if (optionListFavStatus === open) {
            optionListFavStatus = close;
            optionListFavArrow.style.transform = "rotate(0)";
            optionListFav.style.height = "3rem";
        }
        if (btn.getAttribute("data-name") === "sort_decendent") {
            console.log("ordenar por decendente");
        } else if (btn.getAttribute("data-name") === "sort_acendent") {
            console.log("ordenar por acendente");
        } else if (btn.getAttribute("data-name") === "sort_time") {
            console.log("ordenar por tiempo");
        }
    });
});
//! |||||||||||||||||||||//
//!  ADD EVENT LISTENERS //
//! |||||||||||||||||||||//
acceptBtnAlertModal.addEventListener("click", () => {
    console.log("click activo");
    animationOut(alertModal);
    setTimeout(() => animationIn(pastModal, block, 1000));
});
cancelEditThemesBtn.addEventListener("click", () => {
    animationOut(editPersonalizedThemesModal, 500);
    editPersonalizedThemesModalStatus = close;
    setTimeout(() => {
        animationIn(themeModal, block, 1000);
        themeModalStatus = open;
    }, 1500);
});
searchBtn.addEventListener("click", searchFunction);
searchInputNumber.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        searchFunction();
    }
});
searchInputName.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        searchFunction();
    }
});
searchInputNumber.addEventListener("click", () => (searchInputName.value = ""));
searchInputName.addEventListener("click", () => (searchInputNumber.value = ""));
savePokemonBtn.addEventListener("click", savePokemonFav);
btnNext.addEventListener("click", next);
btnPrevious.addEventListener("click", previous);
optionListDescriptionsSearchBtn.addEventListener("click", () => optionListDescriptionsActions(optionListDescriptionsStatus));
deletePersonalizedThemeBtn.addEventListener("click", deletePersonalizedTheme);
//^ !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//! |||||||||||||||||||||||||//
//!  DELETE WHEN YOUR FINISH //
//! |||||||||||||||||||||||||//
//* DELETE
delateDBBtn.addEventListener("click", () => {
    localStorage.removeItem(DB_NAME);
    console.log("Borrando localStorage");
});
