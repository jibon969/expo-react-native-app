import * as React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'
import SettingStackNavigator from "./stack-navigators/SettingStackNavigator";
import TermsConditionStackNavigator from "./stack-navigators/TermsConditionStackNavigator";
import SecurityPrivacyStackNavigator from "./stack-navigators/SecurityPrivacyStackNavigator";
import TrackingMyParcelStackNavigator from "./stack-navigators/TrackingMyParcelStackNavigator";

export const screens = {
    HomeTab: 'HomeTab',
    HomeStack: 'HomeStack',
    Home: 'Home',

    UserProfileStack: 'UserProfileStack',
    UserProfile: 'UserProfile',

    PersonalInfoStack: 'PersonalInfoStack',
    PersonalInfo: 'PersonalInfo',

    PurchaseHistoryStack: 'PurchaseHistoryStack',
    PurchaseHistory: 'PurchaseHistory',

    TrackingMyParcelStack: 'TrackingMyParcelStack',
    TrackingMyParcel: 'TrackingMyParcel',

    SecurityPrivacyStack: 'SecurityPrivacyStack',
    SecurityPrivacy: 'SecurityPrivacy',

    TermsConditionStack: 'TermsConditionStack',
    TermsCondition: 'TermsCondition',

    ReturnPolicyStack: 'ReturnPolicyStack',
    ReturnPolicy: 'ReturnPolicy',

    AboutStack: 'AboutStack',
    About: 'About',

    ContactStack: 'ContactStack',
    Contact: 'Contact',

    SettingStack: 'SettingStack',
    Setting: 'Setting',


};

export const routes = [

    {
        name: screens.HomeTab,
        focusedRoute: screens.HomeTab,
        title: 'Home',
        showInTab: false,
        showInDrawer: false,
        icon: (focused) =>
            <Icon name="home" size={30} color={focused ? '#551E18' : '#000'}/>,
    },
    {
        name: screens.HomeStack,
        focusedRoute: screens.HomeStack,
        title: 'Home',
        showInTab: true,
        showInDrawer: true,
        icon: (focused) =>
            <Icon name="home" size={30} color={focused ? '#551E18' : '#000'}/>,
    },
    {
        name: screens.Home,
        focusedRoute: screens.HomeStack,
        title: 'Home',
        showInTab: true,
        showInDrawer: false,
        icon: (focused) =>
            <Icon name="home" size={30} color={focused ? '#551E18' : '#000'}/>,
    },


    // UserProfileStack ===========================================================
    {
        name: screens.UserProfileStack,
        focusedRoute: screens.UserProfile,
        title: 'User Profile',
        showInTab: false,
        showInDrawer: false,
    },
    {
        name: screens.UserProfile,
        focusedRoute: screens.UserProfileStack,
        title: 'User Profile',
        showInTab: false,
        showInDrawer: false,
    },

    // PersonalInfoStack ==============================================
    {
        name: screens.PersonalInfoStack,
        focusedRoute: screens.PersonalInfo,
        title: 'PersonalInfo',
        showInTab: false,
        showInDrawer: true,
    },
    {
        name: screens.PersonalInfo,
        focusedRoute: screens.PersonalInfoStack,
        title: 'PersonalInfo',
        showInTab: false,
        showInDrawer: false,
    },


    // TrackingMyParcelStack ==========================================
    {
        name: screens.TrackingMyParcelStack,
        focusedRoute: screens.TrackingMyParcel,
        title: 'TrackingMyParcel',
        showInTab: false,
        showInDrawer: true,
    },
    {
        name: screens.TrackingMyParcel,
        focusedRoute: screens.TrackingMyParcelStack,
        title: 'TrackingMyParcel',
        showInTab: false,
        showInDrawer: false,
    },

    // PurchaseHistoryStack ==========================================
    {
        name: screens.PurchaseHistoryStack,
        focusedRoute: screens.PurchaseHistory,
        title: 'PurchaseHistory',
        showInTab: false,
        showInDrawer: true,
    },
    {
        name: screens.PurchaseHistory,
        focusedRoute: screens.PurchaseHistoryStack,
        title: 'PurchaseHistory',
        showInTab: false,
        showInDrawer: false,
    },

    // ReturnPolicyStack ==============================================
    {
        name: screens.ReturnPolicyStack,
        focusedRoute: screens.ReturnPolicy,
        title: 'Return Policy',
        showInTab: false,
        showInDrawer: true,
    },
    {
        name: screens.ReturnPolicy,
        focusedRoute: screens.ReturnPolicyStack,
        title: 'Return Policy',
        showInTab: false,
        showInDrawer: false,
    },

    // SecurityPrivacyStack ============================================
    {
        name: screens.SecurityPrivacyStack,
        focusedRoute: screens.SecurityPrivacy,
        title: 'Security & Privacy',
        showInTab: false,
        showInDrawer: false,
    },
    {
        name: screens.SecurityPrivacy,
        focusedRoute: screens.SecurityPrivacyStack,
        title: 'Security & Privacy',
        showInTab: false,
        showInDrawer: false,
    },


    // TermsConditionStack ============================================
    {
        name: screens.TermsConditionStack,
        focusedRoute: screens.TermsCondition,
        title: 'Terms & Condition',
        showInTab: false,
        showInDrawer: false,
    },
    {
        name: screens.TermsCondition,
        focusedRoute: screens.TermsConditionStack,
        title: 'Terms & Condition',
        showInTab: false,
        showInDrawer: false,
    },

    // AboutStack ============================================
    {
        name: screens.AboutStack,
        focusedRoute: screens.About,
        title: 'About',
        showInTab: false,
        showInDrawer: false,
    },
    {
        name: screens.About,
        focusedRoute: screens.AboutStack,
        title: 'About',
        showInTab: false,
        showInDrawer: false,
    },

    // ContactStack ========================================================
    {
        name: screens.ContactStack,
        focusedRoute: screens.ContactStack,
        title: 'Contact Us',
        showInTab: false,
        showInDrawer: false,
        icon: (focused) =>
            <Icon name="phone" size={30} color={focused ? '#551E18' : '#000'}/>,
    },
    {
        name: screens.Contact,
        focusedRoute: screens.ContactStack,
        title: 'Contact Us',
        showInTab: false,
        showInDrawer: false,
        icon: (focused) =>
            <Icon name="phone" size={30} color={focused ? '#551E18' : '#000'}/>,
    },

    // SettingStack ===========================================================
    {
        name: screens.SettingStack,
        focusedRoute: screens.Setting,
        title: 'Setting',
        showInTab: false,
        showInDrawer: true,
    },
    {
        name: screens.Setting,
        focusedRoute: screens.SettingStack,
        title: 'Setting',
        showInTab: false,
        showInDrawer: false,
    },
];