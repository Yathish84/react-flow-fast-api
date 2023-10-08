import { NextResponse } from "next/server";



export async function GET(){
    const data = {
      "rootNode": {
          "type": "root",
          "data": {
              "filename": "UploadModel",
              "description": "The `UploadModel` component provides an interface for users to upload JSX files. It makes use of various hooks to manage its state, transitions, and node visualization. It relies on multiple components for dialog presentation, file uploading, and button actions.",
              "libraries": [
                  {"name": "useUploadTrigger", "path": "@/hooks/useUploadTrigger"},
                  {"name": "React", "path": "react"},
                  {"name": "Dialog", "path": "../components/Dialog"},
                  {"name": "FileUploder", "path": "../components/FileUploder"},
                  {"name": "AiOutlineClose", "path": "react-icons/ai"},
                  {"name": "Button", "path": "../components/Button"},
                  {"name": "useNodeStore", "path": "@/hooks/useNodeStore"},
                  {"name": "getOpenAiRes", "path": "@/Actions/getOpenAiRes"},
                  {"name": "uploadFiles", "path": "@/ActionCallers/ServerActions"},
                  {"name": "nanoid", "path": "nanoid"}
              ],
              "details": [
                  {"name": "useState", "description": "Used for managing local state within the component."},
                  {"name": "useTransition", "description": "Used for managing state transitions."},
                  {"name": "useUploadTrigger", "description": "Custom hook for triggering uploads."},
                  {"name": "useNodeStore", "description": "Custom hook for managing node state."}
              ]
          }
      },
      "nodes": [
          {
              "id": "handleOnClose_function",
              "type": "javascript",
              "data": {
                  "functionName": "handleOnClose",
                  "description": "Function to close the upload and reset the file data.",
                  "code": "const handleOnClose = () => {\n    uploadTrigger.onClose();\n    setFileData(initialFormat);\n}",
                  "dependencies": ["uploadTrigger", "setFileData"],
                  "optimizations": [
                    {"description": "Consider making `initialFormat` a constant outside the function scope to avoid creating a new object each time."},
                    {"description": "Consider adding error handling or feedback to indicate if the close action was successful."}
                ],
                  "trigger": {
                      "component": "Dialog",
                      "description": "Renders the UploadModel component with its children.",
                      "jsx": "<Dialog \n    isOpen={uploadTrigger?.isOpen} \n    title=\"Add File\" \n    desc={'Upload an JSX file'}\n    onClose={()=>{handleOnClose()}}\n>...<\/Dialog>",
                      "dependencies": ["handleOnClose", "uploadTrigger"]
                  }
              }
          },
          {
              "id": "handleFileSelect_function",
              "type": "javascript",
              "data": {
                  "functionName": "handleFileSelect",
                  "description": "Function to handle file selection and set file data.",
                  "code": "const handleFileSelect = (name, data) => {\n    console.log(name);\n    setFileData({\n        name,\n        data\n    });\n}",
                  "dependencies": ["setFileData"],
                  "optimizations": [
                    {"description": "Remove `console.log` statements before moving to a production environment."},
                    {"description": "Consider adding error handling or feedback for the user in case file selection fails."}
                ],
                  "trigger": {
                      "component": "FileUploder",
                      "description": "File uploader component.",
                      "jsx": "<FileUploder onFileSelect={handleFileSelect} />",
                      "dependencies": ["handleFileSelect"]
                  }
              }
          },
          {
              "id": "upLoadFile_function",
              "type": "javascript",
              "data": {
                  "functionName": "upLoadFile",
                  "description": "Function to upload the file, generate nodes and connect them.",
                  "code": "const upLoadFile = async() => {...}",
                  "dependencies": ["uploadFiles", "nanoid", "nodesStore"],
                  "optimizations": [
                    {"description": "Initialize `jsPositionY` and `jsxPositionY` based on existing nodes to avoid overlap."},
                    {"description": "Ensure there's error handling for the `uploadFiles` asynchronous call."},
                    {"description": "Consider combining the two loops (node creation and edge creation) for efficiency."},
                    {"description": "Ensure that `data.nodes[i+1]` exists before accessing its properties to prevent potential errors."}
                ],
                  "trigger": {
                      "component": "Button",
                      "description": "Button component used to initiate the file upload process.",
                      "jsx": "<Button \n    onClick={()=>{ startTransition(()=>{upLoadFile()})}}\n    disabled={fileData?.name ? false : true} type=\"button\"\n>{ isPending ? 'Uploading...' : 'Upload'}<\/Button>",
                      "dependencies": ["startTransition", "upLoadFile", "fileData", "isPending"]
                  }
              }
          }
      ]
  }
  
  
  

    // return NextResponse.json(data)
    return Response.json(data)
}


 export default function POST(){
  return Response.json({welcome:"hi"})
 }