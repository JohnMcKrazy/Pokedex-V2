//^^BASIC FUNCTION ANIMATION-- OVER
//^ ************************************************************************* *//

//^^SPINNERS LOADER OBSERVER--START
loadersContainers.forEach((loader) => {
    const watchCardsContainers = ([entry]) => {
        const dataNameContainer = entry.target.attributes["data-name"].value;
        if (entry.isIntersecting && dataNameContainer === "loader_cards_hot_container") {
            animateItem(spinnerHotCardsContainer, "0", "translateY(-4rem)");
            setTimeout(() => {
                loaderSearchCardsContainer.style.display = "none";
                createProjectCardHot();
                setTimeout(() => {
                    loadersObserver.unobserve(spinnerHotCardsContainer);
                }, 500);
            }, 1200);
        } else if (entry.isIntersecting && dataNameContainer === "loader_cards_search_container") {
            animateItem(spinnerSearchCardContainer, "0", "translateY(-4rem)");
            setTimeout(() => {
                loaderHotCardsContainer.style.display = "none";

                createProjectCardRandom();
                setTimeout(() => {
                    loadersObserver.unobserve(spinnerSearchCardContainer);
                }, 500);
            }, 1200);
        }
    };
    const optionsIO_loaders = {
        threshold: ".5",
    };
    const loadersObserver = new IntersectionObserver(watchCardsContainers, optionsIO_loaders);
    loadersObserver.observe(loader);
});
//^^SPINNERS LOADER OBSERVER--OVER
