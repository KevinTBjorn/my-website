import { AppBar, Box, Toolbar, Typography, Button, ButtonGroup } from "@mui/material";


function App() {
  return (
    <div>
      <Box>
        <AppBar>
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              myWebsite
            </Typography>
            <ButtonGroup variant="text" color="inherit">
              <Button color="inherit">section 1</Button>
              <Button color="inherit">section 2</Button>
              <Button color="inherit">section 3</Button>
            </ButtonGroup>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>

            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
}

export default App;
