import React, { useState } from "react";
import UserInput from "./components/UserInput/UserInput";
import UserData from "./components/UserData/UserData";
import Layout from "./components/UI/Layout";
import ErrorCatcher from "./components/ErrorCatcher/ErrorCatcher";
import "./App.css";

function App() {
  const [dataArr, setDataArr] = useState([{un: "Murad", ua: 19, id: "murmur"}]);
  const [isError, setError] = useState(false);

  const getData = (data) => {
    setDataArr((prev) => [data, ...prev]);
  };

  const deleteItem = ID =>
  {
    setDataArr(prevGoals => {
      const updatedGoals = prevGoals.filter(i => i.id !== ID);
      return updatedGoals;
    });
  }

  return (
    <Layout>
      {isError && <ErrorCatcher errorSetter={setError} />}
      <UserInput errorSetter={setError} getData={getData} />
      {dataArr.map((i) => (
        <UserData key={i.id} id={i.id} User-Name={i.un} User-Age={i.ua} DeleteItem={deleteItem}/>
      ))}
    </Layout>
  );
}

export default App;
