/*const { JSDOM } = require('jsdom');
const { window } = new JSDOM();
global.window = window;

function parseJwt(token) {
  var base64Url = token.split('.')[1];
  var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');

  if (typeof window !== 'undefined') {
    var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function (c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
    return JSON.parse(jsonPayload);
  } else {
    throw new Error('Unsupported environment: Cannot access window object');
  }
}

async function onsignin(response) {
  const responsePayload = parseJwt(response.credential);
  const paramValue = `${responsePayload.sub},${responsePayload.name},${responsePayload.email},${responsePayload.given_name},${responsePayload.family_name},${responsePayload.picture}`;
}


const modifiedSampleToken = 'eyJhbGciOiJSUzI1NiIsImtpZCI6Ijg1ZTU1MTA3NDY2YjdlMjk4MzYxOTljNThjNzU4MWY1YjkyM2JlNDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJhenAiOiIxMDY2Mjg4MTMxMTQ5LTFkM2tydDk0NGxsM3NnZWxzNmNrZm84ajdjY3Y5djc4LmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwiYXVkIjoiMTA2NjI4ODEzMTE0OS0xZDNrcnQ5NDRsbDNzZ2VsczZja2ZvOGo3Y2N2OXY3OC5hcHBzLmdvb2dsZXVzZXJjb250ZW50LmNvbSIsInN1YiI6IjExODM2ODQ0NzA3OTI0MDYzMzc4OCIsImVtYWlsIjoicHJvdmFtZXJjdXJ5OEBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwibmJmIjoxNzA2OTcyNjAzLCJuYW1lIjoiUHJvdmEgUHJvdmEiLCJwaWN0dXJlIjoiaHR0cHM6Ly9saDMuZ29vZ2xldXNlcmNvbnRlbnQuY29tL2EvQUNnOG9jTFU3VmFoaWV6ZEVHd2VITm1ITHJrYmtsSnJBNGdJdGd0RW5IdnhUXzRRPXM5Ni1jIiwiZ2l2ZW5fbmFtZSI6IlByb3ZhIiwiZmFtaWx5X25hbWUiOiJQcm92YSIsImxvY2FsZSI6Iml0IiwiaWF0IjoxNzA2OTcyOTAzLCJleHAiOjE3MDY5NzY1MDMsImp0aSI6IjJhOTQzNTc2YzViMTIwY2IzNzQxZmI5NjIwNWExMDZlYTcxN2UzNWUifQ.eXl9D3Q2LK11edhx_SukEzUCSzc-bqTTXu6C5lijWz2Bq-olrw-3GBkN1VYFvvSVzecB0MmhSC8i-euM-1XV4dZyeqPq1wYFlcFMA8wouyYGk06VVPFlcZxDbvml_1pUPFuOpCbC5TeEakdtE8D18V7VUa1o_G5CCylifGozY2FJ0y2YfC4IfM3fOjBZgUWn_2xw4v2ria0o7FyobROdFBvLx17xf9NPF_59D869y6vB5D4Bugjg2r1KEi96M8HuHRvkKKQf_LmbKV5Hox6qF2uNu7csrm3E0L-whCiRgkuSmbPbqWoIz5oWsJIw31998-tk_4k0-gDhbw2_Tti88Q';
const modifiedMockResponse = {
  credential: modifiedSampleToken
};


test('parseJwt function should decode JWT token', () => {
  const decodedToken = parseJwt(modifiedSampleToken);
  expect(decodedToken.sub).toBe('118368447079240633788');
});


test('onsignin function should process the response', () => {
  
  onsignin(modifiedMockResponse);

  
  const responsePayload = parseJwt(modifiedMockResponse.credential);
  const paramValue = `${responsePayload.sub}`;

  
  expect(window.someValue).toBe();
  expect(window.anotherValue).toBe();

  // Verify values directly in the `paramValue` variable
  expect(paramValue).toBe('118368447079240633788');
});
*/