import {Box} from "@chakra-ui/react";
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import RegisterStudent from './components/RegisterStudent';
import StudentList from "./components/StudentList";
import EachStudent from "./components/EachStudent";
import EditStudent from "./components/EditStudent";


function App() {
  return (
    <Router>
      <Box >
        <Routes>
          <Route exact path = '/' element = {<StudentList/>}/>
          <Route path = '/register' element = {<RegisterStudent/>}/>
          <Route path = '/eachStudent/:id' element = {<EachStudent/>} />
          <Route path = '/editStudent/:id' element = {<EditStudent/>} />
        </Routes>
        
      </Box>
    </Router>
   
  );
}

export default App;
