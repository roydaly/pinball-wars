# Pinball Wars! 

## This app was developed with:
*Express authentication template using Passport + flash messages + custom middleware
*Node.js
*CSS
*HTML
*JS
*API https://opdb.org/api & https://cloudinary.com


<iframe width="560" height="315" src='https://dbdiagram.io/embed/5d1a582aced98361d6dc3a79'> </iframe>

## Project two. 
I decided to make an app for pinball fans. This app is designed to research machines, find hints/tips, make notes and upload pictures of high scores and favorite machines. BUT, the main reason for the app is to create a competitive place for pinball wizards to post their high scores.  
## My process: 
I started out by planning my tables and figuring out what routes I would need. Next, I decided to work on getting my api information pulled into my app. I ran into a few road blocks with the API. First, I needed my own private key in-order to pull information from the API. However, the API didnt provide much instruction or guidance. After trying a few combinations, I figured it out! 

`var pinballUrl = 'https://opdb.org/api/search/?q=' + req.query.name + '&api_token=' + process.env.API_KEY;`

The next setback came when I learned that the API wasnt returning all of the information I was expecting. That meant I had to create links to utilize 3rd party sites and had to change my tables/models. Overall, I ended up getting help from Mike, Carlo, Adam, Miguel, Kelsey and also referenced quite a few websites. W3, Stack Overflow and many more.
## MVP
I accomplished mvp the night before presentations. I ended up having GET, POST, PUT and DELETE routes. I used two different API and three models with a join table. It wasnt pretty and I had quite a few hiccups but it does work. 
## App logic
The app begins with a login or signup page. Once you have signed up, you have the abiity to login and access your profile page. Once there you can upload pictures, search for pinball machines, get hints and tips for machines, favorite machines and add notes. 
## The layout
I tried to make the layout as simple as possible. Rather than having a bunch of different pages and having teh user click around, I deiced to try and have almost everything on one page. This ended up making the routes and planning a litte more confusing but at the end of the day, I am happy with the results. The data for the pinball API didnt return as much as I would have liked, so I had to use outside websites in addition to the API. 
## Results 
The end result is an app that can be used to saerch for pinball machines, get tips and upload images. 
## Next steps 
I still have a big wish list for the app. 
* Lots of styling. 
* Add find or create function rather than just creating and duplicating.
* Redoing the tables to have the odpb number saved in the machine table. That way the tips can be pulled up on the favorites page rather than the search page.
* Adding a comments section for games and pictures.
* The ability to search for other players high scores and/or favorite machines. 
* The ability to favorite not only a machine but also another user.