import "./App.css";
import Grandpa from "./Components/Granpa/Grandpa";
// import ReusableForm from "./Components/ReusableForm/ReusableForm";
// import HookForm from "./Components/HookForm/HookForm";
// import RefForm from "./Components/refForm/RefForm";
// import SimpleForm from "./Components/SimpleForm/SimpleForm";
// import StateFulForm from "./StateFulForm/StateFulForm";

function App() {
  // const handleSingUpSubmit = (data) => {
  //   console.log("Sign Up data", data);
  // };

  // const handleProfileUpdate = (data) => {
  //   console.log("Profile Update data", data);
  // };

  return (
    <>
      <h1>Form Master</h1>

      <Grandpa></Grandpa>

      {/* <SimpleForm></SimpleForm> */}
      {/* <StateFulForm></StateFulForm> */}
      {/* <RefForm></RefForm> */}
      {/* <HookForm></HookForm> */}
      {/* <ReusableForm handleSubmit={handleSingUpSubmit} formTitle={"Sign Up"}>
        <div>
          <h2>Sign Up</h2>
          <p>Please Sign Up Right Now</p>
        </div>
      </ReusableForm>
      <ReusableForm
        handleSubmit={handleProfileUpdate}
        formTitle={"Profile Update"}
        submitBtnText="Update"
      >
        <div>
          <h2>Profile Update</h2>
          <p>Always Keep Your Profile Update</p>
        </div>
      </ReusableForm> */}
    </>
  );
}

export default App;
