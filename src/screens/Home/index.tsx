import { Alert, FlatList, Image, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { Activity } from "../../components/Activity";
import { useState } from "react";

export function Home(){
    const [todoName, setTodoName] = useState(""); //input

    const [todo, setTodo] = useState<String[]>([]); //lista da atividades por fazer

    const [todoComplete, setTodoComplete] = useState<String[]>([]); //lista da atividades feitas

    function handleCreateTodo(){
        if(todoName == ""){
            return Alert.alert("Insira uma atividade!", "Para adicionar uma nova atividade ao seu todo é necessario inserir um nome.");
        }
        else if(todo.includes(todoName) || todoComplete.includes(todoName) ){
            return Alert.alert("A atividade já existe!", "A atividade que você tentou inserir ja está na sua lista!");
        }
        setTodo((prevState) => [...prevState, todoName]);
        setTodoName("");
    }

    function handleCompleteTodo(name:String){
        if(todo.includes(name)){
            console.log("1 caso")
            setTodo((prevState) => prevState.filter((act) =>(act != name)));
            setTodoComplete((prevState) => ([...prevState, name]));
            return;

        }else{
            console.log("2 caso")
            setTodo((prevState) => ([...prevState, name]));
            setTodoComplete((prevState) => prevState.filter((act) =>(act != name)));
            return;
        }
    }

    function handleDeleteTodo(name:String){
        if(todo.includes(name)){
            Alert.alert("Remover", 
                         `Deseja deletar a atividade ${name} da sua lista de afazeres?`,
                         [
                            {text: "Sim", onPress: () =>setTodo((prevState) => prevState.filter((act) =>(act != name))) },
                            {text:"Não"}
                         ]);
        } else if(todoComplete.includes(name)){ 
            Alert.alert("Remover", 
                         `Deseja deletar a atividade ${name} da sua lista de afazeres?`,
                         [
                            {text: "Sim", onPress: () =>setTodoComplete((prevState) => prevState.filter((act) =>(act != name))) },
                            {text:"Não"}
                         ]);

        }

    }


    return(
        <>
            <View style={styles.header}>
                <Text style={styles.titleText} >todo</Text>
            </View>
                <View style={styles.inputContainer}>
                    <TextInput style={styles.inputText}
                               placeholder="Adicione uma nova atividade!"
                               placeholderTextColor="#8c8d8c"
                               onChangeText={setTodoName}
                               value={todoName}
                    />
                    <TouchableOpacity style={styles.button} onPress={() => handleCreateTodo()}>
                        <Text style={styles.buttonText} >+</Text>
                    </TouchableOpacity>
            </View>


            <View style={styles.list}>
                <View style={styles.activityInfo}>
                    <Text style={styles.activityCreateText} >Criadas {todo.length + todoComplete.length}</Text>
                    <Text style={styles.activityDoneText} >Concluidas {todoComplete.length}</Text>
                </View>

                <View style = {styles.line} />

                <View style = {styles.listActivity} >
                    <ScrollView showsVerticalScrollIndicator={false} >
                        {todo.map((item)=> 
                            (<Activity key={item} 
                                nameActivity={item} 
                                onComplet={() => handleCompleteTodo(item)}
                                onDelete={() => handleDeleteTodo(item)}  
                                />)
                        )}

<Text style={styles.activityDoneText} >Concluidas {todoComplete.length}</Text>
                        <View style = {styles.line} />
                        {todoComplete.map((item)=> 
                            (<Activity key={item} 
                                nameActivity={item} 
                                onDelete={() => handleDeleteTodo(item)}
                                onComplet={() => handleCompleteTodo(item)}
                                
                                
                            />)
                        )}
                    </ScrollView>
                </View>
            
            </View>
        </>
    );
}