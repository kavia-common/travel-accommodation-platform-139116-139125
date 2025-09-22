import React from "react";
import Navbar from "../components/Navbar";
import "../styles/common.css";
import styles from "./CreatePackage.module.css";

/**
 * PUBLIC_INTERFACE
 * Create Your Own Package page from assets/create-your-own-package-screen-0-18.html
 */
export default function CreatePackage() {
  return (
    <div className={`screenRoot ${styles.screen}`}>
      <div className={`${styles.headerCanvas} abs`}></div>

      <div className={styles.headerBar}>
        <Navbar />
      </div>

      <section className={`${styles.buildCard} abs`}>
        <div className={styles.cardBg}></div>
        <h1 className={`${styles.cardTitle} text`}>Build Your Own Package</h1>

        <div className={`${styles.field} ${styles.fieldDest} abs`} style={{ left: 59, top: 118 }}>
          <div className={styles.fieldRect}></div>
          <div className={`${styles.hint} text`} style={{ left: 0, top: -17 }}>Enter destination (country, region or city)</div>
          <div className={`${styles.fieldValue} text`}>Switzerland</div>
          <div className={`${styles.infoIcon} ${styles.i1}`}></div>
        </div>

        <div className={`${styles.field} ${styles.fieldDest} abs`} style={{ left: 59, top: 214 }}>
          <div className={styles.fieldRect}></div>
          <div className={`${styles.hint} text`} style={{ left: 0, top: -17 }}>Enter destination (country, region or city)</div>
          <div className={`${styles.fieldValue} text`}>Lauterbrunen</div>
          <div className={`${styles.infoIcon} ${styles.i2}`}></div>
        </div>

        <div className={`${styles.addDestination} text`} style={{ left: 59, top: 285 }}>+ Add destination</div>

        <div className={`${styles.row2col} abs`} style={{ left: 59, top: 333 }}>
          <div className={`${styles.field} ${styles.smallField} abs`} style={{ left: 0 }}>
            <div className={styles.fieldRect}></div>
            <div className={`${styles.hint} text`} style={{ left: 8, top: -20 }}>Date Range</div>
            <div className={`${styles.fieldValue} text`} style={{ left: 12 }}>Start Date</div>
            <div className={styles.chevronUp}></div>
          </div>
          <div className={styles.colDivider}></div>
          <div className={`${styles.field} ${styles.smallField} abs`} style={{ left: 258 }}>
            <div className={styles.fieldRect}></div>
            <div className={`${styles.hint} text`} style={{ left: 12, top: -20 }}>Guests</div>
            <div className={`${styles.fieldValue} text`} style={{ left: 12 }}>2 adults</div>
            <div className={styles.chevronDown}></div>
          </div>
        </div>

        <div className={`${styles.activitiesTitle} text`} style={{ left: 59, top: 468 }}>Activities preferences (optional)</div>

        <div className={styles.activities} style={{ left: 59, top: 500, width: 424 }}>
          <div className={styles.col}>
            {["Culture","Romantic","Shopping","Traditions","Guide"].map((label, idx) => (
              <label key={label} className={`${styles.chk} ${styles.item} ${idx>=4 ? styles.checked: ""}`}>
                <span className={`${styles.box} ${idx>=4 ? styles.tick: ""}`}></span>
                <span className={`${styles.optLabel} text`}>{label}</span>
              </label>
            ))}
          </div>
          <div className={styles.col}>
            {["Outdoors","Religious","Business","Walks","Healthcare"].map((label, idx) => (
              <label key={label} className={`${styles.chk} ${styles.item} ${idx===2 ? styles.onlytext: ""} ${idx>=4 ? styles.checked: ""}`}>
                <span className={`${styles.box} ${idx>=4 ? styles.tick: ""}`}></span>
                <span className={`${styles.optLabel} text`}>{label}</span>
              </label>
            ))}
          </div>
          <div className={styles.col}>
            {["Relaxing","Hiking","Museams","FIshing","Accomodation"].map((label, idx) => (
              <label key={label} className={`${styles.chk} ${styles.item} ${idx>=4 ? styles.checked: ""}`}>
                <span className={`${styles.box} ${idx>=4 ? styles.tick: ""}`}></span>
                <span className={`${styles.optLabel} text`}>{label}</span>
              </label>
            ))}
          </div>
        </div>

        <button className={`btn ${styles.buildBtn} text`} style={{ left: 193, top: 692 }}>Build Package</button>
      </section>

      <div className={`${styles.partnersStrip} abs`}>
        <div className={`${styles.partner} ${styles.p1}`}></div>
        <div className={`${styles.partner} ${styles.p2}`}></div>
        <div className={`${styles.partner} ${styles.p3}`}></div>
        <div className={`${styles.partner} ${styles.p4}`}></div>
        <div className={`${styles.partner} ${styles.p5}`}></div>
      </div>

      <div className={`${styles.exploreRow} abs`}>
        <div className={`${styles.exploreCard} ${styles.left}`}>
          <div className={styles.bg}></div>
          <div className={styles.overlay}></div>
          <div className={styles.content}>
            <div className={`${styles.sub} text`}>Promotion</div>
            <div className={`${styles.title} text`}>Explore Nature</div>
            <div className={styles.line}></div>
            <button className={`btn ${styles.cta} text`}>View Packages</button>
          </div>
        </div>
        <div className={`${styles.exploreCard} ${styles.right}`}>
          <div className={styles.bg}></div>
          <div className={styles.overlay}></div>
          <div className={styles.content}>
            <div className={`${styles.sub} text`}>Promotion</div>
            <div className={`${styles.title} text`}>Explore Cities</div>
            <div className={styles.line}></div>
            <button className={`btn ${styles.cta} text`}>View Packages</button>
          </div>
        </div>
      </div>

      <div className={`${styles.testimonials} abs`}>
        <div className={`${styles.titleSub} text`}>Promotion</div>
        <div className={`${styles.title} text`}>See What Our Clients Say About Us</div>
        <div className={styles.testiCard}>
          <div className={styles.testiCardBg}></div>
          <div className={styles.testiQuote1}></div>
          <div className={styles.testiQuote2}></div>
          <div className={styles.testiAvatar}></div>
          <div className={`${styles.testiText} text`}>Vel officiis dolor ea illo aut eligendi ullam non laudantium magnam et recusandae molestiae sit iure unde aut voluptate quaerat. Id sunt provident quo possimus impedit vel doloremque obcaecati qui ullam consectetur et ipsum omnis.</div>
          <div className={`${styles.testiAuthor} text`}>Christine Beckam - Designer</div>
        </div>
        <div className={styles.testiPagination}>
          <div className={styles.p1}></div><div className={styles.p2}></div><div className={styles.p3}></div>
        </div>
      </div>

      <footer className={`${styles.footer} abs`}>
        <div className={styles.footerImg}></div>
        <div className={styles.footerLogo}>
          <div className={`${styles.footerLogoText} text`}>Travel</div>
          <div className={styles.footerLogoArrow}></div>
        </div>
        <div className={styles.footerLinks}>
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
          <div className={styles.footerAbout}>
            <div className={`${styles.aboutText} text`}>Travel helps companies manage payments easily.</div>
            <div className={styles.socials}>
              <div className={`${styles.soc}`}></div>
              <div className={`${styles.soc}`}></div>
              <div className={`${styles.soc}`}></div>
              <div className={`${styles.soc}`}></div>
            </div>
          </div>
        </div>
        <div className={styles.footerDivider}></div>
        <div className={`${styles.footerCopy} text`}>Copyright @ Xpro 2022. All Rights Reserved.</div>
      </footer>
    </div>
  );
}
