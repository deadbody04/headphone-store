import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
    headerSection: {
        width: '100%',
        height: '752px',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundImage: `url('https://static.wixstatic.com/media/82fcd3_1e4cb7a7053948998237a43286bee5bf~mv2_d_3840_1470_s_2.jpg/v1/fill/w_1903,h_752,al_c,q_85,usm_0.66_1.00_0.01/82fcd3_1e4cb7a7053948998237a43286bee5bf~mv2_d_3840_1470_s_2.webp')`
    },
    infoAboutHP: {
        color: '#FFF',
        height: 770,
        width: "100%",
    },
    mainGridCont: {
        height: 770,
    },
    gridItems: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        borderRight: '1px solid rgba(0,0,0,0)',
        backgroundClip: 'content-box',
    },
    gridTextFirst: {
        marginTop: '70%',
        width: '200px',
        margin: 'auto',
    },
    gridTexSecond: {
        marginTop: '45%',
        width: '200px',
        margin: 'auto',
    },
    featuredOn: {
        width: '100%',
    },
    bestSound: {
        width: '100%',
    },
    reviews: {
        width: '100%',
        height: 640
    },
    parallaxImage: {
        width: '100%',
        height: 570,
        backgroundSize: 'cover',
    },
    innerColor: {
        width: '100%',
        height: 570,
        background: 'rgba(208, 180, 143, 0.3)',
    },
    emailDistribution: {
        width: '100%',
        height: 240,
    },
    otherLinks: {
        width: '100%',
        height: 230,
    },
    footer: {
        width: '100%',
        height: 66,
    },
    signUp: {
        width: '100%',
    }
}))