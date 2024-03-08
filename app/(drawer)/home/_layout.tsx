import { DrawerToggleButton } from "@react-navigation/drawer";
import { colorTokens, tokens } from "@tamagui/themes";
import { Stack } from "expo-router";
import { Text ,View} from "react-native";
import { useTheme } from "tamagui";
const Layout=()=>{
  const theme=useTheme()
    return(
      <Stack screenOptions={{
          headerStyle:{
            backgroundColor:colorTokens.dark.blue.blue7
          } ,
        //  headerTintColor:theme.orange7.get()
      }}>
        <Stack.Screen name="index" options={{
          title:"MovieStars",
          headerLeft:()=><DrawerToggleButton tintColor="#fff"/>
        }}/>
        <Stack.Screen name="(movie)/[id]" options={{
          title:"MovieStars",
        }}/>
      
      </Stack>
    )
}

export default Layout;