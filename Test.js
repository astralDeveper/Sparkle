import React, { useEffect, useRef, useState } from 'react';
import { View, Button, Text } from 'react-native';
import {
  RTCPeerConnection,
  RTCView,
  mediaDevices,
  MediaStream,
  RTCSessionDescription,
  RTCIceCandidate,
} from 'react-native-webrtc';
import io from 'socket.io-client';

const configuration = {
  iceServers: [
    { urls: 'stun:stun.l.google.com:19302' },
  ],
};

const WebRTCComponent = () => {
  const [localStream, setLocalStream] = useState(null);
  const [remoteStream, setRemoteStream] = useState(new MediaStream());
  const [connectionStatus, setConnectionStatus] = useState('Disconnected');
  const pc = useRef(new RTCPeerConnection(configuration));
  const socket = useRef(null);

  useEffect(() => {
    const initializeWebRTC = async () => {
      try {
        await startLocalStream();

        socket.current = io('http://192.168.100.12:3000');

        socket.current.on('offer', async (offer) => {
          try {
            await pc.current.setRemoteDescription(new RTCSessionDescription(offer));
            const answer = await pc.current.createAnswer();
            await pc.current.setLocalDescription(answer);
            socket.current.emit('answer', answer);
          } catch (error) {
            console.error('Error handling offer:', error);
          }
        });

        socket.current.on('answer', async (answer) => {
          try {
            await pc.current.setRemoteDescription(new RTCSessionDescription(answer));
          } catch (error) {
            console.error('Error handling answer:', error);
          }
        });

        socket.current.on('candidate', async (candidate) => {
          try {
            await pc.current.addIceCandidate(new RTCIceCandidate(candidate));
          } catch (error) {
            console.error('Error handling candidate:', error);
          }
        });

        pc.current.onicecandidate = (event) => {
          if (event.candidate) {
            socket.current.emit('candidate', event.candidate);
          }
        };

        pc.current.ontrack = (event) => {
          if (event.streams && event.streams[0]) {
            setRemoteStream(event.streams[0]);
            console.log("first",event)
            setConnectionStatus('Connected');
          }
        };

        pc.current.onconnectionstatechange = () => {
          console.log('Connection state changed:', pc.current.connectionState);
          setConnectionStatus(pc.current.connectionState);
        };

        pc.current.oniceconnectionstatechange = () => {
          console.log('ICE connection state changed:', pc.current.iceConnectionState);
          setConnectionStatus(pc.current.iceConnectionState);
        };
      } catch (error) {
        console.error('Error initializing WebRTC:', error);
      }
    };

    initializeWebRTC();

    return () => {
      if (localStream) {
        localStream.getTracks().forEach(track => track.stop());
      }
      if (pc.current) {
        pc.current.close();
      }
      if (socket.current) {
        socket.current.disconnect();
      }
    };
  }, []);

  const startLocalStream = async () => {
    try {
      const stream = await mediaDevices.getUserMedia({
        video: true,
        audio: true,
      });
      setLocalStream(stream);
      stream.getTracks().forEach(track => {
        pc.current.addTrack(track, stream);
      });
    } catch (error) {
      console.error('Error starting local stream:', error);
    }
  };

  const startCall = async () => {
    try {
      const offer = await pc.current.createOffer();
      await pc.current.setLocalDescription(offer);
      socket.current.emit('offer', offer);
      setConnectionStatus('Calling');
    } catch (error) {
      console.error('Error starting call:', error);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <Text>Status: {connectionStatus}</Text>
      {localStream && (
        <RTCView streamURL={localStream.toURL()} style={{ flex: 1 }} />
      )}
      {remoteStream && (
        <RTCView streamURL={remoteStream.toURL()} style={{ flex: 1 }} />
      )}
      <Button title="Start Call" onPress={startCall} />
    </View>
  );
};

export default WebRTCComponent;import React, { useEffect, useRef, useState } from 'react';
// import React, { useEffect, useRef, useState } from 'react';
// import { View, Button, Text, TextInput, FlatList, StyleSheet, Alert } from 'react-native';
// import io from 'socket.io-client';

// const WebRTCComponent = () => {
//   const [messages, setMessages] = useState([]);
//   const [message, setMessage] = useState('');
//   const [connectionStatus, setConnectionStatus] = useState('Disconnected');
//   const socket = useRef(null);

//   useEffect(() => {
//     const initializeSocket = () => {
//       try {
//         socket.current = io('http://192.168.100.12:3000');

//         socket.current.on('connect', () => {
//           setConnectionStatus('Connected');
//         });

//         socket.current.on('disconnect', () => {
//           setConnectionStatus('Disconnected');
//         });

//         socket.current.on('chat-message', (chatMessage) => {
//           setMessages((prevMessages) => [...prevMessages, chatMessage]);
//         });
//       } catch (error) {
//         console.error('Error initializing socket:', error);
//         Alert.alert('Error', 'Error initializing socket');
//       }
//     };

//     initializeSocket();

//     return () => {
//       if (socket.current) {
//         socket.current.disconnect();
//       }
//     };
//   }, []);

//   const sendMessage = () => {
//     if (message.trim()) {
//       const chatMessage = { text: message, timestamp: new Date() };
//       socket.current.emit('chat-message', chatMessage);
//       setMessage('');
//     }
//   };

//   const formatTimestamp = (timestamp) => {
//     try {
//       const date = new Date(timestamp);
//       return date.toLocaleTimeString();
//     } catch (error) {
//       console.error('Error formatting timestamp:', error);
//       return '';
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text>Status: {connectionStatus}</Text>

//       {/* Chat Section */}
//       <View style={styles.chatContainer}>
//         <FlatList
//           data={messages}
//           renderItem={({ item }) => (
//             <View style={styles.messageContainer}>
//               <Text>{item.text}</Text>
//               <Text style={styles.timestamp}>{formatTimestamp(item.timestamp)}</Text>
//             </View>
//           )}
//           keyExtractor={(item, index) => index.toString()}
//         />
//         <TextInput
//           style={styles.input}
//           value={message}
//           onChangeText={setMessage}
//           placeholder="Type a message"
//         />
//         <Button title="Send" onPress={sendMessage} />
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 10,
//   },
//   chatContainer: {
//     flex: 1,
//     justifyContent: 'flex-end',
//   },
//   messageContainer: {
//     marginVertical: 2,
//     padding: 5,
//   },
//   timestamp: {
//     fontSize: 10,
//     color: 'gray',
//   },
//   input: {
//     borderColor: 'gray',
//     borderWidth: 1,
//     padding: 10,
//     marginVertical: 5,
//   },
// });

// export default WebRTCComponent;
