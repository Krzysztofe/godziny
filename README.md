# Godziny - reset form

"Godziny" is an app designed for the presidency of a trade union's workers council to plan the so-called union hours. In Poland, the presidency of the trade union's council is entitled to use hours for union activities. The allocation of these union hours is determined monthly and depends on the number of days in the month and the number of council members. Once the number of hours for the month is determined, the members of the presidency provide the employer with data on the number of hours taken on specific days of the month. Subsequently, the employer can either accept or reject the request for union hours.

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


## Do do 
* Fast tile movement on dragg and dropp componentscan cause issues with data transmission. To address this, it is necessary to implement JS throttling, which helps regulate the data transfer rate and resolve the problem.
* Validation on hours input type number in heder month panel
* Styles in settings panel
* Full TypeScript types

 ## Comments
* The Firebase Config keys are not hidden in the .env file to allow access for setting up the project locally.

* On the mobile version of aplication, the drag and drop functionality is not well supported on touch events. It works in the following way: when you press on a tile with information about a day, a black border appears around the tile and its background becomes transparent. To make a change, you need to release your finger and then touch the tile again to drag it to the desired column.
 
* To optimize data retrieval from the database and at the same have access to a list of dates of all saved months, the data structure has been divided into an object with the key "years" and an object with the key "info". The "years" object contains all the data related to the months, while the "info" object holds an array with the collection of dates of all the months saved under the "years" key. The application fetches only data from a single month and the entire array of dates from the saved months in real-time. The dates of all the months from the "info" key are rendered in the sidebar and settings panel without the need to fetch all the data from the database. However, this approach presents a challenge related to performing two requests at the same time: one for the month data to the "years" key and another for the month date to the "info" array. The duplication of PUT and DELETE requests needs to be limited to one in the future. 
