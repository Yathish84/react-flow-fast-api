'use server'

import getOpenAiRes from "@/Actions/getOpenAiRes"

export const uploadFiles = async() =>{

    const data = await getOpenAiRes();  
    console.log("data from server",data)
    return data || {}
}