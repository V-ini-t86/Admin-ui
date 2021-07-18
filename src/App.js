import "./App.css";
import { useState, useEffect } from "react";
import HeadList from "./Components/List/HeadList";
import PageBar from "./Components/PageBar/PageBar";
import SearchBar from "./Components/SearchBar/SearchBar";
import StateProvider from "./StateProvider";
import reducer, { initialState } from "./Components/Logic/Logic";
function App() {
  const [adminData, setAdminData] = useState();
  const [change, setChange] = useState(true);
  // Fetch the data through the API -> adminData
  useEffect(() => {
    fetch(
      "https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json"
    )
      .then((res) => res.json())
      .then(
        (result) => {
          initialState.adminData = result;
          setAdminData(result);
        },
        (error) => {
          console.log(error);
        }
      );
  }, [change]);

  const onChangeHandler = () => {
    setChange((prev) => !prev);
  };

  console.log(adminData);

  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <div className="App">
        <h1>Admin UI</h1>
        <SearchBar onChange={onChangeHandler} />
        <HeadList />
        <PageBar />
      </div>
    </StateProvider>
  );
}

export default App;
