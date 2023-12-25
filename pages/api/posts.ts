import { NextApiHandler } from "next";

// Methods
// GET => when you need to just get or read the data.
// POST => when you want to send some fresh data.
// PATCH => when you want to update some part of the data.
// PUT => when you want to replace the old data with new one.
// DELETE => when you want to remove record.

const handler: NextApiHandler = (req, res) => {
  const { method } = req;

  switch (method) {
    case "GET":
      return res.json({ ok: true });
    default:
      return res.status(404).send("Not Found");
  }
};

export default handler;
