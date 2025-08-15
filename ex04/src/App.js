import "./App.css";
import { useState } from "react";
import Main from "./components/main";
import UserName from "./components/userName";

function App() {
  <UserName/>
  const [user, setUser] = useState(["A", "B", "C"]);

  const addUser = (newUser) => {
    setUser([...user, newUser]);
  };

  const deleteUser = (index) => {
    const newUser = [...user];
    newUser.splice(index, 1);
    setUser(newUser);
  };

  return (
    <div className="App">
      <h2>Thêm phần tử</h2>
      <button onClick={() => addUser("DONG")}>Add</button>

      <h2>Xóa phần tử</h2>
      <button onClick={() => deleteUser(1)}>Delete</button>

      <h2>List</h2>
      <Main data={user} />

      
    </div>
  );
}

export default App;