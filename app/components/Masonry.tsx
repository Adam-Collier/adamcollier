import React, { useEffect, useRef } from "react";
import { positionGridItems } from "~/utils/utils";

interface WrapperProps {
  url: string
  children: React.ReactNode
  style: React.CSSProperties
  className: string
}

const Wrapper = ({ url, children, ...props }: WrapperProps) =>
  url ? (
    <a href={url} rel="noopener noreferrer" target="_blank" {...props}>
      {children}
    </a>
  ) : (
    <div {...props}>{children}</div>
  );

type ImageProps = {
  image: {
    height: number
    width: number
    src: string
    thumbnail: string
  }
  pageURL: string
  color: string
}

const Masonry = ({ images }: { images: ImageProps[] }) => {
  const masonry = useRef<HTMLDivElement | null>(null);

  // store the current number of columns here in a useRef
  const numberOfColumns = useRef(0);

  type SetNumberOfColumns = (n: number) => void

  // create a function we can call to update the number of columns
  const setNumberOfColumns: SetNumberOfColumns = (updatedNumberOfColumns: number) => {
    numberOfColumns.current = updatedNumberOfColumns;
  };

  useEffect(() => {
    // when the route has changed reset the number of columns so the positionGridItems function runs
    setNumberOfColumns(0);

    positionGridItems(
      masonry.current,
      numberOfColumns.current,
      setNumberOfColumns
    );
  }, []);

  useEffect(() => {
    const handleResize = () =>
      positionGridItems(
        masonry.current,
        numberOfColumns.current,
        setNumberOfColumns
      );
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // repeat(auto-fit, minmax(275px, 0.5fr))
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 col-auto" ref={masonry}>
      {images.map(({ image, pageURL, color }: ImageProps, index: number) => (
        <Wrapper url={pageURL} style={{
          background: color,
          paddingTop: `${(image.height / image.width) * 100}%`,
        }}
          key={index}
          className="relative text-0 self-start">
          <img className="absolute top-0 left-0 w-full h-full" src={image.thumbnail} alt="" />
        </Wrapper>
      ))}
    </div>)
}

export default Masonry