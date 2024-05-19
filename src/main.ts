import Express from "express";
import router from "./routes/route";
import cors from "cors";

const app = Express();
app.use(
  cors({
    origin: "https://localhost:5173/", // Permite apenas requisições vindas deste endereço
    credentials: true, // Se você estiver usando cookies com credenciais, isso é necessário
  })
);
app.use(Express.json());
app.use(Express.urlencoded({ extended: true }));
app.use(Express.static("public"));
app.use(router);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Server running on port 3000");
});
