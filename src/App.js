import { AppBar, Box, Toolbar, Typography, Button, ButtonGroup } from "@mui/material";
import { useState } from "react";

function App() {
  const [hover1, setHover1] = useState(false);
  const [hover2, setHover2] = useState(false);
  const [hover3, setHover3] = useState(false);

  return (
    <Box>
      <AppBar sx={{ backgroundColor: "#303030" }}>
        <Toolbar sx={{ justifyContent: "center" }}>
          <Typography variant="h6" component="div" >
            myWebsite
          </Typography>
          <ButtonGroup variant="text" color="inherit" >
          <Button
              onMouseEnter={() => setHover1(true)}
              onMouseLeave={() => setHover1(false)}
              sx={{color: hover1 ? "gray" : null }}
              >section 1
            </Button>
            <Button
              onMouseEnter={() => setHover2(true)}
              onMouseLeave={() => setHover2(false)}
              sx={{color: hover2 ? "gray" : null }}
              >section 2
            </Button>
            <Button
              onMouseEnter={() => setHover3(true)}
              onMouseLeave={() => setHover3(false)}
              sx={{color: hover3 ? "gray" : null }}
              >section 3
            </Button>
          </ButtonGroup>

        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default App;
