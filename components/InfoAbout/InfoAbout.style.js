import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
    mainBlock: {
        color: "#FFF",
        position: "relative",
        height: 770,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        background: `url(https://static.wixstatic.com/media/82fcd3_0d16229674fd4698b2a7a99a34d42de1~mv2.jpg/v1/fill/w_1175,h_832,al_c,q_85/82fcd3_0d16229674fd4698b2a7a99a34d42de1~mv2.webp)`,
    },
    gridItems: {
        borderRight: "1px solid rgba(255,255,255,0.1)",

    },
    mainGridCont: {
        justify: "flex-start",
        backgroundColor: "rgba(0,0,0,0.5)",
        height: 770,
    }
}))
