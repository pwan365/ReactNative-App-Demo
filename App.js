/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState, useEffect, addListener } from 'react'
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
    TouchableOpacity,
    TextInput,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CurrencyInput from 'react-native-currency-input';
import DatePicker from 'react-native-date-picker'

const Section = ({children, title}): Node => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          { 
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const Stack = createNativeStackNavigator()

const App: () => Node = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{ title: 'My Goals List' }}
                />
                <Stack.Screen
                    name="AddGoal"
                    component={AddGoalScreen}
                    options={{ title: 'Create A New Goal' }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};


const HomeScreen = ({ navigation }) => {
    const isDarkMode = useColorScheme() === 'dark';

    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };

    let date = (new Date()).toDateString();

    const mockGoals = [
        {
            id: 1,
            name: "Car",
            cost: 100000,
            start: date,
            end: new Date()
        },
        {
            id: 2,
            name: "Food",
            cost: 200,
            start: new Date(),
            end: new Date()
        },
        {
            id: 3,
            name: "School",
            cost: 18000,
            start: new Date(),
            end: new Date()
        }
    ]


    function GoalViews() {
        return mockGoals.map(function (g, i) {
            return (
                <View key={i} style={styles.cardView} >
                    <Text style={styles.cardText}> {g.name}</Text>
                    <Text style={styles.cardCost}> ${g.cost}</Text>
                </View>
            );
        });
    }

    return (
        <SafeAreaView style={backgroundStyle, styles.mainView}>
            <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
            <ScrollView
                contentInsetAdjustmentBehavior="automatic"
                style={backgroundStyle}
                contentContainerStyle={{ flexGrow: 1 }}>

                

                <View>
                    {GoalViews()}
                </View>

                <View
                    style={styles.bottom}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => {
                            navigation.navigate('AddGoal')
                        }}
                    >
                        <Text style={styles.buttonText}>Create a new goal</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>

        </SafeAreaView>
    );
};

const AddGoalScreen = ({ navigation }) => {
    const [name, setName] = React.useState(null);
    const [cost, setCost] = React.useState(null);
    const [startDate, setStartDate] = useState(new Date())
    const [endDate, setEndDate] = useState(new Date())
    const [startOpen, setStartOpen] = useState(false)
    const [endOpen, setEndOpen] = useState(false)

    return (
        <ScrollView
            style={{
                paddingTop: 20,
                flex: 1,
            }}>
            <Text
                style={styles.createGoalsText }>
                Enter the name of the goal:</Text>
            <TextInput
                placeholderTextColor='grey'
                style={styles.input}
                textAlign={'center'}
                onChangeText={setName}
                value={name}
                placeholder="Goal Name"
                keyboardType="default" />

            <Text
                style={styles.createGoalsText}>
                Enter the cost of the goal:</Text>
            <CurrencyInput
                placeholderTextColor='grey'
                style={styles.input}
                value={cost}
                onChangeValue={setCost}
                prefix="$"
                delimiter=","
                separator="."
                textAlign={'center'}
                placeholder="Goal Cost"
                precision={2}
                minValue={0}
            />

            <Text
                style={styles.createGoalsText}>
                Starting from:</Text>
            <TouchableOpacity
                style={styles.input}
                onPress={() => setStartOpen(true)}
            >
                <Text style={styles.dateText}>{startDate.toDateString()}</Text>
            </TouchableOpacity>

            <Text
                style={styles.createGoalsText}>
                Ends at:</Text>
            <TouchableOpacity
                style={styles.input}
                onPress={() => setEndOpen(true)}
            >
                <Text style={styles.dateText}>{endDate.toDateString()}</Text>
            </TouchableOpacity>

            <DatePicker
                modal
                open={startOpen}
                date={startDate}
                mode='date'
                onConfirm={(startDate) => {
                    setStartOpen(false)
                    setStartDate(startDate)
                }}
                onCancel={() => {
                    setStartOpen(false)
                }}
            />

            <DatePicker
                modal
                open={endOpen}
                date={endDate}
                mode='date'
                onConfirm={(endDate) => {
                    setEndOpen(false)
                    setEndDate(endDate)
                }}
                onCancel={() => {
                    setEndOpen(false)
                }}
            />

            <View
                style={styles.bottom}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                        var ID
                        while (true) {
                            let newID = Math.floor(Math.random() * 1000)
                            var repeated = false
                            for (var i = 0; i < goalList.length; i++) {
                                if (goalList[i].id == newID) {
                                    repeated = true
                                    break
                                }
                            }
                            if (!repeated) {
                                ID = newID
                                break
                            }
                        }
                        const data = {
                            id: ID,
                            name: name,
                            cost: cost,
                            start: startDate,
                            end: endDate,
                            allocated: 0
                        }
                        goalList.push(data)
                        console.log(goalList)
                        navigation.navigate('Home')
                    }}
                >
                    <Text style={styles.buttonText}>Create</Text>
                </TouchableOpacity>
            </View>

        </ScrollView>
    );
};

const styles = StyleSheet.create({
    mainView: {
        flex: 1
    },
    bottom: {
        flex: 1,
        justifyContent: 'flex-end',
        marginBottom: 30,
        marginTop: 30,
    },
    button: {
        alignItems: "center",
        backgroundColor: '#46a5db',
        padding: 13,
        borderRadius: 50,
        marginHorizontal: 90,
    },
    buttonText: {
        fontSize: 20,
        color: 'white',
    },
    input: {
        alignItems: "center",
        height: 50,
        marginHorizontal: 50,
        marginVertical: 12,
        borderWidth: 1,
        padding: 10,
        paddingHorizontal: 30,
        borderRadius: 25,
        borderColor: '#46a5db',
        borderWidth: 2,
        fontSize: 20,
    },
    inputText: {
        fontSize: 20,
    },
    createGoalsText: {
        fontSize: 20,
        marginHorizontal: 50,
        color: 'black',
    },
    dateText: {
        color: 'black',
        fontSize: 20,
    },
    cardView: {
        margin: 20,
        borderColor: '#46a5db',
        borderWidth: 1,
        borderRadius: 20,
        height: 100,
    },
    cardText: {
        paddingLeft: 10,
        paddingTop: 5,
        color: 'black',
        fontSize: 25,
    },
    cardCost: {
        paddingLeft: 10,
        paddingTop: 10,
        color: 'gray',
        fontSize: 20,
    }
});

export default App;
