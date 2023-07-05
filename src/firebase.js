import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyBeQPqooQav4Or3qu31lnjFgta0EzA5XIc",
  authDomain: "gcp-arcade.firebaseapp.com",
  projectId: "gcp-arcade",
  storageBucket: "gcp-arcade.appspot.com",
  messagingSenderId: "1062502402485",
  appId: "1:1062502402485:web:e752a48f7cd379ea2171fc",
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
