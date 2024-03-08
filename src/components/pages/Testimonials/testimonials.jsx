import { Box, Grid } from "@mui/material";

import Header from "../../utilities/Header/header";
import TestimonialCard from "./card";
import BottomLine from "../../utilities/bottomline";
import {Swiper, SwiperSlide} from "swiper/react";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation,FreeMode ,EffectCreative} from 'swiper/modules';

const Testimonials = () => {
    

    return ( 
        <Box sx={{backgroundColor: '#121212'}}>
            <Box width={{xs: '90%' ,sm: '80%', md: '75%'}} margin="auto">
                <Header 
                    heading="Testimonials" 
                    body="We are more than digital agency"
                />
            </Box>
            <Box margin="20px auto 20px auto">
                <Swiper
                    style={{
                        "--swiper-pagination-color" : '#66fffc',
                        "--swiper-pagination-bullet-inactive-color": "#999999",
                        "--swiper-pagination-bullet-inactive-opacity": "0.5",
                        "--swiper-pagination-bullet-size": "10px",
                        "--swiper-pagination-bullet-horizontal-gap": "5px"
                    }}
                    loop={true}
                    freeMode={true}
                    pagination={{
                      clickable: true,
                      dynamicBullets: true,
                    }}
                    // autoplay={{
                    //     delay: 1500,
                    //     pauseOnMouseEnter: true,
                    //     disableOnInteraction: false,
                    // }}
                    breakpoints={{
                        150: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                            // centeredSlides: true,
                            grabCursor: true,
                            effect: 'creative',
                            creativeEffect: {
                                prev: {
                                    translate: ['-120%', 0, -500],
                                },
                                next: {
                                    translate: ['120%', 0, -500],
                                },
                            },
                            modules: [EffectCreative]
                        },
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 10,
                        },
                        1280: {
                            slidesPerView: 4,
                            spaceBetween: 10,
                        }
                    }}
                    modules={[FreeMode,Autoplay,EffectCreative, Pagination]}
                >
                    {data.map((item) => {
                        return(
                            <SwiperSlide>
                                <TestimonialCard data={data} />
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </Box>
            {/* <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                rowSpacing={{ xs: 1.5, sm: 3, lg: 5 }}
                columnSpacing={{ xs: 1.5, sm: 3, lg: 5 }}
                style={{marginTop: '20px'}}
            >
                {data.map((item) => {
                    return(
                        <Grid
                            key={item._id} style={{ display: 'flex' }} item xs={6} sm={4} md={4} lg={3}
                        >
                            <TestimonialCard data={data} />
                        </Grid>
                    )
                })}
            </Grid> */}
            <BottomLine />
        </Box>
    );
}

const data = [ "h","h","h","h","h","h","h","h"];
 
export default Testimonials;