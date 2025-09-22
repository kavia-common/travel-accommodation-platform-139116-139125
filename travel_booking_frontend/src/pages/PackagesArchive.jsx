import React from "react";
import Navbar from "../components/Navbar";
import "../styles/common.css";
import styles from "./PackagesArchive.module.css";

/**
 * PUBLIC_INTERFACE
 * Packages Archive Page from assets/packages-archive-page-screen-0-1354.html
 */
export default function PackagesArchive() {
  return (
    <div className={`screenRoot ${styles.screen}`}>
      <div className={`${styles.headerWrap} abs`}>
        <div className={`${styles.headerBg} rect abs`}></div>
        <div className={`${styles.headerOverlay} rect abs`}></div>

        <div className={styles.headerBar}>
          <Navbar />
        </div>

        <div className={`${styles.heroTitle} text abs`}>Travel With Us</div>
        <div className={`${styles.heroSub} text abs`}>Search tour</div>
        <div className={`${styles.smallTriangle} abs`}></div>
      </div>

      <div className={`${styles.tabsBg} rect abs`}></div>
      <div className={`${styles.seg} ${styles.seg1} rect abs`}></div>
      <div className={`${styles.seg} ${styles.seg2} rect abs`}></div>
      <div className={`${styles.seg} ${styles.seg3} rect abs`}></div>
      <div className={`${styles.seg} ${styles.seg4} rect abs`}></div>

      <div className={`${styles.tabIcon} abs`}></div>
      <div className={`${styles.tabLabel} text abs`}>Date</div>

      <div className={`abs`}>
        <div className={`${styles.sortIcon} abs`} style={{ left: 1050, top: 806 }}></div>
        <div className={`${styles.sortLabel} text abs`} style={{ left: 1089, top: 804 }}>price low to High</div>
      </div>
      <div className={`abs`}>
        <div className={`${styles.sortIcon} abs`} style={{ left: 1380, top: 806 }}></div>
        <div className={`${styles.sortLabel} text abs`} style={{ left: 1419, top: 804 }}>Price High to low</div>
      </div>
      <div className={`abs`}>
        <div className={`${styles.nameIcon} abs`} style={{ left: 1609, top: 806 }}></div>
        <div className={`${styles.sortLabel} text abs`} style={{ left: 1648, top: 804 }}>Name (A-z)</div>
      </div>

      <div className={`${styles.leftPaneBg} rect abs`}></div>

      <section className={`${styles.planCard} abs`}>
        <div className={styles.cardBg}></div>
        <div className={`${styles.cardTitle} text`}>Plan Your Trip</div>
        <div className={`${styles.cardDesc} text`}>Ex optio sequi et quos praesentium in nostrum labore nam rerum iusto aut magni nesciunt? Quo quidem neque iste expedita est dolo.</div>

        <div className={`${styles.field} rect`} style={{ left: 61, top: 189 }}>
          <div className={`${styles.icon} ${styles.search}`} style={{ left: 26, top: 28 }}></div>
          <div className={`${styles.fLabel} text`} style={{ left: 51, top: 26 }}>Search Tour</div>
        </div>

        <div className={`${styles.field} rect`} style={{ left: 61, top: 274 }}>
          <div className={`${styles.icon} ${styles.location}`} style={{ left: 26, top: 28 }}></div>
          <div className={`${styles.fLabel} text`} style={{ left: 51, top: 26 }}>Where To?</div>
        </div>

        <div className={`${styles.field} rect`} style={{ left: 61, top: 359 }}>
          <div className={`${styles.icon} ${styles.calendar}`} style={{ left: 26, top: 28 }}></div>
          <div className={`${styles.fLabel} text`} style={{ left: 51, top: 26 }}>Date</div>
        </div>

        <div className={styles.priceFilter}>
          <div className={styles.sliderTrack}></div>
          <div className={`${styles.sliderHandle} ${styles.left}`}></div>
          <div className={`${styles.sliderHandle} ${styles.right}`}></div>
          <div className={`${styles.sliderTitle} text`}>Filter by price</div>
          <div className={`${styles.sliderValue} text`}>Price: $12 - $3600</div>
        </div>

        <button className={`btn ${styles.bookNow} text`} style={{ left: 152, top: 656 }}>Book Now</button>
      </section>

      {/* Cards */}
      <div className={`${styles.cardA} ${styles.pkgCard} abs`}>
        <div className={styles.cardBg}></div>
        <div className={styles.thumb}></div>
        <div className={styles.thumbMask}></div>
        <div className={`${styles.thumbDate} text`}>12, September 2022</div>
        <div className={`${styles.thumbPeople} text`}>120+ People</div>
        <div className={`${styles.title} text`}>Switzerland</div>
        <div className={`${styles.desc} text`}>Qui tempore voluptate qui quia commodi rem praesentium alias et.</div>
        <div className={`${styles.price} text`}>1,100 $</div>
        <div className={styles.ratingIcon}></div>
        <div className={`${styles.rating} text`}>5.0</div>
        <div className={styles.dateIcon}></div>
        <div className={styles.peopleIcon}></div>
      </div>

      <div className={`${styles.cardB} ${styles.pkgCard} abs`}>
        <div className={styles.thumb}></div>
        <div className={styles.thumbMask}></div>
        <div className={`${styles.thumbDate} text`}>12, September 2022</div>
        <div className={`${styles.thumbPeople} text`}>120+ People</div>
        <div className={`${styles.title} text`}>Berlin</div>
        <div className={`${styles.desc} text`}>Qui tempore voluptate qui quia commodi rem praesentium alias et.</div>
        <div className={`${styles.price} text`}>1,230 $</div>
        <div className={styles.ratingIcon}></div>
        <div className={`${styles.rating} text`}>4.9</div>
        <div className={styles.dateIcon}></div>
        <div className={styles.peopleIcon}></div>
      </div>

      <div className={`${styles.cardC} ${styles.pkgCard} abs`}>
        <div className={styles.thumb}></div>
        <div className={styles.thumbMask}></div>
        <div className={`${styles.thumbDate} text`}>12, September 2022</div>
        <div className={`${styles.thumbPeople} text`}>120+ People</div>
        <div className={`${styles.title} text`}>Maldives</div>
        <div className={`${styles.desc} text`}>Qui tempore voluptate qui quia commodi rem praesentium alias et.</div>
        <div className={`${styles.price} text`}>3,000 $</div>
        <div className={styles.ratingIcon}></div>
        <div className={`${styles.rating} text`}>5.0</div>
        <div className={styles.dateIcon}></div>
        <div className={styles.peopleIcon}></div>
      </div>

      <div className={`${styles.cardD} ${styles.pkgCard} abs`}>
        <div className={styles.thumb}></div>
        <div className={styles.thumbMask}></div>
        <div className={`${styles.thumbDate} text`}>12, September 2022</div>
        <div className={`${styles.thumbPeople} text`}>120+ People</div>
        <div className={`${styles.title} text`}>Torronto</div>
        <div className={`${styles.desc} text`}>Qui tempore voluptate qui quia commodi rem praesentium alias et.</div>
        <div className={`${styles.price} text`}>2,000 $</div>
        <div className={styles.ratingIcon}></div>
        <div className={`${styles.rating} text`}>4.6</div>
        <div className={styles.dateIcon}></div>
        <div className={styles.peopleIcon}></div>
      </div>

      <div className={`${styles.cardE} ${styles.pkgCard} abs`}>
        <div className={styles.thumb}></div>
        <div className={styles.thumbMask}></div>
        <div className={`${styles.thumbDate} text`}>12, September 2022</div>
        <div className={`${styles.thumbPeople} text`}>120+ People</div>
        <div className={`${styles.title} text`}>Baku</div>
        <div className={`${styles.desc} text`}>Qui tempore voluptate qui quia commodi rem praesentium alias et.</div>
        <div className={`${styles.price} text`}>1,440 $</div>
        <div className={styles.ratingIcon}></div>
        <div className={`${styles.rating} text`}>5.0</div>
        <div className={styles.dateIcon}></div>
        <div className={styles.peopleIcon}></div>
      </div>

      <div className={`${styles.cardF} ${styles.pkgCard} abs`}>
        <div className={styles.thumb}></div>
        <div className={styles.thumbMask}></div>
        <div className={`${styles.thumbDate} text`}>12, September 2022</div>
        <div className={`${styles.thumbPeople} text`}>120+ People</div>
        <div className={`${styles.title} text`}>Chinese</div>
        <div className={`${styles.desc} text`}>Qui tempore voluptate qui quia commodi rem praesentium alias et.</div>
        <div className={`${styles.price} text`}>1,210 $</div>
        <div className={styles.ratingIcon}></div>
        <div className={`${styles.rating} text`}>4.0</div>
        <div className={styles.dateIcon}></div>
        <div className={styles.peopleIcon}></div>
      </div>

      <div className={`${styles.paginationCurrent} ellipse abs`}></div>
      <div className={`${styles.pagination} text abs`}>
        <span className={styles.pNum}>1</span>
        <span className={styles.pNum}>2</span>
        <span className={styles.pNum}>3</span>
        <span className={styles.pNum}>4</span>
        <span className={`${styles.chev} ${styles.right}`}></span>
        <span className={`${styles.chev} ${styles.left}`}></span>
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
