const Main = (props) => {
    console.log(props);
    return (
      <div>
        {props.data.map((item) => (
          <h3>{item}</h3>
        ))}
      </div>
    );
  };
  
  export default Main;