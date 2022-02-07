import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";
import { FormControl } from "@mui/material";
import axios from "axios"
import { useHistory } from 'react-router-dom'


/**
 * これはv4までの書き方
 */
// const useStyles = makeStyles({
//   field: {
//     marginTop: 20,
//     marginBottom: 20,
//     display: "block"
//   }
// });

/**
 * v5では以下の書き方が奨励されている
 */
const CustomField = styled(TextField)({
  marginTop: 20,
  marginBottom: 20,
  display: "block"
});

/**
 * カスタムコンポーネント（？）を他のクラスにも継承したい場合は、.withComponentを使うと良い
 * classNameとかやるよりは楽なのか？
 */
const CustomFormControl = CustomField.withComponent(FormControl);

export default function Create() {
  const [title, setTitle] = useState("");
  const [detail, setDetail] = useState("");
  const [titleError, setTitleError] = useState(false);
  const [detailError, setDetailError] = useState(false);
  const [category, setCategory] = useState("todos");
  const history = useHistory()

  const handleSubmit = (e) => {
    e.preventDefault();
    setTitleError(false);
    setDetailError(false);

    if (title === "") {
      setTitleError(true);
    }

    if (detail === "") {
      setDetailError(true);
    }
    if (title && detail) {
      const body = {
        category: category,
        details: detail,
        title: title

      }
      axios.post("http://localhost:8000/notes", body)
      .then(()=>history.push("/"))
    }
  };
  return (
    <Container>
      <Typography
        variant="h6"
        color="textSecondary"
        gutterBottom
        component="h2"
      >
        Create a New Note
      </Typography>
      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <CustomField
          onChange={(e) => setTitle(e.target.value)}
          label="Note Title"
          variant="outlined"
          color="secondary"
          fullWidth
          required
          error={titleError}
        />
        <CustomField
          onChange={(e) => setDetail(e.target.value)}
          label="Details"
          variant="outlined"
          color="secondary"
          multiline
          rows={4}
          fullWidth
          required
          error={detailError}
        />
        <CustomFormControl>
          <FormLabel>Note Category</FormLabel>
          <RadioGroup
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <FormControlLabel value="todos" control={<Radio />} label="Todos" />
            <FormControlLabel value="money" control={<Radio />} label="Money" />
            <FormControlLabel
              value="reminder"
              control={<Radio />}
              label="Reminder"
            />
            <FormControlLabel value="work" control={<Radio />} label="Work" />
          </RadioGroup>
        </CustomFormControl>
        <Button
          // onClick={() => console.log("Yout clicked me!")}
          type="submit"
          color="secondary"
          variant="contained"
          endIcon={<KeyboardArrowRightIcon />}
        >
          Submit
        </Button>
      </form>
    </Container>
  );
}
