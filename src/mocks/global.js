import { launchImageLibrary } from "react-native-image-picker";

export const chooseFile = async (setFilePath) => {
    let options = {
        mediaType: 'mixed', // 'photo', 'video', or 'mixed'
        maxWidth: 300,
        maxHeight: 550,
        quality: 1,
    };

    await launchImageLibrary(options, (response) => {
        if (response.didCancel) {
            console.log('User cancelled video picker');
        } else if (response.error) {
            console.log('ImagePicker Error: ', response.error);
        } else if (response.customButton) {
            console.log('User tapped custom button: ', response.customButton);
        } else {
            const source = {
                uri: response.assets[0].uri,
                name: response.assets[0].fileName,
                type: response.assets[0].type,
            };
            setFilePath(source);
        }
    });
};