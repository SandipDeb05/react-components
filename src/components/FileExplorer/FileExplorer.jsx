import React, { useEffect, useState } from "react";
import { Breadcrumbs, Button, Grid, Typography } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import FileExplorerTable from "./FileExplorerTable";

const INITIAL_BREADCRUMB_VALUE = [
  {
    name: "Home",
    id: 0,
  },
];

const FileExplorer = ({ folderStructure }) => {
  const [breadcrumbValue, setBreadcrumbValue] = useState(
    INITIAL_BREADCRUMB_VALUE
  );
  const [filesToDisplay, setFilesToDisplay] = useState([folderStructure]);

  useEffect(() => {
    const lastFile = filesToDisplay[filesToDisplay.length - 1];
    const lastBreadcrumb = breadcrumbValue[breadcrumbValue.length - 1];

    if (lastFile && lastBreadcrumb) {
      const matchingFile = lastFile.find(
        (file) => file.file_id === lastBreadcrumb.id
      );
      if (matchingFile) {
        setFilesToDisplay((prev) => [...prev, [...matchingFile.children]]);
        return;
      }
    }

    setFilesToDisplay((prev) => prev.slice(0, breadcrumbValue.length));
  }, [breadcrumbValue]);

  const breadcrumbHandler = (index) => {
    setBreadcrumbValue((prev) => prev.slice(0, index + 1));
  };
  const backBtnHandler = () => {
    setBreadcrumbValue((prev) => prev.slice(0, prev.length - 1));
  };

  return (
    <Grid container rowGap={2}>
      <Breadcrumbs aria-label="breadcrumb" separator="›">
        {breadcrumbValue.map((val, index) => {
          return (
            <Typography
              color={
                index === breadcrumbValue.length - 1
                  ? "#1976d2"
                  : "text.primary"
              }
              onClick={() => breadcrumbHandler(index)}
              key={`directory-breadcrumb-${index}`}
            >
              {val.name}
            </Typography>
          );
        })}
      </Breadcrumbs>

      <Grid container>
        <Button
          size="small"
          variant="outlined"
          disabled={breadcrumbValue.length === 1}
          onClick={backBtnHandler}
        >
          <ArrowBackIosNewIcon style={{ fontSize: 12 }} />
          Back
        </Button>
      </Grid>

      <FileExplorerTable
        items={filesToDisplay.at(-1)}
        setBreadcrumbValue={setBreadcrumbValue}
      />
    </Grid>
  );
};

export default FileExplorer;
