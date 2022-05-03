import styles from './controlled-image.module.css'
import Image from 'next/image';

export default function ControlledImage({ imageSrc, ImageHeight, ImageWidth, ImageAlt }) {
  return (
    <div style={{
      width: ImageWidth,
      height: ImageHeight,
    }}>
      <Image
        src={imageSrc}
        alt={ImageAlt}
        sizes='fill'
      />
    </div>
  )
}
