import theme from "../theme";

const { View, Text, StyleSheet, Image } = require("react-native");

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "white",
    padding: 10,
  },
  flexContainerColumn: {
    display: "flex",
    flexDirection: "column",
    flexWrap: "nowrap",
    justifyContent: "space-between",
  },
  flexContainerRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  itemInfo: {
    width: 350,
  },
  statsInfo: {
    alignContent: "space-between",
  },
  photoProfile: {
    width: 50,
    height: 50,
  },
  marginBottomContent: {
    marginBottom: 10,
  },
  marginLeftContent: {
    marginLeft: 10,
  },
  title: {
    fontWeight: theme.fontWeight.bold,
  },
  description: {
    color: theme.textColor.secondary,
  },
  language: {
    width: 100,
    paddingHorizontal: 3,
    paddingVertical: 2,
    textAlign: "center",
    borderRadius: 4,
    color: theme.textColor.primary,
    backgroundColor: theme.backgroundColor.primary,
  },
});
const RepositoryItem = ({ item }) => {
  return (
    <View key={item.id} style={styles.container}>
      <View style={[styles.flexContainerRow, styles.marginBottomContent]}>
        <Image
          style={styles.photoProfile}
          source={{
            uri: `${item.ownerAvatarUrl}`,
          }}
        />
        <View
          style={[
            styles.flexContainerColumn,
            styles.marginLeftContent,
            styles.itemInfo,
          ]}
        >
          <Text style={[styles.title]}>{item.fullName}</Text>
          <Text style={[styles.secondary]}>{item.description}</Text>
          <View>
            <Text style={[styles.language]}>{item.language}</Text>
          </View>
        </View>
      </View>
      <View style={[styles.flexContainerRow]}>
        <View style={styles.flexContainerColumn}>
          <Text>
            {item.stargazersCount > 1000
              ? Number(item.stargazersCount / 1000).toFixed(1) + "k"
              : item.stargazersCount}
          </Text>
          <Text>Stars</Text>
        </View>
        <View style={styles.flexContainerColumn}>
          <Text>
            {item.forksCount > 1000
              ? Number(item.forksCount / 1000).toFixed(1) + "k"
              : item.forksCount}
          </Text>
          <Text>Forks</Text>
        </View>
        <View style={styles.flexContainerColumn}>
          <Text>
            {item.reviewCount > 1000
              ? Number(item.reviewCount / 1000).toFixed(1) + "k"
              : item.reviewCount}
          </Text>
          <Text>Reviews</Text>
        </View>
        <View style={styles.flexContainerColumn}>
          <Text>
            {item.ratingAverage > 1000
              ? Number(item.ratingAverage / 1000).toFixed(1) + "k"
              : item.ratingAverage}
          </Text>
          <Text>Rating</Text>
        </View>
      </View>
    </View>
  );
};

export default RepositoryItem;
