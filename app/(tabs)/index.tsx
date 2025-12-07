import { images } from "@/constants/images";
import { Link, useRouter } from "expo-router";
import { Image, Text, View } from "react-native";

export default function Index() {
  const router = useRouter()

  return (
    <View className="flex-1 bg-primary">
      <Image source={images.bg} className="absolutew-full z-0" />
     
    </View>
  );
}
