import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="/Login" />
    </Stack>
  );
}

// primary:"#61616"
// secondary:"#555555"
// dark:"#474747"
// light:"#7D7D7D"
