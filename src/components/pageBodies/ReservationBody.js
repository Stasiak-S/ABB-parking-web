import {useState, useEffect} from "react";
import DataTable from 'react-data-table-component';
import getData from "../functions/GetData";


const ReservationBody=()=>{

const page="ReservationsDates"
const [FetchedData, setData]=useState([]);

useEffect(()=>{
getData(page).then((response)=>setData(response.result));
},[])
if(FetchedData.length>0){
  let headers = Object.keys(FetchedData[0]);
  let columns = [];
  headers.forEach((key) => {
    columns.push({ name: key, selector: (row) => row[key], sortable: true });
  });
  let data=FetchedData;
  return(
    <div className="body">
      <DataTable 
      columns={columns}
      data={data}
      selectableRows
      pagination/>
    </div>
  )


}

}
export default ReservationBody;