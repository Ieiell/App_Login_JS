import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { styles } from './CommonStyles';

export default function ProdutoItem(props) {
    const { produto, onDelete } = props;

    return (
        <View style={styles.container}>
            <Text style={styles.textItem}>
                {produto.codigo.toString()} - {produto.nome}
            </Text>
            <Text style={styles.textItem}>
                Quantidade: {produto.quantidade.toString()}
            </Text>
            <View style={styles.buttonsContainer}>
                <TouchableOpacity style={styles.deleteButton} onPress={onDelete}>
                    <Text style={styles.buttonText}>X</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}