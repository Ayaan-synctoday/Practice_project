import { StyleSheet } from "react-native";

export default exstyles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#8C52FF",
  },

  circle2: {
    position: "absolute", // Place it behind the form
    width: 300, // Size of the circle
    height: 300,
    borderRadius: 150, // Half of width/height for a perfect circle
    backgroundColor: "orange",
    right: 100, // Move it partially behind the form (adjust as needed)
    top: "12.9%", // Vertically align with the form
  },

  circle: {
    position: "absolute", // Place it behind the form
    width: 300, // Size of the circle
    height: 300,
    borderRadius: 150, // Half of width/height for a perfect circle
    backgroundColor: "orange",
    right: -100, // Move it partially behind the form (adjust as needed)
    top: "33%", // Vertically align with the form
  },

  container: {
    flex: 3 / 4,
    backgroundColor: "#FFFFFF",
    paddingTop: 40,
    paddingBottom: 80,
    padding: 15,
    borderRadius: 20,
  },

  title: {
    color: "#FFFFFF",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  subtitle: {
    color: "#FFFFFF",
    marginBottom: 20,
  },
  input: {
    width: 250,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
  },
  button: {
    backgroundColor: "orange",
    borderRadius: 5,
    padding: 15,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  socialButtons: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },
  socialButton: {
    marginHorizontal: 10,
  },
  socialIcon: {
    width: 30,
    height: 30,
  },
  poweredBy: {
    backgroundColor: "#FFFFFF",

    textAlign: "center",
    marginTop: "auto",
  },
});
