export default (state = {}, action) => {
  switch (action.type) {
    case "TEAMS_LOADED":
      return {
        ...state,
        teams: action.payload.teams
      };
    case "TEAM_ADDED":
      return {
        ...state,
        inProgess: false,
        errors: action.error ? action.payload : null
      };
    default:
      return state;
  }
};
