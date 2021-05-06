const express = require("express");
const app = express();
const cors = require("cors");

const mainRoute = require("./routes/main.routes");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Implementing Cors
app.use(cors());

// Routes for Video and Audio Handling
app.use("/", mainRoute);

const PORT = 3000;
app.listen(PORT, () => console.log(`Server Connected at port ${PORT}`));
