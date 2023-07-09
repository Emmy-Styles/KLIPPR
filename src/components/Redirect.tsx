import React, { useEffect } from "react";
import { db } from "./config/config";
import { useParams } from "react-router-dom";
import { collection, query, where, onSnapshot } from "firebase/firestore";

function Redirect() {
  const { slug } = useParams();
  useEffect(() => {
    const q = query(collection(db, "urls"), where("slug", "==", slug));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      if (querySnapshot.empty) {
        alert("No such URL exists");
      } else {
        querySnapshot.forEach((doc) => {
          const finalData = doc.data();
          window.location.href = finalData.url;
        });
      }
    });

    return () => unsubscribe();
  }, [slug]);

  return <div></div>;
}

export default Redirect;
