import { Modal, View, Text, Pressable, StyleSheet } from 'react-native'
import React from 'react'
import { PropsWithChildren } from 'react';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';


type Props = PropsWithChildren<{
    isVisible: boolean;
    onClose: () => void;
    title: string;
  }>;

const ModalView = ({ isVisible, children, onClose, title }: Props) => {
  return (
    <Modal animationType="slide" transparent={true} visible={isVisible}>
      <View style={styles.modalContent} className='bg-primary '>
        <View style={styles.titleContainer} className='bg-primary-light'>
          <Text style={styles.title}>{title}</Text>
          <Pressable onPress={onClose}>
            <MaterialIcons name="close" color="#fff" size={22} />
          </Pressable>
        </View>
        {children}
      </View>
    </Modal>
  )
  
}

export default ModalView

const styles = StyleSheet.create({
    modalContent: {
      height: '45%',
      width: '100%',
      
      borderTopRightRadius: 18,
      borderTopLeftRadius: 18,
      position: 'absolute',
      zIndex: 1000,
      bottom: 0,
    },
    titleContainer: {
      height: '16%',
      
      borderTopRightRadius: 10,
      borderTopLeftRadius: 10,
      paddingHorizontal: 20,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    title: {
      color: '#fff',
      fontSize: 16,
    },
  });