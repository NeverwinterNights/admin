type PostImageType = {
  url: string;
  width: number;
  height: number;
  fileSize: number;
  uploadId: string;
};

export const filterImagesOnly1440 = (
  images: PostImageType[],
): PostImageType[] => {
  return images.filter((item) => item.height === 1440);
};
