import { ReactDialogBox } from "react-js-dialog-box";
import {
  StyledDialog,
  StyledLabel,
  StyledInput,
  StyledSelect,
  StyledButton,
} from "./StyledComponents/StyledDialog"; //importing styled components for resuability

const AddTollDialog = ({
  setOpenTollDialog,
  tollData,
  setTollData,
  type1,
  setType1,
  type2,
  setType2,
  type3,
  setType3,
  type4,
  setType4,
  tollSubmit,
}) => {
  //the dialog box contains all the fields required to add a new toll and is checked before submitting. An error is thrown if any of the fields are empty
  return (
    <ReactDialogBox
      closeBox={() => setOpenTollDialog(false)}
      modalWidth="800px"
      headerTextColor="black"
      headerHeight="30"
      closeButtonColor="black"
      bodyBackgroundColor="white"
      bodyTextColor="black"
      bodyHeight="420px"
      headerText="Add New Toll"
    >
      <StyledDialog>
        <div>
          <StyledLabel for="tollName">Toll Name</StyledLabel>
          <br />
          <StyledInput
            type="text"
            id="tollName"
            name="tollName"
            required
            onChange={(event) => {
              setTollData({
                ...tollData,
                tollName: event.target.value,
              });
            }}
            style={{
              width: "100%",
            }}
          />
        </div>
        <StyledLabel for="fareDetails">Vehicle Fare Details</StyledLabel>
        <div id="fareDetails">
          <div>
            <StyledSelect
              required
              onChange={(event) => {
                setType1(event.target.value);
              }}
            >
              <option>Select Vehicle Type</option>
              <option value="carJeep">Car/Jeep/Van</option>
              <option value="lcv">LCV</option>
              <option value="truckBus">Truck/Bus</option>
              <option value="heavyVehicle">Heavy Vehicle</option>
            </StyledSelect>
            <StyledInput
              required
              type="text"
              id="singleJourney"
              name="singleJourney"
              placeholder="Single Journey"
              onChange={(event) => {
                let temp = tollData;
                temp[type1].single = event.target.value;
                setTollData(temp);
              }}
            />
            <StyledInput
              required
              type="text"
              id="returnJourney"
              name="returnJourney"
              placeholder="Return Journey"
              onChange={(event) => {
                let temp = tollData;
                temp[type1].return = event.target.value;
                setTollData(temp);
              }}
            />
          </div>
          <div>
            <StyledSelect
              required
              onChange={(event) => {
                setType2(event.target.value);
              }}
            >
              <option>Select Vehicle Type</option>
              <option value="carJeep">Car/Jeep/Van</option>
              <option value="lcv">LCV</option>
              <option value="truckBus">Truck/Bus</option>
              <option value="heavyVehicle">Heavy Vehicle</option>
            </StyledSelect>
            <StyledInput
              type="text"
              required
              id="singleJourney"
              name="singleJourney"
              placeholder="Single Journey"
              onChange={(event) => {
                let temp = tollData;
                temp[type2].single = event.target.value;
                setTollData(temp);
              }}
            />
            <StyledInput
              required
              type="text"
              id="returnJourney"
              name="returnJourney"
              placeholder="Return Journey"
              onChange={(event) => {
                let temp = tollData;
                temp[type2].return = event.target.value;
                setTollData(temp);
              }}
            />
          </div>
          <div>
            <StyledSelect
              required
              onChange={(event) => {
                setType3(event.target.value);
              }}
            >
              <option>Select Vehicle Type</option>
              <option value="carJeep">Car/Jeep/Van</option>
              <option value="lcv">LCV</option>
              <option value="truckBus">Truck/Bus</option>
              <option value="heavyVehicle">Heavy Vehicle</option>
            </StyledSelect>
            <StyledInput
              required
              type="text"
              id="singleJourney"
              name="singleJourney"
              placeholder="Single Journey"
              onChange={(event) => {
                let temp = tollData;
                temp[type3].single = event.target.value;
                setTollData(temp);
              }}
            />
            <StyledInput
              required
              type="text"
              id="returnJourney"
              name="returnJourney"
              placeholder="Return Journey"
              onChange={(event) => {
                let temp = tollData;
                temp[type3].return = event.target.value;
                setTollData(temp);
              }}
            />
          </div>
          <div>
            <StyledSelect
              required
              onChange={(event) => {
                setType4(event.target.value);
              }}
            >
              <option>Select Vehicle Type</option>
              <option value="carJeep">Car/Jeep/Van</option>
              <option value="lcv">LCV</option>
              <option value="truckBus">Truck/Bus</option>
              <option value="heavyVehicle">Heavy Vehicle</option>
            </StyledSelect>
            <StyledInput
              required
              type="text"
              id="singleJourney"
              name="singleJourney"
              placeholder="Single Journey"
              onChange={(event) => {
                let temp = tollData;
                temp[type4].single = event.target.value;
                setTollData(temp);
              }}
            />
            <StyledInput
              required
              type="text"
              id="returnJourney"
              name="returnJourney"
              placeholder="Return Journey"
              onChange={(event) => {
                let temp = tollData;
                temp[type4].return = event.target.value;
                setTollData(temp);
              }}
            />
          </div>
          <StyledButton onClick={tollSubmit}>Add Details</StyledButton>
        </div>
      </StyledDialog>
    </ReactDialogBox>
  );
};

export default AddTollDialog;
