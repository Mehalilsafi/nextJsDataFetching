

export async function getUser() {
    let res = fetch("https://jsonplaceholder.typicode.com/users", { next: { revalidate: 3600 } })
    let data =(await res).json()
  return data;
}
