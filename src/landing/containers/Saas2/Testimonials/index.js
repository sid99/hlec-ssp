import React,{Component} from 'react';
import {Container,Row,Col} from "react-bootstrap";
import {TestimonialsSection,TestimonialsContainer,TestimonialSectionHeading,CardOuterWrapper,Card,CardProfileLayout,
    ProfilePicLayout,ProfileNameLayout,ProfileName,Designation,ProfilePic,
    TestimonialHeading,Testimonial,PrevImg,ImgButton,NextImg,NextPrev} from './testimonials.style';
import Slider from "react-slick";
import { Testimonials } from '../../../pagedata/Saas2';

class TestimonialsPage extends Component{

    constructor(props) {
        super(props);
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
    }

    next() {
        this.slider.slickNext();
    }

    previous() {
        this.slider.slickPrev();
    }

    render() {
        const settings = {
            arrows:false,
            infinite: true,
            speed: 500,
            slidesToShow: 2,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 900,
                    settings: {
                      slidesToShow: 1,
                      slidesToScroll: 1,
                      initialSlide: 1
                    }
                },
                {
                  breakpoint: 600,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                  }
                }
            ]
        };
        
        return(
            <TestimonialsSection id="testimonialsContainer">
                <Container>
                    <Row>
                        <Col md="12">
                            <TestimonialSectionHeading>{Testimonials.TestimonialHeading}</TestimonialSectionHeading>
                        </Col>
                    </Row>
                </Container>
                    <TestimonialsContainer>
                        <Slider ref={c => (this.slider = c)} {...settings}>
                        {
                                Testimonials.CardProfileLayout.map((item,idx) => {
                                return <CardOuterWrapper>
                                <Card>
                                    <TestimonialHeading>
                                        {item.TestimonailHeading}
                                    </TestimonialHeading>
                                    <Testimonial>
                                        {item.Testimonial}
                                    </Testimonial>

                                    <CardProfileLayout>
                                        <ProfilePicLayout>
                                            <ProfilePic 
                                                src={require("../../../assets/"+item.ProfilePic)} 
                                                alt=""
                                            />
                                        </ProfilePicLayout>
                                        <ProfileNameLayout>
                                            <ProfileName>
                                                {item.ProfileName}
                                            </ProfileName>
                                            <Designation>
                                                {item.Designation}
                                            </Designation>
                                        </ProfileNameLayout>
                                    </CardProfileLayout>
                                </Card>
                            </CardOuterWrapper>
                                })
                            }
                        </Slider>
                    </TestimonialsContainer>
                <NextPrev>
                    <ImgButton onClick={this.previous} aria-label="Prev Button">
                        <PrevImg src={require("../../../assets/"+Testimonials.PrevImg)} alt=""/>
                    </ImgButton>
                    <ImgButton onClick={this.next} aria-label="Next Button">
                        <NextImg src={require("../../../assets/"+Testimonials.NextImg)} alt=""/>
                    </ImgButton>
                </NextPrev>
            </TestimonialsSection>
        );
    }
}

export default TestimonialsPage;
