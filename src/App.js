import { Box, Button, Paper } from "@material-ui/core";
import AppForm from "./components/AppForm";
import SaveIcon from "@material-ui/icons/Save";
import React, { useState } from "react";
import Header from "./components/Header";
import moment from "moment";
import Joi from "joi";
import Transactions from "./components/Transactions";
import { db } from "./firebaseConfig";

const dataObject = {
  currentDate: new Date(),
  amount: "",
  remark: "",
};

const schema = Joi.object({
  amount: Joi.string().min(2).pattern(new RegExp("^[+-]")).required(),
  currentDate: Joi.date().required(),
  remark: Joi.string().required(),
  isError: Joi.string(),
});

function App() {
  const [formData, setFormData] = useState(dataObject);

  const handleSubmit = () => {
    const date = moment(dataObject.currentDate).format("Do MMM YY");
    const time = moment(dataObject.currentDate).format("LT");
    const result = schema.validate(formData);
    if (result.error) {
      setFormData({
        ...formData,
        isError: result.error.details[0].context.label,
      });
    } else {
      db.collection("cash-register").add({
        date: date.toString(),
        time: time.toString(),
        remark: formData.remark,
        amount: parseInt(formData.amount.substring(1)),
        type: formData.amount[0],
      });
    }
  };

  return (
    <Box
      m="auto"
      maxWidth={400}
      mt={1}
      borderTop={6}
      borderColor="#1976d2"
      borderRadius={4}
    >
      <Paper elevation={2}>
        <Box p={2}>
          <Header />
          <AppForm data={formData} setData={setFormData} />
          <Transactions />
          <Button
            variant="contained"
            color="primary"
            size="large"
            fullWidth
            onClick={handleSubmit}
            startIcon={<SaveIcon />}
          >
            Save
          </Button>
        </Box>
      </Paper>
    </Box>
  );
}

export default App;
