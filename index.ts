import createServer from "./app";
import "dotenv/config";

const app = createServer();
const PORT: number = (process.env.PORT || 3010) as number;

app.listen(PORT, (error: any) => {
  if (error) {
    console.error("Server Unable To Run");
    return;
  }
  console.log("Server is Running at PORT:", PORT);
});
