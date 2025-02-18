import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../reviews/home";
import AboutScreen from "../reviews/about";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DetailScreen from "../reviews/detail";


const HomeLayout = () => {

    const Stack = createNativeStackNavigator<RootStackParamList>();

    return(
        <Stack.Navigator>
            <Stack.Screen 
                name="home"
                component={HomeScreen}
                options={{title:'Trang chủ'}}/>
            <Stack.Screen 
                name='review-detail' 
                component={DetailScreen}/>
        </Stack.Navigator>
    );
}

const AppNavigation = () => {

    const Drawer = createDrawerNavigator();

    return (
        <Drawer.Navigator>
            <Drawer.Screen 
                name="baseHome" 
                component={HomeLayout}
                options={{title:'Trang chủ'}}
               />
            <Drawer.Screen 
                name="about" 
                component={AboutScreen} 
                options={{title : 'Thông tin'}} />
        </Drawer.Navigator>
    );
}

export default AppNavigation;