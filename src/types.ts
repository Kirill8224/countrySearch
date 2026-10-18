export type  CityData ={
    alternate_names: {
      ru: string;
    };
    ascii_name: string;
    country_code: string;
    feature_class: string;
    feature_code: string;
    id: number;
    latitude: number;
    longitude: number;
    name: string;
    population: number;
    timezone_id: string;
  }
  
export type AnswerSearch= {
    data: {
        data: CityData[]
    }
}