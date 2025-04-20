import { CheckBox, Padding, Title } from "@mui/icons-material";
import DeleteIcon from "@mui/icons-material/Delete";
import { createSvgIcon } from "@mui/material/utils";
import EditIcon from "@mui/icons-material/Edit";

import {
  Box,
  Button,
  Checkbox,
  FormControl,
  Icon,
  InputLabel,
  Select,
  TextField,
  Typography,
} from "@mui/material";

function App() {
  const HomeIcon = createSvgIcon(
    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />,
    "Home"
  );
  const PlusIcon = createSvgIcon(
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 4.5v15m7.5-7.5h-15"
      />
    </svg>,
    "Plus"
  );
  const todoList = [
    {
      title: "Creaat a react project",
      icheck: false,
      time: "5:30 am",
    },
    {
      title: "Learn React",
      icheck: false,
      time: "5:40 am",
      icon: <HomeIcon />,
    },
    {
      title: "Create a Todo App",
      icheck: true,
      time: "5:23 am",
      icon: <PlusIcon />,
    },
  ];

  return (
    <>
      <div style={{ textAlign: "center" }}>
        <Typography variant="h4">TODO LIST APP</Typography>
      </div>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Button sx={{ textTransform: "capitalize" }} variant="contained">
          Add Task
        </Button>
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
      <Box
        sx={{
          backgroundColor: "#bdb9b9",
          padding: "10px",
          borderRadius: "10px",
          marginTop: "20px",
        }}
      >
        {todoList.map((todo) => (
          <>
            <Box
              sx={{
                backgroundColor: "white",
                display: "flex",
                margin: "10px",
                borderRadius: "7px",
                justifyContent: "space-between",
              }}
            >
              <Box sx={{ display: "flex" }}>
                <Checkbox checked={todo.icheck}></Checkbox>
                <div>
                  <Typography
                    sx={{
                      textDecoration: todo.icheck ? "line-through" : "none",
                      opacity: todo.icheck ? "0.7" : "1",
                    }}
                    variant="h6"
                  >
                    {todo.title}
                    {todo.icon}
                  </Typography>
                  <Typography variant="caption">{todo.time}</Typography>
                </div>
              </Box>
              <Box sx={{ alignSelf: "center",display:"flex" }}>
                <Box sx={{backgroundColor:"#999999", marginRight:"5px", borderRadius:"5px",cursor:"pointer"}}>
                <DeleteIcon />
                </Box>
                <Box sx={{backgroundColor:"#999999", marginRight:"5px",borderRadius:"5px", cursor:"pointer"}}>
                <EditIcon />
                </Box>
              </Box>
            </Box>
          </>
        ))}
      </Box>
    </>
  );
}

export default App;
