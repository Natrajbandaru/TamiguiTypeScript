import Drawer from "expo-router/drawer";
import { colorTokens } from "@tamagui/themes";
import { Ionicons } from "@expo/vector-icons";

const Layout = () => {
    return (
        <Drawer screenOptions={{
            headerShown: true,
            drawerHideStatusBarOnOpen: true,
            drawerActiveBackgroundColor: colorTokens.dark.blue.blue7,
            drawerActiveTintColor: '#fff'
        }}>
            <Drawer.Screen name="home" 
                options={{
                    title: "Movestar",
                    headerShown: false,
                    drawerIcon: ({ color, size }) => <Ionicons name="home" size={size} color={color} />
                }}
            />
            <Drawer.Screen name="favorates"   
                   options={{
                       title: "Favorates",
                       headerShown: false,
                       drawerIcon: ({ color, size }) => <Ionicons name="add-circle" size={size} color={color} />
                  }}  
            />
        </Drawer>
    );
}

export default Layout;
