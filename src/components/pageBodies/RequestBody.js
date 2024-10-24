import { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import getData from "../functions/GetData";
import Format from "../functions/Format";
import NavBar from "../elements/Navigation";
import FormatRequest from "../functions/FormatRequest";
const RequestBody = () => {
  const page = "ReservationsDates";
  const [FetchedData, setData] = useState([]);
  const [AllFetchedData, setAllFetchedData] = useState([]);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  useEffect(() => {
    getData(page).then((response) => {
      setData(response.result);
      setAllFetchedData(response.result);
    });
  }, []);

  if (AllFetchedData.length > 0) {
    const handleChange = () => {
      if (startDate && endDate && startDate <= endDate) {
        let filtered = AllFetchedData.filter((data) => {
          let reservationDate = new Date(data["date_of_reservation"]);
          return (
            reservationDate >= new Date(startDate) &&
            reservationDate <= new Date(endDate)
          );
        });
        setData(filtered);
      }
    };
    if (FetchedData.length !== 0) {
      let FormatedDataRequest = FormatRequest(FetchedData);
      let FormatedData = Format(FormatedDataRequest, page);
      let headers = Object.keys(FormatedData[0]);
      let columns = [];
      headers.forEach((key) => {
        columns.push({
          name: key,
          selector: (row) => row[key],
          sortable: true,
        });
      });
      let data = FormatedData;
      return (
        <div className="body">
          <NavBar Page={"Requests"} />
          <table>
            <tbody>
              <tr>
                <td>Minimum date:</td>
                <td>
                  <input
                    type="date"
                    id="min"
                    name="min"
                    onChange={(e) => setStartDate(e.target.value)}
                  />
                </td>
              </tr>
              <tr>
                <td>Maximum date:</td>
                <td>
                  <input
                    type="date"
                    id="max"
                    name="max"
                    onChange={(e) => setEndDate(e.target.value)}
                  />
                </td>
              </tr>
              <tr>
                <td colSpan={2}>
                  <button type="submit" onClick={handleChange}>
                    Filtruj
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
          <DataTable columns={columns} data={data} selectableRows pagination />
        </div>
      );
    } else {
      return (
        <div className="body">
          <NavBar Page={"Requests"} />
          <table>
            <tbody>
              <tr>
                <td>Minimum date:</td>
                <td>
                  <input
                    type="date"
                    id="min"
                    name="min"
                    onChange={(e) => setStartDate(e.target.value)}
                  />
                </td>
              </tr>
              <tr>
                <td>Maximum date:</td>
                <td>
                  <input
                    type="date"
                    id="max"
                    name="max"
                    onChange={(e) => setEndDate(e.target.value)}
                  />
                </td>
              </tr>
              <tr>
                <td colSpan={2}>
                  <button type="submit" onClick={handleChange}>
                    Filtruj
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      );
    }
  }

  return (
    <div className="body">
      <NavBar Page={"Requests"} />
    </div>
  );
};
export default RequestBody;
