import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
type Props ={
    nameActivity : String,
    onDelete: () => void,
    onComplet: () => void,
}

export function Activity({nameActivity, onComplet, onDelete}:Props){
    return(
        <View style={styles.activityContainer}>
            <TouchableOpacity style={styles.finishActivityButton} onPress={onComplet}>
                <Text style={styles.buttonText}>x</Text>
            </TouchableOpacity>

            <Text style={styles.activityText}>{nameActivity}</Text>
            
            <TouchableOpacity style={styles.deleteActivityButton} onPress={onDelete}>
                <Text style={styles.buttonText}>-</Text>
            </TouchableOpacity>
        </View>
    )
}