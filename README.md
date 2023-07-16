# godziny - reset form

##Features

* Comunication with database
* Login form 
* Dragg and dropp
* Forms validations 
* Dynamic routing
* HTTP requests state messages for user
* RWD


##Technologies

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
* Throttling on dragg and dropp components
* Validation on hours input type number in heder month panel
* Styles in settings panel
* Full TypeScript types

 ## Comments
* The Firebase Config keys are not hidden in the .env file to allow access for setting up the project locally.

* On the mobile version of aplication, the drag and drop functionality is not well supported on touch events. It works in the following way: when you press on a tile with information about a day, a black border appears around the tile and its background becomes transparent. To make a change, you need to release your finger and then touch the tile again to drag it to the desired column.
 
* To optimize data retrieval from the database and at the same have access to a list of dates of all saved months, the data structure has been divided into an object with the key "years" and an object with the key "info". The "years" object contains all the data related to the months, while the "info" object holds an array with the collection of dates of all the months saved under the "years" key. The application fetches only data from a single month and the entire array of dates from the saved months in real-time. The dates of all the months from the "info" key are rendered in the sidebar and settings panel without the need to fetch all the data from the database. However, this approach presents a challenge related to performing two requests at the same time: one for the month data to the "years" key and another for the month date to the "info" array. The duplication of PUT and DELETE requests needs to be limited to one in the future. 
