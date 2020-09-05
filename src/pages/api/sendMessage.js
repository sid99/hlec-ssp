// import json;
const sendMessageEndpointUrl = "http://13.126.118.173:5000/sendMessage";

export default async (req, res) => {
  const foo = JSON.parse(req.body);
  if (req.method === "POST") {
    // Process a POST request
    const fetchPostOpts = {
      method: "post",
      body: JSON.stringify(foo),
      // body: req.body,
      headers: {"Content-Type": "application/json"},
    };
    // const foo = await fetch(sendMessageEndpointUrl, fetchPostOpts);
    await fetch(sendMessageEndpointUrl, fetchPostOpts);
    // const bar = await foo.json();
    res.status(200).json({sent: "sent"});
  }
  res.status(500);
};
