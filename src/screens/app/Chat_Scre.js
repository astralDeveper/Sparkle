import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
  TextInput,
  FlatList,
  StyleSheet,
  Image,
  ScrollView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import RBSheet from 'react-native-raw-bottom-sheet';
import io from 'socket.io-client';
import {
  Add_Fri,
  Em,
  Exit,
  Left_Arrow,
  Orange_Gift,
  Send,
} from '../../assets/Images';
import {Gifts} from '../../Dummy';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { USER } from '../Api';
import axios from 'axios';

const {height, width} = Dimensions.get('screen');
const SOCKET_URL = 'http://192.168.100.12:5000/'; // Add your socket server URL here

const Chat_Scre = ({navigation, route}) => {
  const refRBSheet = useRef();
  const socket = useRef(null);
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');
  const [connectionStatus, setConnectionStatus] = useState('Disconnected');
  const {reciever} = route.params;
  console.log("reciverid",reciever);
  const [senderId, setsenderId] = useState();
  const [myId, setMyId] = useState();
  const scrollViewRef = useRef(null);

  const storeChatTopic = async ( ) => {
    try {
      const response = await axios.post(USER.CHAT_ROME, {
        senderUserId:senderId,
        receiverUserId:reciever,
      });
  
      if (response.data.status) {
        console.log('Chat topic retrieved or created successfully:', response.data.chatTopic);
        return response.data.chatTopic;
      } else {
        console.error('Failed to retrieve or create chat topic:', response.data.message);
      }
    } catch (error) {
      console.error('Error storing chat topic:', error);
    }
  };
  useEffect(() => {
    const getdata = async () => {
      try {
        const accessToken = await AsyncStorage.getItem('userInfo');
        const data = JSON.parse(accessToken);
        setsenderId(data._id);
        setMyId(data._id);
      } catch (error) {
        console.error('Error fetching profile details:', error.message);
      }
    };
    storeChatTopic()
    getdata();
  }, []);




  // useEffect(() => {
  //   if (!senderId) return;

  //   socket.current = io(SOCKET_URL, {
  //     query: {
  //       globalRoom: 'yourRoomNameHere:123',
  //     },

  //     transports: ['websocket'],
  //     senderUserId: senderId,
  //     receiverUserId: reciever,
  //   });

  //   socket.current.on('connect', () => {
  //     console.log('Connected to server');
  //     setConnectionStatus('Connected');
  //   });

  //   socket.current.on('disconnect', () => {
  //     console.log('Disconnected from server');
  //     setConnectionStatus('Disconnected');
  //   });

  //   socket.current.on('chat', chatMessage => {
  //     console.log('Received chat message:', chatMessage);
  //     setMessages(prevMessages => [...prevMessages, chatMessage]);
  //   });

  //   socket.current.on('error', error => {
  //     console.error('Socket error:', error);
  //   });

  //   return () => {
  //     if (socket.current) {
  //       socket.current.disconnect();
  //     }
  //   };
  // }, [senderId, reciever]);

  const sendMessage = () => {
    if (message.trim()) {
      const chatMessage = {
        senderId: senderId,
        topic: '66a4f84ab1bcaac6f5494781',
        messageType: 'message',
        text: message,
        timestamp: new Date(),
      };
      console.log('Sending chat message:', chatMessage);
      socket.current.emit('chat', chatMessage);
      setMessage('');
      setMessages(prevMessages => [...prevMessages, chatMessage]);
    }
  };

  const formatTime = date => {
    let hours = date.getHours();
    const minutes = date.getMinutes();

    // Convert to 12-hour format
    hours = hours % 12 || 12;

    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

    return `${hours}:${formattedMinutes}`;
  };

  const renderMessageItem = ({item}) => (
    <View
      style={{
        margin: 5,
        padding: 5,
        alignSelf: senderId === myId && 'flex-end',
        backgroundColor: senderId === myId ? '#9416DA' : '#D7138F',
      }}>
      <Text style={styles.messageText}>{item.text}</Text>
      <Text style={styles.timestamp}>{formatTime(item.timestamp)}</Text>
    </View>
  );

  useEffect(() => {
    if (scrollViewRef.current && messages) {
      scrollViewRef.current.scrollToEnd({animated: false});
    }
  }, [messages]);
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('Matches')}>
          <Left_Arrow />
        </TouchableOpacity>
        <View style={styles.headerInfo}>
          <Image
            source={require('../../assets/Images/Icons/Ma2.png')}
            style={styles.profileImage}
          />
          <View style={styles.userInfo}>
            <Text numberOfLines={1} style={styles.userName}>
              Chirag Wa
            </Text>
            <Text numberOfLines={1} style={styles.userStatus}>
              Online
            </Text>
          </View>
        </View>
        <TouchableOpacity style={styles.actionButton}>
          <Add_Fri />
          <Text style={styles.actionText}>Add Friend</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Matches')}
          style={styles.actionButton}>
          <Exit />
          <Text style={styles.actionText}>Exit</Text>
        </TouchableOpacity>
      </View>

      {/* <LinearGradient
        colors={['#FF00FF', '#00FFFF']}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        style={styles.gradient}>
        <Text style={styles.todayText}>TODAY</Text>
      </LinearGradient> */}
      <View style={{height: height * 0.69}}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={messages}
          renderItem={renderMessageItem}
          keyExtractor={(item, index) => index.toString()}
          contentContainerStyle={styles.messageList}
        />
      </View>
      <View style={styles.inputContainer}>
        <View style={styles.inputWrapper}>
          <Em />
          <TextInput
            placeholder="Add caption"
            placeholderTextColor="#8e8e8e"
            value={message}
            onChangeText={setMessage}
            style={styles.textInput}
            multiline={true}
          />
          <TouchableOpacity onPress={sendMessage}>
            <Send />
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={() => refRBSheet.current.open()}
          style={styles.giftButton}>
          <Orange_Gift />
        </TouchableOpacity>
      </View>

      <RBSheet
        ref={refRBSheet}
        useNativeDriver={false}
        draggable={true}
        customStyles={{
          container: styles.rbsheetContainer,
          wrapper: styles.rbsheetWrapper,
          draggableIcon: styles.rbsheetDraggableIcon,
        }}
        customModalProps={{
          animationType: 'slide',
          statusBarTranslucent: true,
        }}
        customAvoidingViewProps={{
          enabled: false,
        }}>
        <FlatList
          data={Gifts}
          contentContainerStyle={styles.giftListContainer}
          renderItem={({item}) => (
            <TouchableOpacity style={styles.giftItem}>
              <Image source={item.pic} style={styles.giftImage} />
              <View style={styles.giftPriceContainer}>
                <Image source={item.gem} style={styles.gemImage} />
                <Text style={styles.giftPrice}>{item.price}</Text>
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </RBSheet>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#120030',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
    backgroundColor: '#1A043F',
  },
  headerInfo: {
    flexDirection: 'row',
    width: width * 0.5,
  },
  profileImage: {
    height: 50,
    width: 50,
    borderRadius: 25,
  },
  userInfo: {
    marginLeft: 20,
  },
  userName: {
    color: '#FFF',
    fontSize: 20,
    fontFamily: 'Outfit-Medium',
    width: width * 0.4,
  },
  userStatus: {
    color: '#04F504',
    fontSize: 18,
    fontFamily: 'Outfit-Medium',
    width: width * 0.4,
  },
  actionButton: {
    alignItems: 'center',
  },
  actionText: {
    color: '#FFF',
    fontSize: 10,
  },
  gradient: {
    padding: 10,
    alignItems: 'center',
    borderRadius: 10,
    width: width * 0.25,
    alignSelf: 'center',
    marginVertical: 20,
  },
  todayText: {
    color: '#fff',
  },
  messageContainer: {
    marginVertical: 2,
    padding: 5,
  },
  messageText: {
    color: '#FFF',
  },
  timestamp: {
    fontSize: 10,
    color: 'gray',
  },
  messageList: {
    flexGrow: 1,
    justifyContent: 'flex-end',
  },
  inputContainer: {
    position: 'absolute',
    bottom: 20,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: width * 0.95,
    alignSelf: 'center',
  },
  inputWrapper: {
    width: width * 0.8,
    backgroundColor: '#353535',
    borderRadius: 100,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 5,
  },
  textInput: {
    padding: 0,
    width: width * 0.55,
    height: height * 0.05,
    color: '#FFF',
  },
  giftButton: {
    height: 40,
    width: 40,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
  },
  rbsheetContainer: {
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    height: '50%',
  },
  rbsheetWrapper: {
    backgroundColor: 'transparent',
  },
  rbsheetDraggableIcon: {
    backgroundColor: '#000',
    width: '25%',
  },
  giftListContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    marginTop: 20,
  },
  giftItem: {
    backgroundColor: 'rgba(102, 62, 60, 0.6)',
    padding: 20,
    borderRadius: 10,
    marginVertical: 10,
  },
  giftImage: {
    height: 40,
    width: 40,
  },
  giftPriceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  gemImage: {
    height: 15,
    width: 15,
  },
  giftPrice: {
    color: '#FFF',
    marginLeft: 5,
  },
});

export default Chat_Scre;
