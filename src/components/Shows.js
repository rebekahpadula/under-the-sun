import React from 'react';
import styled from 'styled-components';

import Booking from './Booking';

const Shows = styled.section`
    padding: 60px 10px;

    @media screen and (min-width: 700px) {
        padding: 60px 20px;
    }
`;

const ShowsHeading = styled.h1`
    font-family: megrim;
    font-size: 30px;
    margin-top: 0;
`;

const ShowsTable = styled.table`
    width: 100%;
    max-width: 1168px;
    border-collapse: collapse;
    border-spacing: 0;
    margin: 0 auto 60px auto;
`;

const ShowsTableBody = styled.tbody``;
const ShowsRow = styled.tr`
     &:not(:first-child):hover {
        background-color: #f9f3e9;
    }

    &:nth-child(even) {
        background-color: #ffe0c1;
    }

    &:last-child {
        border-bottom: none;
    }
    
    &:first-of-type {
        background-color: #ffe0c1;
        background-color: #fff;
        color: #ff9832;

        &:hover {
            background-color: #f9f3e9;
        }
    }

    @media screen and (min-width: 600px) {
        &:nth-child(even) {
            background-color: #fff;
        }

        &:first-of-type {
            background-color: #ffe0c1;
        }

        &:nth-child(odd):not(:first-child) {
            background-color: #ffe0c1;

            &:hover {
                background-color: #f9f3e9;
            }
        }
    }
`;

const ShowsTableHeading = styled.th`
    text-align: left;
    padding: 10px 0 10px 10px;

    @media screen and (max-width: 599px) {
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0,0,0,0);
        border: 0;
    }
`;

const ShowsLink = styled.a`
    text-decoration: none;
    color: #111;
`;

const ShowsData = styled.td`
    display: block;
    padding-right: 100px;
    padding-bottom: 10px;
    padding-left: 10px;

    &:nth-child(odd) {
        padding-top: 10px;
    }
     
    @media screen and (min-width: 600px) {
        display: table-cell;
        padding: 10px 100px 10px 10px;
    }
`;

const ShowsDate = styled.span``;

const ShowsEvent = styled.span`
    display: block;
    margin-bottom: 5px;

    @media screen and (min-width: 600px) {
        margin-bottom: 0;
    }
`;

const ShowsLocation = styled.span`
    color: #666;
`;

export default (props) => {
    return (
        <Shows id="shows">
            <ShowsTable>
            <ShowsHeading>Shows</ShowsHeading>
                <ShowsTableBody>

                    {/* <ShowsRow>
                        <ShowsData>
                            <ShowsLink href="https://www.facebook.com/events/377606796361912/">
                            <ShowsDate><strong>Sat, June 15 (trio)</strong> @ 9:00PM</ShowsDate>
                            </ShowsLink>
                        </ShowsData>
                        <ShowsData>
                            <ShowsLink href="https://www.facebook.com/events/377606796361912/">
                            <ShowsEvent>Wild Wing Cafe (Harbison)</ShowsEvent><ShowsLocation>Columbia, SC</ShowsLocation>
                            </ShowsLink>
                        </ShowsData>
                    </ShowsRow> */}
                    <ShowsRow>
                        <ShowsData>
                            <ShowsLink href="https://www.facebook.com/events/324114541781157/">
                            <ShowsDate><strong>Fri, June 7</strong> @ 8:30PM</ShowsDate>
                            </ShowsLink>
                        </ShowsData>
                        <ShowsData>
                            <ShowsLink href="https://www.facebook.com/events/324114541781157/">
                            <ShowsEvent>Frayed Knot Bar and Grill</ShowsEvent><ShowsLocation>Chapin, SC</ShowsLocation>
                            </ShowsLink>
                        </ShowsData>
                    </ShowsRow>
                    <ShowsRow>
                        <ShowsData>
                            <ShowsLink href="https://www.facebook.com/events/1000001950196269/">
                            <ShowsDate><strong>Sat, May 12 (trio)</strong> @ 1:00PM</ShowsDate>
                            </ShowsLink>
                        </ShowsData>
                        <ShowsData>
                            <ShowsLink href="https://www.facebook.com/events/1000001950196269/">
                            <ShowsEvent>Frayed Knot Bar and Grill</ShowsEvent><ShowsLocation>Chapin, SC</ShowsLocation>
                            </ShowsLink>
                        </ShowsData>
                    </ShowsRow>
                    <ShowsRow>
                        <ShowsData>
                            <ShowsLink href="https://www.facebook.com/events/599860793784953/">
                            <ShowsDate><strong>Sat, May 11</strong> @ 10:00PM</ShowsDate>
                            </ShowsLink>
                        </ShowsData>
                        <ShowsData>
                            <ShowsLink href="https://www.facebook.com/events/599860793784953/">
                            <ShowsEvent>Montreux Bar and Grill</ShowsEvent><ShowsLocation>Summerville, SC</ShowsLocation>
                            </ShowsLink>
                        </ShowsData>
                    </ShowsRow>
                    {/* new shows begin above */}
                    <ShowsRow>
                        <ShowsData>
                            <ShowsLink href="https://www.facebook.com/events/282110485787730/">
                            <ShowsDate><strong>Sat, April 27</strong> @ 9:00PM</ShowsDate>
                            </ShowsLink>
                        </ShowsData>
                        <ShowsData>
                            <ShowsLink href="https://www.facebook.com/events/282110485787730/">
                            <ShowsEvent>Hwy 378 Bar and Grill</ShowsEvent><ShowsLocation>Gilbert, SC</ShowsLocation>
                            </ShowsLink>
                        </ShowsData>
                    </ShowsRow>

                    <ShowsRow>
                        <ShowsData>
                            <ShowsLink href="https://www.facebook.com/events/750090175359498/">
                            <ShowsDate><strong>Fri, April 19 (trio)</strong> @ 9:00PM</ShowsDate>
                            </ShowsLink>
                        </ShowsData>
                        <ShowsData>
                            <ShowsLink href="https://www.facebook.com/events/750090175359498/">
                            <ShowsEvent>Wild Wing Vista</ShowsEvent><ShowsLocation>Columbia, SC</ShowsLocation>
                            </ShowsLink>
                        </ShowsData>
                    </ShowsRow>

                    <ShowsRow>
                        <ShowsData>
                            <ShowsLink href="https://www.facebook.com/events/283846258947357/">
                            <ShowsDate><strong>Sat, April 13</strong> @ 9:30PM</ShowsDate>
                            </ShowsLink>
                        </ShowsData>
                        <ShowsData>
                            <ShowsLink href="https://www.facebook.com/events/283846258947357/">
                            <ShowsEvent>Red's Ice House</ShowsEvent><ShowsLocation>Mount Pleasant, SC</ShowsLocation>
                            </ShowsLink>
                        </ShowsData>
                    </ShowsRow>

                    <ShowsRow>
                        <ShowsData>
                            <ShowsLink href="https://www.facebook.com/events/410242859749866/">
                            <ShowsDate><strong>Sat, April 6</strong> @ 9:00PM</ShowsDate>
                            </ShowsLink>
                        </ShowsData>
                        <ShowsData>
                            <ShowsLink href="https://www.facebook.com/events/410242859749866/">
                            <ShowsEvent>Shooey Malone's</ShowsEvent><ShowsLocation>Lexington, SC</ShowsLocation>
                            </ShowsLink>
                        </ShowsData>
                    </ShowsRow>
                    <ShowsRow>
                        <ShowsData>
                            <ShowsLink href="https://www.facebook.com/events/291479411720814/">
                            <ShowsDate><strong>Sat, March 16</strong> @ 9:00PM</ShowsDate>
                            </ShowsLink>
                        </ShowsData>
                        <ShowsData>
                            <ShowsLink href="https://www.facebook.com/events/291479411720814/">
                            <ShowsEvent>Castaway's Bar and Grill</ShowsEvent><ShowsLocation>Georgetown, SC</ShowsLocation>
                            </ShowsLink>
                        </ShowsData>
                    </ShowsRow>
                    <ShowsRow>
                        <ShowsData>
                            <ShowsLink href="https://www.facebook.com/events/303254866978466/">
                            <ShowsDate><strong>Sat, Jan 12</strong> @ 9:00PM</ShowsDate>
                            </ShowsLink>
                        </ShowsData>
                        <ShowsData>
                            <ShowsLink href="https://www.facebook.com/events/303254866978466/">
                            <ShowsEvent>Shooey Malone's</ShowsEvent><ShowsLocation>Lexington, SC</ShowsLocation>
                            </ShowsLink>
                        </ShowsData>
                    </ShowsRow>
                    <ShowsRow>
                        <ShowsData>
                            <ShowsLink href="https://www.facebook.com/events/774042016269327/">
                            <ShowsDate><strong>Sat, Jan 5</strong> @ 10:00PM</ShowsDate>
                            </ShowsLink>
                        </ShowsData>
                        <ShowsData>
                            <ShowsLink href="https://www.facebook.com/events/774042016269327/">
                            <ShowsEvent>Wild Wing Cafe</ShowsEvent><ShowsLocation>Augusta, GA</ShowsLocation>
                            </ShowsLink>
                        </ShowsData>
                    </ShowsRow>
                    <ShowsRow>
                        <ShowsData>
                            <ShowsDate><strong>Sat, Dec 15</strong> @ 7:00PM</ShowsDate>
                            {/* <ShowsLink href="https://www.facebook.com/events/316260522288219/"> */}
                            {/* </ShowsLink> */}
                        </ShowsData>
                        <ShowsData>
                            <ShowsEvent>Private party</ShowsEvent><ShowsLocation>Charleston, SC</ShowsLocation>
                            {/* <ShowsLink href="https://www.facebook.com/events/316260522288219/"> */}
                            {/* </ShowsLink> */}
                        </ShowsData>
                    </ShowsRow>
                </ShowsTableBody>
            </ShowsTable>
            <Booking></Booking>
        </Shows>
    )
}