// import connectMongodb from "@/lib/mongodb";


// export default async function handler(req, res) {
//   if (req.method === "POST") {
//     const { name, email, phoneNumber, subject, message } = req.body;

//     try {
//       console.log("connecting to database");
//       await connectMongodb();
//       console.log("mongodb connected successfully");

//       const newContact = await Contact.create({
//         name,
//         phoneNumber,
//         subject,
//         message,
//         email,
//       });
//       console.log("New contact created", newContact);

//       res.status(201).json({
//         message: "Message sent successfully",
//         data: { newContact },
//       });
//     } catch (error) {
//       console.log(error);
//       res.status(500).json({
//         message: "Internal server Error",
//       });
//     }
//   } else {
//     res.setHeader("Allow", ["POST"]);
//     res.status(405).end(`Method ${req.method} Not Allowed`);
//   }
// }















import connectMongodb from "@/lib/mongodb";
import Contact from "@/models/Contact"; // Make sure this path is correct

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, phoneNumber, subject, message } = req.body;

    if (!name || !email || !phoneNumber || !subject || !message) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    try {
      console.log("Connecting to database...");
      await connectMongodb(); // Ensure this connects correctly
      console.log("MongoDB connected successfully");

      const newContact = await Contact.create({
        name,
        phoneNumber,
        subject,
        message,
        email,
      });
      console.log("New contact created:", newContact);

      res.status(201).json({
        message: "Message sent successfully",
        data: newContact,
      });
    } catch (error) {
      console.error("Error creating contact:", error);
      res.status(500).json({
        message: "Internal server error",
      });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
