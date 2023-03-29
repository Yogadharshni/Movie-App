import { useState } from "react";
import { Counter } from "./Counter";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';


export function Movie({ datas }) {
  const [show, setShow] = useState(true);
  const styles = {
    color: datas.rating > 8.5 ? "green" : "red"
  };
  const showstyles = {
    display: show ? 'block' : 'none'
  };
  return (
    <Card  className="Movie">
      
      <img className="poster" src={datas.poster} alt={datas.name} />
      <CardContent>
      <div className="sub-div">
        <h2 className="mname">{datas.name}
           <IconButton color='primary' aria-label="Toggle Summary" onClick={() => setShow(!show)}>
             {show?<ExpandLessIcon/>:<ExpandMoreIcon/>}
          </IconButton>
       </h2>
        <p style={styles} className="mrating">⭐{datas.rating}</p>
      </div>
      
      <p style={showstyles} className="summary">{datas.summary}</p>
      </CardContent>
      <Counter />
    </Card >
  );
}
