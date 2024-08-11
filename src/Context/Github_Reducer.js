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
      return {
        ...state,
        Users: [],
      };
    case "Get_User":
      return {
        ...state,
        User: action.payload,
        isloadind: false,
      
      };
      case "Get_repos":
        return{

          ... state,
          isloadind:false,
          repos:action.payload
        }
    default:
      return state;
  }
};
export default GithubReducer;
