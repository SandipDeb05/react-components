import { Grid, Link, Typography } from "@mui/material";
import { INPUT } from "./components/data/fileExplorerData";
import FileExplorer from "./components/FileExplorer";
import getFormattedFileData from "./utils/getFormattedFileData";

function App() {
  const DATA = getFormattedFileData(INPUT);
  return (
    <Grid
      container
      alignContent="space-between"
      sx={{ margin: "2rem auto", maxWidth: "95%", height: "650px" }}
    >
      {/* MAIN */}
      <Grid item xs={12}>
        <FileExplorer folderStructure={DATA} />
      </Grid>

      {/* FOOTER */}
      <Grid item xs={12} sx={{ marginTop: "2rem" }}>
        <Typography align="right">
          Coded with 💻 by&nbsp;
          <Link
            href="https://www.linkedin.com/in/sandip-deb-8b76b2157/"
            underline="hover"
            target="_black"
            rel="noopener noreferrer"
          >
            Sandip Deb
          </Link>
        </Typography>
      </Grid>
    </Grid>
  );
}

export default App;
