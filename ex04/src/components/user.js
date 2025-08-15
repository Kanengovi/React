const UserInfo = (props) => {
    return (
      <div>
        <h3>Name: {props.user.name}</h3>
        <h3>Age: {props.user.age}</h3>
      </div>
    );
  };
  
  export default UserInfo;