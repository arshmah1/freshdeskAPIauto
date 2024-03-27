import axios from 'axios';
import {expect} from 'chai';

var id;

    axios.defaults.baseURL = 'https://democompany.freshdesk.com/api/v2';
    axios.defaults.headers =  {
        'Authorization': 'Basic UUYwVFgyaXpBdTVuVjRRTnk3Olg='
    };

    describe('POST Time Entries', function() {
        let response;
        let jsonData;

        before(async function() {
            try {
                response = await axios.post('/tickets/2/time_entries', {
                    "billable" : true,
                    "note" : "Invoice Prepartion",
                    "timer_running" : false,
                    "time_spent" : "10:40"
                  });

                jsonData = response.data;
                id = jsonData.id;
                console.log(id);
                console.log(jsonData);
            } catch(error) {
                console.error('Error Occurred:', error);
                throw error;
            }
        });

        it('Status code is 201', function() {
            expect(response.status).to.equal(201);
        });

    });

    describe('GET Time Entries', function() {
        let response;
        let jsonData;

        before(async function() {
            try {
                response = await axios.get('/time_entries');
                jsonData = response.data;
                //console.log(jsonData);
            } catch(error) {
                console.error('Error Occurred:', error);
                throw error;
            }
        });

        it('Status code is 200', function() {
            expect(response.status).to.equal(200);
        });

        it('Number is correct', function() {
            const expectedNumber = 9;
            expect(jsonData.length).to.equal(expectedNumber);
        });
    });

    

    describe('Delete Time Entries', function() {
        let response;
        let jsonData;

        before(async function() {
            try {
                response = await axios.delete('/time_entries/' + id );
                jsonData = response.data;
                console.log(jsonData);

            } catch(error) {
                console.error('Error Occurred:', error);
                throw error;
            }
        });

        it('Status code is 204', function() {
            expect(response.status).to.equal(204);
        });

        
    });

    describe('GET Time Entries', function() {
        let response;
        let jsonData;

        before(async function() {
            try {
                response = await axios.get('/time_entries');
                jsonData = response.data;
                //console.log(jsonData);
            } catch(error) {
                console.error('Error Occurred:', error);
                throw error;
            }
        });

        it('Status code is 200', function() {
            expect(response.status).to.equal(200);
        });

        it('Number is correct', function() {
            const expectedNumber = 8;
            expect(jsonData.length).to.equal(expectedNumber);
        });
    });