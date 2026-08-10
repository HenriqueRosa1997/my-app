
export interface Car {
  id: string;
  name: string;
  year: number;
  image: any;
  description: string;
}

export const cars: Car[] = [
  {
    id: "1",
    name: "Toyota Corolla",
    year: 2024,
   image: require("../cars/2024_Toyota_Corolla_LE.jpg"),
    description: "A reliable and fuel-efficient compact car.",
  },
  {
    id: "2",
    name: "Honda Civic",
    year: 2024,
    image: require(
      "../cars/Honda_Civic,_GIMS_2019,_Le_Grand-Saconnex_(GIMS0704).jpg"
    ),
    description: "A sporty and versatile sedan.",
  },
  {
    id: "3",
    name: "Volkswagen Golf",
    year: 2024,
    image: require("../cars/2024-Volkswagen-Golf-Front.jpg"),
    description: "A stylish and practical compact car.",
  },
  {
    id: "4",
    name: "Ford Mustang",
    year: 2024,
    image: require(
      "../cars/Seventh_generation_2024_Ford_Mustang.jpg"
    ),
    description: "A powerful and iconic muscle car.",
  },
  {
    id: "5",
    name: "BMW M3",
    year: 2024,
    image: require("../cars/_m3-1.jpg"),
    description: "A high-performance luxury sports car.",
  },
];

