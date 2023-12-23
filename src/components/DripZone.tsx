import { useCallback } from "react";
import { useDropzone } from "react-dropzone";

// interface DropzoneProps {
// 	onFilesAdded: (files: File[]) => void;
// }

const DropZone: React.FC = () => {
	const onDrop = useCallback((acceptedFiles: File[]) => {
		// Handle the dropped files here
		console.log(acceptedFiles);
	}, []);

	const { getRootProps, getInputProps, isDragActive } = useDropzone({
		onDrop,
		accept: { "image/*": [] },
	});

	return (
		<div
			{...getRootProps()}
			className={`p-6 border-2 border-dashed rounded-lg ${
				isDragActive ? "border-green-500" : "border-gray-300"
			} flex justify-center items-center h-40 cursor-pointer mb-8`}
		>
			<input {...getInputProps()} />
			<p className="text-gray-500 text-center">
				{isDragActive
					? "Drop the files here"
					: "Drag and drop files here, or click to select files"}
			</p>
		</div>
	);
};

export default DropZone;
