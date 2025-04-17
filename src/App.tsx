import { CheckBox, Padding } from "@mui/icons-material";
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  InputLabel,
  Select,
  TextField,
  Typography,
} from "@mui/material";

function App() {
  const todoList = [
    {
      title: "Creaat a react PromiseRejectionEvent",
      icheck: false,
      time: "5:23 am",
    },
    {
      title: "Learn React",
      icheck: false,
      time: "5:23 am",
    },
    {
      title: "Create a Todo App",
      icheck: true,
      time: "5:23 am",
    },
  ];

  return (
    <>
      <div style={{ textAlign: "center" }}>
        <Typography variant="h4">TODO LIST APP</Typography>
      </div>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Button variant="contained">Contained</Button>
        <FormControl>
          <InputLabel id="demo-simple-select-label">All </InputLabel>
          <Select
            sx={{ padding: "0px 50px", backgroundColor: "#bdb9b9" }}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Age"
          ></Select>
        </FormControl>
      </Box>
      <Box sx={{ backgroundColor: "#bdb9b9" }}>
        {todoList.map((todo) => (
          <>
            <Box sx={{ backgroundColor: "white" }}>
              <Checkbox checked={todo.icheck}>

              </Checkbox>
              
            </Box>
          </>
        ))}
      </Box>
    </>
  );
}

export default App;
