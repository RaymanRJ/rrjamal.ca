import React from 'react';

import ScrollSpy from "react-ui-scrollspy";

import './ScrollSpy.css';

function ScrollSpyComponent() {
    return (
        <div>
            {/* <PictureDisplay assetBucket={assetBucket}/> */}
            <div class="scroll-spy-nav">
                <p data-to-scrollspy-id="first">Section 1</p>
                <p data-to-scrollspy-id="second">Section 2</p>
            </div>
            <ScrollSpy>
                <div id="first">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut dolores
                    veritatis doloremque fugit. Soluta aperiam atque inventore deleniti,
                    voluptatibus non fuga eos magni natus vel, rerum excepturi expedita.
                    Tempore, vero!
                </div>
                <p></p>
                <br></br>
                <p></p>
                <br></br>
                <p></p>
                <br></br>
                <p></p>
                <br></br>
                <p></p>
                <br></br>
                <p></p>
                <br></br>
                <p></p>
                <br></br>
                <p></p>
                <br></br>
                <p></p>
                <br></br>
                <p></p>
                <br></br>
                <p></p>
                <br></br>
                <p></p>
                <br></br>
                <p></p>
                <br></br>
                <p></p>
                <br></br>
                <p></p>
                <br></br>
                <p></p>
                <br></br>
                <p></p>
                <br></br>
                <p></p>
                <br></br>
                <p></p>
                <br></br>
                <p></p>
                <br></br>
                <p></p>
                <br></br>
                <p></p>
                <br></br>
                <p></p>
                <br></br>
                <p></p>
                <br></br>
                <div id="second">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut dolores
                    veritatis doloremque fugit. Soluta aperiam atque inventore deleniti,
                    voluptatibus non fuga eos magni natus vel, rerum excepturi expedita.
                    Tempore, vero!
                </div>
            </ScrollSpy>
        </div>
    );
}

export default ScrollSpyComponent;