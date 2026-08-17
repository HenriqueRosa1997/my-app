import { addDoc, collection, doc, getDocs, updateDoc } from "firebase/firestore";
import {db} from '../config/firebase'

export interface Car { 
    id: string;
    name: string;
    year: number;
    image: string;
}

const carCollection = collection(db, 'cars')

export const addCar = async (car: Partial<Car>) => {
    try {
        const docRef = await addDoc(carCollection, {
            name: car.name,
            year: car.year,
            image: car.image,
        });
        await updateDoc(docRef, { id: docRef.id });

        console.log("Carro adicionado com ID: ", docRef.id);
    } catch (e) {
        console.error("Erro ao adicionar carro: ", e);
        throw new Error("Failed to add Car");
    }
};
export const updateCar = async (id: string, updateCar: Partial<Car>) => { 
    const carRef = doc(db, 'cars', id);
    try {
        await updateDoc(carRef, updateCar);
        console.log('Carro atualizdo com sucesso');
    } catch (e) { 
        console.error("Erro ao atualizar carro: ", e);
        throw new Error("Failed to update car");

    }
}

export const fetchCars = async () => {
  try {
    const querySnapshot = await getDocs(carCollection);

    return querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as Car[];
  } catch (e) {
    console.error("Erro ao buscar carros: ", e);
    return [];
  }
};