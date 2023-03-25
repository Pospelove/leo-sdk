# Overview
leo-sdk is a library that provides a client interface to The One API, a movie database API. The library is written in NodeJS and is designed to be easy to use for developers who want to access The One API in their applications.

# Architecture
leo-sdk is built using a client-server architecture, meaning that it has a set of classes and functions that allow developers to easily interact with The One API. To do this, it uses axios, a popular library that helps make requests to the API.

The main part of the library is the `TheOneApiSdk` class. This class has methods that developers can use to get data from the API, like movies and quotes. You can also use it to get a single movie by id.

# Testing
leo-sdk uses a type of testing called approval testing. Approval tests check if the output of a system matches a previously approved output. If there's a change, the test fails, and the developer has to check if the change is expected.
