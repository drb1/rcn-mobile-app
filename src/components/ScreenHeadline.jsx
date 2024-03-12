import { Text } from "react-native"

const Headingtext = ({heading}) => {
    return (
        <Text style={{fontWeight:'bold',fontSize:30,textAlign:'center',padding:20}}>{heading}</Text>
    )
}

export default Headingtext