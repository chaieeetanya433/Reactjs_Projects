import { Box, Image, Heading, Container, Stack, Text } from "@chakra-ui/react"
import React from "react"
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpg";
import img3 from "../assets/3.jpg";
import img4 from "../assets/4.jpg";
import img5 from "../assets/5.png";

const headingOptions = {
    pos:"absolute",
    left:"50%",
    top:"10%",
    transform:"translate(-50%, -50%)",
    textTransform:"uppercase",
    p:"4",
    size:"4xl"
}

const Home = () => {
    return (
    <Box>
        <MyCarousel />
        <Container 
            maxW={'container.x1'} 
            minH={'100vh'} 
            p="16"
        >
            <Heading 
                textTransform={"uppercase"} 
                m={"auto"}
                p="2" 
                w={"fit-content"} 
                borderBottom={"2px solid"}
                >Services</Heading>
            <Stack 
                h="full" 
                p={"4"} 
                alignItems={"center"} 
                direction={["column", "row"]}
            > 
                <Image src={img5} h={['40', '400']} filter={"hue-rotate(-130deg)"}/> 
                <Text letterSpacing={"widest"} lineHeight={"190%"} p={["4", "16"]} textAlign={"center"}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem cupiditate nisi veniam veritatis ea ipsa placeat mollitia quae, odit, perspiciatis, quibusdam et. Nulla est consequatur vel atque laudantium nobis sit provident, voluptate numquam placeat perferendis recusandae corporis sunt. Fugit, aperiam.
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati fugiat, eveniet omnis accusantium saepe harum officiis eum totam nisi eaque, architecto dolorem maxime porro mollitia, quod impedit. Nesciunt cumque unde corporis. Incidunt voluptatem quidem, itaque dolores libero velit sit praesentium aut repudiandae, cum perferendis in quos voluptatibus impedit eveniet cupiditate?
                </Text>
            </Stack>
        </Container>

    </Box>
  );
};

const MyCarousel = () => {
    return (
    <Carousel autoPlay infiniteLoop interval={1000} showStatus={false} showArrows={false} showThumbs={false}>
        <Box w={"full"} h={"100vh"}>
            <Image src={img1} h={"full"} w={"full"} objectFit={"cover"}/>
            <Heading bgColor={"blackAlpha.600"} color={"white"} {...headingOptions}>
                Watch the future
            </Heading>
        </Box>
        <Box w={"full"} h={"100vh"}>
            <Image src={img2} h={"full"} w={"full"} objectFit={"cover"}/>
            <Heading bgColor={"whiteAlpha.900"} color={"black"} {...headingOptions}>
                Future is Gaming
            </Heading>
        </Box>
        <Box w={"full"} h={"100vh"}>
            <Image src={img3} h={"full"} w={"full"} objectFit={"cover"}/>
            <Heading bgColor={"blackAlpha.600"} color={"white"} {...headingOptions}>
                Gaming on Console
            </Heading>
        </Box>
        <Box w={"full"} h={"100vh"}>
            <Image src={img4} h={"full"} w={"full"} objectFit={"cover"}/>
            <Heading bgColor={"blackAlpha.600"} color={"white"} {...headingOptions}>
                Night life is cool
            </Heading>
        </Box>
    </Carousel>
    );
}

export default Home