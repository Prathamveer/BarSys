import React from 'react';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {AppTabNavigator} from './AppTabNavigator';
import CustomSideBarMenu from './CustomSideBarMenu';
import SettingScreen from '../screens/SettingScreen';
import MyDonationScreen from '../screens/MyDonationScreen';
import NotificationScreen from '../screens/NotificationScreen';
import MyReceivedBooksScreen from '../screens/MyRecievedBooksScreen';
import {Icon} from 'react-native-elements';

export const AppDrawerNavigator =createDrawerNavigator({
    Home:{screen:AppTabNavigator,
    navigationOptions:{
        drawerIcon:<Icon name='home' type='fontawesome5'></Icon>
    }},
    Settings:{screen:SettingScreen ,
        navigationOptions:{
            drawerIcon:<Icon name='settings' type='fontawesome5'></Icon>
        }},
    MyDonations:{screen:MyDonationScreen,
        navigationOptions:{
            drawerIcon:<Icon name='gift' type='font-awesome'></Icon>
        }},
    Notification : {screen : NotificationScreen,
        navigationOptions:{
            drawerIcon:<Icon name='bell' type='font-awesome'></Icon>
        }},
    MyReceivedBooks :{
        screen: MyReceivedBooksScreen,
        navigationOptions:{
            drawerIcon:<Icon name='gift' type='font-awesome'></Icon>
        }
    }
},
{
    contentComponent:CustomSideBarMenu
},
{
    initialRouteName:'Home'
}

)

