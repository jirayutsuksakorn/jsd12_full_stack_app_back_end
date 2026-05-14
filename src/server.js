import cors from 'cors';
import express from 'express';
import users from './fakedata/fakeUsers.js';
import { router as apiRoutes } from "./routes/v1/index.js";

const port = 3000;
const app = express();

app.use(cors());

app.use(express.json());

app.use("/api", apiRoutes);

// app.delete();

// app.patch();

app.listen(port, () => {
    console.log(`Server is running on ${port}`);
});
