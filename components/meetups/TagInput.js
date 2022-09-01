import { useRef, useState } from "react";
import { Box, Stack, Typography, TextField } from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";

const Tags = ({ data, handleDelete }) => {
  return (
    <Box
      sx={{
        background: "#283240",
        height: "100%",
        display: "flex",
        padding: "0.4rem",
        margin: "0 0.5rem 0 0",
        justifyContent: "center",
        alignContent: "center",
        color: "#ffffff",
      }}
    >
      <Stack direction="row" gap={1}>
        <Typography>{data}</Typography>
        <CancelIcon
          sx={{ cursor: "pointer" }}
          onClick={() => {
            handleDelete(data);
          }}
        />
      </Stack>
    </Box>
  );
};

export default function InputTags(props) {
  const [tags, SetTags] = useState([]);
  const tagRef = useRef();
  const handleOnSubmit = (e) => {
    if (e.key === "Enter") {
      SetTags([...tags, +tagRef.current.value]);
      tagRef.current.value = "";
      props.inputTags(tags)
    }
  };

  const handleDelete = (value) => {
    const newtags = tags.filter((val) => val !== value);
    SetTags(newtags);
    props.inputTags(tags)
  };

//   useEffect(()=>{
//     props.inputTags(tags)
//   },[tags])

  return (
    <Box sx={{ flexGrow: 1 }}>
      <div onKeyPress={handleOnSubmit}>
        <TextField
          type='number'
          inputRef={tagRef}
          fullWidth
          variant="standard"
          size="small"
          sx={{ margin: "0 0 0.5rem 0" }}
          margin="none"
          placeholder="Enter Tags here"
          InputProps={{
            startAdornment: (
              <Box sx={{ margin: "0 0.2rem 0 0", display: "flex" }}>
                {tags.map((data, index) => {
                  return (
                    <Tags data={data} handleDelete={handleDelete} key={index} />
                  );
                })}
              </Box>
            ),
          }}
        />
      </div>
    </Box>
  );
}
