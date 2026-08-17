import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
  container: {
    flex: 1,
  },
    wrapp: {
    flex: 1,
    padding: 20,
  },


  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
    margin: 16,
  },

  list: {
    paddingBottom: 20,
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
  formContainer: {
    padding: 20,
  },

  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 12,
    marginBottom: 15,
    fontSize: 16,
  },

  description: {
    fontSize: 15,
    color: "#666",
    margin: 12,
  },
});