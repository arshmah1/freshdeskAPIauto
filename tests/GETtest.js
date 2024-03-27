import axios from 'axios';
import {expect} from 'chai';
import Ajv from 'ajv';

    axios.defaults.baseURL = 'https://democompany.freshdesk.com/api/v2';
    axios.defaults.headers =  {
        'Authorization': 'Basic UUYwVFgyaXpBdTVuVjRRTnk3Olg='
    };

    describe('GET Agents', function() {
        let response;
        let jsonData;

        before(async function() {
            try {
                response = await axios.get('/agents');
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
            const expectedNumber = 1;
            expect(jsonData.length).to.equal(expectedNumber);
        });

        it('Schema validation', function () {
            const schema = {
                "type": "array",
                "default": [],
                "title": "Root Schema",
                "items": {
                    "type": "object",
                    "default": {},
                    "title": "A Schema",
                    "required": [
                        "available",
                        "occasional",
                        "id",
                        "ticket_scope",
                        "created_at",
                        "updated_at",
                        "last_active_at",
                        "available_since",
                        "type",
                        "contact",
                        "deactivated",
                        "signature",
                        "focus_mode"
                    ],
                    "properties": {
                        "available": {
                            "type": "boolean",
                            "default": false,
                            "title": "The available Schema",
                            "examples": [
                                false
                            ]
                        },
                        "occasional": {
                            "type": "boolean",
                            "default": false,
                            "title": "The occasional Schema",
                            "examples": [
                                false
                            ]
                        },
                        "id": {
                            "type": "integer",
                            "default": 0,
                            "title": "The id Schema",
                            "examples": [
                                153010305589
                            ]
                        },
                        "ticket_scope": {
                            "type": "integer",
                            "default": 0,
                            "title": "The ticket_scope Schema",
                            "examples": [
                                1
                            ]
                        },
                        "created_at": {
                            "type": "string",
                            "default": "",
                            "title": "The created_at Schema",
                            "examples": [
                                "2024-03-19T07:13:18Z"
                            ]
                        },
                        "updated_at": {
                            "type": "string",
                            "default": "",
                            "title": "The updated_at Schema",
                            "examples": [
                                "2024-03-21T15:19:09Z"
                            ]
                        },
                        "last_active_at": {
                            "type": "string",
                            "default": "",
                            "title": "The last_active_at Schema",
                            "examples": [
                                "2024-03-21T15:19:09Z"
                            ]
                        },
                        "available_since": {
                            "type": "null",
                            "default": null,
                            "title": "The available_since Schema",
                            "examples": [
                                null
                            ]
                        },
                        "type": {
                            "type": "string",
                            "default": "",
                            "title": "The type Schema",
                            "examples": [
                                "support_agent"
                            ]
                        },
                        "contact": {
                            "type": "object",
                            "default": {},
                            "title": "The contact Schema",
                            "required": [
                                "active",
                                "email",
                                "job_title",
                                "language",
                                "last_login_at",
                                "mobile",
                                "name",
                                "phone",
                                "time_zone",
                                "created_at",
                                "updated_at"
                            ],
                            "properties": {
                                "active": {
                                    "type": "boolean",
                                    "default": false,
                                    "title": "The active Schema",
                                    "examples": [
                                        true
                                    ]
                                },
                                "email": {
                                    "type": "string",
                                    "default": "",
                                    "title": "The email Schema",
                                    "examples": [
                                        "arshmahshakeel555@gmail.com"
                                    ]
                                },
                                "job_title": {
                                    "type": "null",
                                    "default": null,
                                    "title": "The job_title Schema",
                                    "examples": [
                                        null
                                    ]
                                },
                                "language": {
                                    "type": "string",
                                    "default": "",
                                    "title": "The language Schema",
                                    "examples": [
                                        "en"
                                    ]
                                },
                                "last_login_at": {
                                    "type": "string",
                                    "default": "",
                                    "title": "The last_login_at Schema",
                                    "examples": [
                                        "2024-03-21T09:40:28Z"
                                    ]
                                },
                                "mobile": {
                                    "type": "null",
                                    "default": null,
                                    "title": "The mobile Schema",
                                    "examples": [
                                        null
                                    ]
                                },
                                "name": {
                                    "type": "string",
                                    "default": "",
                                    "title": "The name Schema",
                                    "examples": [
                                        "Arshmah Shakeel"
                                    ]
                                },
                                "phone": {
                                    "type": "null",
                                    "default": null,
                                    "title": "The phone Schema",
                                    "examples": [
                                        null
                                    ]
                                },
                                "time_zone": {
                                    "type": "string",
                                    "default": "",
                                    "title": "The time_zone Schema",
                                    "examples": [
                                        "Casablanca"
                                    ]
                                },
                                "created_at": {
                                    "type": "string",
                                    "default": "",
                                    "title": "The created_at Schema",
                                    "examples": [
                                        "2024-03-19T07:13:18Z"
                                    ]
                                },
                                "updated_at": {
                                    "type": "string",
                                    "default": "",
                                    "title": "The updated_at Schema",
                                    "examples": [
                                        "2024-03-21T15:19:07Z"
                                    ]
                                }
                            },
                            "examples": [{
                                "active": true,
                                "email": "arshmahshakeel555@gmail.com",
                                "job_title": null,
                                "language": "en",
                                "last_login_at": "2024-03-21T09:40:28Z",
                                "mobile": null,
                                "name": "Arshmah Shakeel",
                                "phone": null,
                                "time_zone": "Casablanca",
                                "created_at": "2024-03-19T07:13:18Z",
                                "updated_at": "2024-03-21T15:19:07Z"
                            }]
                        },
                        "deactivated": {
                            "type": "boolean",
                            "default": false,
                            "title": "The deactivated Schema",
                            "examples": [
                                false
                            ]
                        },
                        "signature": {
                            "type": "null",
                            "default": null,
                            "title": "The signature Schema",
                            "examples": [
                                null
                            ]
                        },
                        "focus_mode": {
                            "type": "boolean",
                            "default": false,
                            "title": "The focus_mode Schema",
                            "examples": [
                                true
                            ]
                        }
                    },
                    "examples": [{
                        "available": false,
                        "occasional": false,
                        "id": 153010305589,
                        "ticket_scope": 1,
                        "created_at": "2024-03-19T07:13:18Z",
                        "updated_at": "2024-03-21T15:19:09Z",
                        "last_active_at": "2024-03-21T15:19:09Z",
                        "available_since": null,
                        "type": "support_agent",
                        "contact": {
                            "active": true,
                            "email": "arshmahshakeel555@gmail.com",
                            "job_title": null,
                            "language": "en",
                            "last_login_at": "2024-03-21T09:40:28Z",
                            "mobile": null,
                            "name": "Arshmah Shakeel",
                            "phone": null,
                            "time_zone": "Casablanca",
                            "created_at": "2024-03-19T07:13:18Z",
                            "updated_at": "2024-03-21T15:19:07Z"
                        },
                        "deactivated": false,
                        "signature": null,
                        "focus_mode": true
                    }]
                },
                "examples": [
                    [{
                        "available": false,
                        "occasional": false,
                        "id": 153010305589,
                        "ticket_scope": 1,
                        "created_at": "2024-03-19T07:13:18Z",
                        "updated_at": "2024-03-21T15:19:09Z",
                        "last_active_at": "2024-03-21T15:19:09Z",
                        "available_since": null,
                        "type": "support_agent",
                        "contact": {
                            "active": true,
                            "email": "arshmahshakeel555@gmail.com",
                            "job_title": null,
                            "language": "en",
                            "last_login_at": "2024-03-21T09:40:28Z",
                            "mobile": null,
                            "name": "Arshmah Shakeel",
                            "phone": null,
                            "time_zone": "Casablanca",
                            "created_at": "2024-03-19T07:13:18Z",
                            "updated_at": "2024-03-21T15:19:07Z"
                        },
                        "deactivated": false,
                        "signature": null,
                        "focus_mode": true
                    }]
                ]
            };
    
            const ajv = new Ajv();
            const validate = ajv.compile(schema);
            const valid = validate(jsonData);
            expect(valid, validate.errors ? JSON.stringify(validate.errors) : 'Schema is valid').to.be.true;
        });
    });

    describe('GET Companies', function() {
        let response;
        let jsonData;

        before(async function() {
            try {
                response = await axios.get('/companies');
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
            const expectedNumber = 1;
            expect(jsonData.length).to.equal(expectedNumber);
        });
    });

    describe('GET Contacts', function() {
        let response;
        let jsonData;

        before(async function() {
            try {
                response = await axios.get('/contacts');
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
            const expectedNumber = 15;
            expect(jsonData.length).to.equal(expectedNumber);
        });
    });

    describe('GET Groups', function() {
        let response;
        let jsonData;

        before(async function() {
            try {
                response = await axios.get('/groups');
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
            const expectedNumber = 3;
            expect(jsonData.length).to.equal(expectedNumber);
        });
    });

    describe('GET Roles', function() {
        let response;
        let Data;

        before(async function() {
            try {
                response = await axios.get('/roles');
                Data = response.data;
                //console.log(Data);
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
            expect(Data.length).to.equal(expectedNumber);
        });
    });