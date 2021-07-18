export const initialState = {
  adminData: [],
  selectedItems: [],
  searchData: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "SEARCH_IN_LIST":
      let sd = action.searchData;
      const filterData = state.adminData.filter((val, i) => {
        return val.name.toLowerCase().indexOf(sd.toLowerCase()) !== -1;
      });
      console.log(state.adminData);
      return { ...state, adminData: filterData };
    case "SEARCH_IN_LIST_BY_EMAIL":
      let sde = action.searchData;
      const filterDataByEmail = state.adminData.filter((val, i) => {
        return val.email.toLowerCase().indexOf(sde.toLowerCase()) !== -1;
      });
      return { ...state, adminData: filterDataByEmail };
    case "SEARCH_IN_LIST_BY_ROLE":
      let sdr = action.searchData;
      const filterDataByRole = state.adminData.filter((val, i) => {
        return val.role.toLowerCase().indexOf(sdr.toLowerCase()) !== -1;
      });
      return { ...state, adminData: filterDataByRole };

    case "DELETE_SINGLE_ITEM":
      let deleteId = action.id;
      const deleteFilter = state.adminData.filter((val) => {
        return val.id !== deleteId;
      });
      return { ...state, adminData: deleteFilter };

    case "DELETE_MULTIPLE_ITEM":
      console.log(state.selectedItems);
      break;
    default:
      break;
  }
}

export default reducer;
