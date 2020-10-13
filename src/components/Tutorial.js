import React, { useState } from 'react';
import { withNamespaces } from 'react-i18next';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const imgs = [
    "image_4",
    "image_5",
    "image_6",
    "image_7",
    "image_8",
    "image_9",
    "image_10",
    "image_12",
    "image_13",
    "image_14"
];

function Tutorial(props) {
    const { t } = props;
    const [selected, setSelected] = useState(0);
    return (
        <div>
            <h2>
                {t(`explanations.e${selected + 1}`)}
            </h2>
            <Carousel
                showThumbs={false}
                onChange={(index) => setSelected(index)}
            >
                {imgs.map((value, index) =>
                    (<div key={value} style={{height: '50vh'}}>
                        <img src={t(`images.${value}`)} alt="Tutorial" style={{
                            verticalAlign: 'middle',
                            objectFit: 'contain',
                            height: '100%'
                          }}/>
                    </div>)
                )}
            </Carousel>

        </div>
    );
};

export default withNamespaces()(Tutorial);