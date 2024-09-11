import { View, Text, Image } from "react-native";

export default function Detailview({ navigation, route }) {
    const { record } = route.params;
    return (
        <View className="flex-1 items-center justify-center">
            <Text className="text-4xl font-bold"> {record.text}</Text>
            <Image source={{ uri: record.url }} style={{ width: 150, height: 150 }} />
            <Text className="text-2xl font-bold">{record.artist}</Text>
            <Text className="text-xl ">{record.releaseDate}</Text>
        </View>
    );
}
