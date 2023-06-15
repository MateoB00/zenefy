import Image from 'next/image';

export default function ImagePage(
    props: {
        src: any,
        alt: string;
        className?: any;
        width: number;
        height: number;
        sizes?: any;
        loading?: 'lazy' | 'eager';
    }
) {
    return (
        <Image
            className={props.className}
            src={props.src}
            alt={props.alt}
            width={props.width}
            height={props.height}
            sizes={props.sizes}
            loading={props.loading}
        />
    );
}