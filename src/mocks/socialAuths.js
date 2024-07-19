import {
    GoogleSignin,
    statusCodes,
} from '@react-native-google-signin/google-signin';

export const GoogleAuth = async (login) => {
    try {
        GoogleSignin.configure({
            androidClientId: '449651409650-p010emuojm700t834098sbve2kevtv9j.apps.googleusercontent.com',
            iosClientId: '449651409650-vq3rke5bdatd1tag4i4a4v7eamsab2jk.apps.googleusercontent.com',
        });
        if (login) {
            await GoogleSignin.hasPlayServices().then((hasPlayService) => {
                if (hasPlayService) {
                    GoogleSignin.signIn().then((userInfo) => {
                        console.log(JSON.stringify(userInfo))
                    }).catch((e) => {
                        console.log("ERROR IS: " + JSON.stringify(e));
                    })
                }
            }).catch((e) => {
                console.log("ERROR IS: " + JSON.stringify(e));
            })
        } else {
            await GoogleSignin.revokeAccess();
            await GoogleSignin.signOut();
            auth()
                .logOut()
                .then(props.logOut());
        }

    } catch (error) {
        console.log('ERROR:--->', error)
    }
}