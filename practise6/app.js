async function myFunc() {
  try {
    let response = await axios("https://jsonplaceholder.typicode.com/users");
    console.log(response.data);
  } catch (err) {
    console.log(err);
  }
}

//   myFunc();

async function myFuncDelete(id) {
  try {
    await axios.delete(`https://northwind.vercel.app/api/suppliers/${id}`);
  } catch (err) {
    console.log(err);
  }
}
//   myFuncDelete(1)

const instance = axios.create({
  baseURL: "https://northwind.vercel.app/api/",
  timeout: 1000,
  headers: { "Content-Type": "apploication/json" },
});



async function getAllData() {
  try {
    const response = await instance.get("suppliers");
    console.log(response.data);
  } catch (error) {
    console.log(error.message);
  }
}
// getAllData()
