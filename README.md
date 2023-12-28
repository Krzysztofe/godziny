# Godziny

"Godziny" is an react app designed for the presidium of a trade union's workers council to plan the so-called union hours. In Poland, the presidium of the trade union's council is entitled to use hours for union activities. The allocation of these union hours is determined monthly and depends on the number of days in the month and the number of council members. Once the number of hours for the month is determined, the members of the presidium provide the employer with data on the number of hours taken on specific days of the month. Subsequently, the employer can either accept or reject the request for union hours.

- The application have only a login function as it is intended for a predetermined number of council members, ranging from 5 to 20 individuals.
- After logging in, the user is redirected to the URL corresponding to the current month.
- Next, the user need to submit the basic month structure.
- Then, the user provides the number of all hours available for utilization in the given month for all presidium of a council.
- Subsequently, the user can fill in the details about the days on which will use the union hours. The data for each day will be saved on a tile within the respective "submited hours" column.
- Once the hours are approved or rejected by the management of the workplace, the user can move the tile to the appropriate column.
- If necessary, the user can delete tiles from a column.
- The total hours, submited hours, remaining hours available for all uses... are calculated in real-time.
- If multiple months are created, the user can view the records specific to a particular month.
- To record hours for a specific month, the user must submit their name and specify their color whch represent color of the tile in the settings panel. Then user's name will automatically appear in the select input field within the form for specifying the number of hours.
- In the settings menu, users and months can also be deleted.

The application was developed in consultation with trade union workers council members and is ultimately intended for their use. Aplication was created as part of the "Zaprogramuj Życie" competition, completed in July 2023. 

Live recording of the application presentation during the conclusion of the competition <a href = "https://krzysztofe.github.io/godziny/"> here --></a>  (39-60 min.)

![Zrzut ekranu (208)](https://github.com/Krzysztofe/godziny/assets/96065197/7e2aa8bb-a065-4f4f-bc3d-a3da0b506897)




## Features

* Comunication with database
* Login form 
* Dragg and dropp
* Forms validations 
* Dynamic routing
* HTTP requests state messages for user
* Automatic logout after 5 minutes of inactivity
* RWD
* Animations
* Custom alerts


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

* React hooks: <br/> useState, useEffect, useRef <br/> useDispatch, useSelector, <br/> useNavigate, useParams, useLocation, <br/> useAuthState, useFormikContext, custom hooks
* Libraries: <br/>
react-router, react-router-dom, react-router-hash-link, <br/>
react-firebase-hooks, react-beautiful-dnd<br/>
react-redux, @reduxjs/toolkit,<br/>
formik, yup, <br/>
react-bootstrap, react-icons

## Production version for users tests deployed on home.pl <a href = "https://godziny.ozzip.pl/"> here --></a>
## Demo <a href = "https://krzysztofe.github.io/godziny/"> here --></a>

## Desktop
 <div align="center">
<img src="https://github.com/Krzysztofe/godziny/assets/96065197/2298b684-8526-4f44-bc6f-c9bcab1fd152" width="500" alt="Desktop Screenshot" margin="20">
 </div>

  <div align="center">
<img src="https://github.com/Krzysztofe/godziny/assets/96065197/b10c0dcb-cc11-464a-9eaa-68f99f7852f8" width="500" alt="Desktop Screenshot">
</div>

## Mobile
 <div align="center">
<img src="https://github.com/Krzysztofe/godziny/assets/96065197/57b05eba-80d4-44b3-948a-3f1e0765c9c4" width="300" alt="Mobile Screenshot">

<img src="https://github.com/Krzysztofe/godziny/assets/96065197/078ee5b1-f099-4d54-b725-6b65daa54530" width="300" alt="Mobile Screenshot">

<img src="https://github.com/Krzysztofe/godziny/assets/96065197/667f762e-4a6e-4b88-9d59-f5f26215dfef" width="300" alt="Mobile Screenshot">
</div>

## Do do

* Fast tile movement on dragg and dropp componentscan cause issues with data transmission. To address this, it is necessary to implement JS throttling, which helps regulate the data transfer rate and resolve the problem.

 ## Comments
* The Firebase Config keys are not hidden in the .env file to allow access for setting up the project locally.
 
* The data structure in the Firebase Realtime Database follows a pattern where each year contains multiple months, and each month holds detailed information. For example:

![Zrzut ekranu (277)](https://github.com/Krzysztofe/godziny/assets/96065197/5c8be24d-f17e-4fb1-8bbb-888da3dbb2d8)


* To optimize data retrieval from the database and at the same have access to a list of dates of all saved months in database, a snapshot from the Realtime Database is utilized. This snapshot relies on a WebSocket connection, which, when functioning correctly, results in an HTTP 101 response code. The snapshot listener retrieves keys from the database, encompassing recorded years and months. Subsequently, these keys are transferred to an array, forming a list of months stored in the database. This approach limits HTTP requests to the database to individual month requests and lists of users.


* On the mobile version of aplication, the drag and drop functionality is not well supported on touch events. It works in the following way: when you press on a tile with information about a day, a black border appears around the tile and its background becomes transparent. To make a change, you need to release your finger and then touch the tile again to drag it to the desired column.

## Prerequisites
* Before getting started, make sure you have the Node.js and npm or yarn
* Node version: **Node.js v18.16.1**
* Clone this repository to your local machine
* Navigate to the project directory: **cd .\godziny**
* Install the project dependencies by running **npm install** or **yarn install**
* Start the development server: **cd .\godziny\godziny\ npm start** or **yarn start**
* Open your browser and visit your localhost:3000 to see the running application.

