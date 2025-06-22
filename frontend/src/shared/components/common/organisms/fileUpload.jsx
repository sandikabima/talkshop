import { CircleX, CloudUpload, FolderOpenDot } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const FileUpload = ({ onFileChange, previewImage }) => {
  const fileInputRef = useRef(null);
  const [image, setImage] = useState("");
  const [fileName, setFileName] = useState("");

  useEffect(() => {
    if (typeof previewImage === "string") {
      setImage(previewImage);
      const nameFromUrl = previewImage.split("/").pop();
      setFileName(nameFromUrl || "preview.jpg");
    } else if (previewImage instanceof File) {
      setImage(URL.createObjectURL(previewImage));
      setFileName(previewImage.name);
    }
  }, [previewImage]);

  const handleFileChange = (e) => {
    if (e.target && e.target.files.length > 0) {
      const file = e.target.files[0];
      setFileName(file.name);
      setImage(URL.createObjectURL(file));
      onFileChange?.(file);
    }
  };

  const handleRemove = () => {
    fileInputRef.current.value = "";
    setImage("");
    setFileName("");
    onFileChange?.(null);
  };

  return (
    <div className="flex justify-center items-center">
      <div className="bg-white rounded-lg w-60 p-2 flex flex-col justify-center items-center shadow-md">
        <div className="w-full h-52 rounded-lg border-dashed border-2 border-blue-500 text-blue-500 flex justify-center items-center overflow-hidden">
          {image ? (
            <img className="w-full object-contain" src={image} alt="Preview" />
          ) : (
            <div className="w-full h-full flex flex-col justify-center items-center text-center px-2">
              <CloudUpload size={60} />
              <p className="text-sm mt-2">Browse file to upload</p>
            </div>
          )}
        </div>

        <div className="w-full mt-2">
          <div className="w-full flex justify-between items-center bg-blue-100 px-2 py-1 rounded-lg text-sm">
            <FolderOpenDot
              size={20}
              className="text-blue-600 hover:text-black cursor-pointer"
              onClick={() => fileInputRef.current.click()}
            />
            <div className="truncate">{fileName || "No file selected"}</div>
            <CircleX
              size={20}
              className="text-gray-600 hover:text-red-600 cursor-pointer"
              onClick={handleRemove}
            />
          </div>

          <input
            type="file"
            className="hidden"
            accept="image/png, image/jpeg, image/jpg, image/gif"
            ref={fileInputRef}
            onChange={handleFileChange}
          />
        </div>
      </div>
    </div>
  );
};

export default FileUpload;
