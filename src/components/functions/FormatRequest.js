export default function FormatRequest(data) {
  let copyData = data.slice(0);

  for (let i = 0; i < Object.keys(copyData).length; i++) {
    if (copyData[i].status !== 2 && copyData[i].status !== "Pending") {
      copyData.splice(i, 1);
      i = i - 1;
    }
  }

  return copyData;
}
