import {FC} from "react";
import SearchIcon from "@mui/icons-material/Search";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";

interface SearchInputProps {
  onSearch: (value: string) => void;
}

export const SearchInput: FC<SearchInputProps> = ({onSearch}) => {
  return (
    <Paper
      variant="outlined"
      sx={{
        p: "2px 4px",
        display: "flex",
        alignItems: "center",
        width: 250,
      }}
    >
      <IconButton>
        <SearchIcon />
      </IconButton>
      <InputBase
        placeholder="Search..."
        type="search"
        onChange={e => onSearch(e.target.value)}
      />
    </Paper>
  );
};
