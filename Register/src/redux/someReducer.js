import { connect } from "react-redux";

const someReducer = ({ data, dispatchSomeAction }) => {
  // Use the data from the Redux state
  console.log(data);

  // Dispatch the "SOME_ACTION" when needed
  const handleButtonClick = () => {
    dispatchSomeAction([
      /* some data */
    ]);
  };

  return (
    <div>
      <button onClick={handleButtonClick}>Dispatch Action</button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  data: state.some.data, // Accessing the data from the someReducer slice
});

const mapDispatchToProps = (dispatch) => ({
  dispatchSomeAction: (payload) => dispatch({ type: "SOME_ACTION", payload }),
});

export default connect(mapStateToProps, mapDispatchToProps)(someReducer);
