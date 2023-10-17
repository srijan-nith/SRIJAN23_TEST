import React from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import Navbar from "../../components/NewNavbar.js/NewNavbar";
import "../../Assets/css/Gallery.css";

const Gallery = () => {
    const images = [
        "https://picsum.photos/200/300",
        "https://picsum.photos/400/300",
        "https://picsum.photos/300/200",
        "https://picsum.photos/400/300",
        "https://picsum.photos/200/200",
        "https://picsum.photos/600/500",
        "https://picsum.photos/300/400",
        "https://picsum.photos/350/400",
        "https://picsum.photos/400/300",
        "https://picsum.photos/240/200",
        "https://picsum.photos/200/300",
        "https://picsum.photos/600/600",
        "https://picsum.photos/300/200",
        "https://picsum.photos/400/300",
        "https://picsum.photos/200/200",
        "https://picsum.photos/600/500",
        "https://picsum.photos/300/400",
        "https://picsum.photos/350/400",
        "https://picsum.photos/400/300",
        "https://picsum.photos/240/200",
        "https://picsum.photos/200/300",
        "https://picsum.photos/400/300",
        "https://picsum.photos/300/200",
        "https://picsum.photos/400/300",
        "https://picsum.photos/200/200",
        "https://picsum.photos/600/500",
        "https://picsum.photos/300/400",
        "https://picsum.photos/350/400",
        "https://picsum.photos/400/300",
        "https://picsum.photos/240/200",
        "https://picsum.photos/200/300",
        "https://picsum.photos/600/600",
        "https://picsum.photos/300/200",
        "https://picsum.photos/400/300",
        "https://picsum.photos/200/200",
        "https://picsum.photos/600/500",
        "https://picsum.photos/300/400",
        "https://picsum.photos/350/400",
        "https://picsum.photos/400/300",
        "https://picsum.photos/240/200"
    ]

    return (
        <>
            <div className="gallery-navbar">
                <Navbar />
            </div>
            <div className="grid-container">
                <ResponsiveMasonry
                    columnsCountBreakPoints={{ 350: 2, 750: 3, 900: 4 }}>
                    <Masonry gutter="20px">
                        {images.map((image, i) => (
                            <img key={i} src={image} style={{ width: "100%", display: "block" }} alt="" />
                        ))}
                    </Masonry>
                </ResponsiveMasonry>
            </div>
        </>
    )
}

export default Gallery;