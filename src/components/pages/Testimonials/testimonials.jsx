import { Box } from "@mui/material";

import Header from "../../utilities/Header/header";
import TestimonialCard from "./card";
import BottomLine from "../../utilities/bottomline";
import {Swiper, SwiperSlide} from "swiper/react";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation,FreeMode ,EffectCreative} from 'swiper/modules';
import Reveal from "../../utilities/revealAnimation";
import { Element } from "react-scroll";

const Testimonials = () => {
    

    return ( 
        <Element name="Testimonials">
            <Box sx={{backgroundColor: '#121212'}} paddingTop="30px">
                <Box width={{xs: '90%' ,sm: '80%', md: '75%'}} margin="auto">
                    <Header 
                        heading="Testimonials" 
                        body="Hear It from the Heroes – Our Clients’ Stories."
                    />
                </Box>
                <Reveal sx={{margin: "30px auto 20px auto"}}>
                    <Swiper
                        slidesPerView= {1}
                        spaceBetween={20}
                        loop={true}
                        freeMode={true}
                        pagination={false}
                        autoplay={{
                            delay: 2000,
                            pauseOnMouseEnter: true,
                            disableOnInteraction: false,
                        }}
                        breakpoints={{
                        
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
                        modules={[FreeMode,Autoplay,EffectCreative, Pagination,Navigation]}
                    >
                        {data.map((item) => {
                            return(
                                <SwiperSlide>
                                    <TestimonialCard data={data} />
                                </SwiperSlide>
                            )
                        })}
                    </Swiper>
                </Reveal>
                <BottomLine />
            </Box>
        </Element>
    );
}

const data = [ "h","h","h","h","h","h","h","h"];
 
export default Testimonials;