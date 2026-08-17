import {
  Car,
  addCar,
  fetchCars,
  updateCar,
  deleteCar,
} from "@/service/carService";

import { useEffect, useState } from "react";

import {
  View,
  Text,
  FlatList,
  Image,
  Button,
  Alert,
  TextInput,
} from "react-native";

import type { ListRenderItem } from "react-native";

import { style } from "../Home/style";
import Footer from "../components/Footer";

import { auth } from "@/config/firebase";
import { signOut } from "firebase/auth";

import { useRouter } from "expo-router";

export default function Home() {
  const [data, setData] = useState<Car[]>([]);
  const [loading, setLoading] = useState(false);

  const [isAdding, setAdding] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);

  const [currentCar, setCurrentCar] =
    useState<Partial<Car>>({});

  const [carIdToUpdate, setCarIdToUpdate] =
    useState<string | null>(null);

  const router = useRouter();

  // ==========================================
  // CARREGAR CARROS
  // ==========================================

  useEffect(() => {
    const loadCars = async () => {
      try {
        setLoading(true);

        const cars = await fetchCars();

        setData(cars);
      } catch (error) {
        console.error(
          "Erro ao carregar carros:",
          error
        );
      } finally {
        setLoading(false);
      }
    };

    loadCars();
  }, []);

  // ==========================================
  // RENDER DOS CARROS
  // ==========================================

  const renderItem: ListRenderItem<Car> = ({ item }) => {
    return (
      <View style={style.card}>
        <Image
          source={{
            uri:
              item.image ||
              "https://example.com/placeholder.png",
          }}
          style={style.carImage}
          resizeMode="cover"
          onError={() =>
            Alert.alert(
              "Erro",
              "Erro ao carregar imagem"
            )
          }
        />

        <Text style={style.carName}>
          {item.name}
        </Text>

        <Text style={style.carYear}>
          {item.year}
        </Text>

        <Text style={style.description}>
          {item.description}
        </Text>

        <Button
          title="Update"
          onPress={() =>
            handleUpdateCar(item.id)
          }
        />

        <Button
          title="Delete"
          onPress={() =>
            handleDeleteCar(item.id)
          }
        />
      </View>
    );
  };

  // ==========================================
  // ADICIONAR CARRO
  // ==========================================

  const handleAddCar = () => {
    setAdding(true);
    setCurrentCar({});
  };

  // ==========================================
  // SALVAR / ATUALIZAR CARRO
  // ==========================================

  const handleSaveCar = async () => {
    try {
      if (isAdding) {
        const newCar: Partial<Car> = {
          name: currentCar.name!,
          year: currentCar.year,
          image: currentCar.image,
          description: currentCar.description,
        };

        await addCar(newCar);
      } else if (
        isUpdating &&
        carIdToUpdate
      ) {
        const updateData: Partial<Car> = {
          name: currentCar.name!,
          year: currentCar.year!,
          image: currentCar.image!,
          description: currentCar.description,
        };

        await updateCar(
          carIdToUpdate,
          updateData
        );
      }

      setAdding(false);
      setIsUpdating(false);
      setCurrentCar({});
      setCarIdToUpdate(null);

      const cars = await fetchCars();

      setData(cars);
    } catch (error) {
      console.error(
        "Erro ao salvar carro:",
        error
      );
    }
  };

  // ==========================================
  // ATUALIZAR CARRO
  // ==========================================

  const handleUpdateCar = (id: string) => {
    const carToEdit = data.find(
      (car) => car.id === id
    );

    if (carToEdit) {
      setCurrentCar(carToEdit);
      setCarIdToUpdate(id);
      setIsUpdating(true);
    }
  };

  // ==========================================
  // DELETAR CARRO
  // ==========================================

  const handleDeleteCar = async (id: string) => {
    try {
      await deleteCar(id);

      const cars = await fetchCars();

      setData(cars);
    } catch (error) {
      console.error(
        "Erro ao deletar carro:",
        error
      );
    }
  };

  // ==========================================
  // LOGOUT
  // ==========================================

  const handleLogout = async () => {
    try {
      await signOut(auth);

      router.replace("/Login");
    } catch (error) {
      console.error(
        "Erro ao fazer logout:",
        error
      );
    }
  };

  // ==========================================
  // TELA
  // ==========================================

  return (
   <View style={style.container}>
  <View style={style.wrapp}>
    {isAdding || isUpdating ? (
      <View style={style.formContainer}>

        <TextInput
          style={style.input}
          placeholder="Name"
          value={currentCar.name || ""}
          onChangeText={(text) =>
            setCurrentCar({
              ...currentCar,
              name: text,
            })
          }
        />

        <TextInput
          style={style.input}
          placeholder="Year"
          value={
            currentCar.year
              ? String(currentCar.year)
              : ""
          }
          keyboardType="numeric"
          onChangeText={(text) =>
            setCurrentCar({
              ...currentCar,
              year: text
                ? parseInt(text, 10)
                : undefined,
            })
          }
        />

        <TextInput
          style={style.input}
          placeholder="Image URL"
          value={currentCar.image || ""}
          onChangeText={(text) =>
            setCurrentCar({
              ...currentCar,
              image: text,
            })
          }
        />

        <TextInput
          style={style.input}
          placeholder="Description"
          value={currentCar.description || ""}
          multiline
          onChangeText={(text) =>
            setCurrentCar({
              ...currentCar,
              description: text,
            })
          }
        />

        <Button
          title="Save"
          onPress={handleSaveCar}
        />

        <Button
          title="Cancel"
          onPress={() => {
           setAdding(false);
            setIsUpdating(false);
            setCurrentCar({});
            setCarIdToUpdate(null);
          }}
        />

      </View>
    ) : (
      <>
        <Button
          title="Add Car"
          onPress={handleAddCar}
        />

        <Text style={style.sectionTitle}>
          Carros
        </Text>

        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          contentContainerStyle={style.list}
          showsVerticalScrollIndicator={false}
          numColumns={1}
          onEndReachedThreshold={0.5}
          ListFooterComponent={
            loading ? (
              <Text>Loading...</Text>
            ) : null
          }
        />
      </>
    )}
  </View>

  <Footer />
</View>
  );
}