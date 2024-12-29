import { ImageList, ImageListItem } from "@mui/material";

interface Props {
  images: string[],
}

export const ImageGallery = ({ images }: Props) => {
  return (
    <ImageList
    sx={{ width: '100%', height:'auto', gridTemplateColumns: { lg: 'repeat(8, 1fr)!important' } }} 
    cols={ 4 } 
    rowHeight='auto'
  >
    { images.map((image) => (
      <ImageListItem key={image}>
        <img
          srcSet={`${image}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
          src={`${image}?w=164&h=164&fit=crop&auto=format`}
          alt="Image note"
          loading="lazy"
        />
      </ImageListItem>
    ))}
  </ImageList>
  );
}
