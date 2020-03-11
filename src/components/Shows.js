import React from 'react';
import styled from 'styled-components';

import Booking from './Booking';

const Shows = styled.section`
    padding: 60px 10px;
    max-width: 1200px;
    margin: 0 auto;

    @media screen and (min-width: 700px) {
        padding: 60px 20px;
    }
`;

const ShowsHeading = styled.h1`
    margin-top: 0;
    font-size: 30px;
    font-weight: 400;
    font-weight: 300;
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
        /* background-color: #f9f3e9; */
    }

    &:nth-child(even) {
        background-color: #f0f8fb;
    }

    &:last-child {
        border-bottom: none;
    }
    
    &:first-of-type {
        background-color: #f0f8fb;
        background-color: #fff;
        color: #ff9832;

        &:hover {
            /* background-color: #f9f3e9; */
        }
    }

    @media screen and (min-width: 600px) {
        &:nth-child(even) {
            background-color: #fff;
        }

        &:first-of-type {
            background-color: #f0f8fb;
        }

        &:nth-child(odd):not(:first-child) {
            background-color: #f0f8fb;

            &:hover {
                /* background-color: #f9f3e9; */
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
                <ShowsHeading>Upcoming shows</ShowsHeading>
                <ShowsTableBody>
                    <ShowsRow>
                        <ShowsData>
                            <ShowsLink href="https://www.facebook.com/events/590403385070485/">
                            <ShowsDate><strong>Fri, Feb 14</strong> @ 9:00PM</ShowsDate>
                            </ShowsLink>
                        </ShowsData>
                        <ShowsData>
                            <ShowsLink href="https://www.facebook.com/events/590403385070485/">
                            <ShowsEvent>Valentine's Day at Wild Wing Cafe Sandhills</ShowsEvent><ShowsLocation>Columbia, SC</ShowsLocation>
                            </ShowsLink>
                        </ShowsData>
                    </ShowsRow>

                    <ShowsRow>
                        <ShowsData>
                            <ShowsLink href="https://www.facebook.com/events/2333279903444871/">
                            <ShowsDate><strong>Fri, Feb 28</strong> @ 9:00PM</ShowsDate>
                            </ShowsLink>
                        </ShowsData>
                        <ShowsData>
                            <ShowsLink href="https://www.facebook.com/events/2333279903444871/">
                            <ShowsEvent>Wild Wing Cafe Sandhills</ShowsEvent><ShowsLocation>Columbia, SC</ShowsLocation>
                            </ShowsLink>
                        </ShowsData>
                    </ShowsRow>

                    <ShowsRow>
                        <ShowsData>
                            <ShowsLink href="https://www.facebook.com/events/2464730510463929/">
                            <ShowsDate><strong>Fri, Mar 13</strong> @ 9:30PM</ShowsDate>
                            </ShowsLink>
                        </ShowsData>
                        <ShowsData>
                            <ShowsLink href="https://www.facebook.com/events/2464730510463929/">
                            <ShowsEvent>Wild Wing Cafe Harbison</ShowsEvent><ShowsLocation>Columbia, SC</ShowsLocation>
                            </ShowsLink>
                        </ShowsData>
                    </ShowsRow>

                    <ShowsRow>
                        <ShowsData>
                            <ShowsLink href="https://www.facebook.com/events/634253774027594/">
                            <ShowsDate><strong>Fri, Mar 20</strong> @ 9:30PM</ShowsDate>
                            </ShowsLink>
                        </ShowsData>
                        <ShowsData>
                            <ShowsLink href="https://www.facebook.com/events/634253774027594/">
                            <ShowsEvent>Wild Wing Cafe Vista</ShowsEvent><ShowsLocation>Columbia, SC</ShowsLocation>
                            </ShowsLink>
                        </ShowsData>
                    </ShowsRow>

                    <ShowsRow>
                        <ShowsData>
                            <ShowsLink href="https://www.facebook.com/events/571087733743876/">
                            <ShowsDate><strong>Fri, Mar 27</strong> @ 9:30PM</ShowsDate>
                            </ShowsLink>
                        </ShowsData>
                        <ShowsData>
                            <ShowsLink href="https://www.facebook.com/events/571087733743876/">
                            <ShowsEvent>Wild Wing Cafe Vista</ShowsEvent><ShowsLocation>Columbia, SC</ShowsLocation>
                            </ShowsLink>
                        </ShowsData>
                    </ShowsRow>
                </ShowsTableBody>
            </ShowsTable>
            {/* <Booking></Booking> */}
        </Shows>
    )
}