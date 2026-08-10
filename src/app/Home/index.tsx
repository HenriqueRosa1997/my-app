
import { Car, cars } from "@/assets/data/carData";
import { useState } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
} from "react-native";
import { style } from "../../style/style";
import Footer from "../components/Footer";

export default function Home() {
  const [data, setData] = useState<Car[]>(
    cars.slice(0, 1)
  );

  const [loading, setLoading] = useState(false);

  const renderItem = ({ item }: { item: Car }) => (
    <View style={styles.card}>
      <Image
        source={item.image}
        style={styles.carImage}
        resizeMode="cover"
      />

      <Text style={styles.carName}>
        {item.name}
      </Text>

      <Text style={styles.carYear}>
        {item.year}
      </Text>

      <Text style={styles.description}>
        {item.description}
      </Text>
    </View>
  );

  const loadMoreData = () => {
    if (loading || data.length >= cars.length) {
      return;
    }

    setLoading(true);

    const newData = cars.slice(
      data.length,
      data.length + 1
    );

    setData((currentData) => [
      ...currentData,
      ...newData,
    ]);

    setLoading(false);
  };

  return (
    <View style={styles.container}>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  card: {
    backgroundColor: "#fff",
    marginHorizontal: 16,
    marginBottom: 20,
    borderRadius: 12,
    overflow: "hidden",
    elevation: 4,
  },

  carImage: {
    width: "100%",
    height: 220,
  },

  carName: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 12,
    marginHorizontal: 12,
  },

  carYear: {
    fontSize: 16,
    color: "#555",
    marginTop: 4,
    marginHorizontal: 12,
  },

  description: {
    fontSize: 15,
    color: "#666",
    margin: 12,
  },
});
