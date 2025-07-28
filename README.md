# Godziny - React/TS, Express, Mongoose

"Godziny" is full-stack commercial project designed for the presidium of a trade union's workers council to plan the so-called union hours. In Poland, the presidium of the trade union's council is entitled to use hours for union activities. Once the number of hours for the month is determined, the members of the presidium provide the employer with data on the number of hours taken on specific days of the month. Subsequently, the employer can either accept or reject the request for union hours.
## Server <a href = "https://github.com/Krzysztofe/godziny-server"> here --></a>


## Application functionality

- The application have only a login function as it is intended for a predetermined number of council members, ranging from 5 to 20 individuals.
- After logging in, the user is redirected to the URL corresponding to the current month.


- Next, the user need to submit the basic month structure in settings panel.
- Then, the user provides the number of all hours available for utilization in the given month for all presidium of a council.


   <div align="center">
  <img src="https://github.com/Krzysztofe/godziny/assets/96065197/e2207248-d6ab-46c4-9334-aa69c53f13a9" alt="html5" width="450" height="200" /> 
</div> <br/>

- Subsequently in month panel, the users can fill in the details form about the days on which will use the union hours. The data for each day will be saved on a tile within the respective "submited hours" column.

- Once the hours are approved or rejected by the management of the workplace, the users can move the tile to the appropriate column.
- If necessary, the user can delete tiles from a column.
- The total hours, submited hours, remaining hours available for all uses are calculated in real-time.


   <div align="center">
  <img src="https://github.com/Krzysztofe/godziny/assets/96065197/0d49b925-86e8-443b-9427-8fa9a482f962" alt="html5" width="450" height="200" /> 
</div> <br/>

- If multiple months are created, the user can view the records specific to a particular month.
- In the settings panel, users and months can also be deleted.



   <div align="center">
  <img src="https://github.com/Krzysztofe/godziny/assets/96065197/92e03c91-e86d-4bb7-a8f6-958551a993c5" alt="html5" width="450" height="200" /> 
</div> <br/>

- To record hours for a specific month, the user must submit their name and specify their color whch represent color of the tile in the settings panel. Then user's name will automatically appear in the select input field within the form for specifying the number of hours in mnthpanel.


  ##

The application was developed in consultation with trade union workers council members and is ultimately intended for their use. Aplication was created as part of the "Zaprogramuj Życie" competition, completed in July 2023. 

Live recording of the application presentation during the conclusion of the competition <a href = "https://krzysztofe.github.io/godziny/"> here --></a>  (39-60 min.)

![Zrzut ekranu (208)](https://github.com/Krzysztofe/godziny/assets/96065197/7e2aa8bb-a065-4f4f-bc3d-a3da0b506897)

  ##
## Production version for users frontend deployed on home.pl backend on vercel <a href = "https://godziny.ozzip.pl/"> here --></a>
## Demo <a href = "https://krzysztofe.github.io/godziny/"> here --></a>

## Desktop

 <div align="center">
  <img src="https://github.com/Krzysztofe/godziny/assets/96065197/2d76af0e-c3d9-4cdf-9b9a-eb0bdecc945d" alt="html5" width="504" height="300"/> 
</div> <br/>

 <div align="center">
  <img src="https://github.com/Krzysztofe/godziny/assets/96065197/04c9c0d2-a4b9-43d4-a07e-3036b6edd5ee" alt="html5" width="250" height="100" margin = "30"/> 
</div>

## Mobile
 <div align="center">
<img src="https://github.com/Krzysztofe/godziny/assets/96065197/037d656d-59f6-4a97-a8c8-0da13b37e4fd" width="300" alt="Mobile Screenshot">
</div>

## Frontend Features

* Comunication with database
* Auth 
* Drag and drop
* Forms / validations 
* Dynamic routing
* HTTP requests state messages for user
* Automatic logout after 5 minutes of inactivity
* RWD
* Animations
* Sound on drag event
* Custom alerts
* Protected routes


## Frontend Technologies

* SCSS, Bootstrap
* React, TypeScript
* Redux Toolkit
* Context
* RTK Query: GET, POST, PUT, DELETE
* Formik / Yup 
* Lazy loading
* Router
* RegExp

* React hooks: <br/> useState, useEffect, useRef, <br/> useDispatch, useSelector, useContext,<br/> useNavigate, useParams, useLocation, <br/> useFormikContext, custom hooks

* Memoization: <br/> memo, useMemo 

* Libraries: <br/>
react-router, react-router-dom, react-router-hash-link, history, <br/>
react-beautiful-dnd, <br/>
react-redux, @reduxjs/toolkit, <br/>
formik, yup, <br/>
react-bootstrap, react-icons


## Backend Features <a href = "https://github.com/Krzysztofe/godziny-server">server here --></a>
* Auth
* Password hashing
* Input validations (yup, custom validations)
* Database integration: MongoDB Atlas / Mongoose ODM
* RESTful API - GET, POST, PUT, DELETE endpoints
* Environment configuration
* MVC architecture

## Backend Technologies

* Express
* JWT
* bcryptjs
* CORS configuration
* HTTP headers helmet security
  
* Libraries: <br/>
bcryptjs, body-parser, compression, helmet, jsonwebtoken, mongoose, nodemon, yup

* Database: <br/>
 MongoDB Atlas / Mongoose ODM

 ## Comments
* URLs are not hidden in the .env file to allow access for setting up the project locally.
 
* To achieve global access to variables and functions, Redux Toolkit was implemented. However, to avoid prop drilling within components in lists iterated by the map() method, local Context was utilized.

* On the mobile version of aplication, the drag and drop functionality is not well supported on touch events. It works in the following way: when you press on a tile with information about a day, a black border appears around the tile and its background becomes transparent. To make a change, you need to release your finger and then touch the tile again to drag it to the desired column.

* The structure of the month data stored in MongoDB Atlas is as follows:

 <div>
<img src="https://github.com/user-attachments/assets/5846c847-6fd8-4253-a0ab-a8d9508b5614" width=450" height="400" alt="Screenshot">
</div>


## Prerequisites
* Before getting started, make sure you have the Node.js and npm or yarn
* Node version: **Node.js v18.16.1**
* Clone this repository to your local machine
* Navigate to the project directory: **cd .\godziny**
* Install the project dependencies by running **npm install** or **yarn install**
* Start the development server: **cd .\godziny\godziny\ npm start** or **yarn start**
* Open your browser and visit your localhost:3000 to see the running application.

