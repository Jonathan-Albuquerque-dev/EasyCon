import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerShown: false,
          headerTitle: "Login",
        }}
      />
      <Stack.Screen
        name="cadastro"
        options={{
          headerTitle: "EasyCon",
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="(Auth)"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="details/infoMoradores/[index]"
        options={{
          headerShown: true,
          headerTitle: "Morador",
          headerBackTitle: "Voltar",
        }}
      />
    </Stack>
  );
}
