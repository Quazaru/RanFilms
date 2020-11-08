
export default class contentDataService  {
  async getData(){
    const response = await fetch('https://jsonplaceholder.typicode.com/albums/1/photos');
    
    if(!response.ok) {
      throw new Error("Failed to get content");
    }
    
    const data = response.json();
    return data;
  }
  async getDataById(id) {
    const response = await fetch('https://jsonplaceholder.typicode.com/photos/' + id);
    if(!response.ok) {
      throw new Error('Filed to get content, please try again');
    }

    const data = await response.json();
    return data;
  }
}