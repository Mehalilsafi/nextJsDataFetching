

export async function dog() {
      let res=fetch("https://dog.ceo/api/breeds/image/random")
      let data =(await res).json;
      return data;
}