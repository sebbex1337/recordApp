import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Text, View, TextInput, Image, Pressable } from "react-native";

export default function HomePage({ navigation, route }) {
    const [records, setRecords] = useState([]);
    const [text, setText] = useState("");
    const [url, setUrl] = useState("");
    const [artist, setArtist] = useState("");
    const [releaseDate, setReleaseDate] = useState("");

    function handlePress() {
        setRecords([...records, { text, url, artist, releaseDate }]);
        setText("");
        setUrl("");
        setArtist("");
        setReleaseDate("");
    }

    return (
        <View className="flex-1 items-center justify-center bg-[#fff]">
            <Text className="text-4xl text-teal-800">Record App</Text>
            <View className="flex flex-wrap gap-1">
                <TextInput className="text-xl" value={text} onChangeText={(text) => setText(text)} placeholder="Enter record name" />
                <TextInput className="text-xl" value={url} onChangeText={(url) => setUrl(url)} placeholder="Enter record url image" />
                <TextInput className="text-xl" value={artist} onChangeText={(artist) => setArtist(artist)} placeholder="Enter Artist name" />
                <TextInput className="text-xl" value={releaseDate} onChangeText={(releaseDate) => setReleaseDate(releaseDate)} placeholder="Enter Record Release Date" />
            </View>
            <Pressable className="border rounded-3xl p-2 bg-lime-200 mt-4" onPress={handlePress}>
                <Text className="text-xl text-teal-900">Save</Text>
            </Pressable>
            <Text className="text-xl text-teal-800 mb-4 mt-[100]">My LP collection</Text>
            <View className="flex flex-row flex-wrap justify-center gap-8">
                {records.map((record, index) => (
                    <Pressable key={index} onPress={() => navigation.navigate("details", { record })}>
                        <View className="w-[150]">
                            <Image source={{ uri: record.url }} style={{ width: 150, height: 150 }} />
                            <Text className="text-center">{record.text}</Text>
                        </View>
                    </Pressable>
                ))}
            </View>
            <StatusBar style="auto" />
        </View>
    );
}
