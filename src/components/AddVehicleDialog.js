import { ReactDialogBox } from "react-js-dialog-box";
import {
  StyledLabel,
  StyledSelect,
  StyledInput,
  StyledButton,
} from "./StyledComponents/StyledDialog"; //importing styled components for resuability

const AddVehicleDialog = ({
  setOpenVehicleDialog,
  vehicleData,
  setVehicleData,
  storedToll,
  vehicleSubmit,
}) => {
  //the dialog box contains all the fields required to add a new vehicle and is checked before submitting. An error is thrown if any of the fields are empty
  return (
    <ReactDialogBox
      closeBox={() => setOpenVehicleDialog(false)}
      modalWidth="800px"
      headerTextColor="black"
      headerHeight="30"
      closeButtonColor="black"
      bodyBackgroundColor="white"
      bodyTextColor="black"
      bodyHeight="420px"
      headerText="Add New Entry"
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <StyledLabel for="tollName">Select Toll Name</StyledLabel>
        <br />
        <StyledSelect
          required
          style={{
            width: "100%",
          }}
          id="tollName"
          onChange={(event) => {
            setVehicleData({
              ...vehicleData,
              tollName: event.target.value,
            });
          }}
        >
          <option value="">Select Toll Name</option>
          {storedToll.map((toll) => {
            return <option value={toll.tollName}>{toll.tollName}</option>;
          })}
        </StyledSelect>
        <StyledLabel for="vehicleType">Select Vehicle Type</StyledLabel>
        <StyledSelect
          required
          style={{
            width: "100%",
          }}
          id="vehicleType"
          onChange={(event) => {
            setVehicleData({
              ...vehicleData,
              vehicleType: event.target.value,
            });
          }}
        >
          <option value="">Select Vehicle Type</option>
          <option value="Car/Jeep/Van">Car/Jeep/Van</option>
          <option value="LCV">LCV</option>
          <option value="Truck/Bus">Truck/Bus</option>
          <option value="Heavy Vehicle">Heavy Vehicle</option>
        </StyledSelect>
        <StyledLabel for="vehicleNumber">Vehicle Number</StyledLabel>
        <StyledInput
          required
          style={{
            width: "100%",
          }}
          type="text"
          id="vehicleNumber"
          name="vehicleNumber"
          onChange={(event) => {
            setVehicleData({
              ...vehicleData,
              vehicleNumber: event.target.value,
            });
          }}
        />
        <StyledLabel for="tariff">Tariff</StyledLabel>
        <StyledInput
          required
          style={{
            width: "100%",
          }}
          type="text"
          id="tariff"
          name="tariff"
          onChange={(event) => {
            setVehicleData({
              ...vehicleData,
              tariff: event.target.value,
            });
          }}
        />
        <StyledButton
          onClick={(event) => {
            vehicleSubmit(event);
          }}
        >
          Submit
        </StyledButton>
      </div>
    </ReactDialogBox>
  );
};

export default AddVehicleDialog;
