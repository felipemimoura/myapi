import express from "express";
import "express-async-errors";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

// Criando uma rota
app.get("/", (request, response) => {
  return response.json({
    message: "Olá devs",
  });
});

app.listen(3000, () => {
  console.log("Server started on port 3000!");
});
