import { useAppContext } from "@/context/context";
import { X } from "lucide-react";
import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";

const YourImage: React.FC = () => {
	const [filename, setFilename] = useState("");
	const { adsData, setAdsData, contentType } = useAppContext();
	const resetImageData = () => {
		setFilename("");
		setAdsData({ ...adsData, thumbnail: "" });
	};

	const onDrop = useCallback((acceptedFiles: File[]) => {
		const imageUrl = URL.createObjectURL(acceptedFiles[0]);

		setAdsData({ ...adsData, thumbnail: imageUrl });
		setFilename(acceptedFiles[0].name);

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const { getRootProps, getInputProps, isDragActive } = useDropzone({
		onDrop,
		accept: { "image/*": [] },
	});

	return (
		<div className="mb-8">
			<h3 className="tracking-tight font-bold text-lg mb-2">
				{contentType === "video" ? "Video Thumbnail" : "Your Image"}
			</h3>
			<p className="text-muted-foreground mb-3">
				Select attention-grabbing, visually striking pictures to engage your
				target audience. Recommended image dimensions: 1000 x 1000 pixels.
			</p>
			<div
				{...getRootProps()}
				className={`p-6 border-2 border-dashed rounded-lg ${
					isDragActive ? "border-green-500" : "border-gray-300"
				} flex justify-center items-center h-40 cursor-pointer`}
			>
				<input {...getInputProps()} />
				<p className="text-gray-500 text-center">
					{isDragActive
						? "Drop the files here"
						: "Drag and drop files here, or click to select files"}
				</p>
			</div>
			{filename && (
				<div className="mt-4 bg-slate-100 p-2 rounded flex gap-4">
					<img
						width={40}
						src={adsData.thumbnail}
						alt={filename}
						className="rounded"
					/>
					<div className="flex gap-4 justify-between flex-grow">
						<p>{filename}</p>
						<button onClick={resetImageData}>
							<X />
						</button>
					</div>
				</div>
			)}
		</div>
	);
};

export default YourImage;
