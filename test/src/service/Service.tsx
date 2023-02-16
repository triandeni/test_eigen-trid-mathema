import axios from 'axios';

export class Service {
  private static Url: string =
    'https://newsapi.org/v2/top-headlines?country=id&category=sports&apiKey=';

  public static getAllData() {
    let getData: string = `${this.Url}6ba1827b2a1d4410aa3f40bf8e2bc162`;
    return axios.get(getData);
  }

  public static getData(id: string, name: void) {
    let GetData: string = `${this.Url}6ba1827b2a1d4410aa3f40bf8e2bc162/${id}${name}`;
    return axios.get(GetData);
  }
}
