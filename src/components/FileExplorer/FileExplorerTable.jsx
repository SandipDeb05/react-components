import { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  TableSortLabel,
} from "@mui/material";
import FolderIcon from "@mui/icons-material/Folder";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";
import BadgeIcon from "@mui/icons-material/Badge";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import DescriptionIcon from "@mui/icons-material/Description";
import getFormattedTime from "../../utils/getFormattedTime";

const FileExplorerTable = ({ items, setBreadcrumbValue }) => {
  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("dateAndTime");
  const [sortedItems, setSortedItems] = useState([]);

  useEffect(() => {
    const sorted = [...items].sort((a, b) => {
      if (orderBy === "dateAndTime") {
        return order === "asc"
          ? new Date(a.created_on) - new Date(b.created_on)
          : new Date(b.created_on) - new Date(a.created_on);
      } else {
        return order === "asc"
          ? a.title.localeCompare(b.title)
          : b.title.localeCompare(a.title);
      }
    });

    setSortedItems(sorted);
  }, [items, order]);

  const updateBreadcrumb = (item) => {
    setBreadcrumbValue((prev) => [
      ...prev,
      { name: item.title, id: item.file_id },
    ]);
  };

  const handleRequestSort = (event, property) => {
    const isAsc = order === "asc";
    const newOrder = isAsc ? "desc" : "asc";
    setOrderBy(property);
    setOrder(newOrder);
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        {items?.length < 1 && (
          <caption style={{ fontSize: "1rem" }}>
            This folder is empty 😕
          </caption>
        )}
        <TableHead>
          <TableRow>
            <TableCell
              align="left"
              sx={{
                borderRight: "1px solid #fff",
                fontWeight: 600,
                color: "#444",
                fontSize: "1rem",
                width: "200px",
                backgroundColor: "#7fbfff",
              }}
            >
              <TableSortLabel
                disabled={sortedItems.length < 1}
                active={orderBy === "title"}
                direction={order}
                onClick={(e) => handleRequestSort(e, "title")}
              >
                <IconButton>
                  <BadgeIcon size="small" color="#444" />
                </IconButton>
                Title
              </TableSortLabel>
            </TableCell>
            <TableCell
              align="left"
              sx={{
                borderRight: "1px solid #fff",
                fontWeight: 600,
                color: "#444",
                fontSize: "1rem",
                width: "200px",
                backgroundColor: "#7fbfff",
              }}
            >
              <TableSortLabel
                disabled={sortedItems.length < 1}
                active={orderBy === "asc"}
                direction={order}
                onClick={(e) => handleRequestSort(e, "dateAndTime")}
              >
                <IconButton>
                  <AccessTimeFilledIcon size="small" color="#444" />
                </IconButton>
                Date & Time
              </TableSortLabel>
            </TableCell>
            <TableCell
              align="left"
              sx={{
                fontWeight: 600,
                color: "#444",
                fontSize: "1rem",
                backgroundColor: "#7fbfff",
              }}
            >
              <IconButton>
                <DescriptionIcon size="small" color="#444" />
              </IconButton>
              Description
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {sortedItems?.map((item) => (
            <TableRow
              key={item.file_id}
              sx={{
                "&:last-child td, &:last-child th": { border: 0 },
                "&:hover": { backgroundColor: "#E8E8E8" },
              }}
            >
              <TableCell
                component="th"
                scope="row"
                onDoubleClick={() => updateBreadcrumb(item)}
                sx={{ cursor: "pointer" }}
              >
                <IconButton>
                  {item.children.length > 0 ? (
                    <FolderIcon color="primary" />
                  ) : (
                    <FolderOpenIcon color="primary" />
                  )}
                </IconButton>
                {item.title || "N/A"}
              </TableCell>
              <TableCell align="left">
                {getFormattedTime(item.created_on)}
              </TableCell>
              <TableCell align="left">{item.description || "N/A"}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default FileExplorerTable;
