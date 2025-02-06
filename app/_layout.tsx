import React from "react";
import { ActionSheetProvider } from "@expo/react-native-action-sheet";
import { Stack } from "expo-router";
import Header from "../components/Header";
import { ThemeProvider } from "../contexts/ThemeProvider";

export default function Layout() {
  return (
    <ThemeProvider>
      <ActionSheetProvider>
        <Stack>
          <Stack.Screen
            name="index"
            options={{ headerTitle: "Login", headerShown: false }}
          />
          <Stack.Screen
            name="Listagem"
            options={{
              headerTitle: "Listagem",
              header: () => <Header context="Listagem" />,
              headerShown: true,
            }}
          />
          <Stack.Screen
            name="Sobre"
            options={{
              header: () => <Header context="Sobre" />,
            }}
          />
        </Stack>
      </ActionSheetProvider>
    </ThemeProvider>
  );
}
