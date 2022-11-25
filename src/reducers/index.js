const initialState = {
  heroes: [],
  heroesLoadingStatus: "idle",
  filters: [],
  filtersLoadingStatus: "idle",
  activeFilter: "all",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "HEROES_FETCHING":
      return {
        ...state,
        heroesLoadingStatus: "loading",
      };
    case "HEROES_FETCHED":
      return {
        ...state,
        heroes: action.payload,
        heroesLoadingStatus: "idle",
      };
    case "HEROES_FETCHING_ERROR":
      return {
        ...state,
        heroesLoadingStatus: "error",
      };
    case "FILTERS_FETCHING":
      return {
        ...state,
        heroesLoadingStatus: "loading",
      };
    case "FILTERS_FETCHED":
      return {
        ...state,
        filters: action.payload,
        heroesLoadingStatus: "idle",
      };
    case "FILTERS_FETCHING_ERROR":
      return {
        ...state,
        heroesLoadingStatus: "error",
      };
    case "ACTIVE_FILTER_CHANGED":
      return {
        ...state,
        activeFilter: action.payload,
      };
    case "HERO_DELETED":
      return {
        ...state,
        heroes: state.heroes.filter((hero) => hero.id !== action.payload),
      };
    case "HERO_CREATED":
      return {
        ...state,
        heroes: [...state.heroes, action.payload],
        filtersLoadingStatus: "idle",
      };
    default:
      return state;
  }
};

export default reducer;
