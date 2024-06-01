import { StyleSheet } from "react-native";

export const styles =StyleSheet.create({
    activityContainer: {flexDirection: "row",  width: "100%", marginBottom: 12,},
    activityText: {flex: 1, backgroundColor: "#fff0f0", height: 56, borderRadius:12, marginHorizontal:12, padding:12, textAlignVertical: "center"},
    deleteActivityButton: {backgroundColor:"#FFAEAE", width: 56, height: 56, borderRadius:12, alignItems:"center", justifyContent: "center", textAlign: "center"},
    finishActivityButton: {backgroundColor:"#D5FFE6", width: 56, height: 56, borderRadius:12, alignItems:"center", justifyContent: "center", textAlign: "center"},

    buttonText: {fontSize:24}
})