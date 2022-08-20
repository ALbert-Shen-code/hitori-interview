import React from "react";
import {
  FlatList,
  Image,
  Text,
  View,
  StyleSheet,
  Pressable,
  Platform,
} from "react-native";

const ArticleOverviewScreen = ({ navigation, route }) => {
  const articleDetail = route.params.article;

  return (
    <View style={styles.articleItem}>
      <Image style={styles.image} source={{ url: articleDetail.urlToImage }} />
      <Text style={styles.title}>{articleDetail.title}</Text>
      <View
        style={{
          borderBottomColor: "black",
          borderBottomWidth: StyleSheet.hairlineWidth,
        }}
      />
      <Text style={styles.detailItem}>{articleDetail.author}</Text>

      <View
        style={{
          borderBottomColor: "black",
          borderBottomWidth: StyleSheet.hairlineWidth,
        }}
      />

      <View style={styles.details}>
        <Text style={styles.detailItem}>{articleDetail.content}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  articleItem: {
    margin: 16,
    borderRadius: 8,
    overflow: Platform.OS === "android " ? "hidden" : "visible",
    backgroundColor: "white",
    shadowColor: "black",
    shadowRadius: 8,
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
  },
  image: {
    width: "100%",
    height: 200,
  },
  buttonPressed: {
    opacity: 0.25,
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
    margin: 8,
  },
  details: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
  },
  detailItem: {
    marginHorizontal: 4,
    fontWeight: "bold",
    fontSize: 12,
  },
});

export default ArticleOverviewScreen;
