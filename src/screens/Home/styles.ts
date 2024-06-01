import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    titleText: {textAlign: "center", marginTop: 60,  fontWeight: "bold", color: "#181AB6" , fontSize: 37 },
    header: { height:180, backgroundColor: "#ADAFFF", borderRadius:24},
    
    inputContainer: { alignItems:"center", marginHorizontal:65, flexDirection: "row", marginTop:-27, marginBottom: 20, },
    inputText:{flex: 1, backgroundColor: "#fff0f0", height: 56, borderRadius:12, marginRight:12, padding:12, },
    button:{backgroundColor: "#fff0f0", width: 56, height: 56, borderRadius:12, alignItems:"center", justifyContent: "center"},
    buttonText: {fontSize:24},
    list:{flex: 1, marginHorizontal:30},


    activityInfo:{flexDirection: "row", width:'100%', alignItems:"center", marginBottom:14},
    activityCreateText:{flex: 1, color:"#D35C5C", fontSize: 13},
    activityDoneText:{color:"#D35C5C", fontSize: 13},

    line:{ height: 2, width: "100%", backgroundColor: "pink", marginVertical: 20},
    flatList:{width: "100%", backgroundColor: "blue"},
    listActivity:{width: "100%"}

})