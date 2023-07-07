# Hungry

By Tornike Jimshiashvili

Are you indecisive when it comes to choosing what to eat?

Introducing Hungry, an app designed to help you with this indecision. This app was designed to help users find random recipes to which they can choose from. Using similar UI as Tinder, its very user friendly, just having two buttons to like or dislike the recipe rendered on screen. The user can also use filters to look for certain cuisines, meal types or diets. Once a user likes a dish, it gets sent to the liked list. Here you will have the option to either favorite or delete the recipe. The user can also click on the recipe picture, directing them to the recipe details page, where they will will find a brief summary, ingredients and preparation guide. Lastly the user can leave their notes at the bottom of the details page.

## How to run

1. Install required dependencies from both /client and /Server folders by running 'npm i' from both

2. To start the server, run 'nodemon ./index.js' or 'node ./index.js' from /Server

3. To start the client, run 'npm start' from /client

## Using the app (run the app at 390 x 844 px)

![Alt text](<tutorial_images/Screenshot 2023-07-07 145309.png>)

## Registration page

Choose an unique email and password to create an account

![![Alt text](image.png)](<tutorial_images/Screenshot 2023-07-07 145353.png>)

## Main page

As the page loads up you will see a picture of a random recipe as well as its name.
The user can press the garbage button to discard the recipe and fetch a new one,
or like the recipe using the fork & knife button to save it to the liked list and
fetch the next recipe

![Alt text](<tutorial_images/Screenshot 2023-07-07 154857.png>)

The use is also able to use the filters to fetch recipes based on cuisine, meal type or diet.

![Alt text](<tutorial_images/Screenshot 2023-07-07 161931.png>)

## Liked recipes

To access the liked recipes page, just click on the heart icon located at the top right. This will show the list of all liked recipes. The user may favorite or delete the recipes by clicking on the corresponding icons. The user can also click on the recipe image to be re-directed to the recipe information.

![Alt text](<tutorial_images/Screenshot 2023-07-07 162057.png>)

## Recipe info

The recipe info displays important information for the user such as: recipe summary, its score, ingredients and instructions.

![Alt text](<tutorial_images/Screenshot 2023-07-07 162122.png>)

The user may also leave a custom note for the recipe if they feel that the recipe needed some modification. Aditionally, they can access the link to be directed to the original link of the recipe.

![Alt text](<tutorial_images/Screenshot 2023-07-07 162224.png>)

# Tech Stack

- Back end: node js, express
- Database: Mongoose with MongoDB
- Authentication: JWT
- Front end: React
- Styling: CSS
