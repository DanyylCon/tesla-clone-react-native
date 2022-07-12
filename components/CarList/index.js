import React from "react";
import {View, Text, FlatList, ImageBackground} from 'react-native';
import CarItem from "../CarItem";

import styles from "./styles";
import cars from "./cars";

const CarList = (props) => {

    return (
        <View style={styles.container}>
            <FlatList 
                data={cars}
                renderItem={ ({ item }) => (
                    <CarItem car={item} />
                )}
            />
        </View>
    );
    
};

export default CarList;