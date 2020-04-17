# Lorem Ipsum Generator

This is a Node.js app that serves a webpage. The user can select the amount of Lorem Ipsum text to be generated (a number and units). The app will then respond to the POST request by generating that amount of Lorem Ipsum and displaying the text on the page.

## Exercise

This webpage is an exercise suggested by the Team Treehouse course [Build a Simple Dynamic Site with Node.js](https://teamtreehouse.com/library/build-a-simple-dynamic-site-with-nodejs). It is made using Node.js and only the http and querystring packages. GET and POST requests are handled.

## Issues / TODO

- need to add CSS styling to the page
- Currently, the Lorem Ipsum is not randomly generated but picked from a preset couple of sentences. The number of words and seteneces will be pulled from that preset string until the max of the string, after which no new Lorem Ipsum will be generated. Currently, paragraphs will simply replicate the existing paragraph the number of times the user wants.
