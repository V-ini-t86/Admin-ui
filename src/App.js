import { useEffect, useState } from "react";
import "./App.css";
import HeadList from "./Components/List/HeadList";
import PageBar from "./Components/PageBar/PageBar";
import SearchBar from "./Components/SearchBar/SearchBar";

function App() {
  const [adminData, setAdminData] = useState();
  // Fetch the data through the API -> adminData
  useEffect(() => {
    fetch(
      "https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json"
    )
      .then((res) => res.json())
      .then(
        (result) => {
          setAdminData(result);
        },
        (error) => {
          console.log(error);
        }
      );
  }, []);

  return (
    <div className="App">
      <h1>Admin UI</h1>
      <SearchBar />
      <HeadList data={adminData} />
      <PageBar />
    </div>
  );
}

export default App;
