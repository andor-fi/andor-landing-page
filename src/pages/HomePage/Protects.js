import React from 'react'
import { Container, Box, makeStyles, Typography} from '@material-ui/core';


const useStyles = makeStyles((theme) => ({

    protectsMainBox: {
        "& img": {
            width: "90px",
            height: "90px"
        },
        "& h1": {
            "background": "linear-gradient(#CED0DA, #B1B3ED)",
            "WebkitBackgroundClip": "text",
            "color": "transparent",
            [theme.breakpoints.up('sm')]: {
                fontSize: "54px",
                lineHeight: "72px",
                fontWeight: "700",
            },
        },
        "& h4": {
            marginTop: "20px",
            marginBottom: "10px"
        }
    },
    contentBox: {
        background: "linear-gradient(160deg, #5275F1, #5191F1, #7EAFF8)",
        padding:"3rem 3rem",
        borderRadius:"19px",
        [theme.breakpoints.down('xs')]: {
            padding:"3rem 1rem",
        },
    },
    title:{
        fontSize:"14px",
        lineHeight:"18px",
        fontWeight:"400",
        color:"#FFFFFF"
    }
}));


function Protects() {
    const classes = useStyles();

    return (
        <Box>
            <Container maxWidth="md">
                <Box className={classes.protectsMainBox} pt={5} pb={5} mt={5} mb={5}>
                    <Box textAlign={"center"} mt={4} mb={4}>
                        <img src="../images/head-icon.png" alt="andor fi" />
                        <Typography variant='h1'>Andor Fi Protects</Typography>
                    </Box>
                    <Box className={classes.contentBox}>
                        <Box>
                            <Typography variant='h4'>Anti-MEV</Typography>
                            <Typography variant="body1" className={classes.title} >Safeguards against rug pulls and Miner Extractable Value (MEV) concerns, ensuring a safer trading environment.</Typography>
                        </Box>
                        <Box mt={4}>
                            <Typography variant='h4'>Anti-Rug</Typography>
                            <Typography variant="body1" className={classes.title}>Mechanisms prevent you from trading with suspicious tokens. </Typography>
                        </Box>
                        <Box mt={4}>
                            <Typography variant='h4'>Anti-Dump</Typography>
                            <Typography variant="body1" className={classes.title}>Built-in AI algorithm to protect from market dumps.</Typography>
                        </Box>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}

export default Protects