# FLOW DETAIL INSTALL

1. install react-botstrap & bootstrap link: https://react-bootstrap.github.io/getting-started/introduction/
    npm i bootstap react-bootstrap

  - import this code to index.js for running
    import 'bootstrap/dist/css/bootstrap.min.css';
  - import this code to index.html
   <!-- <script
    src="https://cdn.jsdelivr.net/npm/react-bootstrap@next/dist/react-bootstrap.min.js"
    crossorigin>
    </script> -->

2. Install React-Router-Dom for Route page https://reactrouter.com/en/main/start/overview
    npm i react-router-dom
    - you can import react-router-dom like this:
    import { BrowserRouter, Routes, Route } from "react-router-dom"
    <!-- <BrowserRouter>
     <Routes>
      <Route path="/" element={<Youfile/>}/>
      <Route path="/youfile" element={<Youfile/>}/>
      <Route path="/youfile/:id" element={<Youfile/>}/>
     </Routes>
   </BrowserRouter> -->

3. for install icon you can acsess at Link: https://fontawesome.com/docs/web/use-with/react/
    - lest to install:
        npm i --save @fortawesome/fontawesome-svg-core
    - Add Icon Packages
        # Free icons styles
        npm i --save @fortawesome/free-solid-svg-icons
        npm i --save @fortawesome/free-regular-svg-icons
    - Add the React Component
        npm i --save @fortawesome/react-fontawesome@latest
    - And then you can click icons again, search what you want
        example : bed and copy this code <FontAwesomeIcon icon={faBed} />
        and you can import also fontawesome-icon
        import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
        import { faBed } from "@fortawesome/free-solid-svg-icons"

3. install react-date-range link: https://hypeserver.github.io/react-date-range/
    npm i react-date-range
    npm i date-fns
    - to import function
      import { DateRange } from 'react-date-range';   

4. style box shadow generator https://cssgenerator.org/box-shadow-css-generator.html

