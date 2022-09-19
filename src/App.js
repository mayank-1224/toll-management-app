import "./App.css";
import "react-js-dialog-box/dist/index.css";
import VehicleEntries from "./components/VehicleEntries"; //Display all the vehicle entries
import TollEntries from "./components/TollEntries"; //Displays all the toll entries
import AddVehicleDialog from "./components/AddVehicleDialog"; //Add Vehicle Dialog Box
import AddTollDialog from "./components/AddTollDialog"; //Add Toll Dialog Box
import { useState, useEffect } from "react";

//importing Styled Components for Reusability
import {
  MainHeader,
  Divider,
  ViewContainer,
  ButtonContainer,
  StyledButton,
} from "./components/StyledComponents/StyledComponents";

function App() {
  const [storedVehicle, setStoredVehicle] = useState([]); //retrieves local storage data of vehicle entries
  const [storedToll, setStoredToll] = useState([]); //retrieves local storage data of toll entries
  const [updateStored, setUpdateStored] = useState(false); //dependency for useEffect to retreive new data
  const [openVehicleDialog, setOpenVehicleDialog] = useState(false); //state for opening set vehicle dialog box
  const [openTollDialog, setOpenTollDialog] = useState(false); //state for opening set toll dialog box
  const [view, setView] = useState("vehicle"); //state for toggling between vehicle and toll view tables
  const [type1, setType1] = useState(""); //state for storing any value i.e., Car/Jeep/Van || Heavy Vehicle || LCV || Truck/Bus
  const [type2, setType2] = useState("");
  const [type3, setType3] = useState("");
  const [type4, setType4] = useState("");

  //state for storing vehicle data being entered in the dialog box
  const [vehicleData, setVehicleData] = useState({
    tollName: "",
    vehicleNumber: "",
    date: "",
    vehicleType: "",
    tariff: "",
  });

  //state for storing toll data being entered in the dialog box
  const [tollData, setTollData] = useState({
    tollName: "",
    carJeep: {
      single: "",
      return: "",
    },
    lcv: {
      single: "",
      return: "",
    },
    truckBus: {
      single: "",
      return: "",
    },
    heavyVehicle: {
      single: "",
      return: "",
    },
  });

  //this function checks whether data has been set in local storage. if not it sets an empty array.
  //Then it retreives the data then updates it with new values of vehicleData after checking if all the fields are filled.
  //Then it sets the local storage with the updated data and updates the current data over here by calling in useEffect
  const vehicleSubmit = () => {
    if (localStorage.getItem("vehicleEntries") === null) {
      localStorage.setItem("vehicleEntries", JSON.stringify([]));
    }
    let vehicleEntries = JSON.parse(localStorage.getItem("vehicleEntries"));
    if (
      vehicleData.tollName === "" ||
      vehicleData.vehicleNumber === "" ||
      vehicleData.vehicleType === "" ||
      vehicleData.tariff === ""
    ) {
      alert("Please fill out all the details");
      return;
    }
    const datee = new Date();
    const date = datee.getDate();
    const month = datee.getMonth() + 1;
    const year = datee.getFullYear();
    const hours = datee.getHours();
    const minutes = datee.getMinutes();
    const seconds = datee.getSeconds();
    vehicleData.date = `${date}/${month}/${year} ${hours}:${minutes}:${seconds}`;
    vehicleEntries.push(vehicleData);
    localStorage.setItem("vehicleEntries", JSON.stringify(vehicleEntries));
    setVehicleData({
      tollName: "",
      vehicleNumber: "",
      vehicleType: "",
      tariff: "",
    });
    setOpenVehicleDialog(false);
    setUpdateStored(!updateStored);
  };

  //similar functionality as in vehicleSubmit above but for toll entries
  const tollSubmit = () => {
    if (localStorage.getItem("tollEntries") === null) {
      localStorage.setItem("tollEntries", JSON.stringify([]));
    }
    let tollEntries = JSON.parse(localStorage.getItem("tollEntries"));
    if (
      tollData.tollName === "" ||
      tollData.carJeep.single === "" ||
      tollData.carJeep.return === "" ||
      tollData.lcv.single === "" ||
      tollData.lcv.return === "" ||
      tollData.truckBus.single === "" ||
      tollData.truckBus.return === "" ||
      tollData.heavyVehicle.single === "" ||
      tollData.heavyVehicle.return === ""
    ) {
      alert("Please fill out all the details");
      return;
    }
    console.log(tollData);
    tollEntries.push(tollData);
    localStorage.setItem("tollEntries", JSON.stringify(tollEntries));
    setTollData({
      tollName: "",
      carJeep: {
        single: "",
        return: "",
      },
      lcv: {
        single: "",
        return: "",
      },
      truckBus: {
        single: "",
        return: "",
      },
      heavyVehicle: {
        single: "",
        return: "",
      },
    });

    setOpenTollDialog(false);
    setUpdateStored(!updateStored);
  };

  //this is triggered whenever new data is set successfully in the local storage. This updates the data present here so as to view the latest data in the tables.
  useEffect(() => {
    if (localStorage.getItem("vehicleEntries") !== null) {
      let storedVehicleEntries = JSON.parse(
        localStorage.getItem("vehicleEntries")
      );
      setStoredVehicle(storedVehicleEntries);
    }
    if (localStorage.getItem("tollEntries") !== null) {
      let storedTollEntries = JSON.parse(localStorage.getItem("tollEntries"));
      setStoredToll(storedTollEntries);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [updateStored]);

  //handler for opening Add Toll Dialog box
  const handleOpenAddToll = () => {
    setOpenTollDialog(true);
  };

  //handler for opening Add Vehicle Dialog box
  const handleOpenAddVehicle = () => {
    setOpenVehicleDialog(true);
  };

  //handler for switching between vehicle and toll view tables
  const handleView = () => {
    if (view === "vehicle") {
      setView("toll");
    } else {
      setView("vehicle");
    }
  };

  return (
    <>
      <div
        style={{
          backgroundColor: "white",
          padding: "15vh 20vh",
        }}
      >
        <MainHeader>Toll Management Application</MainHeader>
        <Divider />
        <ViewContainer>
          {view === "vehicle" ? (
            <VehicleEntries entries={storedVehicle} tollData={storedToll} />
          ) : (
            <TollEntries entries={storedToll} />
          )}
          <ButtonContainer>
            <StyledButton onClick={handleOpenAddVehicle}>
              Add Vehicle Entry
            </StyledButton>
            <StyledButton onClick={handleOpenAddToll}>
              Add New Toll
            </StyledButton>
            <StyledButton onClick={handleView}>
              {view === "vehicle" ? "View All Tolls" : "Back To Vehicle Logs"}
            </StyledButton>
          </ButtonContainer>
        </ViewContainer>
        <div>
          {openTollDialog && (
            <AddTollDialog
              setOpenTollDialog={setOpenTollDialog}
              tollData={tollData}
              setTollData={setTollData}
              type1={type1}
              setType1={setType1}
              type2={type2}
              setType2={setType2}
              type3={type3}
              setType3={setType3}
              type4={type4}
              setType4={setType4}
              tollSubmit={tollSubmit}
            />
          )}
        </div>
        <div>
          {openVehicleDialog && (
            <AddVehicleDialog
              setOpenVehicleDialog={setOpenVehicleDialog}
              vehicleData={vehicleData}
              setVehicleData={setVehicleData}
              storedToll={storedToll}
              vehicleSubmit={vehicleSubmit}
            />
          )}
        </div>
      </div>
    </>
  );
}

export default App;
