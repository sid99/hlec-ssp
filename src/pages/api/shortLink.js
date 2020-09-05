const firebaseEndpointUrl = `https://firebasedynamiclinks.googleapis.com/v1/shortLinks?key=${process.env.FIREBASE_WEB_KEY}`;

export default async (req, res) => {
  if (req.method === "POST") {
    // Process a POST request
    const fetchPostOpts = {
      method: "post",
      body: req.body,
    };
    const foo = await fetch(firebaseEndpointUrl, fetchPostOpts);
    const bar = await foo.json();
    res.status(200).json({...bar});
  }
  res.status(500);
};
