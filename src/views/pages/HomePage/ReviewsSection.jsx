import React from 'react';
import { Container, Box, makeStyles, Typography, Grid } from '@material-ui/core';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import StarIcon from "@material-ui/icons/Star";

const reviewData = [{ image: "/images/ProfileReview.png", star: [1, 2, 3, 4, 5], name: "Floyd Miles", description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet." },
    // { image: "/images/ProfileReview.png", star: [1, 2, 3, 4, 5], name: "Floyd Miles", description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet." },
    // {image:"/images/ProfileReview.png",star:[1,2,3,4,5],name:"Floyd Miles",description:"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."},
    // {image:"/images/ProfileReview.png",star:[1,2,3,4,5],name:"Floyd Miles",description:"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."},
    // {image:"/images/ProfileReview.png",star:[1,2,3,4,5],name:"Floyd Miles",description:"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."},
    // {image:"/images/ProfileReview.png",star:[1,2,3,4,5],name:"Floyd Miles",description:"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."},
    // { image: "/images/ProfileReview.png", star: [1, 2, 3, 4, 5], name: "Floyd Miles", description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet." }
]

const useStyles = makeStyles((theme) => ({

    bannerMainBox: {
        position: "relative",
        top: "-5rem",
    },
    bannerTextBox: {
        border: "1px solid #EBEEFF",
        height: "574px",
        display: "flex",
        justifyContent: "center",
        width: "100%",
        padding: "60px",
        [theme.breakpoints.down('xs')]: {
            padding: "0px 10px",
        },
    },
    reviewBox: {
        width: "316px",
        height: "244px",
        border: "1px solid gray",
        borderRadius: "14px",
        padding: "18px 18px 28px 18px",
        margin:"20px"
    },
    reviewBoxTitle: {
        fontSize: "18px !important",
        fontWeight: "600",
        color: "#CED0DA"

    },
    reviewBoxDescription: {
        fontSize: "12px !important",
        fontWeight: "400",
        color: "#CED0DA"

    }

}));

const settings = {
    dots: false,
    slidesToShow: 7,
    slidesToScroll: 2,
    loop: false,
    infinite: false,
    arrows: false,
    autoplay: false,
    autoplaySpeed: 3000,
    responsive: [
        {
            breakpoint: 1025,
            settings: {
                slidesToShow: 4,
            },
        },
        {
            breakpoint: 800,
            settings: {
                slidesToShow: 5,
            },
        },
        {
            breakpoint: 450,
            settings: {
                slidesToShow: 3,
            },
        },
    ],
};
function ReviewsSection() {
    const classes = useStyles();

    return (
        <Box className={classes.bannerMainBox}>
            <Container maxWidth="md" style={{ position: "relative" }}>
                <Box className={classes.bannerTextBox}>
                    <Box>
                        <Box style={{ textAlign: "center" }}>
                            <Typography variant="body1">User Feedbacks</Typography>
                            <Typography variant="h3" style={{ width: "100%", maxWidth: "90%" }}>Andor Fi has helped traders with its valuable features, making a significant impact in the industry.</Typography>
                        </Box>

                        {/*
        <Slider {...settings}>
        */}
                        {reviewData &&
                            reviewData.map((data, i) => {

                                return (
                                    <Box className={classes.reviewBox}>

                                        <Grid container spacing={1}>
                                            <Grid item lg={8} md={8} sm={8} xs={8}>
                                                <img src={data.image} alt="Logo" width="100%" style={{ maxWidth: "46px" }} />
                                            </Grid>

                                            <Grid item lg={4} md={4} sm={4} xs={4}>
                                                <div style={{ display: "flex" }}>
                                                    {data?.star?.map((rating) => {
                                                        return (
                                                            <Box >
                                                                <StarIcon style={{ color: "#7EAFF8" }} />
                                                            </Box>
                                                        )
                                                    })}
                                                </div>
                                            </Grid>
                                            <Grid item lg={12} md={12}>
                                                <Typography variant="h3" className={classes.reviewBoxTitle}>{data?.name}</Typography>
                                            </Grid>
                                            <Grid item lg={12} md={12}   >
                                                <Typography variant="body1" className={classes.reviewBoxDescription}>{data?.description}</Typography>
                                            </Grid>

                                        </Grid>
                                    </Box>
                                );
                            })}
                        {/*
                        
                            </Slider>
                        */}

                    </Box>


                </Box>
            </Container>
        </Box>
    )
}
export default ReviewsSection
