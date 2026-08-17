
import { Container, FooterButton, FooterText } from "./style";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { signOut } from 'firebase/auth';
import { auth } from '../../../config/firebase';
import { Text } from 'react-native';

export default function Footer() {
  const router = useRouter();

  const handleNavigateToHome = () => {
    router.push("/Home");
  };

  const handleNavigateToRegisterUser = () => {
    navigation.navigate('RegisterUser');
  };
 const handleLogout = async () => {
    await signOut(auth);
    navigation.navigate('Login');
  };


   return (
    <Container>
      <FooterButton onPress={handleNavigateToHome}>
        <Ionicons name="home" size={24} color="white" />
        <FooterText><Text>Home</Text></FooterText>
      </FooterButton>
      <FooterButton onPress={handleNavigateToRegisterUser}>
        <Ionicons name="navigate" size={24} color="white" />
        <FooterText><Text>Register Usuário</Text></FooterText>
      </FooterButton>
      <FooterButton onPress={handleLogout}>
        <Ionicons name="log-out" size={24} color="white" />
        <FooterText><Text>Logout</Text></FooterText>
      </FooterButton>
    </Container>
  );
}


