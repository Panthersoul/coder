import { Router } from "express";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

import { dirname } from "path";
import { fileURLToPath } from "url";


const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)


//const __dirname = dirname(fileURLToPath(import.meta.url));
const router = Router();


router.get("/", (req, res) => {
  res.sendFile(join(__dirname, "../public/index.html/"));
  //res.sendFile("../public/index.html/");
});

export default router;