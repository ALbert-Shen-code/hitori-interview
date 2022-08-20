import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ArticleOverviewScreen from "./Screen/ArticleOverview";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ArticleScreen from "./Screen/ArticleScreen";
// import { createDrawerNavigator } from "@react-navigation/drawer";

const BotNav = createBottomTabNavigator();

const Article = createNativeStackNavigator();
const ArticlePage = () => {
  return (
    <Article.Navigator>
      <Article.Screen name="Article" component={ArticleScreen} />
      <Article.Screen
        name="ArticleOverview"
        component={ArticleOverviewScreen}
      />
    </Article.Navigator>
  );
};
const Bottom = () => {
  return (
    <BotNav.Navigator screenOptions={{ headerShown: false }}>
      <BotNav.Screen name="Article List" component={ArticlePage} />
    </BotNav.Navigator>
  );
};
const Stack = createNativeStackNavigator();

const Root = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Bottom" component={Bottom} />
    </Stack.Navigator>
  );
};

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Root />
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
