
export async function getspeacial(id) {
  let res= fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  let data = (await res).json()
  return data ; 
}
