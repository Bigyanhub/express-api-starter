
export const getData = (req, res)=>{
  res.send('Hello, this is the data you requested! using getData controller');
};

export const postUser = (req, res)=>{
  const{ email, password} = req.body;
  res.send({email, password})
};

