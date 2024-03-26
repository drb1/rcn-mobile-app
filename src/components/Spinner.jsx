import { ActivityIndicator, View } from "react-native"

const Spinner = () => {
    return (
        <View style={{flexGrow: 1, justifyContent: 'center', alignItems: 'center',  backgroundColor: colors.backgroundColor,}}>
        <ActivityIndicator />
      </View>
    )
}
export default Spinner