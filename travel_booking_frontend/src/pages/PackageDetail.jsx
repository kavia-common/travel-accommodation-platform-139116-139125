import React from "react";
import Navbar from "../components/Navbar";
import "../styles/common.css";
import styles from "./PackageDetail.module.css";

/**
 * PUBLIC_INTERFACE
 * Package Detail / Tour Information page from assets/package-detail-page-tour-information-screen-0-1136.html
 */
export default function PackageDetail() {
  return (
    <div className={`screenRoot ${styles.screen}`}>
      <div className={`${styles.headerWrap} abs`}>
        <div className={`${styles.headerBase} rect abs`}></div>
        <div className={`${styles.headerOverlay} rect abs`}></div>

        <div className={styles.headerBar}>
          <Navbar />
        </div>
      </div>

      <div className={`${styles.tabsBg} abs`}></div>
      <div className={`${styles.tab} ${styles.information} ${styles.active} abs`}>
        <div className={`${styles.tabIcon} ${styles.info}`}></div>
        <div className={`${styles.tabLabel} text`}>Information</div>
      </div>
      <div className={`${styles.tab} ${styles.tourplan} abs`}>
        <div className={`${styles.tabIcon} ${styles.calendar}`}></div>
        <div className={`${styles.tabLabel} text`}>Tour Plan</div>
      </div>
      <div className={`${styles.tab} ${styles.location} abs`}>
        <div className={`${styles.tabIcon} ${styles.locationIcon}`}></div>
        <div className={`${styles.tabLabel} text`}>Location</div>
      </div>
      <div className={`${styles.tab} ${styles.gallery} abs`}>
        <div className={`${styles.tabIcon} ${styles.galleryIcon}`}></div>
        <div className={`${styles.tabLabel} text`}>Gallery</div>
      </div>

      <div className={`${styles.leftPaneBg} rect abs`}></div>

      <div className={`${styles.titleGroup} abs`}>
        <div className={`${styles.pkgTitle} text`}>Switzerland</div>
        <div className={styles.stars}>
          <div className={styles.star}></div>
          <div className={styles.star}></div>
          <div className={styles.star}></div>
          <div className={styles.star}></div>
          <div className={styles.star}></div>
        </div>
        <div className={`${styles.reviews} text`}>(2.3k review)</div>
        <div className={`${styles.price} text`}>1,000 $</div>
        <div className={styles.priceDivider}></div>
        <div className={`${styles.priceSub} text`}>Per Couple</div>
      </div>

      <div className={`${styles.infoSection} abs`}>
        <div className={`${styles.body} text ${styles.body1}`}>Ex optio sequi et quos praesentium in nostrum labore nam rerum iusto aut magni nesciunt? Quo quidem neque iste expedita est dolor similique ut quasi maxime ut deserunt autem At praesentium voluptatem aut libero nisi. Et eligendi sint ab cumque veritatis aut provident aliquam. Aut aspernatur consequuntur eum quaerat distinctio ut inventore aliquid et quasi alias ut rerum suscipit et nihil deleniti. Ex optio sequi et quos praesentium in nostrum labore nam rerum iusto aut magni nesciunt? Quo quidem neque iste expedita est dolor similique ut quasi maxime ut deserunt autem At praesentium voluptatem aut libero nisi. Et eligendi sint ab cumque veritatis aut provident aliquam. Aut aspernatur consequuntur eum quaerat distinctio ut inventore aliquid et quasi alias ut rerum suscipit et nihil deleniti.</div>
        <div className={styles.kv}>
          <div className={`${styles.kvKey} text`} style={{ left: 315, top: 1102 }}>Destination</div>
          <div className={`${styles.kvVal} text`} style={{ left: 595, top: 1099 }}>: Zurich, Switzerland</div>

          <div className={`${styles.kvKey} text`} style={{ left: 315, top: 1175 }}>Departure</div>
          <div className={`${styles.kvVal} text`} style={{ left: 595, top: 1171 }}>: Main Sqaure, New City</div>

          <div className={`${styles.kvKey} text`} style={{ left: 315, top: 1248 }}>Departure Time</div>
          <div className={`${styles.kvVal} text`} style={{ left: 595, top: 1244 }}>: Approximately 08 : 10 AM</div>

          <div className={`${styles.kvKey} text`} style={{ left: 315, top: 1321 }}>Return Time</div>
          <div className={`${styles.kvVal} text`} style={{ left: 595, top: 1317 }}>: Approximately 07 : 20 PM</div>

          <div className={`${styles.kvKey} text`} style={{ left: 315, top: 1394 }}>Dress Code</div>
          <div className={`${styles.kvVal} text`} style={{ left: 595, top: 1390 }}>: Casual, comfortable and light</div>
        </div>

        <div className={`${styles.incTitle} text`} style={{ left: 315, top: 1467 }}>Not Included</div>
        <div className={`${styles.incTitle} text`} style={{ left: 315, top: 1539 }}>Included</div>

        <div className={styles.incItems}>
          <div className={`${styles.iconCircle} ${styles.cross}`} style={{ left: 595, top: 1472 }}></div>
          <div className={`${styles.incItem} text`} style={{ left: 619, top: 1477 }}>Gallery Ticket</div>

          <div className={`${styles.iconCircle} ${styles.cross}`} style={{ left: 595, top: 1545 }}></div>
          <div className={`${styles.incItem} text`} style={{ left: 619, top: 1550 }}>5 star Accomodations</div>

          <div className={`${styles.iconCircle} ${styles.cross}`} style={{ left: 595, top: 1596 }}></div>
          <div className={`${styles.incItem} text`} style={{ left: 619, top: 1601 }}>Breakfast</div>

          <div className={`${styles.iconCircle} ${styles.cross}`} style={{ left: 834, top: 1472 }}></div>
          <div className={`${styles.incItem} text`} style={{ left: 858, top: 1477 }}>Lunch</div>

          <div className={`${styles.iconCircle} ${styles.cross}`} style={{ left: 834, top: 1545 }}></div>
          <div className={`${styles.incItem} text`} style={{ left: 858, top: 1550 }}>Airport Transfer</div>

          <div className={`${styles.iconCircle} ${styles.cross}`} style={{ left: 834, top: 1596 }}></div>
          <div className={`${styles.incItem} text`} style={{ left: 858, top: 1601 }}>Personal Guide</div>
        </div>

        <div className={`${styles.galleryHeading} text`}>From our gallery</div>
        <div className={styles.galleryGrid}>
          <div className={styles.gitem} style={{ left: 315, top: 1926, width: 236, height: 240 }}></div>
          <div className={styles.gitem} style={{ left: 315, top: 2179, width: 236, height: 240 }}></div>
          <div className={styles.gitem} style={{ left: 566, top: 1926, width: 237, height: 240 }}></div>
          <div className={styles.gitem} style={{ left: 566, top: 2179, width: 237, height: 240 }}></div>
          <div className={styles.gitem} style={{ left: 818, top: 1926, width: 236, height: 240 }}></div>
          <div className={styles.gitem} style={{ left: 818, top: 2179, width: 236, height: 240 }}></div>
        </div>
      </div>

      <div className={`${styles.bookCard} abs`}>
        <div className={styles.bookBg}></div>
        <div className={`${styles.bookTitle} text`}>Book This Tour</div>
        <div className={`${styles.bookDesc} text`}>Ex optio sequi et quos praesentium in nostrum labore nam rerum iusto aut magni nesciunt? Quo quidem neque iste expedita est dolo.</div>

        <div className={`${styles.field} rect`} style={{ left: 61, top: 210 }}>
          <div className={`${styles.icon} ${styles.user}`} style={{ left: 25, top: 28 }}></div>
          <div className={`${styles.fLabel} text`} style={{ left: 55, top: 26 }}>Name</div>
        </div>
        <div className={`${styles.field} rect`} style={{ left: 61, top: 295 }}>
          <div className={`${styles.icon} ${styles.email}`} style={{ left: 25, top: 28 }}></div>
          <div className={`${styles.fLabel} text`} style={{ left: 55, top: 26 }}>Email</div>
        </div>
        <div className={`${styles.field} rect`} style={{ left: 61, top: 380 }}>
          <div className={`${styles.icon} ${styles.email}`} style={{ left: 25, top: 28 }}></div>
          <div className={`${styles.fLabel} text`} style={{ left: 55, top: 23 }}>Confirm Email</div>
        </div>
        <div className={`${styles.field} rect`} style={{ left: 61, top: 465 }}>
          <div className={`${styles.icon} ${styles.phone}`} style={{ left: 25, top: 28 }}></div>
          <div className={`${styles.fLabel} text`} style={{ left: 55, top: 26 }}>Phone</div>
        </div>
        <div className={`${styles.field} rect`} style={{ left: 61, top: 550 }}>
          <div className={`${styles.icon} ${styles.calendar}`} style={{ left: 25, top: 26 }}></div>
          <div className={`${styles.fLabel} text`} style={{ left: 55, top: 25 }}>dd-mm-yy</div>
        </div>
        <div className={`${styles.field} rect`} style={{ left: 61, top: 635 }}>
          <div className={`${styles.icon} ${styles.tags}`} style={{ left: 25, top: 28 }}></div>
          <div className={`${styles.fLabel} text`} style={{ left: 55, top: 26 }}>Number of ticket</div>
        </div>
        <div className={`${styles.field} rect`} style={{ left: 61, top: 720 }}>
          <div className={`${styles.icon} ${styles.message}`} style={{ left: 25, top: 28 }}></div>
          <div className={`${styles.fLabel} text`} style={{ left: 55, top: 24 }}>Message</div>
        </div>

        <button className={`btn ${styles.bookCta} ${styles.check} text`} style={{ left: 146, top: 820 }}>Check Availability</button>
        <button className={`btn ${styles.bookCta} ${styles.now} text`} style={{ left: 146, top: 896 }}>Book Now</button>
      </div>

      <footer className={`${styles.footer} abs`}>
        <div className={styles.footerImg}></div>
        <div className={styles.footerLinks}>
          <div className={styles.footerLogo}>
            <div className={`${styles.footerLogoText} text`}>Travel</div>
            <div className={styles.footerLogoArrow}></div>
          </div>
          <div className={`${styles.footerCol} ${styles.company}`}>
            <div className={`${styles.colTitle} text`}>Company</div>
            <div className={`${styles.colItem} text`}>About Us</div>
            <div className={`${styles.colItem} text`}>Careers</div>
            <div className={`${styles.colItem} text`}>Blog</div>
            <div className={`${styles.colItem} text`}>Pricing</div>
          </div>
          <div className={`${styles.footerCol} ${styles.destinations}`}>
            <div className={`${styles.colTitle} text`}>Destinations</div>
            <div className={`${styles.colItem} text`}>Maldives</div>
            <div className={`${styles.colItem} text`}>Los Angelas</div>
            <div className={`${styles.colItem} text`}>Las Vegas</div>
            <div className={`${styles.colItem} text`}>Torronto</div>
          </div>
          <div className={`${styles.footerCol} ${styles.newsletter}`}>
            <div className={`${styles.colTitle} text`}>Join Our Newsletter</div>
            <div className={styles.newsletterInput}>
              <div className={styles.newsletterBg}></div>
              <div className={`${styles.newsletterPlaceholder} text`}>Your email address</div>
              <button className={`btn ${styles.newsletterSubmit} text`}>Subscribe</button>
            </div>
            <div className={`${styles.newsletterNote} text`}>*  Will send you weekly updates for your better
tour packages.</div>
          </div>
        </div>
        <div className={styles.footerDivider}></div>
        <div className={`${styles.footerCopy} text`}>Copyright @ Xpro 2022. All Rights Reserved.</div>
      </footer>
    </div>
  );
}
