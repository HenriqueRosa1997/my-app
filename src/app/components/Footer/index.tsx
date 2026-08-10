
import { Container, FooterButton, FooterText } from "./style";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function Footer() {
  const router = useRouter();

  const handleNavigateToHome = () => {
    router.push("/Home");
  };

  return (
    <Container>
      <FooterButton onPress={handleNavigateToHome}>
        <Ionicons name="home" size={24} color="white" />
        <FooterText>Home</FooterText>
      </FooterButton>
    </Container>
  );
}
