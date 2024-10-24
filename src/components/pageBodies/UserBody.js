import { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import getData from "../functions/GetData";
import Format from "../functions/Format";
import NavBar from "../elements/Navigation";
const UserBody = () => {
  const page = "Users";
  const [FetchedData, setData] = useState([]);
  useEffect(() => {
    getData(page).then((response) => setData(response.result));
  }, []);
  if (FetchedData.length > 0) {
    let FormatedData = Format(FetchedData, page);
    let headers = Object.keys(FormatedData[0]);
    let columns = [];
    headers.forEach((key) => {
      columns.push({ name: key, selector: (row) => row[key], sortable: true });
    });
    let data = FormatedData;
    return (
      <div className="body">
        <NavBar Page={page} />
        <DataTable columns={columns} data={data} selectableRows pagination />
      </div>
    );
  }
};
export default UserBody;
