export default function handler(req, res) {
  const tokenId = req.query.tokenId;
  const image_url =
    "https://github.com/rk119/NFT-Collection-Frontend/tree/main/public/images";

  res.status(200).json({
    name: "Crypto Dev #" + tokenId,
    description: "Crypto Dev is a collection of developers in crypto",
    image: image_url + tokenId + ".svg",
  });
}
