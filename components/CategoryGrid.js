import React, { useState, useCallback } from "react";
import {
  Pressable,
  View,
  Text,
  StyleSheet,
  Platform,
  Image,
} from "react-native";

const CategoryGrid = ({ articleTitle, articleImage, onPress }) => {
  return (
    <View style={[styles.gridItem]}>
      <Pressable
        onPress={onPress}
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => [
          styles.buttonStyle,
          pressed ? styles.buttonPressed : null,
        ]}
      >
        <Image
          source={{ url: articleImage }}
          style={styles.imageLogo}
          resizeMode="center"
          accessibilityLabel="Picture"
        />

        <View style={styles.innerContainer}>
          <Text style={styles.title}>{articleTitle}</Text>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    borderRadius: 8,
    elevation: 4,
    backgroundColor: "white",
    shadowColor: "black",
    shadowRadius: 8,
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    overflow: Platform.OS === "android " ? "hidden" : "visible",
  },
  buttonStyle: {
    flex: 1,
  },
  buttonPressed: {
    opacity: 0.25,
  },
  innerContainer: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    borderRadius: 8,
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
  imageLogo: {
    width: "100%",
    height: 100,
  },
});
export default CategoryGrid;
