import { Tabs } from "expo-router";
import { useFonts } from "expo-font";

export default () => {
    const [loaded] = useFonts ({
        britannic: require('@/assets/fonts/Britannic.ttf')
      });
      if (!loaded){
        return null
      };
    return(
        <Tabs>
            <Tabs.Screen name="Home"/>
            <Tabs.Screen name="Login"/>
            <Tabs.Screen name="Signup"/>
        </Tabs>
    )
}