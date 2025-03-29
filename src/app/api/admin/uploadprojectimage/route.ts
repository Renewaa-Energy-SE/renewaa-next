import { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import path from "path";

export async function POST(req: Request, res: Response) {
  try {
    const body = await req.json();
    const { file: base64data, imageName } = body;

    // Remove the data URL prefix and convert the base64 string to a Buffer
    const data = Buffer.from(
      (base64data as string).replace(/^data:image\/\w+;base64,/, ""),
      "base64"
    );
    // Write the data to a file
    const targetPath = path.join(
      process.cwd(),
      "public/assets/images/gallery",
      imageName
    );
    await new Promise((resolve, reject) => {
      fs.writeFile(targetPath, data, (err) => {
        if (err) {
          console.error("Error saving the file: ", err);
          reject(err);
        } else {
          console.info("Success ");
          resolve("success");
        }
      });
    });

    return new Response(
      JSON.stringify({
        status: "File uploaded successfully",
      }),
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error("An error occurred:", error);
    return new Response(
      JSON.stringify({
        status: "An error occurred",
      }),
      {
        status: 500,
      }
    );
  }
}
