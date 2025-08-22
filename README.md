# Meme Generator

A dynamic and interactive web application built with **React** that allows users to create custom memes. This project showcases the use of React's state and side effects to fetch data from an external API and manage user interactions.

## Key Features

* **Dynamic Meme Generation:** Fetches a list of popular meme images from the [Imgflip API](https://api.imgflip.com/) and displays a random one with a click of a button.

* **Custom Text Overlays:** Users can input their own top and bottom text for the meme.

* **Customizable Text Styles:** Provides controls to adjust the font size, text color, and border color of both the top and bottom text, giving users full creative control.

* **Responsive Design:** Ensures a great user experience on various screen sizes.

## Technology Used

* **React:** The core JavaScript library for building the user interface.

* `useState` Hook: Used to manage the application's state, including the current meme image URL, the meme text, and the styling options.

* `useEffect` Hook: Used to perform the side effect of fetching meme data from the Imgflip API when the component first mounts.

* **Imgflip API:** The external service used to retrieve a list of pre-made meme templates.

## Live Demo

You can see the application in action here:

[**https://meme-generator-jet-two.vercel.app/**](https://meme-generator-jet-two.vercel.app/)
