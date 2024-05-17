# Mother-Music

You feeling some kind of way? Happy, sad, bored, zoomies well Mother has got the music for you! This is a simple playlist generator using your location where you can leave comments on songs.

## Table of Contents

- [Description](#description)
- [Introduction](#introduction)
- [Process](#process)
- [Features](#features)
- [Usage](#usage)
- [Installation](#installation)
- [Credits](#credits)
- [Licenses](#licenses)
- [Images](#images)
- [Link To Deployed Webpage](#link-to-deployed-webpage)
- [Link to GitHub Pages ](#link-to-gethub-website)

## Description

This is a simple music playlist generator using the the spotify node module and openweather API. The spotify node is able to connect to spotify services to pull music. Meanwhile the openweather API inputs the users latitude and longitude to determine the current weather and parse the data to the spotify node. Users can log in to their spotify accounts and save any of the used playlists to their personal library and remember their location.

## Introduction

This is a project made with the accummulative efforts of Mason Carr, Kailee Segarra, and Stephanie Zolton. Following the end of week 14 of our bootcamp we have come to a crossroad of having to work both back end and front end development of a web page. The project is a real-world full-stack application meant to utilize node modules

## Process

We began by making a project proposal, where we began by brainstorming some ideas such as these:
- Music library database w/o copyrights
- Event tracker for concerts/sports/comedy/etc
- App for song recs daily personalized for you (ie: daylist). Like color based on your mood or picking a list of emotions for the mood you’re in
- Something based on weather and music playlists
- Event tracker for weather tracker for concerts/outdoor events 

We eventually settled on this direction, after some discussion:

Title: Mother Music

Proposal description: To design an application that gives you personalized recommended playlists based on the weather. We did ultimately have some issues getting this workflow going, so we decided to make a playlist generator where you can leave comments.

User story: As a user, I want to be able to have an app that automatically generates music and you can drop comments on a randomized playlist.

Here are some API's we explored initially: https://rapidapi.com/s.mahmoud97/api/concerts-artists-events-tracker/, https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API/Using_the_Geolocation_API#examples, https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API, https://rapidapi.com/Paxsenix0/api/youtube-music-api3/, https://rapidapi.com/category/Music, https://rapidapi.com/sonoteller1-sonoteller-default/api/sonoteller-ai1/, https://leemartin.dev/turning-weather-into-music-with-dark-sky-and-spotify-for-tycho-f4f40aef97ed 

Wishlist goals:
- Find records to support your favorite artist: https://rapidapi.com/mail.munteanu/api/yourvinylstore/ 
- I also want to be notified for local artists coming to my area and create an entire unified platform

Our initial wireframe:
![wireframe](./public/css/images/wireframe.png)

For our sources, we used materials from class such as former class challenges, mini-projects, rewatched classes, collaborated with our teachers, and pulled from other youtube videos like this: https://www.youtube.com/watch?v=wSNa5b1mS5Y.

Some issues that we ran in to were that one of our group members had to drop the class, so we had to take on a lot of last-minute work. Getting something deployed to heroku was also a huge road block for us. 

## Features

Some cool features are that our project uses an HBS template for front end, and Node and Express back end. This allows you to interact with other users and comment on songs/artists and generate a more accurate randomized playlist.

## Installation

For installation, we used node, mySQL/schema, sequelize, heroku, and a spotify API.

## Credits

Credit to our teacher and assistant teacher, Mr. Ragheed and Mr. Torres, for giving us the necessary guidance to understand the coding languages. Along with Ohio State University for creating the Coding Bootcmap.

## Licenses

Please refer to License in repo.

## Link to Deployed Webpage

[Heroku](https://mother-music-b890c71f6170.herokuapp.com/)
 
## Link to GitHub Website

[Repository](https://github.com/Masonmanshark4/Mother-Music)
