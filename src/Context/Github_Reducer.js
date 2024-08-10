const GithubReducer = (state, action) => {
  switch (action.type) {
    case "Get_Users":
      return {
      ...state,
        Users: action.payload,
        isloadind: false,
      };

    case "Set_Loading":
      return {
        ...state,
        isloadind: true,
      };

    case "Clear_User":
      return{
        ...state,
        Users:[]
      }
    default:
      return state;
  }
};
export default GithubReducer;
