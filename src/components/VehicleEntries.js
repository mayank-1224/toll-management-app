import { useEffect, useState } from "react";
import {
  MainContainer,
  TableTitle,
  SearchBar,
  StyledTable,
} from "./StyledComponents/StyledTable";
import { StyledSelect } from "./StyledComponents/StyledDialog"; //importing styled components for reusability

const VehicleEntries = ({ entries, tollData }) => {
  const [mapData, setMapData] = useState(entries); //state for storing the actual data that has been retreived after search or filter. Inital state is the entries prop
  const [recordEmpty, setRecordEmpty] = useState(false); //state for checking if the search query or filter query returns no results

  //useEffect hook to update the mapData state when the entries prop changes
  useEffect(() => {
    setMapData(entries);
  }, [entries]);

  //function for searching the vehicleNumber field in the entries prop and then sets the results in the mapData state. NOT CASE SENSITIVE
  const searchQuery = (e) => {
    const query = e.target.value;
    const filteredData = entries.filter((entry) => {
      return entry.vehicleNumber.toLowerCase().includes(query.toLowerCase());
    });
    setMapData(filteredData);
    if (filteredData.length === 0) {
      setRecordEmpty(true);
    } else {
      setRecordEmpty(false);
    }
  };

  //function for filtering the entries prop based on the tollName field and then sets the results in the mapData state. If all is selected then all the entries are displayed
  const handleFilter = (e) => {
    if (e.target.value === "all") {
      setMapData(entries);
    } else {
      const filteredData = entries.filter((entry) => {
        return entry.tollName === e.target.value;
      });
      setMapData(filteredData);
      if (filteredData.length === 0) {
        setRecordEmpty(true);
      } else {
        setRecordEmpty(false);
      }
    }
  };

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <MainContainer>
        <TableTitle>Toll Entries/Vehicle Entries | </TableTitle>

        <StyledSelect
          style={{
            width: "100px",
            height: "40px",
          }}
          onChange={(e) => {
            handleFilter(e);
          }}
        >
          <option value="all">All</option>
          {tollData.map((toll) => {
            return <option value={toll.tollName}>{toll.tollName}</option>;
          })}
        </StyledSelect>

        <SearchBar
          placeholder="Search Vehicle"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              searchQuery(e);
            }
          }}
        ></SearchBar>
      </MainContainer>
      <StyledTable>
        <tr>
          <th>VEHICLE TYPE</th>
          <th>VEHICLE NUMBER</th>
          <th>DATE/TIME</th>
          <th>TOLL NAME</th>
          <th>TARIFF</th>
        </tr>

        {!recordEmpty ? (
          mapData.map((entry) => (
            <tr>
              <td>{entry.vehicleType}</td>
              <td>{entry.vehicleNumber}</td>
              <td>{entry.date}</td>
              <td>{entry.tollName}</td>
              <td>{entry.tariff}</td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="5">No Records Found</td>
          </tr>
        )}
      </StyledTable>
    </div>
  );
};
export default VehicleEntries;
