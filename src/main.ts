import * as dotenv from "dotenv"; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config();

function iam() {
  console.log(`${process.env.NODE_ENV} service is running`);
}

iam();
