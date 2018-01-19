import React from "react"
import { stripIndent } from "common-tags"

exports.onRenderBody = ({ setPostBodyComponents }, options) => {
    if (process.env.NODE_ENV !== `production` || options.showInProduction) {
        setPostBodyComponents([
            <script
                key="indigotree-bugherd"
                dangerouslySetInnerHTML={{
                    __html: stripIndent`
                        (function (d, t) {
                            var bh = d.createElement(t), s = d.getElementsByTagName(t)[0];
                            bh.type = 'text/javascript';
                            bh.src = 'https://www.bugherd.com/sidebarv2.js?apikey=${options.key}';
                            s.parentNode.insertBefore(bh, s);
                        })(document, 'script');`,
                }}
            />,
        ])
    }
}
