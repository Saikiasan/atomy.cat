import { firebaseConfig } from "./config.js";

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";

import { getDatabase, ref, set} from "https://www.gstatic.com/firebasejs/10.0.0/firebase-database.js";

const app = initializeApp(firebaseConfig);

function writeData(gds,  title, imageUrl, price, dp, dmrp, dataUrl, detailImageUrl) {
  const db = getDatabase(app);
  set(ref(db, 'products/' + gds), {
    title: title,
    image: imageUrl,
    mrp: price,
    d_points: dp,
    d_price: dmrp,
    productDataUrl: dataUrl,
    detailImage: detailImageUrl
  });
}

const productData = {
  "gds": "D00511",
  "title": "Compact Toothbrush 8N",
  "imageUrl": "https://www.atomy.com/in/shopping/p_img/100/00511_2.JPG",
  "price": 826,
  "dp": 5000,
  "dmrp": 1000,
  "dataUrl": "https://www.atomy.com/in/Home/Product/ProductView?GdsCode=D00511",
    "detailImageUrl": [
      "https://www.atomy.com/in/admin/userfiles/202204/IN_toothbrush_01.gif",
      "https://www.atomy.com/in/admin/userfiles/202204/IN_address_2204.gif",
      "https://www.atomy.com/in/admin/userfiles/202011/toothbrush_02.jpg",
      "https://www.atomy.com/in/admin/userfiles/202011/toothbrush_03.jpg",
      "https://www.atomy.com/in/admin/userfiles/202011/toothbrush_04.jpg"
    ]
};

writeData(
  productData.gds,
  productData.title,
  productData.imageUrl,
  productData.price,
  productData.dp,
  productData.dmrp,
  productData.dataUrl,
  productData.detailImageUrl,
)