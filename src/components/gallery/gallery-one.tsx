import React, { CSSProperties } from 'react';
import Image from 'next/image';
import Marquee from 'react-fast-marquee';
// images
import shape_1 from '@/assets/img/home-03/gallery/gal-shape-1.png';
import shape_d_1 from '@/assets/img/home-03/gallery/gal-shape-dark-1.png';
import shape_2 from '@/assets/img/home-03/gallery/gal-shape-2.png';
import shape_d_2 from '@/assets/img/home-03/gallery/gal-shape-dark-2.png';
import g_1 from '@/assets/img/home-03/gallery/gal-1.webp';
import g_3 from '@/assets/img/home-03/gallery/gal-3.webp';
import g_4 from '@/assets/img/home-03/gallery/gal-4.webp';
import g_5 from '@/assets/img/home-03/gallery/gal-5.webp';


const gallery_images = [
  g_1, g_3, g_4, g_5, g_3, g_1, g_3, g_4, g_5, g_3
]

const imgStyle:CSSProperties = {height: "auto"};

export default function GalleryOne() {
  return (
    <div className="tp-gallery-area fix p-relative">
      <div className="tp-gallery-shape-1">
        <Image className="img-1" src={shape_1} alt="Gallery decorative shape 1" title="Gallery decorative shape 1" style={imgStyle} />
        <Image className="img-2" src={shape_d_1} alt="Gallery decorative shape dark 1" title="Gallery decorative shape dark 1" style={imgStyle} />
      </div>
      <div className="tp-gallery-shape-2">
        <Image className="img-1" src={shape_2} alt="Gallery decorative shape 2" title="Gallery decorative shape 2" style={imgStyle} />
        <Image className="img-2" src={shape_d_2} alt="Gallery decorative shape dark 2" title="Gallery decorative shape dark 2" style={imgStyle} />
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-12">
            <div className="tp-gallery-slider-wrap">
              <div className="swiper-container tp-gallery-slider-active">
                <Marquee className="tp-gallery-titming" speed={100} direction='left'>

                  {gallery_images.map((g, i) => (

                    <div key={i}>
                      <div className="tp-gallery-item mr-30">
                        <Image src={g} alt="Portfolio gallery image" title="Portfolio gallery image" />
                      </div>
                    </div>
                  ))}

                </Marquee>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
