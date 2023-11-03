

export async function getUser() {
    let res = fetch("https://jsonplaceholder.typicode.com/users")
    let data =(await res).json()
  return data;
}
