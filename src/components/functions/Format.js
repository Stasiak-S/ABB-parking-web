
export default function Format(data, page){
    for (let i = 0; i < Object.keys(data).length; i++) 
        {
          delete data[i].id
          delete data[i].reservation_id
        if(page!=="Users")
        {let convertedDate=new Date(data[i].date_of_reservation).toLocaleDateString("zh-Hans-CN")
        data[i].date_of_reservation=convertedDate;
        let convertedStatus=data[i].status===1?'Accepted':data[i].status===2?'Pending':'Rejected'
        data[i].status=convertedStatus}
        else{
        let convertedNotification=data[i].notification?'on':'off'
        data[i].notification=convertedNotification
        let convertedPriorityGroup=data[i].priority_group===1?'VIP':data[i].priority_group===2?'m-VIP':'basic'
        data[i].priority_group=convertedPriorityGroup}
        }
        

      
return data
}