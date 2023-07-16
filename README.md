# Godziny - reset form

"Godziny" is an react app designed for the presidency of a trade union's workers council to plan the so-called union hours. In Poland, the presidency of the trade union's council is entitled to use hours for union activities. The allocation of these union hours is determined monthly and depends on the number of days in the month and the number of council members. Once the number of hours for the month is determined, the members of the presidency provide the employer with data on the number of hours taken on specific days of the month. Subsequently, the employer can either accept or reject the request for union hours.

- The application have only a login function as it is intended for a predetermined number of council members, ranging from 5 to 20 individuals.
- After logging in, the user is redirected to the URL corresponding to the current month.
- Next, the user enters the basic month structure.
- Then, the user provides the number of hours available for utilization in the given month.
- Subsequently, the user can fill in the details about the day on which they intend to use the union hours. The data for each day will be saved on a tile within the respective "submited hours" column.
- Once the hours are approved or rejected by the management, the user can move the tile to the appropriate column.
- If necessary, the user can delete tiles from a column.
- The total hours for all columns are calculated in real-time.
- If multiple months are created, the user can view the records specific to a particular month.
- To record hours for a specific month, the user must enter their name and specify their color in the settings panel. The user's name will automatically appear in the select input field within the form for specifying the number of hours.
- In the settings menu, users and months can also be deleted.

The application was developed in consultation with trade union workers council members and is ultimately intended for their use. Aplication was created as part of the "Zaprogramuj Życie" competition, completed in July 2023.

![Zrzut ekranu (208)](https://github.com/Krzysztofe/godziny/assets/96065197/7e2aa8bb-a065-4f4f-bc3d-a3da0b506897)




## Features

* Comunication with database
* Login form 
* Dragg and dropp
* Forms validations 
* Dynamic routing
* HTTP requests state messages for user
* RWD


## Technologies

* SCSS, Bootstrap
* React, TypeScript
* Redux Toolkit 
* RTK Query: GET, PUT, DELETE
* Firebase: Authentication, Realtime Database 
* Formik / Yup 
* Lazy loading
* Protected routes
* Dynamic Routing
* Login
* Dragg and Dropp
* Forms / Validations
* RWD

* React hooks: <br/> useState, useEffect, <br/> useDispatch, useSelector, <br/> useNavigate, useParams, useLocation, <br/> useAuthState, useFormik, custom hooks
* Libraries: <br/>
react-router, react-router-dom, react-router-hash-link, <br/>
react-firebase-hooks,react-beautiful-dnd<br/>
react-redux, @reduxjs/toolkit,<br/>
formik, yup, <br/>
react-bootstrap, sweetalert2, react-icons

## Demo <a href = "https://krzysztofe.github.io/godziny/"> here --></a>

## Desktop

<img src="https://github.com/Krzysztofe/godziny/assets/96065197/2fd80bb0-7706-483a-99ef-f6622065a0d6" width="500" alt="Desktop Screenshot" margin="20">


<img src="https://github.com/Krzysztofe/godziny/assets/96065197/f333c22f-c793-4bd6-9eb7-b5587154c1ec" width="500" alt="Desktop Screenshot">


<img src="https://github.com/Krzysztofe/godziny/assets/96065197/81770d78-57f9-4817-9697-3a078b4d22a2" width="500" alt="Desktop Screenshot">


<img src="https://github.com/Krzysztofe/godziny/assets/96065197/8efd450b-dac2-4a64-a5e3-ac6c01578238" width="500" alt="Desktop Screenshot">

## Mobile

<img src="https://github.com/Krzysztofe/godziny/assets/96065197/670227ce-4803-464e-94c4-c0f6d06c76cf" width="300" alt="Mobile Screenshot">

<img src="https://github.com/Krzysztofe/godziny/assets/96065197/82ccd815-341c-4c2a-bb8f-57144d59fde7" width="300" alt="Mobile Screenshot">

## Do do

* Fast tile movement on dragg and dropp componentscan cause issues with data transmission. To address this, it is necessary to implement JS throttling, which helps regulate the data transfer rate and resolve the problem.
* Validation on hours input type number in heder month panel
* Styles
* Full TypeScript types
* Error page

 ## Comments
* The Firebase Config keys are not hidden in the .env file to allow access for setting up the project locally.

* On the mobile version of aplication, the drag and drop functionality is not well supported on touch events. It works in the following way: when you press on a tile with information about a day, a black border appears around the tile and its background becomes transparent. To make a change, you need to release your finger and then touch the tile again to drag it to the desired column.
 
* To optimize data retrieval from the database and at the same have access to a list of dates of all saved months, the data structure has been divided into an object with the key "years" and an object with the key "info". The "years" object contains all the data related to the months, while the "info" object holds an array with the collection of dates of all the months saved under the "years" key. The application fetches only data from a single month and the entire array of dates from the saved months in real-time. The dates of all the months from the "info" key are rendered in the sidebar and settings panel without the need to fetch all the data from the database. However, this approach presents a challenge related to performing two requests at the same time: one for the month data to the "years" key and another for the month date to the "info" array. The duplication of PUT and DELETE requests needs to be limited to one in the future.

## Prerequisites
* Before getting started, make sure you have the Node.js and npm or yarn
* Clone this repository to your local machine
* Navigate to the project directory
* Install the project dependencies by running npm install or yarn install
* Start the development server npm start or yarn start
* Open your browser and visit your localhost:3000 to see the running application.

