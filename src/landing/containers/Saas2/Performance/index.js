import React from 'react';
import {PerformanceSection,PerformanceHeadingWrapper,PerformanceSectionHeading,
    PerformanceHolder,PerformanceCount,PerformanceDetails
} from './performance.style';
import {Container, Row, Col} from "react-bootstrap";
import { Performance } from '../../../pagedata/Saas2';

const PerformancePage =() => {
    return (
        <PerformanceSection id="performanceContainer">
            <Container>
                <Row>
                    <Col md="12">
                        <PerformanceHeadingWrapper>
                            <PerformanceSectionHeading>{Performance.PerformanceSectionHeading}</PerformanceSectionHeading>
                        </PerformanceHeadingWrapper>
                    </Col>
                </Row>
                <Row>
                { 
                    Performance.Row.map((item,idx) => {
                    return <Col md="3" sm="6">
                            <PerformanceHolder>
                                <PerformanceCount>
                                    <span>
                                        {item.PerformanceCount}
                                    </span>
                                </PerformanceCount>
                                <PerformanceDetails>
                                    {item.PerformanceDetails}
                                </PerformanceDetails>
                            </PerformanceHolder>
                    </Col>
                    })
                }
                </Row>
            </Container>
        </PerformanceSection>
    );
}
    
export default PerformancePage;
