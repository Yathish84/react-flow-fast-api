"use client";

import { useEffect, useState } from "react";
import UploadModel from "@/models/UploadModel";
import RefactorModel from "@/models/RefactorModel";

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
        <RefactorModel />
    </>
  )
}


