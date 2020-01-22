/**
 * BLOCK: Coupon
 */

 const { RichText, PlainText } = wp.editor;
 const { registerBlockType } = wp.blocks;

 // Import our CSS files
 import './style.scss';
 import './editor.scss';

 registerBlockType('coupon-simple/main', {
   title: 'Simple Coupon',
   icon: 'tickets',
   category: 'common',
   attributes: {
     topText: {
       type: 'string',
       source: 'html',
       selector: 'p.simple__coupon__top__text'
     },
     discount: {
       type: 'string',
       source: 'html',
       selector: 'h3.simple__coupon__discount'
     },
     upperBody: {
       type: 'string',
       source: 'html',
       selector: 'h3.simple__coupon__upper__body'
     },
     monthText: {
       type: 'string',
       source: 'html',
       selector: 'span.simple__coupon__month__text'
     },
     lowerBody: {
       type: 'string',
       source: 'html',
       selector: 'p.simple__coupon__lower__body'
     },
      disclaimer: {
        type: 'string',
       source: 'html',
       selector: 'p.simple__coupon__disclaimer'
     },
   },
   edit({ attributes, className, setAttributes }) {

     return (
       <div className="container">
        <div className="simpleCouponEditorWrapper">
          <div className="simpleCouponContentContainer">
              <PlainText
                onChange={ content => setAttributes({ topText: content }) }
                value={ attributes.topText }
                placeholder="Top Paragraph Text"
                className="simple__coupon__top__text"
              />
             <PlainText
               onChange={ content => setAttributes({ discount: content }) }
               value={ attributes.discount }
               placeholder="Coupon Discount"
               className="simple__coupon__discount"
             />
             <PlainText
               onChange={ content => setAttributes({ upperBody: content }) }
               value={ attributes.upperBody }
               placeholder="Upper coupon text"
               className="simple__coupon__upper__body"
             />
             <PlainText
               onChange={ content => setAttributes({ monthText: content }) }
               value={ attributes.monthText }
               placeholder="Per Month Text"
               className="simple__coupon__month__text"
             />
             <PlainText
               onChange={ content => setAttributes({ lowerBody: content }) }
               value={ attributes.lowerBody }
               placeholder="Lower coupon text"
               className="simple__coupon__lower__body"
             />
             <PlainText
               onChange={ content => setAttributes({ disclaimer: content }) }
               value={ attributes.disclaimer }
               placeholder="Disclaimer text"
               className="simple__coupon__disclaimer"
             />
           </div>
         </div>
       </div>
     );

   },

   save({ attributes }) {

     return (
       <div className="simple__coupon__wrapper">
        <div className="simple__coupon__dashed">
           <div className="simple__coupon__content">
             <p className="simple__coupon__top__text">
             { attributes.topText }
             </p>
             <div className="discount__inline">
              <div className="content__left">
                <h3 className="simple__coupon__upper__body">
                  { attributes.upperBody }
                </h3>
                <p className="simple__coupon__lower__body">
                { attributes.lowerBody }
                </p>
              </div>
              <div className="content__right">
                 <h3 className="simple__coupon__discount">
                  { attributes.discount }
                 </h3>
                 <span className="simple__coupon__month__text">
                  { attributes.monthText }
                </span>
              </div>
             </div>
           </div>
           <div className="simple__coupon__bottom">
            <div className="bottom__content__left">
              <img
                className="company__logo"
                src="/wp-content/plugins/ensuite/img/TS_logo_anniversary.png"
                alt="Tripleservice Logo"
              />
              <a href="tel:+18155393828">815-539-3828</a>
            </div>
            <p className="simple__coupon__disclaimer">
              { attributes.disclaimer }
            </p>
           </div>
         </div>
       </div>
     );
   }
 });
