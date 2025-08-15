import UserInfo from "./user";
function UserName() {
    const user = {
        name: "Kane",
        age: 20
      }
      return (
        <div className="App">
          <UserInfo user={user} />
        </div>
      );
}


export default UserName;
