import { makeStyles } from "@material-ui/core/styles";


export const bannerStyles = makeStyles(() => ({
    banner: {
        backgroundImage: 'url(./crypto4.jpeg)',

    },
    bannerContent: {
        height: 400,
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        paddingTop: 25,
        justifyContent: 'space-around',
    },
    tagline: {
        display: 'flex',
        height: "40%",
        flexDirection: 'column',
        justifyContent: 'center',
        textAlign: 'center',
    }
}))