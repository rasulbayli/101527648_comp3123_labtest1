const fs = require("fs");
const path = require("path");

const logsPath = path.join(process.cwd(), "Logs");

if (!fs.existsSync(logsPath)) {
  fs.mkdirSync(logsPath);
}

process.chdir(logsPath);

for (let i = 1; i <= 10; i++) {
  const fileName = `log${i}.txt`;
  const filePath = path.join(process.cwd(), fileName);

  fs.writeFileSync(filePath, `This is log file ${i}.`);

  console.log(`Created: ${fileName}`);
}
