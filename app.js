const $d = document;
const selector = (tag) => $d.querySelector(`${tag}`);
const selectorAll = (tag) => $d.querySelectorAll(`${tag}`);

const titleEditPersonalizedThemesModal = selector("#title_edit_personalized_themes_modal");
const pokeApi = (id) => {
    return `https://pokeapi.co/api/v2/pokemon/${id}`;
};
//! ||||||||||||//
//!  PAGE ITEMS //
//! ||||||||||||//
const delateDBBtn = selector("#delate_DB_Btn");
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
const BODY = selector("body");
//~ !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
const closeBtns = selectorAll(".close_modal_btn");
//~ !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
const basicDataBtn = selector("#basic_data_btn");
const evoChainBtn = selector("#evo_chain_btn");
//~ !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//^ !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
const fragmentPersonalizedThemeBtns = document.createDocumentFragment();
const personalizedThemeBtnTemplate = selector("#personalized_theme_btn_template").content;
const personalizedBtnsContainer = selector("#personalized_themes_btns_container");
//^ !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

const themeBtns = selectorAll(".theme_btn");
const themeCardTemplate = selector("#theme_card_template").content;
const fragmentThemeCards = document.createDocumentFragment();

const themeCardsContainer = selector("#personalized_theme_cards_container");
const cancelEditThemesBtn = selector("#cancel_edit_themes_btn");
//^ !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
const navConfigBtns = selectorAll(".config_menu_btn_action");
const configMenu = selector("#config_menu");

//^ !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
const searchInputNumber = selector("#search_input_number");
const searchInputName = selector("#search_input_name");
const searchBtn = selector("#search_btn");
//^ !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
const langMenuBtns = selectorAll(".lang_menu_modal_btn");
const langBtnsModal = selectorAll(".lang_modal_action_btn");
const langMenuNavBtns = selectorAll(".lang_menu_btn");
const langMenuNav = selector(".lang_menu_nav");
const langMenuModalStart = selector("#lang_menu_modal_start");
const langMenuModalAlert = selector("#lang_menu_modal_alert");
const langMenuModalThemes = selector("#lang_menu_modal_themes");
const langMenuModalPersonalizedTheme = selector("#lang_menu_modal_personalized_theme");
const langMenuModalEditPersonalizedThemes = selector("#lang_menu_modal_edit_personalized_themes");
const langMenuModalEditPersonalizedTheme = selector("#lang_menu_modal_edit_personalized_theme");
const langMenuModalfav = selector("#lang_menu_modal_fav");
//^ !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
const fragmentListVarieties = document.createDocumentFragment();
const selectionListTemplate = selector("#option_list_template").content;
const optionListVarientTemplate = selector("#option_list_varients_btn_template").content;
const optionListVarientsBtnsContainer = selector("#option_list_varieties_btns_container");
const savePokemonBtn = selector("#save_pokemon_btn");
const iconSave = selector("#icon_save");
const iconSaveError = selector("#icon_save_error");
const imgContainer = selector("#img_container");

const btnPrevious = selector(".previous_btn");
const btnNext = selector(".next_btn");

const optionListMeasurmentsBtns = selectorAll(".option_list_measurements_btn");
const optionListMeasurmentsArrow = selector("#arrow_btn_option_list_measurements_svg");
const optionListMeasurments = selector("#option_list_measurements");

const measurmentOptionListFistText = selector("#option_list_measurements_first_text");
const measurmentOptionListMetricBtn = selector("#option_list_measurements_metric");
const measurmentOptionListImperialBtn = selector("#option_list_measurements_imperial");

const evoChainContainer = selector("#evo_chain_container");
//^ !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
const fragmentFavCards = document.createDocumentFragment();
//~ !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
const favCardsContainer = selector("#fav_cards_container");
const nameOptioListFavBtn = selector("#name_option_list_fav_btn");
const dateOptioListFavBtn = selector("#date_option_list_fav_btn");
const idOptioListFavBtn = selector("#id_option_list_fav_btn");
const typeOptioListFavBtn = selector("#type_option_list_fav_btn");

const optionListFav = selector("#option_list_fav");
const optionListFavArrow = selector("#arrow_btn_select_list_fav_svg");
const optionListFavFirstBtnText = selector("#option_list_fav_first_text");
const optionListFavBtns = selectorAll(".option_list_fav_btn");
//^ !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

//~ !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
const pokeImg = selector("#poke_img");
const pokeId = selector("#poke_id");
const pokeName = selector("#poke_name");
const pokeTypes = selector("#poke_types");
const pokeBg = selector(".poke_bg");

//^ !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
const fragmentListDescriptions = document.createDocumentFragment();
const optionListDescriptionsTemplate = selector("#option_list_descriptions_btn_template").content;
const optionListDescriptions = selector("#option_list_descriptions");
const optionListDescriptionsBtnsContainer = selector("#option_list_descriptions_btns_container");

const optionListDescriptionsFirstBtnText = selectorAll(".option_list_descriptions_first_text");
const optionListDescriptionsArrow = selector("#arrow_btn_select_list_descriptions_svg");
const optionListDescriptionsSearchBtn = selector(".option_list_descriptions_btn_search");
//~ !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
const pokeDescriptionVersionTitle = selector("#name_version_subtitle");

const pokeDescriptionNameHabitat = selector("#poke_data_info_name_habitat");
const pokeDescriptionHabitat = selector("#poke_data_info_description_habitat");

const pokeDescriptionNameWeight = selector("#poke_data_info_name_weight");
const pokeDescriptionNameHeight = selector("#poke_data_info_name_height");
const pokeDescriptionNameAbilities = selector("#poke_data_info_name_abilities");
const pokeDescriptionNameGender = selector("#poke_data_info_name_gender");

const pokeDescriptionWeight = selector("#poke_data_info_description_weight");
const pokeDescriptionHeight = selector("#poke_data_info_description_height");

const maleIcon = selector("#male_icon");
const femaleIcon = selector("#female_icon");
const genderlessIcon = selector("#genderless_icon");

const maleIconText = selector("#male_icon_text");
const femaleIconText = selector("#female_icon_text");
const genderlessIconText = selector("#genderless_icon_text");

const noneIcon = selector("#none_icon");
const babyIcon = selector("#baby_icon");
const legendaryIcon = selector("#legendary_icon");
const mythicalIcon = selector("#mythical_icon");

const mythicalIconSvg = selector("#mythical_icon_svg");
const mythicalIconSvgGradient = selector("#mythic_icon_gradient");

const mythicalIconSvgGradientStop1 = selector("#mythic_icon_gradient_stop_1");
const mythicalIconSvgGradientStop2 = selector("#mythic_icon_gradient_stop_2");

const noneIconText = selector("#none_icon_text");
const babyIconText = selector("#baby_icon_text");
const legendaryIconText = selector("#legendary_icon_text");
const mythicalIconText = selector("#mythical_icon_text");
//^ !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! *//
const graphBars = selectorAll(".graph_bar");

//^ !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
const fragmentAbilityBtns = document.createDocumentFragment();
const abilityBtnTemplate = selector("#ability_btn_template").content;
const pokeDescriptionAbilitiesContainer = selector("#poke_data_info_description_abilities_container");

//^ !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

const pokeDescriptionGender = selector("#poke_data_info_description_gender");

//^ !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

const pokeDescriptionNameVersion = selector("#poke_data_info_name_version");
const pokeDescriptionVersion = selector("#poke_data_info_description_version");

//~ !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
const graphContainer = selector(".graph_container");
const optionListAbilitySearchBtn = selector(".option_list_ability_btn_search");
//^ !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
const evoSubtitle = selector("#evo_subtitle");
//^ !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
const fragmentEvoCards = document.createDocumentFragment();
//~ !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
const evoCardTemplate = selector("#evo_card_template").content;
const evoCardsContainer = selector("#btns_evo_chain_container");
//^ !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//! !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
const modal = selector("#modal");
//! !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//^ !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
const startModal = selector("#start_modal");
//~ !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
const titleStartModal = selector("#title_start_modal");
const textStartModal = selector("#text_start_modal");
const startBtns = selectorAll(".start_modal_btn");
const acceptBtnStartModal = selector("#accept_start_modal_btn");
const deniedBtnStartModal = selector("#denied_start_modal_btn");
//~ !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//^ !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
const alertModal = selector("#alert_modal");
//~ !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
const acceptBtnAlertModal = selector("#accept_alert_modal_btn");
const textAlertModal = selector("#text_modal_alert");
//~ !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//^ !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
const innerAlertModal = selector("#inner_alert_modal");
//~ !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
const acceptBtnInnerAlertModal = selector("#accept_inner_alert_modal_btn");
const titleInnerAlertModal = selector("#title_inner_alert_modal");
const textInnerAlertModal = selector("#text_inner_alert_modal");
//~ !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//^ !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
const extraModal = selector("#extra_modal");
//^ !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//^ !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
const themesModal = selector("#themes_modal");
//~ !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
const themeActionBtns = selectorAll(".theme_modal_btn");
//~ !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//^ !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
const personalizedThemeModal = selector("#personalized_theme_modal");
const titlePersonalizedThemeModal = selector("#title_personalized_theme_modal");
const subtitlePersonalizedThemeModal = selector("#text_personalized_theme_modal");

//~ !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
const pikerPersonalizedThemeModalBtns = selectorAll(".piker_personalized_theme_modal_btn");
const deletePersonalizedThemeBtn = selector("#delete_changes_btn");
const nameInputPersonalizedTheme = selector("#name_input_perzonalized_theme");
const colorPikersPersonalizedTheme = selectorAll(".color_piker_personalized_theme");
const personalizedActionBtns = selectorAll(".personalized_action_btn");
const titleThemesModal = selector("#title_themes_modal");
const subtitleThemesModal = selector("#subtitle_themes_modal");
const newThemeModalBtnLabel = selector("#new_theme_modal_btn_label");
const editThemeModalBtnLabel = selector("#edit_theme_modal_btn_label");
const tryThemeModalBtnLabel = selector("#try_theme_modal_btn_label");
const saveThemeModalBtnLabel = selector("#save_theme_modal_btn_label");
const cancelThemeModalBtnLabel = selector("#cancel_theme_modal_btn_label");
const deleteThemeModalBtnLabel = selector("#delete_theme_modal_btn_label");

const titleEditPersonalizedThemeModal = selector("#title_edit_personalized_theme_modal");
//~ !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

const modalEditThemes = selector("#modal_edit_themes");
const alertModalEditThemes = selector("#alert_modal_edit_themes");
const langMenuModalEditThemesAlert = selector("#lang_menu_modal_edit_themes_alert");
const alertModalEditThemesBtns = selectorAll(".alert_modal_edit_themes_alert_btn");
const nameAlertModalEditThemes = selector("#name_modal_edit_themes_alert");

//~ !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
const editPersonalizedThemesModal = selector("#edit_personalized_themes_modal");

const pikerEditPersonalizedThemeModalBtns = selectorAll(".piker_edit_personalized_theme_modal_btn");
const editPersonalizedThemeModal = selector("#edit_personalized_theme_modal");
const nameInputEditPersonalizedTheme = selector("#name_input_edit_personalized_theme");
const bgColorPikerEditPersonalizedTheme = selector("#bg_color_piker_edit_personalized_theme");
const textColorPikerEditPersonalizedTheme = selector("#text_color_piker_edit_personalized_theme");
const firstColorPikerEditPersonalizedTheme = selector("#first_color_piker_edit_personalized_theme");
const bgAccentPikerEditPersonalizedTheme = selector("#bg_accent_color_piker_edit_personalized_theme");
const colorPikersEditPersonalizedTheme = selectorAll(".color_piker_edit_personalized_theme");
//^ !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
const favModal = selector("#fav_modal");
//~ !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
const favCardTemplate = selector("#fav_card_template").content;
const titlefavModal = selector("#title_fav_modal");
const subtitlefavModal = selector("#subtitle_fav_modal");
const sortedText = selector("#fav_modal_sorted_text");
const sortBtns = selectorAll(".sort_fav_btn");
const favListFirstBtnText = selector("#option_list_fav_first_text");

const modalFav = selector("#modal_fav");
const alertModalFav = selector("#alert_modal_fav");
const langMenuModalFavAlert = selector("#lang_menu_modal_fav_alert");
const alertModalFavBtns = selectorAll(".alert_modal_fav_alert_btn");
const nameAlertModalFav = selector("#name_modal_fav_alert");
const idAlertModalFav = selector("#id_modal_fav_alert");
//~ !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//^ !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
const modalDeleteDataAlert = selector("#modal_delete_data_alert");
const alertModalDeleteDataAlert = selector("#alert_modal_delete_data_alert");

const langMenuModalDeleteDataAlert = selector("#lang_menu_modal_delete_data_alert");
const titleModalDeleteDataAlert = selector("#title_modal_delete_data_alert");
const textModalDeleteDataAlert = selector("#text_modal_delete_data_alert");
const deleteDataListItems = selectorAll(".delete_data_list_item");
const alertModalDeleteDataAlertBtns = selectorAll(".alert_modal_delete_data_alert_btn");

//^ !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

const abilityModal = selector("#ability_modal");
const langMenuModalAbility = selector("#lang_menu_modal_ability");

const titleModalAbility = selector("#modal_title_ability");
const subtitleModalAbility = selector("#modal_subtitle_ability");
const optionListAbility = selector("#option_list_ability");
const optionListBtnsContainerAbility = selector("#option_list_btns_container_ability");
const optionListAbilityArrow = selector("#arrow_btn_select_list_ability_svg");
const fragmentOptionListAbilityBtns = document.createDocumentFragment();
const optionListAbilityBtnTemplate = selector("#option_list_ability_btn_template").content;

const titleAbilityFlavorsModal = selector("#title_modal_ability");
const textAbilityFlavorsModal = selector("#text_modal_ability");
//~ !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//^ !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//! |||||||||||||||||||||||||||||||//
//!  BASIC VARIABLES AND CONSTANTS //
//! |||||||||||||||||||||||||||||||//
//^ !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

const feetsInMeter = 3.281;
const inchesInMeters = 39.37007874;
const lbsInKg = 2.20462262185;

let currentPokemonHeight = 0;
let currentPokemonWeight = 0;

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
//^ !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
const openClose = "open-close";
const metricSystem = "metric-system";
const imperialSystem = "imperial-system";
let currentMeasurmentSystem = metricSystem;
//^ !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
let itsFirstPokemonSearch = true;
//~ !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
const errorText = "Error";
const goodText = "Good";
const bienText = "Bien";
const esIncName = "Ese nombre o ID es incorrecto";
const enIncName = "That name or ID it's incorrect";
const esEmptyThemeName = "Agrega un nombre para tu nuevo tema";
const enEmptyThemeName = "Add a name to your new theme";
const esEmpty = "Debe de llenar algun campo antes de hacer la busqueda";
const enEmpty = "You need to fill some data to search";
const esNameNoSearch = "Busca tus pokemon favoritos por nombre o por numero ID";
const enNameNoSearch = "Search your favorite pokemon by name or ID number";
//^ !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

let lastSearched = "";

let optionListVarients;
let optionListVarientsArrow;
let optionListVarientsBtns;

let pastModal = "";
let currentPersonilizedTheme = {};

let currentEditingTheme = "";

let currentAbilityFlavors = [];
let currentAbilityOpen = { es: "", en: "" };
//^ !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

let configMenuStatus = close;
let themeModalStatus = close;
let alertModalStatus = close;
let startModalStatus = close;
let abilityModalStatus = close;
let favModalStatus = close;
let alertModalFavStatus = close;
let alertModalEditThemesStatus = close;
let personalizedThemeModalStatus = close;
let editPersonalizedThemesModalStatus = close;
let editPersonalizedThemeModalStatus = close;
let langMenuNavStatus = close;
let langMenuModalStartStatus = close;
let langMenuModalAlertStatus = close;
let langMenuModalAbilityStatus = close;
let langMenuModalThemesStatus = close;
let langMenuModalEditPersonalizedThemesStatus = close;
let langMenuModalEditPersonalizedThemeStatus = close;
let langMenuModalPersonalizedThemeStatus = close;
let langMenuModalDeleteDataAlertStatus = close;
let langMenuModalEditThemesAlertStatus = close;
let langMenuModalfavStatus = close;
let langMenuModalfavAlertStatus = close;
let optionListMeasurmentsStatus = close;
let optionListDescriptionsStatus = close;
let optionListVarientsStatus = close;
let optionListFavStatus = close;
let optionListAbilityStatus = close;
//^ !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
let currentLang = es;
//^ !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
let sortedByName = [];
let sortedById = [];
let sortedByType = [];
let sortedByDate = [];
let currentSortedObject = [];
let currentSortedObjectType = "";
const sortedObjectTypeId = "sort_id";
const sortedObjectTypeName = "sort_name";
const sortedObjectTypeType = "sort_type";
const sortedObjectTypeDate = "sort_date";
//^ !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
const pokemonSearch = [];
const pokemonTypesEn = [];
const pokemonTypesEs = [];
const currentPokemonFlavors = [];
let currentPokemon = 1;

let afterPokemon = "";

let currentDeletingPokemonId = 0;
let currentDeletingPokemonName = "";
let currentDeletingTheme = "";
//^ !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

let habitatNameEs = "";
let habitatNameEn = "";

let speciesLink = "";
let evoChainLink = "";
let itemToSave = {
    id: "",
    name: "",
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
const defaultPokeThemes = [
    {
        id: 0,
        name: { es: "Claro", en: "light" },
        svg: '<svg class="icon_svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>Tema Claro</title><path class="cls-1" d="M12 18a6 6 0 1 1 0-12 6 6 0 0 1 0 12zm0-2a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM11 1h2v3h-2V1zm0 19h2v3h-2v-3zM3.515 4.929l1.414-1.414L7.05 5.636 5.636 7.05 3.515 4.93zM16.95 18.364l1.414-1.414 2.121 2.121-1.414 1.414-2.121-2.121zm2.121-14.85l1.414 1.415-2.121 2.121-1.414-1.414 2.121-2.121zM5.636 16.95l1.414 1.414-2.121 2.121-1.414-1.414 2.121-2.121zM23 11v2h-3v-2h3zM4 11v2H1v-2h3z" /></svg>',
    },
    {
        id: 1,
        name: { es: "Obscuro", en: "Dark" },
        svg: '<svg class="icon_svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>Tema Obscuro</title><path class="cls-1" d="M10 7a7 7 0 0 0 12 4.9v.1c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2h.1A6.979 6.979 0 0 0 10 7zm-6 5a8 8 0 0 0 15.062 3.762A9 9 0 0 1 8.238 4.938 7.999 7.999 0 0 0 4 12z" /></svg>',
    },
    {
        id: 2,
        name: { es: "Agua", en: "Water" },
        svg: '<svg class="icon_svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>Tema Agua</title><path class="cls-1" d="M12 3.1L7.05 8.05a7 7 0 1 0 9.9 0L12 3.1zm0-2.828l6.364 6.364a9 9 0 1 1-12.728 0L12 .272z" /></svg>',
    },
    {
        id: 3,
        name: { es: "Fuego", en: "Fire" },
        svg: '<svg class="icon_svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>Tema Fuego</title><path class="cls-1" d="M12 23a7.5 7.5 0 0 0 7.5-7.5c0-.866-.23-1.697-.5-2.47-1.667 1.647-2.933 2.47-3.8 2.47 3.995-7 1.8-10-4.2-14 .5 5-2.796 7.274-4.138 8.537A7.5 7.5 0 0 0 12 23zm.71-17.765c3.241 2.75 3.257 4.887.753 9.274-.761 1.333.202 2.991 1.737 2.991.688 0 1.384-.2 2.119-.595a5.5 5.5 0 1 1-9.087-5.412c.126-.118.765-.685.793-.71.424-.38.773-.717 1.118-1.086 1.23-1.318 2.114-2.78 2.566-4.462z"/></svg>',
    },
    {
        id: 4,
        name: { es: "Hierba", en: "Grass" },
        svg: '<svg class="icon_svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>Tema Hierba</title><path class="cls-1" d="M6 3c3.49 0 6.383 2.554 6.913 5.895C14.088 7.724 15.71 7 17.5 7H22v2.5c0 3.59-2.91 6.5-6.5 6.5H13v5h-2v-8H9c-3.866 0-7-3.134-7-7V3h4zm14 6h-2.5c-2.485 0-4.5 2.015-4.5 4.5v.5h2.5c2.485 0 4.5-2.015 4.5-4.5V9zM6 5H4v1c0 2.761 2.239 5 5 5h2v-1c0-2.761-2.239-5-5-5z"/></svg>',
    },
    {
        id: 5,
        name: { es: "Normal", en: "Normal" },
        svg: '<svg class="icon_svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>Tema Normal</title><path class="cls-1" d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-5-8h2a3 3 0 0 0 6 0h2a5 5 0 0 1-10 0z" /></svg>',
    },
    {
        id: 6,
        name: { es: "Fantasma", en: "Ghost" },
        svg: '<svg class="icon_svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>Tema Fantasma</title><path class="cls-1" d="M12 2a9 9 0 0 1 9 9v7.5a3.5 3.5 0 0 1-6.39 1.976 2.999 2.999 0 0 1-5.223 0 3.5 3.5 0 0 1-6.382-1.783L3 18.499V11a9 9 0 0 1 9-9zm0 2a7 7 0 0 0-6.996 6.76L5 11v7.446l.002.138a1.5 1.5 0 0 0 2.645.88l.088-.116a2 2 0 0 1 3.393.142.999.999 0 0 0 1.74.003 2 2 0 0 1 3.296-.278l.097.13a1.5 1.5 0 0 0 2.733-.701L19 18.5V11a7 7 0 0 0-7-7zm0 8c1.105 0 2 1.12 2 2.5s-.895 2.5-2 2.5-2-1.12-2-2.5.895-2.5 2-2.5zM9.5 8a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3z"/></svg>',
    },
    {
        id: 7,
        name: { es: "Psíquico", en: "Psychic" },
        svg: '<svg class="icon_svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>Tema Psyquico</title><path class="cls-1" d="M12 3c5.392 0 9.878 3.88 10.819 9-.94 5.12-5.427 9-10.819 9-5.392 0-9.878-3.88-10.819-9C2.121 6.88 6.608 3 12 3zm0 16a9.005 9.005 0 0 0 8.777-7 9.005 9.005 0 0 0-17.554 0A9.005 9.005 0 0 0 12 19zm0-2.5a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9zm0-2a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"/></svg>',
    },
    {
        id: 8,
        name: { es: "Hada", en: "Fairy" },
        svg: '<svg class="icon_svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>Tema Hada</title><path class="cls-1" d="M10 6a8 8 0 0 0 11.955 6.956C21.474 18.03 17.2 22 12 22 6.477 22 2 17.523 2 12c0-5.2 3.97-9.474 9.044-9.955A7.963 7.963 0 0 0 10 6zm-6 6a8 8 0 0 0 8 8 8.006 8.006 0 0 0 6.957-4.045c-.316.03-.636.045-.957.045-5.523 0-10-4.477-10-10 0-.321.015-.64.045-.957A8.006 8.006 0 0 0 4 12zm14.164-9.709L19 2.5v1l-.836.209a2 2 0 0 0-1.455 1.455L16.5 6h-1l-.209-.836a2 2 0 0 0-1.455-1.455L13 3.5v-1l.836-.209A2 2 0 0 0 15.29.836L15.5 0h1l.209.836a2 2 0 0 0 1.455 1.455zm5 5L24 7.5v1l-.836.209a2 2 0 0 0-1.455 1.455L21.5 11h-1l-.209-.836a2 2 0 0 0-1.455-1.455L18 8.5v-1l.836-.209a2 2 0 0 0 1.455-1.455L20.5 5h1l.209.836a2 2 0 0 0 1.455 1.455z"/></svg>',
    },
    { id: 9, name: { es: "Electrico", en: "Electric" }, svg: '<svg class="icon_svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>Tema Electrico</title><path class="cls-1" d="M13 9h8L11 24v-9H4l9-15v9zm-2 2V7.22L7.532 13H13v4.394L17.263 11H11z" /></svg>' },
    {
        id: 10,
        name: { es: "Volador", en: "Flying" },
        svg: '<svg class="icon_svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>Tema Volador</title><path class="cls-1" d="M10.5 17H4v-2h6.5a3.5 3.5 0 1 1-3.278 4.73l1.873-.703A1.5 1.5 0 1 0 10.5 17zM5 11h13.5a3.5 3.5 0 1 1-3.278 4.73l1.873-.703A1.5 1.5 0 1 0 18.5 13H5a3 3 0 0 1 0-6h8.5a1.5 1.5 0 1 0-1.405-2.027l-1.873-.702A3.501 3.501 0 0 1 17 5.5 3.5 3.5 0 0 1 13.5 9H5a1 1 0 1 0 0 2z"/></svg>',
    },
    {
        id: 11,
        name: { es: "Hielo", en: "Ice" },
        svg: '<svg class="icon_svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>Tema Hielo</title><path class="cls-1" d="M13 16.268l1.964-1.134 1 1.732L14 18l1.964 1.134-1 1.732L13 19.732V22h-2v-2.268l-1.964 1.134-1-1.732L10 18l-1.964-1.134 1-1.732L11 16.268V14h2v2.268zM17 18v-2h.5a3.5 3.5 0 1 0-2.5-5.95V10a6 6 0 1 0-8 5.659v2.089a8 8 0 1 1 9.458-10.65A5.5 5.5 0 1 1 17.5 18l-.5.001z"/></svg>',
    },
    {
        id: 12,
        name: { es: "Veneno", en: "Poison" },
        svg: '<svg class="icon_svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>Tema Veneno</title><path class="cls-1" d="M16 2v2h-1v3.243c0 1.158.251 2.301.736 3.352l4.282 9.276c.347.753.018 1.644-.734 1.99-.197.092-.411.139-.628.139H5.344c-.828 0-1.5-.672-1.5-1.5 0-.217.047-.432.138-.629l4.282-9.276C8.749 9.545 9 8.401 9 7.243V4H8V2h8zm-2.612 8.001h-2.776c-.104.363-.23.721-.374 1.071l-.158.361L6.125 20h11.749l-3.954-8.567c-.214-.464-.392-.943-.532-1.432zM11 7.243c0 .253-.01.506-.029.758h2.058c-.01-.121-.016-.242-.021-.364L13 7.243V4h-2v3.243z"/></svg>',
    },
    {
        id: 13,
        name: { es: "Peleador", en: "Fighter" },
        svg: '<svg class="icon_svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>Tema Pelea</title><path class="cls-1" d="M16.5 2A5.5 5.5 0 0 1 22 7.5V10c0 .888-.386 1.686-1 2.235V17a3.001 3.001 0 0 1-2 2.829V21a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-1.17A3.001 3.001 0 0 1 3 17V6a4 4 0 0 1 4-4h9.5zm-7 9H5v6a1 1 0 0 0 .883.993L6 18h12a1 1 0 0 0 .993-.883L19 17v-4h-6.036A3.5 3.5 0 0 1 9.5 16H6v-2h3.5a1.5 1.5 0 0 0 1.493-1.356L11 12.5a1.5 1.5 0 0 0-1.356-1.493L9.5 11zm7-7H7a2 2 0 0 0-1.995 1.85L5 6v3h4.5a3.5 3.5 0 0 1 3.163 2H19a1 1 0 0 0 .993-.883L20 10V7.5a3.5 3.5 0 0 0-3.308-3.495L16.5 4z"/></svg>',
    },
    {
        id: 14,
        name: { es: "Roca", en: "Rock" },
        svg: '<svg class="icon_svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>Tema Piedra</title><path class="cls-1" d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-6a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" /></svg>',
    },
    { id: 15, name: { es: "Metal", en: "Steel" }, svg: '<svg class="icon_svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>Tema Metal</title><path class="cls-1" d="M10 10.111V1l11 6v14H3V7l7 3.111zm2-5.742v8.82l-7-3.111V19h14V8.187L12 4.37z" /></svg>' },
    {
        id: 16,
        name: { es: "Insecto", en: "Bug" },
        svg: '<svg class="icon_svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>Tema Insecto</title><path class="cls-1" d="M10.562 4.148a7.03 7.03 0 0 1 2.876 0l1.683-1.684 1.415 1.415-1.05 1.05A7.03 7.03 0 0 1 18.326 8H21v2h-2.07c.046.327.07.66.07 1v1h2v2h-2v1c0 .34-.024.673-.07 1H21v2h-2.674a7 7 0 0 1-12.652 0H3v-2h2.07A7.06 7.06 0 0 1 5 15v-1H3v-2h2v-1c0-.34.024-.673.07-1H3V8h2.674a7.03 7.03 0 0 1 2.84-3.072l-1.05-1.05L8.88 2.465l1.683 1.684zM12 6a5 5 0 0 0-5 5v4a5 5 0 0 0 10 0v-4a5 5 0 0 0-5-5zm-3 8h6v2H9v-2zm0-4h6v2H9v-2z"/></svg>',
    },
    {
        id: 17,
        name: { es: "Ultra", en: "Ultra" },
        svg: '<svg class="icon_svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>Tema Ultrararo</title><path class="cls-1" d="M12 18.26l-7.053 3.948 1.575-7.928L.587 8.792l8.027-.952L12 .5l3.386 7.34 8.027.952-5.935 5.488 1.575 7.928L12 18.26zm0-2.292l4.247 2.377-.949-4.773 3.573-3.305-4.833-.573L12 5.275l-2.038 4.42-4.833.572 3.573 3.305-.949 4.773L12 15.968z" /></svg>',
    },
    {
        id: 18,
        name: { es: "Legendario", en: "Legendary" },
        svg: '<svg class="icon_svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>Tema Legendario</title><path class="cls-1" d="M13 16.938V19h5v2H6v-2h5v-2.062A8.001 8.001 0 0 1 4 9V3h16v6a8.001 8.001 0 0 1-7 7.938zM6 5v4a6 6 0 1 0 12 0V5H6zM1 5h2v4H1V5zm20 0h2v4h-2V5z" /></svg>',
    },
];
const defaultThemeBtnTemplate = selector("#theme_btn_template").content;
const setDefautThemeBtns = () => {
    defaultPokeThemes.forEach((theme) => {
        const newClone = defaultThemeBtnTemplate.cloneNode(true);
        const newBtn = newClone.querySelector(".theme_btn");
        const labelBtn = newClone.querySelector(".label_btn");
        const iconContainer = newClone.querySelector(".icon_container");
        labelBtn.textContent = theme.name[currentLang];
        newBtn.classList.add(`${theme.name[en].toLowerCase()}_theme_btn`);
        newBtn.setAttribute("data-name", theme.name[en].toLowerCase());
        newBtn.setAttribute("data-id", theme.id);
        iconContainer.innerHTML = theme.svg;
        selector("#themes_btns_container").appendChild(newBtn);
    });
    setTimeout(() => {
        selectorAll(".default_theme_btn").forEach((btn) => {
            btn.addEventListener("click", () => changeBasicTheme(`${btn.getAttribute("data-name")}_theme`));
        });
    }, 500);
};
setDefautThemeBtns();
const pokeThemes = {};
//^ !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//! ||||||||||||||!!!!!//
//!  DATA OBJECT ARRAY //
//! ||||||||||||||!!!!!//
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
    page_themes: [],
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

const ConvertDecimals = (convNum) => {
    return Math.round(convNum * 1e12) / 1e12;
};

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
    const target = selector(`.${BODY.className}`);
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
const newFirstPokeSearch = async (currentId, status) => {
    const generalData = await fetchFunc(pokeApi(currentId));
    console.log(generalData);
    const speciesData = await fetchFunc(pokeApi(generalData.species.name));
    console.log(speciesData);
    switch (status) {
        case "next":
            catchEmAll(speciesData.id + 1);
            break;
        case "previous":
            catchEmAll(speciesData.id - 1);
            break;
    }
};
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
            if (afterPokemon === "") {
                newFirstPokeSearch(currentPokemon, "next");
            } else {
                if (afterPokemon >= 1 && afterPokemon <= 897) {
                    currentPokemon = afterPokemon;
                    currentPokemon++;
                    catchEmAll(currentPokemon);
                } else if (afterPokemon === 898) {
                    currentPokemon = 1;
                    catchEmAll(currentPokemon);
                }
            }
        }
    }

    afterPokemon = currentPokemon;
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
        if (afterPokemon === "") {
            newFirstPokeSearch(currentPokemon, "previous");
        } else {
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
    }

    afterPokemon = currentPokemon;
};
const toThetop = () => window.scrollTo({ top: 0, behavior: `smooth` });
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
const maleIconActions = (status) => {
    switch (status) {
        case open:
            animationIn(maleIcon, flex);
            break;
        case close:
            animationOut(maleIcon, 250);
            break;
    }
};
const femaleIconActions = (status) => {
    switch (status) {
        case open:
            animationIn(femaleIcon, flex);
            break;
        case close:
            animationOut(femaleIcon, 250);
            break;
    }
};
const genderlessIconActions = (status) => {
    switch (status) {
        case open:
            animationIn(genderlessIcon, flex);
            break;
        case close:
            animationOut(genderlessIcon, 250);
            break;
    }
};
//^ !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
const noneIconActions = (status) => {
    switch (status) {
        case open:
            animationIn(noneIcon, flex);
            break;
        case close:
            animationOut(noneIcon, 250);
            break;
    }
};
const babyIconActions = (status) => {
    switch (status) {
        case open:
            animationIn(babyIcon, flex);
            break;
        case close:
            animationOut(babyIcon, 250);
            break;
    }
};
const legendaryIconActions = (status) => {
    switch (status) {
        case open:
            animationIn(legendaryIcon, flex);
            break;
        case close:
            animationOut(legendaryIcon, 250);
            break;
    }
};
const mythicalIconActions = (status) => {
    switch (status) {
        case open:
            animationIn(mythicalIcon, flex);
            break;
        case close:
            animationOut(mythicalIcon, 250);
            break;
    }
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
    const footerText = selector("FOOTER").querySelector("P");
    const varietiesListFirstBtnText = selector("#option_list_varients_first_text");

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
        /* footerText.textContent = "PokéAPI fue creada por Paul Hallett y otros contribuidores alrededor del mundo. Pokémon y los Nombres de personajes Pokémon son marca registrada de Nintendo."; */
        searchInputName.setAttribute("placeholder", "Nombre");
        titleStartModal.textContent = "Bienvenido";
        textStartModal.innerHTML =
            "Estás entrando a una página fan made, la única intención es entretenimiento, toda la información es almacenada en la memoria del navegador, ninguna información es recolectada o vendida <br><br> PokéAPI fue creada por Paul Hallett y otros contribuidores alrededor del mundo. Pokémon y los Nombres de personajes Pokémon son marca registrada de Nintendo.";

        optionListDescriptionsFirstBtnText.forEach((btn) => (btn.textContent = "Versión"));
        pokeDescriptionVersionTitle.textContent = "Descripción:";
        measurmentOptionListFistText.textContent = "Sistema de Medida";
        measurmentOptionListMetricBtn.textContent = "Metrico Decimal";
        measurmentOptionListImperialBtn.textContent = "Metrico Ingles";

        pokeDescriptionNameWeight.textContent = "Peso";
        pokeDescriptionNameHeight.textContent = "Altura";

        pokeDescriptionNameGender.textContent = "Generos";
        maleIconText.textContent = "Macho";
        femaleIconText.textContent = "Hembra";
        genderlessIconText.textContent = "Sin Genero";

        noneIconText.textContent = "Ninguno";
        babyIconText.textContent = "Bebe";
        legendaryIconText.textContent = "Legendario";
        mythicalIconText.textContent = "Mitico";

        pokeDescriptionNameHabitat.textContent = "Habitad";
        pokeDescriptionNameAbilities.textContent = "Habilidades";

        subtitleModalAbility.textContent = "Descripción:";

        evoSubtitle.textContent = "Cadena De Evolución";
        titlefavModal.textContent = "Favoritos";
        favListFirstBtnText.textContent = "Ordenar";
        nameOptioListFavBtn.textContent = "Nombre";
        dateOptioListFavBtn.textContent = "Fecha";
        typeOptioListFavBtn.textContent = "Tipo";
        acceptBtnStartModal.textContent = "Aceptar";
        deniedBtnStartModal.textContent = "Rechazar";

        titleThemesModal.textContent = "Selecciona Tu Tema";
        subtitleThemesModal.textContent = "Temas Personalizados";
        newThemeModalBtnLabel.textContent = "Nuevo";

        titlePersonalizedThemeModal.textContent = "Crea Tu Tema";
        subtitlePersonalizedThemeModal.textContent = "Con las siguientes herramientas puedes elegir los colores que mas te gusten para poder atrapar mas pokemon";

        editThemeModalBtnLabel.textContent = "Editar";
        tryThemeModalBtnLabel.textContent = "Probar";
        saveThemeModalBtnLabel.textContent = "Salvar";
        cancelThemeModalBtnLabel.textContent = "Cancelar";
        deleteThemeModalBtnLabel.textContent = "Borrar";

        titleEditPersonalizedThemeModal.textContent = "Edita Tu Tema";

        titleEditPersonalizedThemesModal.textContent = "Editar Temas Personalizados";
        titleModalDeleteDataAlert.textContent = "Alerta";
        textModalDeleteDataAlert.textContent = "¿Estas seguro que deseas eliminar la información guardada?";
        deleteDataListItems.forEach((item) => {
            switch (item.getAttribute("data-name")) {
                case "saved_pokemon":
                    item.textContent = "Pokemon Guardados";
                    break;
                case "created_themes":
                    item.textContent = "Temas Creados";
                    break;
                case "saved_theme":
                    item.textContent = "Tema Salvado";
                    break;
            }
        });
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
        /* footerText.textContent = "Created by Paul Hallett and other PokéAPI contributors around the world. Pokémon and Pokémon character names are trademarks of Nintendo."; */

        searchInputName.setAttribute("placeholder", "Name");
        titleStartModal.textContent = "Welcome";
        textStartModal.innerHTML =
            "You enter in a fan made page, the only intention is entertainment, all information stored is in the browser's memory, no information is collected or sold. <br><br> Created by Paul Hallett and other PokéAPI contributors around the world. Pokémon and Pokémon character names are trademarks of Nintendo.";
        optionListDescriptionsFirstBtnText.forEach((btn) => (btn.textContent = "Version"));
        pokeDescriptionVersionTitle.textContent = "Flavor:";

        measurmentOptionListFistText.textContent = "Measurment System";
        measurmentOptionListMetricBtn.textContent = "Metric System";
        measurmentOptionListImperialBtn.textContent = "Imperial System";
        pokeDescriptionNameWeight.textContent = "Weight";
        pokeDescriptionNameHeight.textContent = "Height";
        pokeDescriptionNameGender.textContent = "Genders";

        maleIconText.textContent = "Male";
        femaleIconText.textContent = "Female";
        genderlessIconText.textContent = "Genderless";

        noneIconText.textContent = "None";
        babyIconText.textContent = "Baby";
        legendaryIconText.textContent = "Legendary";
        mythicalIconText.textContent = "Mythical";

        pokeDescriptionNameHabitat.textContent = "Habitat";
        pokeDescriptionNameAbilities.textContent = "Abilities";

        subtitleModalAbility.textContent = "Description:";

        evoSubtitle.textContent = "Evolution Chain";
        titlefavModal.textContent = "Favorite";
        favListFirstBtnText.textContent = "Sort";
        nameOptioListFavBtn.textContent = "Name";
        dateOptioListFavBtn.textContent = "Date";
        typeOptioListFavBtn.textContent = "Type";
        acceptBtnStartModal.textContent = "Accept";
        deniedBtnStartModal.textContent = "Denied";

        titleThemesModal.textContent = "Pick Your Theme";
        subtitleThemesModal.textContent = "Personalized Themes";
        newThemeModalBtnLabel.textContent = "New";

        titlePersonalizedThemeModal.textContent = "Create Your Theme";
        subtitlePersonalizedThemeModal.textContent = "With this tools you Can choose your favorite colors to catch more pokemon";

        editThemeModalBtnLabel.textContent = "Edit";
        tryThemeModalBtnLabel.textContent = "Try";
        saveThemeModalBtnLabel.textContent = "Save";
        cancelThemeModalBtnLabel.textContent = "Cancel";
        deleteThemeModalBtnLabel.textContent = "Delete";

        titleEditPersonalizedThemeModal.textContent = "Edit Your Theme";

        titleEditPersonalizedThemesModal.textContent = "Edit Personalized Themes";

        titleModalDeleteDataAlert.textContent = "Alert";
        textModalDeleteDataAlert.textContent = "Are you sure you want to delete the saved information?";
        deleteDataListItems.forEach((item) => {
            switch (item.getAttribute("data-name")) {
                case "saved_pokemon":
                    item.textContent = "Saved Pokemon";
                    break;
                case "created_themes":
                    item.textContent = "Created Themes";
                    break;
                case "saved_theme":
                    item.textContent = "Saved Theme";
                    break;
            }
        });

        /*  */
    }
    if (editPersonalizedThemesModalStatus === open) {
        if (currentLang === es) {
            const cardsBgColorTexts = selectorAll(".name_data_bg");
            const cardsTextColorTexts = selectorAll(".name_data_text");
            const cardsFirstColorColorTexts = selectorAll(".name_data_firstColor");
            const cardsBgAccentColorTexts = selectorAll(".name_data_bgAccent");

            cardsBgColorTexts.forEach((item) => (item.textContent = "Fondo"));
            cardsTextColorTexts.forEach((item) => (item.textContent = "Texto"));
            cardsFirstColorColorTexts.forEach((item) => (item.textContent = "Acento"));
            cardsBgAccentColorTexts.forEach((item) => (item.textContent = "Tarjetas"));
        } else if (currentLang === en) {
            const cardsBgColorTexts = selectorAll(".name_data_bg");
            const cardsTextColorTexts = selectorAll(".name_data_text");
            const cardsFirstColorColorTexts = selectorAll(".name_data_firstColor");
            const cardsBgAccentColorTexts = selectorAll(".name_data_bgAccent");
            cardsBgColorTexts.forEach((item) => (item.textContent = "Background"));
            cardsTextColorTexts.forEach((item) => (item.textContent = "Text"));
            cardsFirstColorColorTexts.forEach((item) => (item.textContent = "Accent"));
            cardsBgAccentColorTexts.forEach((item) => (item.textContent = "Cards"));
        }
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
        if (currentLang === es) {
            switch (subtitlefavModal.textContent) {
                case "Date":
                    subtitlefavModal.textContent = "Fecha";
                    break;
                case "Name":
                    subtitlefavModal.textContent = "Nombre";
                    break;
                case "Type":
                    subtitlefavModal.textContent = "Tipo";
                    break;
            }
            sortedText.textContent = "Ordenado Por: ";
        } else if (currentLang === en) {
            switch (subtitlefavModal.textContent) {
                case "Fecha":
                    subtitlefavModal.textContent = "Date";
                    break;
                case "Nombre":
                    subtitlefavModal.textContent = "Name";
                    break;
                case "Tipo":
                    subtitlefavModal.textContent = "Type";
                    break;
            }
            sortedText.textContent = "Sorted By: ";
        }
    }

    if (abilityModalStatus === open) {
        console.log(currentAbilityOpen);
        titleModalAbility.textContent = currentAbilityOpen[currentLang];
        createOptionListAbilityBtns();
    }
    if (itsFirstPokemonSearch === false) {
        catchEmAll(currentPokemon);
    }

    selectorAll(".default_theme_btn").forEach((btn) => {
        const name = btn.getAttribute("data-name");
        const id = btn.getAttribute("data-id");
        selector(`.${name}_theme_btn`).querySelector(".label_btn").textContent = defaultPokeThemes[id].name[currentLang];
    });
    selectorAll(`[data-change]`).forEach((item) => {
        item.textContent = item.getAttribute(`data-lang-${currentLang}`);
    });

    document.documentElement.setAttribute("lang", currentLang);
};
//^^ ************************************************************************** *//
const lunchAlert = (alertError) => {
    alertModalStatus = open;
    animationIn(modal, block, 500);
    if (alertError === "name") {
        if (currentLang === es) {
            textAlertModal.textContent = esIncName;
        } else if (currentLang === en) {
            textAlertModal.textContent = enIncName;
        }
    }
    setTimeout(() => {
        animationIn(alertModal, block, 500);
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
    const favCardBtns = selectorAll(".fav_card_btn");
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
                animationIn(modalFav, block, 500);
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
        case "option_list_ability":
            optionListAbilityStatus = close;
            optionListAbilityArrow.style.transform = "rotate(0)";
            optionListAbility.style.height = "3rem";
            break;
        case "option_list_measurments":
            optionListMeasurmentsStatus = close;
            optionListMeasurmentsArrow.style.transform = "rotate(0)";
            optionListMeasurments.style.height = "3rem";
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
const optionListMeasurmentsActions = (action) => {
    let currentMetricHeight = ConvertDecimals(currentPokemonHeight * 0.1);
    let currentMetricWeight = ConvertDecimals(currentPokemonWeight * 0.1);
    switch (action) {
        case openClose:
            console.log(action);
            if (optionListMeasurmentsStatus === close) {
                optionListMeasurmentsStatus = open;
                optionListMeasurmentsArrow.style.transform = "rotate(180deg)";
                optionListMeasurments.style.height = "fit-content";
            } else if (optionListMeasurmentsStatus === open) {
                closeOptionList("option_list_measurments");
            }
            break;

        case metricSystem:
            console.log(action);
            closeOptionList("option_list_measurments");
            currentMeasurmentSystem = metricSystem;
            pokeDescriptionHeight.textContent = `${currentMetricHeight}m`;
            pokeDescriptionWeight.textContent = `${currentMetricWeight}Kg`;
            break;

        case imperialSystem:
            console.log(action);
            closeOptionList("option_list_measurments");
            currentMeasurmentSystem = imperialSystem;

            let howManyFeetsInPokemon = currentMetricHeight * feetsInMeter;
            // ! //

            console.log(currentMetricHeight + " Height");
            let decimals = `.${howManyFeetsInPokemon.toString().split(".")[1]}`;
            let howManyInchesInPokemon = Math.round((decimals / feetsInMeter) * inchesInMeters).toString();

            if (howManyInchesInPokemon.length >= 2) {
                currentMetricHeight = `${parseInt(howManyFeetsInPokemon)}'${howManyInchesInPokemon}"`;
            } else if (howManyInchesInPokemon.length === 1) {
                currentMetricHeight = `${parseInt(howManyFeetsInPokemon)}'0${howManyInchesInPokemon}"`;
            }
            // ! //
            let lbsConvertion = currentMetricWeight * lbsInKg;
            currentMetricWeight = `${lbsConvertion.toFixed(1)}Lbs`;
            pokeDescriptionHeight.textContent = currentMetricHeight;
            pokeDescriptionWeight.textContent = currentMetricWeight;

            break;
    }
};
const optionListFavOptionActions = (action) => {
    if (langMenuModalfavStatus === open) {
        langMenuModalActions("lang_fav");
    }
    if (action === openClose) {
        console.log(action);
        optionListFavActions(optionListFavStatus);
    } else {
        deleteChildElements(fragmentFavCards);
        deleteChildElements(favCardsContainer);
        updatePokedex();
        optionListFavActions(optionListFavStatus);
        storagePokedex[storageSaved].forEach((item) => {
            console.log(item.name, item.id);
        });

        if (currentLang === en) {
            sortedText.textContent = "Sort By: ";
        } else if (currentLang === es) {
            sortedText.textContent = "Ordenado Por: ";
        }
        switch (action) {
            case "option_fav_name":
                console.log(action);
                sortedByName = storagePokedex[storageSaved].sort((a, b) => {
                    if (a.name > b.name) {
                        return 1;
                    }

                    if (a.name < b.name) {
                        return -1;
                    }
                });
                currentSortedObject = sortedByName;
                currentSortedObjectType = sortedObjectTypeName;
                console.log(sortedByName);

                if (currentLang === en) {
                    subtitlefavModal.textContent = "Name";
                } else if (currentLang === es) {
                    subtitlefavModal.textContent = "Nombre";
                }
                break;
            case "option_fav_id":
                console.log(action);
                sortedById = storagePokedex[storageSaved].sort((a, b) => {
                    if (a.id > b.id) {
                        return 1;
                    }

                    if (a.id < b.id) {
                        return -1;
                    }
                });
                currentSortedObject = sortedById;
                currentSortedObjectType = sortedObjectTypeId;

                subtitlefavModal.textContent = "ID";

                console.log(sortedById);
                break;
            case "option_fav_type":
                console.log(action);
                if (currentLang === es) {
                    sortedByType = storagePokedex[storageSaved].sort((a, b) => {
                        if (a.types.es[0] > b.types.es[0]) {
                            return 1;
                        }
                        if (a.types.es[0] < b.types.es[0]) {
                            return -1;
                        }
                    });
                } else if (currentLang === en) {
                    sortedByType = storagePokedex[storageSaved].sort((a, b) => {
                        if (a.types.en[0] > b.types.en[0]) {
                            return 1;
                        }

                        if (a.types.en[0] < b.types.en[0]) {
                            return -1;
                        }
                    });
                }
                currentSortedObject = sortedByType;
                currentSortedObjectType = sortedObjectTypeType;
                if (currentLang === en) {
                    subtitlefavModal.textContent = "Type";
                } else if (currentLang === es) {
                    subtitlefavModal.textContent = "Tipo";
                }
                console.log(sortedByType);
                break;
            case "option_fav_date":
                console.log(action);
                sortedByDate = storagePokedex[storageSaved].sort((a, b) => {
                    if (a.date["short_date_number"] < b.date["short_date_number"]) {
                        if (a.date.time > b.date.time) {
                            return 1;
                        }
                        if (a.date.time < b.date.time) {
                            return -1;
                        }
                    }
                });
                console.log(sortedByDate);
                currentSortedObject = sortedByDate;
                currentSortedObjectType = sortedObjectTypeDate;

                if (currentLang === en) {
                    subtitlefavModal.textContent = "Date";
                } else if (currentLang === es) {
                    subtitlefavModal.textContent = "Fecha";
                }
                console.log(currentSortedObject);
                break;
        }

        setTimeout(() => {
            console.log(currentSortedObject);
            createCurrentSortPokemonFav(currentSortedObject);
        }, 250);
    }
};
const optionListAbilitySearchBtnActions = () => {
    if (optionListAbilityStatus === close) {
        optionListAbilityStatus = open;
        optionListAbilityArrow.style.transform = "rotate(180deg)";
        optionListAbility.style.height = "fit-content";
        console.log("abriendo lista de opciones de flavor por version, de abilidades");
    } else if (optionListAbilityStatus === open) {
        closeOptionList("option_list_ability");
        console.log("Cerrando lista de opciones de flavor por version, de abilidades");
    }
};
const optionListAbilitiesActions = (action) => {
    titleAbilityFlavorsModal.textContent = properCase(action);
    let thisFlavors;
    if (currentLang === en) {
        thisFlavors = currentAbilityFlavors.en;
    } else if (currentLang === es) {
        thisFlavors = currentAbilityFlavors.es;
    }
    console.log(action, thisFlavors);
    thisFlavors.forEach((abilityFlavor) => {
        if (action === abilityFlavor.version) {
            textAbilityFlavorsModal.textContent = properCase(abilityFlavor.flavor);
        }
    });

    closeOptionList("option_list_ability");
};
const evoChainData = [];
let evoChainItem = {
    id: "",
    name: "",
    types: {
        es: "" || [],
        en: "" || [],
    },
    img: "",
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
    }, 200);
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
        /* console.log(typeof currentFavCardTypes); */
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
            const fetchEvoType = await fetchFunc(pokeApi(evoTypeId));
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
                }, 500);
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
            }, 200);
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
    const fetchEvolvesFromData = await fetchFunc(pokeApi(fetchEvolvesFromDataPokemonId.id));
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
    }, 250);
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

const abilityBtnsActions = async (url) => {
    optionListAbilityStatus = close;
    abilityModalStatus = open;

    console.log(url);
    const abilityData = await fetchFunc(url);
    console.log(abilityData);

    abilityData.names.forEach((item) => {
        console.log(item);
        if (item.language.name === es) {
            currentAbilityOpen.es = item.name;
        } else if (item.language.name === en) {
            currentAbilityOpen.en = item.name;
        }
    });
    console.log(currentAbilityOpen);
    titleModalAbility.textContent = currentAbilityOpen[currentLang];

    const abilityFlavorsEn = [];
    const abilityFlavorsEs = [];
    abilityData.flavor_text_entries.forEach((abilityFlavor) => {
        /* console.log(abilityFlavor); */
        if (abilityFlavor.language.name === en) {
            abilityFlavorsEn.push({
                version: abilityFlavor.version_group.name,
                flavor: abilityFlavor.flavor_text,
            });
        } else if (abilityFlavor.language.name === es) {
            abilityFlavorsEs.push({
                version: abilityFlavor.version_group.name,
                flavor: abilityFlavor.flavor_text,
            });
        }
    });
    currentAbilityFlavors = {
        es: abilityFlavorsEs,
        en: abilityFlavorsEn,
    };

    animationIn(modal, block, 500);
    animationIn(abilityModal, block, 500);
};
const createOptionListAbilityBtns = () => {
    deleteArrElements(fragmentOptionListAbilityBtns);
    deleteChildElements(optionListBtnsContainerAbility);
    console.log(currentAbilityFlavors.es[0]);
    let thisFlavors;
    if (currentLang === en) {
        thisFlavors = currentAbilityFlavors.en;
    } else if (currentLang === es) {
        thisFlavors = currentAbilityFlavors.es;
    }
    titleAbilityFlavorsModal.textContent = properCase(thisFlavors[0].version);
    textAbilityFlavorsModal.textContent = thisFlavors[0].flavor;
    thisFlavors.forEach((abilityFlavor) => {
        const newCloneOptionListBtn = optionListAbilityBtnTemplate.cloneNode(true);
        const abilityOptionListBtn = newCloneOptionListBtn.querySelector(".option_list_ability_btn");
        abilityOptionListBtn.textContent = properCase(abilityFlavor.version);
        abilityOptionListBtn.setAttribute("data-name", abilityFlavor.version);
        console.log(abilityFlavor);

        fragmentOptionListAbilityBtns.appendChild(abilityOptionListBtn);
    });

    setTimeout(() => {
        optionListBtnsContainerAbility.appendChild(fragmentOptionListAbilityBtns);

        setTimeout(() => {
            abilityOptionListBtns = selectorAll(".option_list_ability_btn");
            abilityOptionListBtns.forEach((btn) => {
                console.log(btn.getAttribute("data-name"));
                btn.addEventListener("click", () => optionListAbilitiesActions(btn.getAttribute("data-name"), optionListAbilityStatus));
            });
        }, 250);
    }, 250);
};
const currentStats = {
    name: "Pokemon Stats",
    children: [],
};
const createPokeData = async (data) => {
    //^  DATA FIRST CHECK -- START//
    if (data) {
        if (optionListDescriptionsStatus === open) {
            closeOptionList("option_list_descriptions");
        }
        //¬ DELETE ALL POKEDATA -- START //
        deleteArrElements(pokemonTypesEn);
        deleteArrElements(pokemonTypesEs);
        deleteChildElements(optionListVarientsBtnsContainer);
        deleteChildElements(fragmentListVarieties);
        deleteArrElements(currentPokemonFlavors);
        deleteChildElements(optionListDescriptionsBtnsContainer);
        deleteChildElements(pokeDescriptionAbilitiesContainer);
        deleteArrElements(fragmentListDescriptions);

        searchInputNumber.value = "";
        searchInputNumber.value = "";
        //¬ DELETE ALL POKEDATA -- OVER //
        if (pokeImg.classList.contains("animation_spin")) {
            console.log("quitando clase de animacion de portal por primera vez");
            pokeImg.classList.remove("animation_spin");
        }
        //¬ BASIC POKE DATA -- START //
        const { name: dataName, id: dataId, height: pokemonHeight, weight: pokemonWeight, abilities, base_experience: pokemonExperience, held_items: pokemonHeldItems, stats } = data;

        // ! ! //
        /* console.log(pokemonExperience); */
        /* console.table(stats); */
        console.table(pokemonHeldItems);

        stats.forEach((type) => {
            /* console.log(type) */ currentStats.children.push({ name: type.stat.name, value: type.base_stat });
        });
        /* console.table(currentStats.children); */

        currentStats.children.forEach((item) => {
            /* console.log(item.name); */
            graphBars.forEach((bar) => {
                let graphStatValue = bar.querySelector(".graph_stat").getAttribute("data-value");
                let graphStatBarPorcentage = bar.querySelector(".graph_stat");
                let graphValue = bar.querySelector(".graph_value");
                if (item.name === graphStatValue) {
                    /* console.log(item) */ graphStatBarPorcentage.style.width = item.value * 3 + "px";
                    graphValue.textContent = item.value;
                }
            });
        });

        // ! //
        const watchContainer = () => {
            selectorAll(".graph_item").forEach((itemGraph) => {
                currentStats.children.forEach((item) => {
                    graphBars.forEach((bar) => {
                        let graphStatValue = bar.querySelector(".graph_stat").getAttribute("data-value");
                        let graphStatBarPorcentage = bar.querySelector(".graph_stat");

                        let thisStat = bar.querySelector(".extra_stat");
                        if (item.name === graphStatValue) {
                            /* console.log(windowWidth); */
                            /* console.log((itemGraph.getBoundingClientRect().width / 250) * item.value); */

                            if (item.value > 250) {
                                graphStatBarPorcentage.style.width = "100%";
                                thisStat.style.opacity = 1;
                                thisStat.textContent = `+${item.value - 250}`;
                            } else {
                                graphStatBarPorcentage.style.width = (itemGraph.getBoundingClientRect().width / 250) * item.value + "px";
                                thisStat.textContent = item.value;

                                thisStat.style.opacity = 0;
                            }
                        }
                    });
                });
            });
        };
        const resizeObserve = new ResizeObserver(watchContainer);
        resizeObserve.observe(graphContainer);

        //!  //
        // ! ! //

        const artworkImg = data.sprites.other["official-artwork"]["front_default"];
        speciesLink = data.species.url;
        //¬ BASIC POKE DATA -- OVER //

        // ! ARREGLAR NOMBRE FEMENINO Y MASCULINO -- START //
        const nameSplite = [];
        let nameErrorIndex = "";

        for (let x = 0; x < dataName.length; x++) {
            /* console.log(dataName[x]); */
            if (dataName[x] === "-") {
                nameErrorIndex = x;
                nameSplite.push(" ");
            } else {
                nameSplite.push(dataName[x]);
            }
        }

        // ! ARREGLAR NOMBRE FEMENINO Y MASCULINO -- OVER //

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
        // ¬ GENERATION DATA - START //
        if (generation) {
            const generationData = await fetchFunc(generation.url);
            const { id: generationID, main_region: generationRegion, version_groups: generationVersiones } = generationData;
        }
        // ¬ GENERATION DATA - OVER //

        // ¬ HABITAT  DATA - START //
        if (habitat) {
            const habitatData = await fetchFunc(habitat.url);
            /*  console.log(habitatData); */
            habitatData.names.forEach((item) => {
                if (item.language.name === es) {
                    habitatNameEs = properCase(item.name);
                } else if (item.language.name === en) {
                    habitatNameEn = properCase(item.name);
                }
            });
        } else if (habitat === null || habitat === none) {
            habitatNameEs = "Desconocida";
            habitatNameEn = "Unknown";
        }
        // ¬ HABITAT  DATA - OVER //

        // ¬ GENDER DATA - START //
        const pokeFemales = await fetchFunc(`https://pokeapi.co/api/v2/gender/1`);
        const pokeMales = await fetchFunc(`https://pokeapi.co/api/v2/gender/2`);
        const pokeGenderless = await fetchFunc(`https://pokeapi.co/api/v2/gender/3`);
        const pokeFemalesDetails = pokeFemales[`pokemon_species_details`];
        const pokeMalesDetails = pokeMales[`pokemon_species_details`];
        const pokeGenderlessDetails = pokeGenderless[`pokemon_species_details`];
        let whatGenders = [];
        /* console.log(genderDifferences + " Gender differences"); */
        pokeMalesDetails.forEach((list) => {
            switch (list[`pokemon_species`][`name`] === data.name) {
                case true:
                    /* console.log("este pokemon tiene genero masculino"); */
                    whatGenders.push("male");
                    break;
                case false:
                    break;
            }
        });
        pokeFemalesDetails.forEach((list) => {
            switch (list[`pokemon_species`][`name`] === data.name) {
                case true:
                    /* console.log("este pokemon tiene genero femenino"); */
                    whatGenders.push("female");
                    break;
                case false:
                    break;
            }
        });
        pokeGenderlessDetails.forEach((list) => {
            switch (list[`pokemon_species`][`name`] === data.name) {
                case true:
                    /* console.log("este pokemon no tiene genero"); */
                    whatGenders.push("genderless");
                    break;
                case false:
                    break;
            }
        });
        /* console.log(whatGenders, whatGenders.length); */

        if (whatGenders.length === 2) {
            maleIconActions(open);
            femaleIconActions(open);
            genderlessIconActions(close);
        } else if (whatGenders.length === 1) {
            switch (whatGenders[0]) {
                case "male":
                    maleIconActions(open);
                    femaleIconActions(close);
                    genderlessIconActions(close);
                    break;

                case "female":
                    maleIconActions(close);
                    femaleIconActions(open);
                    genderlessIconActions(close);
                    break;

                case "genderless":
                    maleIconActions(close);
                    femaleIconActions(close);
                    genderlessIconActions(open);
                    break;
            }
        }
        // ¬ GENDER DATA - OVER //
        console.log(isBaby, isLegendary, isMythical);
        if (isBaby === false && isLegendary === false && isMythical === false) {
            noneIconActions(open);
        }
        switch (isBaby) {
            case true:
                babyIconActions(open);
                noneIconActions(close);
                break;
            case false:
                babyIconActions(close);
                break;
        }
        switch (isLegendary) {
            case true:
                legendaryIconActions(open);
                noneIconActions(close);
                break;
            case false:
                legendaryIconActions(close);
                break;
        }
        switch (isMythical) {
            case true:
                mythicalIconActions(open);
                noneIconActions(close);
                break;
            case false:
                mythicalIconActions(close);
                break;
        }

        if (currentLang === es) {
            pokeDescriptionHabitat.textContent = habitatNameEs;
        } else if (currentLang === en) {
            pokeDescriptionHabitat.textContent = habitatNameEn;
        }

        //^^ REVISAR CONFIGURACION DE SISTEMA DE MEDICION  //
        currentPokemonHeight = pokemonHeight;
        currentPokemonWeight = pokemonWeight;

        currentMetricHeight = ConvertDecimals(pokemonHeight * 0.1);
        currentMetricWeight = ConvertDecimals(pokemonWeight * 0.1);
        // ! //
        if (currentMeasurmentSystem === metricSystem) {
            pokeDescriptionHeight.textContent = `${currentMetricHeight}m`;
            pokeDescriptionWeight.textContent = `${currentMetricWeight}Kg`;
        } else if (currentMeasurmentSystem === imperialSystem) {
            closeOptionList("option_list_measurments");
            currentMeasurmentSystem = imperialSystem;

            let howManyFeetsInPokemon = currentMetricHeight * feetsInMeter;
            // ! //

            console.log(currentMetricHeight + " Height");
            let decimals = `.${howManyFeetsInPokemon.toString().split(".")[1]}`;
            let howManyInchesInPokemon = Math.round((decimals / feetsInMeter) * inchesInMeters).toString();

            //^^ //

            if (howManyInchesInPokemon.length >= 2) {
                currentMetricHeight = `${parseInt(howManyFeetsInPokemon)}'${howManyInchesInPokemon}"`;
            } else if (howManyInchesInPokemon.length === 1) {
                currentMetricHeight = `${parseInt(howManyFeetsInPokemon)}'0${howManyInchesInPokemon}"`;
            }

            // ^^ //

            // ! //
            let lbsConvertion = currentMetricWeight * lbsInKg;
            currentMetricWeight = `${lbsConvertion.toFixed(1)}Lbs`;
            pokeDescriptionHeight.textContent = currentMetricHeight;
            pokeDescriptionWeight.textContent = currentMetricWeight;
        }

        // ! //

        //!  //
        /* console.log(abilities.length); */
        let timeOutFuncTime = 250;
        let abilitieBtnsCount = 0;
        abilities.forEach(async (ability) => {
            abilitieBtnsCount++;
            console.log(ability);
            //! checa el correcto fetch
            const abilitiesData = await fetchFunc(ability.ability.url);
            setTimeout(() => {
                console.log(abilitiesData);
                const newAbilityBtn = abilityBtnTemplate.cloneNode(true);
                const abilityBtn = newAbilityBtn.querySelector(".ability_btn");
                abilitiesData.names.forEach((abilitieNamesData) => {
                    if (currentLang === abilitieNamesData.language.name) {
                        console.log(abilitieNamesData.name);
                        abilityBtn.setAttribute("data-url", ability.ability.url);
                        abilityBtn.setAttribute("data-name", abilitieNamesData.name);
                        console.log(abilitiesData.flavor_text_entries);
                        abilityBtn.textContent = abilitieNamesData.name;
                    }
                });
                fragmentAbilityBtns.appendChild(newAbilityBtn);
            }, timeOutFuncTime);
        });
        setTimeout(() => {
            pokeDescriptionAbilitiesContainer.appendChild(fragmentAbilityBtns);
            setTimeout(() => {
                const abilityBtns = selectorAll(".ability_btn");
                abilityBtns.forEach((btn) => {
                    btn.addEventListener("click", async () => {
                        abilityBtnsActions(btn.getAttribute("data-url"));
                        setTimeout(() => {
                            createOptionListAbilityBtns();
                        }, 500);
                    });
                });
            }, 250);
        }, timeOutFuncTime * abilitieBtnsCount + 250);
        //!  //
        createEvoChainBtns(speciesLink);
        /* console.log(varieties.length); */
        if (varieties.length > 1) {
            /* console.log("este pokemon tiene variantes"); */
            const selectionListTemplateClone = selectionListTemplate.cloneNode(true);
            const newList = selectionListTemplateClone.querySelector(".option_list_btns_container");
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
                fragmentListVarieties.appendChild(newOptionBtn);
                //~~  */
            });
            newList.appendChild(fragmentListVarieties);

            optionListVarientsBtnsContainer.appendChild(selectionListTemplateClone);

            optionListVarients = selector("#option_list_varients");
            optionListVarientsArrow = selector("#arrow_btn_option_list_varients_svg");
            optionListVarientsBtns = selectorAll(".option_list_varients_btn");
            optionListVarientsBtns.forEach((btn) => {
                btn.addEventListener("click", async () => {
                    const actionName = btn.getAttribute("data-name");
                    if (actionName === openClose) {
                        optionListVarientsActions(optionListVarientsStatus);
                    } else if (actionName === "item") {
                        optionListVarientsActions(optionListVarientsStatus);
                        afterPokemon = data.id;
                        catchEmAll(btn.id);
                    }
                });
            });

            const timingAnimations = {
                duration: 750,
                iterations: 4,
                direction: "alternate",
                delay: 500,
                easeing: "ease-in-out",
            };
            const movementVarientsContainer = [{ top: "6rem" }, { top: "9rem" }];

            const movementVarientList = [{ background: "none" }, { background: "yellow" }];
            /*  optionListVarientsBtnsContainer.animate(movementVarientsContainer, timingAnimations);
            optionListVarients.animate(movementVarientList, timingAnimations); */
        } else if (varieties.length === 1) {
            /* console.log("este pokemon no tiene variantes"); */
        }
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

        evoData.chain.evolves_to.forEach((pokemon) => {
            console.log(pokemon);
            const pokemonEvoDetails = pokemon.evolution_details;
            console.log(pokemonEvoDetails);

            pokemonEvoDetails.forEach((evoTrigger) => {
                console.log(evoTrigger);
            });
        });

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
            const descriptionsBtns = selectorAll(".option_list_descriptions_btn");
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
                    pokeDescriptionNameVersion.textContent = properCase(changeFlavorTo[0].version.name);
                    pokeDescriptionVersion.innerHTML = changeFlavorTo[0].flavor_text.split("\n").join(" ");
                    optionListDescriptionsActions(optionListDescriptionsStatus);
                });
            });
        }, 100);
        /* console.log(flavorBtnsData); */
        pokeDescriptionNameVersion.textContent = properCase(flavorBtnsData[0].version.name);
        pokeDescriptionVersion.innerHTML = flavorBtnsData[0].flavor_text.split("\n").join(" ");

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
        let actualDate = "";
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
        if (date < 10) {
            actualDate = `0${date}`;
        } else {
            actualDate = date;
        }

        currentCompleteDate["year"] = year;
        currentCompleteDate["month_text"][es] = currentMonthOfTheYear[es];
        currentCompleteDate["month_text"][en] = currentMonthOfTheYear[en];
        currentCompleteDate["month_number"] = month + 1;
        currentCompleteDate["date"] = actualDate;
        if (hours < 10) {
            if (minutes < 10) {
                currentCompleteDate["time"] = `0${hours}:0${minutes}`;
            } else {
                currentCompleteDate["time"] = `0${hours}:${minutes}`;
            }
        } else {
            if (minutes < 10) {
                currentCompleteDate["time"] = `${hours}:0${minutes}`;
            } else {
                currentCompleteDate["time"] = `${hours}:${minutes}`;
            }
        }
        currentCompleteDate["short_date_text"][es] = `${actualDate}-${currentMonthOfTheYear[es]}-${year}`;
        currentCompleteDate["short_date_text"][en] = `${actualDate}-${currentMonthOfTheYear[en]}-${year}`;

        if (month + 1 < 10) {
            currentCompleteDate["short_date_number"] = `${actualDate}-0${month + 1}-${year}`;
        } else {
            currentCompleteDate["short_date_number"] = `${actualDate}-${month + 1}-${year}`;
        }
        currentCompleteDate["complete_date_es"] = `${currentDayOfTheWeek[es]} ${actualDate} ${currentMonthOfTheYear[es]} ${year}, ${hours}:${minutes}`;
        currentCompleteDate["complete_date_en"] = `${currentDayOfTheWeek[en]} ${actualDate} ${currentMonthOfTheYear[en]} ${year}, ${hours}:${minutes}`;
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
        pokeName.textContent = properCase(dataName);
        pokeId.textContent = dataId;
        //! CREACION DE ITEM PARA OBJETO POR SALVAR //
        setTimeout(() => {
            itemToSave = {
                id: dataId,
                name: dataName,
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
            lastSearched = dataId;

            searchInputName.value = "";
            console.log(itemToSave);
            //^SETING CARD BTN
            setTimeout(() => {
                const cardBtns = selectorAll(".card_btn");
                cardBtns.forEach((btn) => {
                    console.log(btn.getAttribute("data-name"));
                    btn.addEventListener("click", () => catchEmAll(btn.getAttribute("data-name")));
                });
            }, 2000);
        }, 250);
    }
    //^  DATA FIRST CHECK -- OVER//
};
const catchEmAll = async (id) => {
    switch (itsFirstPokemonSearch) {
        case true:
            itsFirstPokemonSearch = false;
            try {
                const data = await fetchFunc(pokeApi(id));
                console.log("Primera fetch data", data);
                createPokeData(data);
                break;
            } catch (error) {
                lunchAlert("name");
                currentPokemon = 1;
                console.log(error);
                searchInputName.value = "";
                searchInputNumber.value = "";
                break;
            }
        case false:
            try {
                const data = await fetchFunc(pokeApi(id));

                console.log("Primera fetch data", data);
                createPokeData(data);
                setTimeout(() => {
                    toThetop();
                }, 250);
                break;
            } catch (error) {
                lunchAlert("name");
                currentPokemon = lastSearched;
                console.log(error);
                searchInputName.value = "";
                searchInputNumber.value = "";
                break;
            }
    }
};
const searchFunction = () => {
    let myName = searchInputName.value.toLowerCase();
    let myNumber = searchInputNumber.value;
    if (itsFirstPokemonSearch === true) {
        itsFirstPokemonSearch = false;
    }
    if (myName === "" && myNumber === "") {
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
        case "lang_alert":
            if (langMenuModalAlertStatus === close) {
                langMenuModalAlertStatus = open;
                openMenu(langMenuModalAlert);
            } else if (langMenuModalAlertStatus === open) {
                langMenuModalAlertStatus = close;
                closeMenu(langMenuModalAlert);
            }
            break;
        case "lang_ability":
            if (langMenuModalAbilityStatus === close) {
                langMenuModalAbilityStatus = open;
                openMenu(langMenuModalAbility);
            } else if (langMenuModalAbilityStatus === open) {
                langMenuModalAbilityStatus = close;
                closeMenu(langMenuModalAbility);
            }
            break;
        case "lang_themes":
            if (langMenuModalThemesStatus === close) {
                langMenuModalThemesStatus = open;
                openMenu(langMenuModalThemes);
            } else if (langMenuModalThemesStatus === open) {
                langMenuModalThemesStatus = close;
                closeMenu(langMenuModalThemes);
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
                openMenu(langMenuModalFavAlert);
            } else if (langMenuModalfavAlertStatus === open) {
                langMenuModalfavAlertStatus = close;
                closeMenu(langMenuModalFavAlert);
            }
            break;
        case "lang_modal_delete_data_alert":
            if (langMenuModalDeleteDataAlertStatus === close) {
                langMenuModalDeleteDataAlertStatus = open;
                openMenu(langMenuModalDeleteDataAlert);
            } else if (langMenuModalDeleteDataAlertStatus === open) {
                langMenuModalDeleteDataAlertStatus = close;
                closeMenu(langMenuModalDeleteDataAlert);
            }
            break;
        case "lang_modal_edit_themes_alert":
            if (langMenuModalEditThemesAlertStatus === close) {
                langMenuModalEditThemesAlertStatus = open;
                openMenu(langMenuModalEditThemesAlert);
            } else if (langMenuModalEditThemesAlertStatus === open) {
                langMenuModalEditThemesAlertStatus = close;
                closeMenu(langMenuModalEditThemesAlert);
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
    if (option === openClose) {
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
    } else if (option === "delete") {
        animationIn(modalDeleteDataAlert, block, 1000);
        setTimeout(() => animationIn(alertModalDeleteDataAlert, block, 500), 1500);
        configMenuActions();
    } else {
        configMenuActions();
    }
};
//^ !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
const savePokemonFav = () => {
    const savedAnimation = () => {
        console.log("animacion de corazon");
        iconSave.style.translate = "50% -110%";
        iconSave.style.scale = "1.5";
        iconSave.style.opacity = "1";
        setTimeout(() => {
            iconSave.style.translate = "50% 50%";
            iconSave.style.opacity = "0";
            iconSave.style.scale = "1";
        }, 1000);
    };
    const savedErrorAnimation = () => {
        console.log("animacion de error de salvado");
        iconSaveError.style.translate = "50% -110%";
        iconSaveError.style.scale = "1.5";
        iconSaveError.style.opacity = "1";
        setTimeout(() => {
            iconSaveError.style.translate = "50% 50%";
            iconSaveError.style.opacity = "0";
            iconSaveError.style.scale = "1";
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
                    savedErrorAnimation();
                    console.log("No se salvo el pokemon, ya existe en la data");
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
    } else {
        savedErrorAnimation();
        console.log("No se puede salvar un elemento vacio");
    }
};
//! BOTONES DE ACENDENTE Y DECENDENTE SORT LIST - HACER FUNCION - START  */
const favCardBtnsActions = (btn) => {
    console.log(btn);
    console.log(btn.getAttribute("data-name"));
    console.log(btn.getAttribute("data-id"));
};
//! BOTONES DE ACENDENTE Y DECENDENTE SORT LIST - HACER FUNCION - OVER  */
const sortOrderBtnsConfiguration = (status) => {
    let newSortedObject = [];
    switch (status) {
        case "reset":
        case "sort_decendent":
            console.log("ordenar por decendente");
            sortBtns.forEach((btn) => {
                switch (btn.getAttribute("data-name")) {
                    case "sort_decendent":
                        btn.className = "config_btn sort_fav_btn active_config_btn";
                        break;
                    case "sort_acendent":
                        btn.className = "config_btn sort_fav_btn";
                        break;
                }
            });
            switch (currentSortedObjectType) {
                case sortedObjectTypeName:
                    newSortedObject = currentSortedObject.sort((a, b) => {
                        if (a.name > b.name) {
                            return 1;
                        }

                        if (a.name < b.name) {
                            return -1;
                        }
                    });
                    break;

                case sortedObjectTypeId:
                    newSortedObject = currentSortedObject.sort((a, b) => {
                        if (a.id > b.id) {
                            return 1;
                        }

                        if (a.id < b.id) {
                            return -1;
                        }
                    });
                    break;

                case sortedObjectTypeType:
                    if (currentLang === es) {
                        newSortedObject = currentSortedObject.sort((a, b) => {
                            if (a.types.es[0] > b.types.es[0]) {
                                return 1;
                            }
                            if (a.types.es[0] < b.types.es[0]) {
                                return -1;
                            }
                        });
                    } else if (currentLang === en) {
                        newSortedObject = currentSortedObject.sort((a, b) => {
                            if (a.types.en[0] > b.types.en[0]) {
                                return 1;
                            }

                            if (a.types.en[0] < b.types.en[0]) {
                                return -1;
                            }
                        });
                    }
                    break;
                case sortedObjectTypeDate:
                    newSortedObject = currentSortedObject.sort((a, b) => {
                        if (a.date > b.date) {
                            return 1;
                        }

                        if (a.date < b.date) {
                            return -1;
                        }
                    });
                    break;
            }
            switch (status) {
                case "sort_decendent":
                    deleteChildElements(fragmentFavCards);
                    deleteChildElements(favCardsContainer);
                    if (optionListFavStatus === open) {
                        optionListFavActions(optionListFavStatus);
                    }
                    newSortedObject.forEach((item) => {
                        createFavCard(item.id, item.name, item.types, item.date, item.sprites);
                    });
                    setTimeout(() => {
                        favCardsContainer.appendChild(fragmentFavCards);
                        setTimeout(() => {
                            createFavCardBtns();
                        }, 100);
                    }, 100);
                    break;
            }
            break;

        case "sort_acendent":
            console.log("ordenar por acendente");
            sortBtns.forEach((btn) => {
                switch (btn.getAttribute("data-name")) {
                    case "sort_acendent":
                        btn.className = "config_btn sort_fav_btn active_config_btn";
                        break;
                    case "sort_decendent":
                        btn.className = "config_btn sort_fav_btn";
                        break;
                }
            });
            newSortedObject = [...currentSortedObject].reverse();

            deleteChildElements(fragmentFavCards);
            deleteChildElements(favCardsContainer);
            if (optionListFavStatus === open) {
                optionListFavActions(optionListFavStatus);
            }
            newSortedObject.forEach((item) => {
                createFavCard(item.id, item.name, item.types, item.date, item.sprites);
            });
            setTimeout(() => {
                favCardsContainer.appendChild(fragmentFavCards);
                setTimeout(() => {
                    createFavCardBtns();
                }, 100);
            }, 100);
    }

    console.log(currentSortedObject, newSortedObject, currentSortedObjectType);
};
const createCurrentSortPokemonFav = (list) => {
    sortOrderBtnsConfiguration("reset");

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
        animationIn(modal, block, 500);
        setTimeout(() => animationIn(favModal, block, 500), 1000);
        updatePokedex();
        setTimeout(() => {
            if (storagePokedex[storageSaved].length >= 1) {
                console.log("existen salvados en storage");
                switch (currentSortedObject.length >= 1) {
                    case true:
                        console.log("existe current sorted object");
                        createCurrentSortPokemonFav(currentSortedObject);

                        break;
                    case false:
                        console.log("no existe current sorted object, creando nueva lista");
                        sortedByDate = storagePokedex[storageSaved].sort((a, b) => {
                            if (a.date["short_date_number"] < b.date["short_date_number"]) {
                                if (a.date.time < b.date.time) {
                                    return -1;
                                }
                            }
                        });
                        console.log(sortedByDate);
                        currentSortedObject = sortedByDate;
                        currentSortedObjectType = sortedObjectTypeDate;
                        console.log(currentSortedObject);

                        if (currentLang === en) {
                            sortedText.textContent = "Sort By: ";
                            subtitlefavModal.textContent = "Date";
                        } else if (currentLang === es) {
                            subtitlefavModal.textContent = "Fecha";
                            sortedText.textContent = "Ordenado Por: ";
                        }
                        setTimeout(() => {
                            createCurrentSortPokemonFav(currentSortedObject);
                            /*  setTimeout(() => {
                                console.log(favModal.clientHeight);
                                console.log(BODY.clientWidth);
                                const contentModalHeightFix = favModal.clientHeight - ConvertDecimals(BODY.clientHeight * 0.1) - 100;
                                console.log(contentModalHeightFix);
                                favCardsContainer.style.height = ` ${contentModalHeightFix}px`;
                            }, 500); */
                        }, 250);
                        break;
                    default:
                        console.log("este mensaje no deberia de salir, error en la creacion de currentSortedObject");
                        break;
                }
            } else {
                console.log("no existen salvados en storage");
            }
        }, 250);
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
        animationIn(modal, block, 500);
        setTimeout(() => animationIn(themesModal, block, 500), 1500);
    } else if (themeModalStatus === open) {
        themeModalStatus = close;
        animationOut(themesModal, 500);
        setTimeout(() => {
            animationOut(modal, 1000);
        }, 1500);
    }
};
const updatePokedex = () => {
    storagePokedex = JSON.parse(localStorage.getItem(DB_NAME));
    /* console.log("Pokedex Updated"); */
};
const savePokedex = () => {
    localStorage.setItem(DB_NAME, JSON.stringify(storagePokedex));
    console.log("Storage Updated", JSON.parse(localStorage.getItem(DB_NAME)));
};
//^^ ************************************************************************** *//
const personalizedProperty = (id, propertyName, propertyValue) => {
    const currentItem = selector(`.${id}`);
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
        let cloneTemplate = personalizedThemeBtnTemplate.cloneNode(true);
        let btn = cloneTemplate.querySelector(".personalized_theme_btn");
        btn.textContent = theme.name;
        btn.setAttribute("data-name", theme.name);
        fragmentPersonalizedThemeBtns.appendChild(cloneTemplate);
    });
    personalizedBtnsContainer.appendChild(fragmentPersonalizedThemeBtns);
    const personalizedThemeBtns = selectorAll(".personalized_theme_btn");
    personalizedThemeBtns.forEach((btn) => btn.addEventListener("click", () => changePersonalizedTheme(btn.getAttribute("data-name"))));
};
const checkStorageAnswer = () => {
    console.log(window.navigator.language);
    if (window.navigator.language === "es" || (window.navigator.language[0] === "e" && window.navigator.language[1] === "s" && window.navigator.language[2] === "-")) {
        console.log("navegador en idioma español");
        changeLang(es);
    } else {
        console.log("navegador en otro idioma no español");
        changeLang(en);
    }
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
    if (storageContent && storageContent && storageContent[storageThemeSaved]["tag"] === personalizedT) {
        console.log(storageContent[storageThemeSaved]);
        BODY.className = personalizedT;

        console.log(storageContent[storageThemeSaved]);
        console.log(storageContent[storageThemeSaved].name);
        storageContent[storageThemes].forEach((theme) => {
            console.log(theme);
            if (storageContent[storageThemeSaved].name === theme.name) {
                console.log(theme);
                currentPersonilizedTheme = theme;
                personalizedProperty(personalizedT, `--bgColor`, theme["bgColor"]);
                personalizedProperty(personalizedT, `--firstColor`, theme["firstColor"]);
                personalizedProperty(personalizedT, `--textColor`, theme["textColor"]);
                personalizedProperty(personalizedT, `--bgAccent`, theme["bgAccent"]);
            }
        });
    } else if (storageContent && storageContent && storageContent[storageThemeSaved]["tag"] !== personalizedT) {
        changeBasicTheme(storageContent[storageThemeSaved]["tag"]);
    }
};
checkStorageAnswer();

//^^ ************************************************************************** *//
const themeCardBtnActions = () => {
    const actionBtns = selectorAll(".personalized_theme_card_action");
    actionBtns.forEach((btn) => {
        btn.addEventListener("click", () => {
            console.log(btn.getAttribute("data-name"));
            if (btn.getAttribute("data-name") === "edit_theme") {
                oldTheme = BODY.className;
                BODY.className = personalizedT;
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

                        personalizedProperty(personalizedT, `--bgColor`, item.bgColor);
                        personalizedProperty(personalizedT, `--textColor`, item.textColor);
                        personalizedProperty(personalizedT, `--firstColor`, item.firstColor);
                        personalizedProperty(personalizedT, `--bgAccent`, item.bgAccent);
                    }
                });
                setTimeout(() => {
                    animationIn(editPersonalizedThemeModal, block);
                    editPersonalizedThemeModalStatus = open;
                }, 1000);
            } else if (btn.getAttribute("data-name") === "delete_theme") {
                console.log("eliminar theme");

                currentDeletingTheme = btn.getAttribute("data-id");
                nameAlertModalEditThemes.textContent = btn.getAttribute("data-id");
                animationIn(modalEditThemes, block, 500);
                setTimeout(() => {
                    animationIn(alertModalEditThemes, block, 500);
                    alertModalEditThemesStatus = open;
                }, 1500);
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

    let labelBg = cloneCard.querySelector(".name_data_bg");
    let labelText = cloneCard.querySelector(".name_data_text");
    let labelFirstColor = cloneCard.querySelector(".name_data_firstColor");
    let labelBgAccent = cloneCard.querySelector(".name_data_bgAccent");

    editBtn.setAttribute("data-id", data.name);
    deleteBtn.setAttribute("data-id", data.name);
    nameCard.textContent = data.name;
    if (currentLang === es) {
        labelBg.textContent = "Fondo";
        labelText.textContent = "Texto";
        labelFirstColor.textContent = "Acento";
        labelBgAccent.textContent = "Tarjetas";
    } else if (currentLang === en) {
        labelBg.textContent = "Background";
        labelText.textContent = "Text";
        labelFirstColor.textContent = "Accent";
        labelBgAccent.textContent = "Cards";
    }

    backgroundColor.style.background = data.bgColor;
    textColor.style.background = data.textColor;
    accentColor.style.background = data.firstColor;
    menuColor.style.background = data.bgAccent;
    fragmentThemeCards.appendChild(cloneCard);
};
const personalizedThemeActionsBtnsActions = (tm) => {
    if (tm === "new_theme") {
        oldTheme = BODY.className;
        BODY.className = personalizedT;
        setCurrentColors();
        animationOut(themesModal);
        themeModalStatus = close;
        setTimeout(() => {
            animationIn(personalizedThemeModal, block);
            personalizedThemeModalStatus = open;
        }, 1500);
    } else if (tm === "edit_themes") {
        deleteChildElements(themeCardsContainer);
        console.log("checando edit");
        updatePokedex();
        const currentThemes = storagePokedex.page_themes;
        currentThemes.forEach((theme) => {
            createThemeCard(theme);
        });
        animationOut(themesModal);
        themeModalStatus = close;
        setTimeout(() => {
            themeCardsContainer.appendChild(fragmentThemeCards);
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
        animationOut(themesModal);
        setTimeout(() => {
            animationOut(modal);
        }, 1000);
    } else if (action === cancel) {
        themeModalStatus = close;
        BODY.className = oldTheme;
        deletePersonalizedTheme();
        animationOut(themesModal);
        setTimeout(() => {
            animationOut(modal);
        }, 1000);
    } else if (action === save) {
        themeModalStatus = close;
        storagePokedex[storageThemeSaved] = currentPersonilizedTheme;
        savePokedex();
        animationOut(themesModal);
        setTimeout(() => {
            animationOut(modal);
        }, 1000);
    }
};
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
            deleteChildElements(themeCardsContainer);
            deleteArrElements(fragmentThemeCards);
            console.log(nameInputEditPersonalizedTheme.value);

            storagePokedex[storageThemes].forEach((item) => {
                if (item.name === currentEditingTheme) {
                    item.name = properCase(nameInputEditPersonalizedTheme.value);

                    item.bgColor = bgColorPikerEditPersonalizedTheme.value;
                    item.firstColor = firstColorPikerEditPersonalizedTheme.value;
                    item.textColor = textColorPikerEditPersonalizedTheme.value;
                    item.bgAccent = bgAccentPikerEditPersonalizedTheme.value;

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
            console.log(storageContent[storageThemeSaved]);
            /*   if (storageContent[storageThemeSaved] !== {}) {
                storageContent[storageThemeSaved].name;
                console.log(storageContent[storageThemeSaved]);
                const temaSalvadoPrueba = storageContent[storageThemes].filter((theme) => (theme.name === storageContent[storageThemeSaved].name ? theme : console.log("error en checar tema anterior despues de salvar personalizado")));
                console.log(temaSalvadoPrueba);
            } */
            setTimeout(() => {
                BODY.className = oldTheme;
                themeCardsContainer.appendChild(fragmentThemeCards);
                animationIn(editPersonalizedThemesModal, block);
                editPersonalizedThemesModalStatus = open;
                setTimeout(() => {
                    themeCardBtnActions();
                }, 500);
            }, 1000);
        } else {
            animationOut(personalizedThemeModal);
            pastModal = personalizedThemeModal;
            setTimeout(() => {
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
const pikerThemeActionBtns = (action) => {
    console.log(action);
    if (action === cancel) {
        console.log("Tema personalizado cancelado");
        deletePersonalizedTheme();
        BODY.className = oldTheme;
        animationOut(personalizedThemeModal);
        setTimeout(() => {
            animationIn(themesModal, block);
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
                animationIn(themesModal, block);
            }, 1000);
        } else {
            animationOut(personalizedThemeModal);
            pastModal = personalizedThemeModal;
            setTimeout(() => {
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
    /* console.log(action); */
    switch (action) {
        case "close_fav":
            console.log(action);
            animationOut(favModal);
            setTimeout(() => animationOut(modal), 500);
            favModalStatus = close;
            break;
        case "close_ability_modal":
            switch (optionListAbilityStatus) {
                case open:
                    console.log("la lista de opciones de abilidades esta abierta, se procede a cerrarla");
                    closeOptionList("option_list_ability");
                    break;
                case close:
                    console.log("la lista de opciones de abilidades esta cerrada");
                    break;
            }
            console.log(action);
            abilityModalStatus = close;
            animationOut(abilityModal);
            setTimeout(() => animationOut(modal), 500);
            break;
        case "close_theme":
            console.log(action);
            themeModalStatus = close;
            animationOut(themesModal);
            setTimeout(() => animationOut(modal), 500);
            break;
        case "close_personalized_theme":
            console.log(action);
            deletePersonalizedTheme();
            personalizedThemeModalStatus = close;
            themeModalStatus = close;
            BODY.className = oldTheme;
            animationOut(personalizedThemeModal);
            setTimeout(() => animationOut(modal), 500);
            break;
        case "close_edit_personalized_themes":
            console.log(action);
            editPersonalizedThemesModalStatus = close;
            themeModalStatus = close;
            animationOut(editPersonalizedThemesModal);
            setTimeout(() => animationOut(modal), 500);
            break;
    }
};
const alertModalEditThemesActions = (option) => {
    switch (option) {
        case "accept_modal_edit_themes":
            deleteChildElements(fragmentThemeCards);
            deleteChildElements(themeCardsContainer);
            console.log(currentDeletingTheme);
            const newThemes = [];

            storagePokedex[storageThemes].forEach((item) => {
                if (item.name !== currentDeletingTheme) {
                    newThemes.push(item);
                }
            });

            setTimeout(() => {
                console.log(newThemes);
                storagePokedex[storageThemes] = newThemes;
                const currentThemes = storagePokedex[storageThemes];
                currentThemes.forEach((theme) => {
                    createThemeCard(theme);
                });
                savePokedex();
                animationOut(alertModalEditThemes);
                alertModalEditThemesStatus = close;
                setTimeout(() => {
                    themeCardsContainer.appendChild(fragmentThemeCards);

                    animationOut(modalEditThemes);
                    setTimeout(() => themeCardBtnActions(), 500);
                }, 1000);
            }, 500);
            console.log(option);
            break;
        case "cancel_modal_edit_themes":
            console.log(option);
            animationOut(alertModalEditThemes);
            alertModalEditThemesStatus = close;
            setTimeout(() => {
                animationOut(modalEditThemes);
            });
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
        /* console.log(target); */
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

themeActionBtns.forEach((btn) => {
    btn.addEventListener("click", () => themeActionsBtnsActions(btn.getAttribute("data-name")));
});
personalizedActionBtns.forEach((btn) => {
    btn.addEventListener("click", () => personalizedThemeActionsBtnsActions(btn.getAttribute("data-name")));
});
alertModalEditThemesBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        alertModalEditThemesActions(btn.getAttribute("data-name"));
    });
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
optionListMeasurmentsBtns.forEach((btn) => {
    btn.addEventListener("click", () => optionListMeasurmentsActions(btn.getAttribute("data-name")));
});

optionListAbilitySearchBtn.addEventListener("click", optionListAbilitySearchBtnActions);
optionListFavBtns.forEach((btn) => {
    btn.addEventListener("click", () => optionListFavOptionActions(btn.getAttribute("data-name")));
});
//^ ||||||||||||||||||||||||||||||||||||||||||||||||||||||//
//^ SOLUCIONAR LOS ACOMODOS EN LAS TARJETAS DE FAVORITOS  //
//^ ||||||||||||||||||||||||||||||||||||||||||||||||||||||//
const alertModalDeleteDataActions = (action) => {
    console.log(action);
    switch (action) {
        case "accept":
            localStorage.removeItem(DB_NAME);
            console.log("Borrando localStorage");
            animationOut(alertModalDeleteDataAlert);
            setTimeout(() => {
                animationOut(modalDeleteDataAlert);
                setTimeout(() => window.location.reload(), 500);
            }, 1000);

            break;
        case "cancel":
            console.log("Cancelado Borrado de local Storage");
            animationOut(alertModalDeleteDataAlert);
            setTimeout(() => animationOut(modalDeleteDataAlert), 1000);
            break;
    }
};
sortBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        if (optionListFavStatus === open) {
            optionListFavStatus = close;
            optionListFavArrow.style.transform = "rotate(0)";
            optionListFav.style.height = "3rem";
        }

        sortOrderBtnsConfiguration(btn.getAttribute("data-name"));
    });
});
alertModalDeleteDataAlertBtns.forEach((btn) => {
    btn.addEventListener("click", () => alertModalDeleteDataActions(btn.getAttribute("data-name")));
});
//! |||||||||||||||||||||//
//!  ADD EVENT LISTENERS //
//! |||||||||||||||||||||//

acceptBtnAlertModal.addEventListener("click", () => {
    console.log("click activo");
    if (langMenuModalAlertStatus === open) {
        langMenuModalAlertStatus = close;
        closeMenu(langMenuModalAlert);
    }
    animationOut(alertModal);
    setTimeout(() => animationOut(modal), 500);
});
cancelEditThemesBtn.addEventListener("click", () => {
    animationOut(editPersonalizedThemesModal, 500);
    editPersonalizedThemesModalStatus = close;
    setTimeout(() => {
        animationIn(themesModal, block, 1000);
        themeModalStatus = open;
    }, 1500);
});
searchBtn.addEventListener("click", searchFunction);
searchInputNumber.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        searchFunction();
    }
});
searchInputName.addEventListener("keypress", (e) => {
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
selector("#top_btn").addEventListener("click", toThetop);
