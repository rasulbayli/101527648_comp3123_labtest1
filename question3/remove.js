const fs = require("fs");
const path = require("path");

const logsPath = path.join(process.cwd(), "Logs");

if (fs.existsSync(logsPath)) {
  const files = fs.readdirSync(logsPath);

  files.forEach((file) => {
    const filePath = path.join(logsPath, file);

    if (fs.statSync(filePath).isFile()) {
      console.log(`Deleting: ${file}`);
      fs.unlinkSync(filePath);
    }
  });

  fs.rmdirSync(logsPath);

  console.log("Logs directory removed.");
} else {
  console.log("Logs directory does not exist.");
}
