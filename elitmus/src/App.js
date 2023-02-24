import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import Live from "./components/Live";
import { BrowserRouter as Router, Routes, Route, Link ,Navigate} from "react-router-dom";
// import {Link,BrowserRouter} from "react-router-dom";
// import Alert from "./components/Alert";

function detectWebcam(callback) {
  let md = navigator.mediaDevices;
  if (!md || !md.enumerateDevices) return callback(false);
  md.enumerateDevices().then((devices) => {
    callback(devices.some((device) => "videoinput" === device.kind));
  });
}

function App() {
  const [login,setLogin] = useState(false);

  let isavalable = true;
  const [data, setData] = useState(false);
  const GetData = (value) => {
    console.log(value, "got-value");
    setData(value);
  };
  //checking weather video input device is connected or not

  detectWebcam(function (hasWebcam) {
    isavalable = hasWebcam;
  });

  // return (
  //   <>
  //     {/* {isavalable&&<Alert></Alert>}  */}
  //      {/* {data && <Link to="/Live">press</Link> }  */}
  //      <Link to="/Live">press</Link>
  //      <div className="App">
  //       <Form GetDataValue={GetData}></Form>
  //     </div>
  //   </>
  // );
  return(<>
        <div className="App">
        {/* <Form GetDataValue={GetData}></Form> */}
    <Router>
        {/* <button><Link to="/">start</Link></button> */}
        <Routes>
          <Route path ='/' element={<Form GetDataValue={GetData}/>}/>
          <Route path ='/Live' element={<Live/>}>
          </Route>
          
        </Routes>
      </Router>
        </div>
      </>
  );
}

export default App;
