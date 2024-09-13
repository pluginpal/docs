import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import styles from './home.module.scss';
import {
  Button,
  Card,
  CardDescription,
  CardImg,
  CardImgBg,
  CardTitle,
  Container,
  FeaturesList,
  Hero,
  HeroDescription,
  HeroTitle,
  LinkWithArrow,
} from '../../components';
import content from './_home.content';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

const NAVBAR_TRANSLUCENT_UNTIL_SCROLL_Y = 36;

export default function PageHome() {
  const config = useDocusaurusContext();
  const [isNavbarTranslucent, setIsNavbarTranslucent] = useState(true);

  /**
   * Scroll Listener to apply the "translucent" visual effect to navbar,
   * behavior which happens only at Home Page.
   */
  useEffect(() => {
    function scrollListener() {
      setIsNavbarTranslucent(window.scrollY <= NAVBAR_TRANSLUCENT_UNTIL_SCROLL_Y);
    }

    scrollListener();
    window.addEventListener('scroll', scrollListener);

    return () => {
      window.removeEventListener('scroll', scrollListener);
    };
  }, []);

  return (
    <Layout
      title={config.siteConfig.title}
      description={config.siteConfig.tagline}
    >
      {isNavbarTranslucent && (
        <style
          dangerouslySetInnerHTML={{
            __html: `
              .navbar {
                --ifm-navbar-background-color: transparent;
                --ifm-navbar-shadow: none;
              }
            `
          }}
        />
      )}
      <style
        dangerouslySetInnerHTML={{
          __html: `
            html[data-theme='dark'] {
              --ifm-background-color: #181826;
              --ifm-navbar-background-color: #181826;

              --strapi-primary-600: #4945FF;
            }

            html[data-theme='dark'] .navbar .DocSearch-Button {
              background: var(--strapi-neutral-0);
            }
          `,
        }}
      />
      <main className={clsx('font-poppins', styles.home)}>
        <Hero id="homeHero">
          <Container>
            <HeroTitle>
              {config.siteConfig.title}
            </HeroTitle>
            <HeroDescription>
              {config.siteConfig.tagline}
            </HeroDescription>
          </Container>
        </Hero>
        <section
          id="homeCategories"
          className={styles.home__categories}
        >
          <Container>
            <div className="row row--huge">
              {content.categories.map(({
                cardTitle: categoryItemCardTitle,
                cardDescription: categoryItemCardDescription,
                cardImgSrc: categoryItemCardImgSrc,
                cardLink: categoryItemCardLink,
                ...categoryItem
              }, categoryItemIndex) => {
                return (
                  <div
                    key={`pageHomeCategoryItem${categoryItemIndex}`}
                    className={clsx(
                      'col',
                      'col--6',
                      styles.home__categories__item,
                    )}
                  >
                    <Card to={categoryItemCardLink}>
                      <div className={styles.home__cardTitle}>
                        {categoryItemCardImgSrc && <CardImg src={categoryItemCardImgSrc} />}
                        {categoryItemCardTitle && <CardTitle withArrow>{categoryItemCardTitle}</CardTitle>}
                      </div>
                      {categoryItemCardDescription && <CardDescription>{categoryItemCardDescription}</CardDescription>}
                    </Card>
                    {categoryItem.links && (
                      <FeaturesList
                        icon={categoryItem.linksIconSrc}
                        iconColor={categoryItem.linksIconColor}
                        items={categoryItem.links}
                      />
                    )}
                  </div>
                );
              })}
            </div>
          </Container>
        </section>
      </main>
    </Layout>
  );
}
