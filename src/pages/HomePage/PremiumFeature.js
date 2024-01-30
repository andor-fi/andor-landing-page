import React from 'react';
import { Container, Box, makeStyles, Typography, Button } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({

    premiumMainBox: {
        border: "1px solid rgb(235 238 255 / 15%)",
        borderRadius: "29px",
        padding: "60px",
        textAlign:'center',
        [theme.breakpoints.down('xs')]: {
            padding: "30px 20px",
        },
        "& img": {
            position: "relative",
            top: "-60px",
            [theme.breakpoints.down('xs')]: {
                top: "-30px",
            },
        },
        "& h3":{
            marginBottom:"35px",
        }
    },
}));

function PremiumFeature() {
    const classes = useStyles();

    return (
        <Box>
            <Container maxWidth="md" style={{ position: "relative" }}>
                <Box className={classes.premiumMainBox}>
                    <Box>
                        <img src="../images/premium-card.png" alt="andor fi" width="100%" />
                    </Box>
                    <Box>
                        <Typography variant='body1' style={{marginBottom:"30px"}}>About Andor Fi</Typography>
                        

                        <Typography variant='h2'>ANDOR is a AI powered bot interface that enables user to perform crypto transactions anywhere with internet. </Typography>
                        <br/>
                        <br/>

                        <Typography variant='h2'>Our product suite gives traders a competitive edge in the market - Faster trades, Alpha scans, Leverage, Risk management, Onchain tooling, and more. </Typography>
                        <br/>
                        <br/>
                        <Typography variant='h2'>Premium features are unlocked through access codes, which are received from the protocol.</Typography>
                        <br/>
                        <br/>
                        <Button variant="contained" style={{minWidth:"160px"}}>Find Out More</Button>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}

export default PremiumFeature