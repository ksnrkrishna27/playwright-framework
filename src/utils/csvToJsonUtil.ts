import * as fs from "fs";
import path, { delimiter } from "path";
import { constrainedMemory } from "process";

const CSVToJSON = (data, delimiter = ",") => {
  const titles = data.slice(0, data.indexOf("\n")).split(delimiter);
  console.log(`data ==========> ${data}`);
  console.log(`titles ============> ${titles}`);
  return data
    .slice(data.indexOf("\n") + 1)
    .split("\n")
    .map((v) => {
      console.log(`v =========> ${v}`);
      const values = v.split(delimiter);
      return titles.reduce(
        (obj, title, index) => (
          (obj[title.trim()] = values[index].trim()), obj
        ),
        {}
      );
    });
};

const currentDir = __dirname;

const srcDir = path.resolve(currentDir, "..");

const testdataDir = path.resolve(srcDir, "testdata");
const csvFilePath = `${testdataDir}`;

export const convertCsvFileToJsonFile = (
  csvFileName,
  jsonFileName,
  delimiter = ","
) => {
  try {
    // Read the CSV file
    const csvData = fs.readFileSync(`${testdataDir}\\${csvFileName}`, "utf8");

    // Convert CSV to JSON
    const jsonData = CSVToJSON(csvData, delimiter);

    console.log(`Json Data ======> ${jsonData}`);

    // Write JSON data to a new file
    fs.writeFileSync(
      `${testdataDir}\\${jsonFileName}`,
      JSON.stringify(jsonData, null, 3)
    );

    console.log(
      `Conversion completed. JSON data written to: ${testdataDir}\\${jsonFileName}`
    );
  } catch (error) {
    console.error("Error converting CSV to JSON:", error.message);
  }
};
