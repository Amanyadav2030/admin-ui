export const reducer = (state, action) => {
    switch (action.type) { 
      case "GET_USERS_LOADING":
        return {
          ...state,
          loading: true,
        };
        case "GET_USERS_ERROR":
        return {
            ...state,
            loading: false,
            error:true,
        };
        case "GET_USERS_SUCCESS":
          return {
              ...state,
              loading: false,
              error:false,
              data:[...action.payload],   
          };
        case "ADD_PAGE_SUCCESS":
          return {
              ...state,
              loading: false,
              error:false,
              pageData:[...action.payload]
          };
      default:
        return state;
    }
  };