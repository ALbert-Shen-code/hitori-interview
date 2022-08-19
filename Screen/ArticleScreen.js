import React, { useState, useEffect, useCallback } from "react";
import { FlatList, SafeAreaView, RefreshControl } from "react-native";
import { useNavigation } from "@react-navigation/core";
import CategoryGrid from "../components/CategoryGrid";
import axios from "axios";

const url =
  "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=d394abd93f794d32ac9c5ee0aa4c7ff2";

const ArticleScreen = () => {
  const [articleList, setArticleList] = useState([]);
  const navigation = useNavigation();
  const [refreshing, setRefreshing] = useState(false);

  const renderArticle = (itemData) => {
    const handlePress = () => {
      navigation.navigate("ArticleOverview", {
        article: itemData.item,
      });
    };
    return (
      <CategoryGrid
        articleTitle={itemData.item.title}
        articleImage={itemData.item.urlToImage}
        onPress={handlePress}
      />
    );
  };

  const getArticle = async () => {
    const article = await axios.get(url);

    if (article.status == 200 && article.data) {
      setArticleList(article.data.articles);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    getArticle();
  }, []);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    getArticle();
  }, []);

  return (
    <SafeAreaView>
      <FlatList
        data={articleList}
        keyExtractor={(item) => item.title}
        renderItem={renderArticle}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />
    </SafeAreaView>
  );
};

export default ArticleScreen;
