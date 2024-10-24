export default function Format(data, page) {
  for (let i = 0; i < Object.keys(data).length; i++) {
    delete data[i].id;
    delete data[i].reservation_id;
    if (page !== "Users") {
      let convertedDate = new Date(data[i].date_of_reservation)
        .toLocaleDateString("zh-Hans-CN")
        .replaceAll("/", "-");
      data[i].date_of_reservation = convertedDate;
      let convertedStatus =
        data[i].status === 1 || data[i].status === "Accepted"
          ? "Accepted"
          : (data[i].status === 2) | (data[i].status === "Pending")
          ? "Pending"
          : "Rejected";
      data[i].status = convertedStatus;
    } else {
      let convertedNotification =
        data[i].notification || data[i].notification === "on" ? "on" : "off";
      data[i].notification = convertedNotification;
      let convertedPriorityGroup =
        data[i].priority_group === 1 || data[i].priority_group === "VIP"
          ? "VIP"
          : data[i].priority_group === 2 || data[i].priority_group === "m-VIP"
          ? "m-VIP"
          : "basic";
      data[i].priority_group = convertedPriorityGroup;
    }
  }

  return data;
}
