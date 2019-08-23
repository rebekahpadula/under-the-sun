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
                    <ShowsRow>
                        <ShowsData>
                            <ShowsLink href="https://www.facebook.com/events/462022807908602/">
                            <ShowsDate><strong>Fri, Sept 20</strong> @ 9:00PM</ShowsDate>
                            </ShowsLink>
                        </ShowsData>
                        <ShowsData>
                            <ShowsLink href="https://www.facebook.com/events/462022807908602/">
                            <ShowsEvent>Wild Wing Cafe Sandhill</ShowsEvent><ShowsLocation>Columbia, SC</ShowsLocation>
                            </ShowsLink>
                        </ShowsData>
                    </ShowsRow>
                    <ShowsRow>
                        <ShowsData>
                            <ShowsLink href="https://www.facebook.com/events/494791927950920/">
                            <ShowsDate><strong>Sat, Sept 14</strong> @ 10:00PM</ShowsDate>
                            </ShowsLink>
                        </ShowsData>
                        <ShowsData>
                            <ShowsLink href="https://www.facebook.com/events/494791927950920/">
                            <ShowsEvent>Ozzie's Country Island</ShowsEvent><ShowsLocation>Columbia, SC</ShowsLocation>
                            </ShowsLink>
                        </ShowsData>
                    </ShowsRow>
                    <ShowsRow>
                        <ShowsData>
                            <ShowsLink href="https://www.facebook.com/events/432159834051968/">
                            <ShowsDate><strong>Thurs, Sept 5</strong> @ 11:00PM</ShowsDate>
                            </ShowsLink>
                        </ShowsData>
                        <ShowsData>
                            <ShowsLink href="https://www.facebook.com/events/432159834051968/">
                            <ShowsEvent>Breakers Bar & Grill</ShowsEvent><ShowsLocation>Columbia, SC</ShowsLocation>
                            </ShowsLink>
                        </ShowsData>
                    </ShowsRow>
                    <ShowsRow>
                        <ShowsData>
                            <ShowsLink href="https://www.facebook.com/events/2368730900066382/">
                            <ShowsDate><strong>Sat, Aug 24</strong> @ 10:00PM</ShowsDate>
                            </ShowsLink>
                        </ShowsData>
                        <ShowsData>
                            <ShowsLink href="https://www.facebook.com/events/2368730900066382/">
                            <ShowsEvent>Wild Wing Cafe Grovetown</ShowsEvent><ShowsLocation>Grovetown, GA</ShowsLocation>
                            </ShowsLink>
                        </ShowsData>
                    </ShowsRow>
                    <ShowsRow>
                        <ShowsData>
                            <ShowsLink href="https://www.facebook.com/events/917899771880791/">
                            <ShowsDate><strong>Thurs, Aug 15</strong> @ 11:00PM</ShowsDate>
                            </ShowsLink>
                        </ShowsData>
                        <ShowsData>
                            <ShowsLink href="https://www.facebook.com/events/917899771880791/">
                            <ShowsEvent>Breakers Bar & Grill</ShowsEvent><ShowsLocation>Columbia, SC</ShowsLocation>
                            </ShowsLink>
                        </ShowsData>
                    </ShowsRow>
                    <ShowsRow>
                        <ShowsData>
                            <ShowsLink href="https://www.facebook.com/events/2335538383392626/">
                            <ShowsDate><strong>Sat, Aug 10</strong> @ 8:30PM</ShowsDate>
                            </ShowsLink>
                        </ShowsData>
                        <ShowsData>
                            <ShowsLink href="https://www.facebook.com/events/2335538383392626/">
                            <ShowsEvent>Castaway's Bar and Grill</ShowsEvent><ShowsLocation>Georgetown, SC</ShowsLocation>
                            </ShowsLink>
                        </ShowsData>
                    </ShowsRow>
                    <ShowsRow>
                        <ShowsData>
                            <ShowsLink href="https://www.facebook.com/events/635035656965711/">
                            <ShowsDate><strong>Fri, Aug 9</strong> @ 9:00PM</ShowsDate>
                            </ShowsLink>
                        </ShowsData>
                        <ShowsData>
                            <ShowsLink href="https://www.facebook.com/events/635035656965711/">
                            <ShowsEvent>Hwy 378 Bar and Grill</ShowsEvent><ShowsLocation>Summerville, SC</ShowsLocation>
                            </ShowsLink>
                        </ShowsData>
                    </ShowsRow>
                    <ShowsRow>
                        <ShowsData>
                            <ShowsLink href="https://www.facebook.com/events/2917616974931705/">
                            <ShowsDate><strong>Sat, Aug 3</strong> @ 10:00PM</ShowsDate>
                            </ShowsLink>
                        </ShowsData>
                        <ShowsData>
                            <ShowsLink href="https://www.facebook.com/events/2917616974931705/">
                            <ShowsEvent>Ozzie's Country Island</ShowsEvent><ShowsLocation>Columbia, SC</ShowsLocation>
                            </ShowsLink>
                        </ShowsData>
                    </ShowsRow>
                    <ShowsRow>
                        <ShowsData>
                            <ShowsLink href="https://www.facebook.com/events/2306686502903433/">
                            <ShowsDate><strong>Fri, July 26</strong> @ 9:30PM</ShowsDate>
                            </ShowsLink>
                        </ShowsData>
                        <ShowsData>
                            <ShowsLink href="https://www.facebook.com/events/2306686502903433/">
                            <ShowsEvent>Wild Wing Cafe Vista</ShowsEvent><ShowsLocation>Columbia, SC</ShowsLocation>
                            </ShowsLink>
                        </ShowsData>
                    </ShowsRow>
                    <ShowsRow>
                        <ShowsData>
                            <ShowsLink href="https://www.facebook.com/events/471358746766783/">
                            <ShowsDate><strong>Sat, July 20</strong> @ 10:00PM</ShowsDate>
                            </ShowsLink>
                        </ShowsData>
                        <ShowsData>
                            <ShowsLink href="https://www.facebook.com/events/471358746766783/">
                            <ShowsEvent>Wild Wing Cafe Augusta</ShowsEvent><ShowsLocation>Augusta, GA</ShowsLocation>
                            </ShowsLink>
                        </ShowsData>
                    </ShowsRow>


                    <ShowsRow>
                        <ShowsData>
                            <ShowsLink href="https://www.facebook.com/events/2339742642954473/">
                            <ShowsDate><strong>Fri, July 19</strong> @ 10:00PM</ShowsDate>
                            </ShowsLink>
                        </ShowsData>
                        <ShowsData>
                            <ShowsLink href="https://www.facebook.com/events/2339742642954473/">
                            <ShowsEvent>Ozzie's Country Island</ShowsEvent><ShowsLocation>Columbia, SC</ShowsLocation>
                            </ShowsLink>
                        </ShowsData>
                    </ShowsRow>



                    <ShowsRow>
                        <ShowsData>
                            <ShowsLink href="https://www.facebook.com/events/2325842350984691/">
                            <ShowsDate><strong>Sat, June 22 (trio)</strong> @ 9:30PM</ShowsDate>
                            </ShowsLink>
                        </ShowsData>
                        <ShowsData>
                            <ShowsLink href="https://www.facebook.com/events/2325842350984691/">
                            <ShowsEvent>Wild Wing Cafe Harbison</ShowsEvent><ShowsLocation>Columbia, SC</ShowsLocation>
                            </ShowsLink>
                        </ShowsData>
                    </ShowsRow>
                    <ShowsRow>
                        <ShowsData>
                            <ShowsLink href="https://www.facebook.com/events/303647330350872/">
                            <ShowsDate><strong>Sat, June 15</strong> @ 6:00PM</ShowsDate>
                            </ShowsLink>
                        </ShowsData>
                        <ShowsData>
                            <ShowsLink href="https://www.facebook.com/events/303647330350872/">
                            <ShowsEvent>4th Annual Columbia's Shrimp & Grits Fest</ShowsEvent><ShowsLocation>Columbia, SC</ShowsLocation>
                            </ShowsLink>
                        </ShowsData>
                    </ShowsRow>
                    <ShowsRow>
                        <ShowsData>
                            <ShowsLink href="https://www.facebook.com/events/1251732671656673/">
                            <ShowsDate><strong>Fri, June 7</strong> @ 9PM</ShowsDate>
                            </ShowsLink>
                        </ShowsData>
                        <ShowsData>
                            <ShowsLink href="https://www.facebook.com/events/1251732671656673/">
                            <ShowsEvent>Wild Wing Cafe Sandhills</ShowsEvent><ShowsLocation>Columbia, SC</ShowsLocation>
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
                            <ShowsEvent>Wild Wing Cafe Vista</ShowsEvent><ShowsLocation>Columbia, SC</ShowsLocation>
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
                            <ShowsEvent>Wild Wing Cafe Augusta</ShowsEvent><ShowsLocation>Augusta, GA</ShowsLocation>
                            </ShowsLink>
                        </ShowsData>
                    </ShowsRow>
                </ShowsTableBody>
            </ShowsTable>
            <Booking></Booking>
        </Shows>
    )
}