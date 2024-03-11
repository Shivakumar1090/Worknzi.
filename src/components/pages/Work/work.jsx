import { Box } from "@mui/material";
import Header from "../../utilities/Header/header";
import BottomLine from "../../utilities/bottomline";
import { Element } from "react-scroll";
import {Swiper, SwiperSlide} from "swiper/react";
import "../../../App.css";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation,FreeMode ,EffectCreative} from 'swiper/modules';
import { WorkData } from "./data";
import WorkCard from "./card";
import Reveal from "../../utilities/revealAnimation";

const Work = () => {
    return ( 
        <Element name="Work">
            <Box  margin="auto" width={{xs: '90%' ,sm: '85%', md: '80%',lg: '80%'}}>
                <Header 
                    heading="Work"
                    body="Thinks we have made"
                />
                <Reveal sx={{ margin: "30px auto 0px auto"}}>
                    <Swiper
                        slidesPerView= {1}
                        spaceBetween={20}
                        freeMode={true}
                        navigation={{
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev',
                        }}
                        pagination={false}
                        autoplay={{
                            delay: 2000,
                            pauseOnMouseEnter: false,
                            disableOnInteraction: false,
                        }}
                        style={{"swiper-button-next" : {fontSize: '10px'}}}
                        modules={[FreeMode,Autoplay,EffectCreative, Pagination,Navigation]}
                    >
                        {WorkData.map((item) => {
                            return(
                                <SwiperSlide key={item.id}>
                                    <WorkCard id={item.id} data={WorkData}/>
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
 
export default Work;