import React from 'react';
import {Row, Col } from "react-bootstrap";
import {FaqSection,FaqHeadingWrapper,FaqSectionHeading,FaqContainer,
    FaqAccordianWrapper} from './faq.style'
import AccordianCustom from './AccordianCustom';
import { FAQ } from '../../../pagedata/Saas2';
  
const FaqPage =()=>{
    return (
        <FaqSection>
            <FaqContainer>
                <FaqHeadingWrapper>
                    <Row>
                        <Col md="12">
                            <FaqSectionHeading>{FAQ.FaqSectionHeading}</FaqSectionHeading>
                        </Col>
                    </Row>
                </FaqHeadingWrapper>
                    <FaqAccordianWrapper>
                        <Row>
                            <Col md="12">
                            {
                                FAQ.AccordianCustom.map((item,idx) => {
                                return <AccordianCustom 
                                    title={item.title}
                                    description= {item.description} 
                                />
                                })
                            }
                            </Col>
                        </Row>
                    </FaqAccordianWrapper>
            </FaqContainer>
        </FaqSection>
    );
}
export default FaqPage;
