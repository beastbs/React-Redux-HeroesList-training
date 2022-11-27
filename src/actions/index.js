export const fetchHeroes = (request) => (dispatch) => {
  dispatch(heroesFetching());
  request("http://localhost:3001/heroes")
    .then((heroes) => dispatch(heroesFetched(heroes)))
    .catch(() => dispatch(heroesFetchingError()));
};

export const fetchingFilters = (request) => (dispatch) => {
  dispatch(filtersFetching());
  request("http://localhost:3001/filters")
    .then((data) => dispatch(filtersFetched(data)))
    .catch(() => dispatch(filtersFetchingError()));
};

export const heroesFetching = () => {
  return {
    type: "HEROES_FETCHING",
  };
};

export const heroesFetched = (heroes) => {
  return {
    type: "HEROES_FETCHED",
    payload: heroes,
  };
};

export const heroesFetchingError = () => {
  return {
    type: "HEROES_FETCHING_ERROR",
  };
};

export const filtersFetching = () => {
  return {
    type: "FILTERS_FETCHING",
  };
};

export const filtersFetched = (filters) => {
  return {
    type: "FILTERS_FETCHED",
    payload: filters,
  };
};

export const filtersFetchingError = () => {
  return {
    type: "FILTERS_FETCHING_ERROR",
  };
};

export const activeFilterChanged = (filter) => (dispatch) => {
  // Используя thunk-middleware - dispatch приходит сюда автоматически
  setTimeout(() => {
    dispatch({
      type: "ACTIVE_FILTER_CHANGED",
      payload: filter,
    });
  }, 500);
};

export const heroDeleted = (id) => {
  return {
    type: "HERO_DELETED",
    payload: id,
  };
};

export const heroCreated = (hero) => {
  return {
    type: "HERO_CREATED",
    payload: hero,
  };
};
