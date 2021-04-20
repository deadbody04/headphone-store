import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
    allContent: {
        background: '#ECECEC',
    },
    mainGrid: {
        paddingTop: 35
    },
    linksText: {
        textAlign: 'center',
        textTransform: "uppercase",
        color: '#2D2D2D',
        font: 'var(--font_8)',
        letterSpacing: '0.02em',
        lineHeight: '2em',
        textDecoration: 'none',
        borderBottom: 'none',
        '&:hover': {
            textDecoration: 'none',
            borderBottom: 'none',
        },
    },
    mainContainer: {
        maxWidth: 1200,
        height: 230,
    },
}))