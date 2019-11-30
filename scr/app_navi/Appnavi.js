import { createStackNavigator, navigationOptions, createAppContainer, createDrawerNavigator, } from "react-navigation";
import CatagoryA from "../secreens/catagories/entry_catalog";
import Catagory from "../secreens/challenge/";

import Gallery from "../secreens/gellery"

import Account from "../secreens/curateSecreen"


const Accounts = createStackNavigator(
    {

        Request: {
            screen: Account,
            navigationOptions: {
                header: null,
                headerLeft: null
            }
        }
    }
);

const Catagories = createStackNavigator(
    {

        Catagories: {
            screen: Gallery,
            navigationOptions: {
                header: null,
                headerLeft: null
            }
        }
    }
);
const MyDrawerNavigator = createDrawerNavigator({
    Home: {
        screen: Catagories,
    },
    Notifications: {
        screen: Accounts,
    },
});


const MainStackNavi = createAppContainer(MyDrawerNavigator)
export default MainStackNavi;