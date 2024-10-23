export default async function getData(page) {
  const response = await fetch(
    'http://localhost:5000/admin/get/all'+page
  );
  const data = response.json();
  return data;
}