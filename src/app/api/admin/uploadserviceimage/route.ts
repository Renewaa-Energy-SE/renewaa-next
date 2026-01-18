import fs from "fs";
import path from "path";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const file = formData.get("file") as File;
    const imageName = formData.get("imageName") as string;

    if (!file || !imageName) {
      return new Response(JSON.stringify({ status: "File or imageName missing" }), {
        status: 400,
      });
    }

    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    // Write the data to a file
    const targetPath = path.join(
      process.cwd(),
      "public/assets/images/service",
      imageName
    );
    await new Promise((resolve, reject) => {
      fs.writeFile(targetPath, buffer, (err) => {
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
