import {  useNavigation } from "expo-router";
import { View, Text } from 'react-native';
import { Ionicons } from "@expo/vector-icons";
import { BackButtonContainer, Container, MenuContainer } from "./Style";

interface HeaderProps { 
    title: string;
    onMenuPress: () => void;
    canGoBack?: boolean;
}

export default function Header({ title, onMenuPress, canGoBack }: HeaderProps) {
    const navigation = useNavigation();

    return (
        <Container>
            { canGoBack ? (
                <BackButtonContainer onPress={() => navigation.goBack()}>
                    <Ionicons name="home" size={24} color="white" />
                </BackButtonContainer>
            ) : (
                <View style={{ width: 28 }} />
            )}
            <title>{title}</title>
            <MenuContainer onPress={onMenuPress}>
                 <Ionicons name="arrow-back" size={24} color="white" />
            </MenuContainer>
        </Container>
    )
}