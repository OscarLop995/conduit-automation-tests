import * as fs from "fs";
import * as path from "path";

const filePath = path.join(__dirname, "credentials.json");

export const saveCredentials = (credentials: { username: string, email: string; password: string }) => {
  fs.writeFileSync(filePath, JSON.stringify(credentials, null, 2));
};

export const loadCredentials = (): { username: string, email: string; password: string } => {
  if (!fs.existsSync(filePath)) {
    throw new Error("No credentials file found. Run the registration test first.");
  }
  return JSON.parse(fs.readFileSync(filePath, "utf-8"));
};