import React from 'react';
import styled from 'styled-components';

import Booking from './Booking';

const Shows = styled.section`
    padding: 60px 20px;
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
        /* background-color: #ff9832; */
        /* font-weight: bold !fdAimportant; */
        color: #ff9832;
    }

    @media screen and (min-width: 600px) {
        &:nth-child(even) {
            background-color: #fff;
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
                        <ShowsTableHeading>Date</ShowsTableHeading>
                        <ShowsTableHeading>Event</ShowsTableHeading>
                    </ShowsRow>
                    <ShowsRow>
                        <ShowsData>
                            <ShowsDate><strong>Sat, Dec 8</strong> @ 7:30PM</ShowsDate>
                            {/* <ShowsLink href="https://www.facebook.com/events/2063949947250253/">
                            </ShowsLink> */}
                        </ShowsData>
                        <ShowsData>
                            <ShowsEvent>Private party</ShowsEvent><ShowsLocation>Lexington, SC</ShowsLocation>
                            {/* <ShowsLink href="https://www.facebook.com/events/2063949947250253/">
                            </ShowsLink> */}
                        </ShowsData>
                    </ShowsRow>
                    <ShowsRow>
                        <ShowsData>
                            <ShowsDate><strong>Fri, Dec 14</strong> @ 9:00PM</ShowsDate>
                            {/* <ShowsLink href="https://www.facebook.com/events/763489270709460/"> */}
                            {/* </ShowsLink> */}
                        </ShowsData>
                        <ShowsData>
                            <ShowsEvent>Hwy 378 Bar and Grill</ShowsEvent><ShowsLocation>Gilbert, SC</ShowsLocation>
                            {/* <ShowsLink href="https://www.facebook.com/events/763489270709460/"> */}
                            {/* </ShowsLink> */}
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
                    {/* <ShowsRow>
                        <ShowsData>
                            <ShowsLink href="https://www.facebook.com/events/1758739327515881/">
                            <ShowsDate><strong>Fri, Apr 6</strong> @ 9:00PM</ShowsDate>
                            </ShowsLink>
                        </ShowsData>
                        <ShowsData>
                            <ShowsLink href="https://www.facebook.com/events/1758739327515881/">
                            <ShowsEvent>Wild Wing Cafe</ShowsEvent>
                            <ShowsLocation>Columbia, SC (The Vista)</ShowsLocation>
                            </ShowsLink>
                        </ShowsData>
                    </ShowsRow>
                    <ShowsRow>
                        <ShowsData>
                            <ShowsLink href="https://www.facebook.com/events/931391703684310/">
                            <ShowsDate><strong>Sat, Apr 7</strong> @ 9:00PM</ShowsDate>
                            </ShowsLink>
                        </ShowsData>
                        <ShowsData>
                            <ShowsLink href="https://www.facebook.com/events/931391703684310/">
                            <ShowsEvent>Hwy 378 Bar and Grill</ShowsEvent>
                            <ShowsLocation>Gilbert, SC</ShowsLocation>
                            </ShowsLink>
                        </ShowsData>
                    </ShowsRow> */}
                </ShowsTableBody>
            </ShowsTable>
            <Booking></Booking>
        </Shows>
    )
}