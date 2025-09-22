import React from "react";
import Navbar from "../components/Navbar";
import "../styles/common.css";
import styles from "./Homepage.module.css";

/**
 * PUBLIC_INTERFACE
 * Homepage: converted from assets/homepage-screen-0-622.html and CSS.
 * This version keeps absolute layout to preserve visual fidelity.
 */
export default function Homepage() {
  return (
    <div className={`screenRoot ${styles.screen}`}>
      <div className={`${styles.headerBg} abs`} id="rect-19290"></div>

      <div className={`${styles.headerBar}`}>
        <Navbar />
      </div>

      <div className={`${styles.headerContext} abs`}>
        <div className={styles.clientsBadge}>
          <div className={styles.avatars}>
            <div className={`${styles.av} ${styles.av1}`} />
            <div className={`${styles.av} ${styles.av2}`} />
            <div className={`${styles.av} ${styles.av3}`} />
            <div className={`${styles.av} ${styles.av4}`} />
            <div className={`${styles.av} ${styles.av5}`} />
            <div className={`${styles.av} ${styles.av6}`} />
            <div className={`${styles.av} ${styles.av7}`} />
          </div>
          <div className={`${styles.clientsText} text`}>2,500 people booked Tommorowland Event in last 24 hours</div>
          <div className={`${styles.clientsPlus} text`}>+</div>
        </div>
        <div className={`${styles.slogan} text`}>No matter where you’re going to, we’ll take you there</div>

        <div className={styles.searchWrap}>
          <div className={styles.searchBg}></div>
          <div className={`${styles.searchField} ${styles.where} text`}>Where to?</div>
          <div className={`${styles.searchField} ${styles.type} text`}>Travel Type</div>
          <div className={`${styles.searchField} ${styles.duration} text`}>Duration</div>
          <div className={`${styles.searchDropdown} ${styles.dd1}`}></div>
          <div className={`${styles.searchDropdown} ${styles.dd2}`}></div>
          <button className={`btn ${styles.searchSubmit} text`}>Submit</button>
          <div className={`${styles.searchSep} ${styles.sep1}`}></div>
          <div className={`${styles.searchSep} ${styles.sep2}`}></div>
        </div>
      </div>

      <div className={`${styles.scrollIndicator} abs`}>
        <div className={styles.scrollOuter}></div>
        <div className={styles.scrollInner}></div>
        <div className={`${styles.scrollText} text`}>Scroll</div>
      </div>

      <div className={`${styles.servicesSmall} abs`}>
        <div className={styles.servicesUnion}>
          <div className={styles.servicesRect}></div>
          <div className={styles.servicesPoly}></div>
        </div>
        <div className="text" style={{ position: "absolute", left: 16, top: 43, fontFamily: "var(--font-roboto)", fontSize: 22, color: "var(--color-white)" }}>Honeymoon Packages</div>
        <div className="text" style={{ position: "absolute", left: 16, top: 78, fontFamily: "var(--font-roboto)", fontSize: 22, color: "var(--color-white)" }}>Tours Packages</div>
        <div className="text" style={{ position: "absolute", left: 16, top: 113, fontFamily: "var(--font-roboto)", fontSize: 22, color: "var(--color-white)" }}>Musical Events</div>
        <div className="text" style={{ position: "absolute", left: 16, top: 148, fontFamily: "var(--font-roboto)", fontSize: 22, color: "var(--color-white)" }}>Build Package</div>
      </div>

      <div className={`${styles.bestServiceTitle} abs`}>
        <div className={`${styles.catLabel} text`}>CATEGORY</div>
        <div className={`${styles.bestTitle} text`}>We Offer Best Services</div>
      </div>

      <div className={`${styles.bestServiceCards} abs`}>
        <div className={`${styles.card} ${styles.card1}`}>
          <div className={styles.card1IconBg}></div>
          <div className={`${styles.card1Title} text`}>Guided Tours</div>
          <div className={`${styles.card1Desc} text`}>sunt qui repellat saepe quo velit aperiam id aliquam placeat.</div>
        </div>

        <div className={`${styles.card} ${styles.card2}`}>
          <div className={styles.card2Pane}></div>
          <div className={styles.card2IconBg}></div>
          <div className={`${styles.card2Title} text`}>Best Flights Options</div>
          <div className={`${styles.card2Desc} text`}>sunt qui repellat saepe quo velit aperiam id aliquam placeat.</div>
        </div>

        <div className={`${styles.card} ${styles.card3}`}>
          <div className={styles.card3IconBg}></div>
          <div className={`${styles.card3Title} text`}>Religious Tours</div>
          <div className={`${styles.card3Desc} text`}>sunt qui repellat saepe quo velit aperiam id aliquam placeat.</div>
        </div>

        <div className={`${styles.card} ${styles.card4}`}>
          <div className={styles.card4IconBg}></div>
          <div className={`${styles.card4Title} text`}>Medical insurance</div>
          <div className={`${styles.card4Desc} text`}>sunt qui repellat saepe quo velit aperiam id aliquam placeat.</div>
        </div>
      </div>

      <div className={`${styles.romanticSection} abs`}>
        <div className={styles.romIllustration}>
          <div className={styles.romRect}></div>
          <div className={styles.romMaskRect}></div>
          <div className={styles.romImage}></div>
          <div className={styles.romEllipse1}></div>
          <div className={styles.romEllipse2}></div>
          <div className={styles.romEllipse3}></div>
          <div className={`${styles.romHoneymoon} text`}>Honeymoon Packages</div>
        </div>
        <div className={styles.romContext}>
          <div className={`${styles.romSub} text`}>Honeymoon Specials</div>
          <div className={`${styles.romTitle} text`}>Our Romantic Tropical Destinations</div>
          <div className={`${styles.romDesc} text`}>Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium internos. Non quis eius quo eligendi corrupti et fugiat nulla qui soluta recusandae in maxime quasi aut ducimus illum aut optio quibusdam!</div>
          <button className={`btn ${styles.romCta} text`}>View Packages</button>
        </div>
      </div>

      <div className={`${styles.separatorHero} abs`}>
        <div className={styles.sepBg}></div>
        <div className={`${styles.sepHeading} text`}>Let’s make your <br/>next holiday amazing</div>
        <div className={styles.sepLine}></div>
      </div>

      <div className={`${styles.exploreRow} abs`}>
        <div className={styles.exploreLeft}>
          <div className={styles.exploreBg}></div>
          <div className={styles.exploreOverlay}></div>
          <div className={styles.exploreLeftWrap}>
            <div className={`${styles.exploreLeftSub} text`}>Promotion</div>
            <div className={`${styles.exploreLeftTitle} text`}>Explore Nature</div>
            <div className={styles.exploreLeftLine}></div>
            <button className={`btn ${styles.exploreLeftCta} text`}>View Packages</button>
          </div>
        </div>
        <div className={styles.exploreRight}>
          <div className={styles.exploreBg}></div>
          <div className={styles.exploreOverlay}></div>
          <div className={styles.exploreRightWrap}>
            <div className={`${styles.exploreRightSub} text`}>Promotion</div>
            <div className={`${styles.exploreRightTitle} text`}>Explore Cities</div>
            <div className={styles.exploreRightLine}></div>
            <button className={`btn ${styles.exploreRightCta} text`}>View Packages</button>
          </div>
        </div>
      </div>

      <div className={`${styles.trendingTitle} abs`}>
        <div className={`${styles.trendySub} text`}>trendy</div>
        <div className={`${styles.trendyTitle} text`}>Our Trending Tour Packages</div>
      </div>

      <div className={`${styles.packagesGrid} abs`}>
        {["Switzerland","Amazon","Giza"].map((title, i) => (
          <div key={title} className={`${styles.pkgCard}`}>
            <div className={styles.pkgThumb}></div>
            <div className={styles.pkgEllipse}></div>
            <div className={`${styles.pkgTitle} text`}>{title}</div>
            <div className={`${styles.pkgRegion} text`}>{["Europe","Brazil","Egypt"][i]}</div>
            <div className={`${styles.pkgDays} text`}>8 days</div>
            <div className={`${styles.pkgPeople} text`}>{["25","30","155"][i]} People going</div>
            <div className={`${styles.pkgPrice} text`}>{["1,000 $","1,223 $","1,200 $"][i]}</div>
            <div className={`${styles.pkgPriceSmall} text`}>1,200 $</div>
            <div className={styles.pkgLocationIcon}></div>
            <div className={`${styles.pkgDesc} text`}>Nam exercitationem commodi et ducimus quia in dolore animi sit mollitia amet id quod eligendi. Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium internos.</div>
            <a className={`btn ${styles.pkgCta} text`} href={i === 0 ? "/packages/switzerland" : "/packages"}>
              Explore Now
            </a>
            <div className={styles.pkgCalIcon}></div>
            <div className={styles.pkgUserIcon}></div>
            <div className={styles.pkgStars}></div>
            <div className={styles.pkgLine}></div>
          </div>
        ))}
      </div>

      <div className={`${styles.testimonials} abs`}>
        <div className={`${styles.testiTitleSub} text`}>Promotion</div>
        <div className={`${styles.testiTitle} text`}>See What Our Clients Say About Us</div>
        <div className={styles.testiCard}>
          <div className={styles.testiCardBg}></div>
          <div className={styles.testiQuote1}></div>
          <div className={styles.testiQuote2}></div>
          <div className={styles.testiAvatar}></div>
          <div className={`${styles.testiText} text`}>Vel officiis dolor ea illo aut eligendi ullam non laudantium magnam et recusandae molestiae sit iure unde aut voluptate quaerat. Id sunt provident quo possimus impedit vel doloremque obcaecati qui ullam consectetur et ipsum omnis.</div>
          <div className={`${styles.testiAuthor} text`}>Christine Beckam - Designer</div>
        </div>
        <div className={styles.testiNavLeft}></div>
        <div className={styles.testiNavRight}></div>
        <div className={styles.testiPagination}>
          <div className={styles.p1}></div>
          <div className={styles.p2}></div>
          <div className={styles.p3}></div>
        </div>
      </div>

      <div className={`${styles.partnersStrip} abs`}>
        <div className={`${styles.partner} ${styles.p1}`}></div>
        <div className={`${styles.partner} ${styles.p2}`}></div>
        <div className={`${styles.partner} ${styles.p3}`}></div>
        <div className={`${styles.partner} ${styles.p4}`}></div>
        <div className={`${styles.partner} ${styles.p5}`}></div>
      </div>

      <div className={`${styles.footer} abs`}>
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
              <div className={`${styles.soc} ${styles.linkedin}`}></div>
              <div className={`${styles.soc} ${styles.messenger}`}></div>
              <div className={`${styles.soc} ${styles.twitter}`}></div>
              <div className={`${styles.soc} ${styles.twoo}`}></div>
            </div>
          </div>
        </div>
        <div className={styles.footerDivider}></div>
        <div className={`${styles.footerCopy} text`}>Copyright @ Xpro 2022. All Rights Reserved.</div>
      </div>
    </div>
  );
}
