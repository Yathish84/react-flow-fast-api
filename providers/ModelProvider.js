"use client";

import { useEffect, useState } from "react";
import UploadModel from "@/components/models/UploadModel";


export default function ModelProvider() {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
      setIsMounted(true);
    }, []);
  
    if (!isMounted) {
      return null;
    }
  return (
    <>
      {/* <AuthModel />
      {/* <SubscribeModal products={products} /> */}
        <UploadModel /> 
    </>
  )
}


