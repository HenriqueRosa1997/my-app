
import { Car, cars } from "@/assets/data/carData";
import { useState } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  Button,
  StyleSheet,
} from "react-native";
import { style } from "../Home/style";
import Footer from "../components/Footer";
import { auth } from "@/config/firebase";
import { signOut } from "firebase/auth";

export default function Home() {
  const [data, setData] = useState<Car[]>(
    cars.slice(0, 1)
  );

  const [loading, setLoading] = useState(false);

  const renderItem = ({ item }: { item: Car }) => (
    <View style={style.card}>
      <Image
        source={item.image}
        style={style.carImage}
        resizeMode="cover"
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
    </View>
  );

  const loadMoreData = () => {
  if (loading || data.length >= cars.length) {
    return;
  }

  setLoading(true);

  setTimeout(() => {
    const newData = cars.slice(
      data.length,
      data.length + 1
    );

    setData((currentData) => [
      ...currentData,
      ...newData,
    ]);

    setLoading(false);
  }, 1000);
  };
  
  const handleLogout = async () => { 
    await signOut(auth)
    navigation.navigate('Login')
  }



  return (
    <View style={style.container}>
          <View>
      <Button
        title="Logout"
        onPress={handleLogout}
      />
    </View>
      <Text style={style.sectionTitle}>
        Car List
      </Text>

      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={style.list}
        showsVerticalScrollIndicator={false}
        numColumns={1}
        onEndReached={loadMoreData}
        onEndReachedThreshold={0.5}
        ListFooterComponent={
          loading ? <Text>Loading...</Text> : null
        }
      />

      <Footer />
    </View>
  );
}

