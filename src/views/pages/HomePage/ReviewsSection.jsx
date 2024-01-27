import React from 'react';
import { Container, Box, makeStyles, Typography, Grid } from '@material-ui/core';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import StarIcon from "@material-ui/icons/Star";

const reviewData = [{ image: "/images/ProfileReview.png", star: [1, 2, 3, 4, 5], name: "Floyd Miles", description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet." },
{ image: "/images/ProfileReview.png", star: [1, 2, 3, 4, 5], name: "Floyd Miles", description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet." },
{ image: "/images/ProfileReview.png", star: [1, 2, 3, 4, 5], name: "Floyd Miles", description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet." },
{ image: "/images/ProfileReview.png", star: [1, 2, 3, 4, 5], name: "Floyd Miles", description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet." },
// { image: "/images/ProfileReview.png", star: [1, 2, 3, 4, 5], name: "Floyd Miles", description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet." },
// { image: "/images/ProfileReview.png", star: [1, 2, 3, 4, 5], name: "Floyd Miles", description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet." },
// { image: "/images/ProfileReview.png", star: [1, 2, 3, 4, 5], name: "Floyd Miles", description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet." },
// { image: "/images/ProfileReview.png", star: [1, 2, 3, 4, 5], name: "Floyd Miles", description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet." }
]

const useStyles = makeStyles((theme) => ({

    bannerMainBox: {
        border: "1px solid #EBEEFF",
        borderRadius: "19px",
        padding: "60px",
        [theme.breakpoints.down('xs')]: {
            padding: "30px 10px",
        },
    },
    reviewCards: {
        border: "1px solid gray",
        padding: "13px",
        borderRadius: "9px",
    },
    cardHeader: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        "& img": {
            width: "40px",
            height: "40px",
        }
    },
    cardBody: {
        "& h4": {
            color: "#CED0DA",
            marginBottom: "10px"
        }
    },
    reviewBoxDescription: {
        fontSize: "12px !important",
        fontWeight: "400",
        color: "#CED0DA"
    }

}));

const settings = {
    color: "white",
    dots: true,
    slidesToShow: 3,  // Adjust this based on the number of cards you want to show
    slidesToScroll: 1,  // Adjust this based on the number of cards you want to scroll
    infinite: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    // centerMode: true,
    //  centerPadding: '0',
    responsive: [
        {
            breakpoint: 1025,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 800,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 450,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
    ],
    // customPaging: (i) => (
    //     <div
    //         style={{
    //             width: '10px',
    //             height: '10px',
    //             backgroundColor: 'white', // Set your desired color
    //             borderRadius: '50%',
    //             cursor: 'pointer',
    //         }}
    //     />
    // ),
};
function ReviewsSection() {
    const classes = useStyles();

    return (
        <Box>
            <Container maxWidth="md">
                <Box className={classes.bannerMainBox}>
                    <Box style={{ textAlign: "center" }} mb={5}>
                        <Typography variant="body1">User Feedbacks</Typography>
                        <Typography variant="h3" style={{ width: "100%", maxWidth: "100%" }}>Andor Fi has helped traders with its valuable features, making a significant impact in the industry.</Typography>
                    </Box>
                    <Slider {...settings}>
                        {reviewData &&
                            reviewData.map((data, i) => {
                                return (
                                    <Box p={1}>
                                        <Box className={classes.reviewCards}>
                                            <Box className={classes.cardHeader} mb={2}>
                                                <img src="/images/ProfileReview.png" alt="Logo" />
                                                <Box>
                                                    {data?.star?.map((rating) => {
                                                        return (
                                                            <StarIcon style={{ color: "#7EAFF8" }} />
                                                        )
                                                    })}
                                                </Box>
                                            </Box>
                                            <Box className={classes.cardBody}>
                                                <Typography variant="h4">Floyd Miles</Typography>
                                                <Typography variant="body1" className={classes.reviewBoxDescription}>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</Typography>
                                            </Box>
                                        </Box>
                                    </Box>
                                )
                            })}
                    </Slider>
                </Box>
            </Container>
        </Box>
    )
}
export default ReviewsSection
