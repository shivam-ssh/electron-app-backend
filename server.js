const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");
const app = express();
const PORT = 3300;

app.use(cors());

app.use("/update", express.static(path.join(__dirname, "updates")));

// app.get("/update/*", (req, res, next) => {
//   const filePath = path.join(__dirname, "updates", req.params[0]);
//   const regex_1 = /electron/i;
//   const regex_2 = /.yml/i;
//   fs.stat(filePath, (err, stats) => {
//     if (err) {
//       if (err.code === "ENOENT") {
//         console.log(err);
//         return res.sendStatus(404);
//       }
//       return next(err);
//     }
//     if (regex_2.test(filePath)) {
//       // let range = req.headers.range;
//       // if (!range) {
//       return res.sendFile(filePath);
//       // }
//     }
//     let range = req.headers.range;
//     if (!range) {
//       return res.sendFile(filePath);
//     }

//     const positions = range.replace(/bytes=/, "").split("-");
//     const start = parseInt(positions[0], 10);
//     const total = stats.size;
//     const end = positions[1] ? parseInt(positions[1], 10) : total - 1;
//     const chunksize = end - start + 1;

//     res.writeHead(206, {
//       "Content-Range": `bytes ${start}-${end}/${total}`,
//       "Accept-Ranges": "bytes",
//       "Content-Length": "0",
//       "Content-Type": "application/octet-stream",
//     });

//     const stream = fs
//       .createReadStream(filePath, { start, end })
//       .on("open", () => {
//         console.log("downloading...");
//         stream.pipe(res);
//       })
//       .on("error", (streamErr) => {
//         next(streamErr);
//       });
//   });
// });

app.get("/", (req, res) => {
  res.send("hello world");
});

app.listen(PORT, () => {
  console.log("listening on Port " + PORT);
});
