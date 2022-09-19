import { useState, useEffect } from "react";
import {
  MainContainer,
  SearchBar,
  StyledTable,
  TableTitle,
} from "./StyledComponents/StyledTable"; //importing styled components for reusability

const TollEntries = ({ entries }) => {
  const [mapData, setMapData] = useState(entries); //state for storing the actual data that has been retreived after search. Inital state is the entries prop
  const [recordEmpty, setRecordEmpty] = useState(false); //state for checking if the search query returns no results

  //useEffect hook to update the mapData state when the entries prop changes
  useEffect(() => {
    setMapData(entries);
  }, [entries]);

  //function for searching the tollName field in the entries prop and then sets the results in the mapData state. NOT CASE SENSITIVE
  const searchQuery = (e) => {
    const query = e.target.value;
    const filteredData = entries.filter((entry) => {
      return entry.tollName.toLowerCase().includes(query.toLowerCase());
    });
    setMapData(filteredData);
    if (filteredData.length === 0) {
      setRecordEmpty(true);
    } else {
      setRecordEmpty(false);
    }
    // return <VehicleEntries entries={mapData} />;
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <MainContainer
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <TableTitle>Tollgate List</TableTitle>
          <SearchBar
            placeholder="Search Toll"
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                searchQuery(e);
              }
            }}
          ></SearchBar>
        </MainContainer>

        <StyledTable>
          <tr>
            <th>TOLL NAME</th>
            <th>CAR/JEEP/VAN</th>
            <th>LCV</th>
            <th>TRUCK/BUS</th>
            <th>HEAVY VEHICLE</th>
          </tr>
          {!recordEmpty ? (
            mapData.map((entry) => (
              <tr>
                <td>{entry.tollName}</td>
                <td>
                  {entry.carJeep.single}/{entry.carJeep.return}
                </td>
                <td>
                  {entry.lcv.single}/{entry.lcv.return}
                </td>
                <td>
                  {entry.truckBus.single}/{entry.truckBus.return}
                </td>
                <td>
                  {entry.heavyVehicle.single}/{entry.heavyVehicle.return}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td>No Record Found</td>
            </tr>
          )}
        </StyledTable>
      </div>
    </>
  );
};

export default TollEntries;
