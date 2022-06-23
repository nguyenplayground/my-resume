import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const avatars = [
  {
    title: <>Tung Duy</>,
    imageUrl: 'img/Sample(3).svg',
    description: (
      <>
        Nice
      </>
    ),
    comment: (
      <>Nice work</>
    )
  },
  {
    title: <>Thuy Lam</>,
    imageUrl: 'img/Sample.svg',
    description: (
      <>
        Nice
      </>
    ),
    comment: (
      <>Nice work</>
    )
  },
  {
    title: <>Duyen Anh</>,
    imageUrl: 'img/Sample(1).svg',
    description: (
      <>
        Nice
      </>
    ),
    comment: (
      <>Nice work</>
    )
  }
]

const features = [
  {
    title: <>Easy to cooperate</>,
    imageUrl: 'img/working.svg',
    description: (
      <>
        Outgoing persona and easy to work with and excel together
      </>
    ),
  },
  {
    title: <>Focus on What Matters</>,
    imageUrl: 'img/teambuilding.svg',
    description: (
      <>
        Focus on what matters and getting things done is my motive
      </>
    ),
  },
  {
    title: <>Powered by React</>,
    imageUrl: 'img/meeting.svg',
    description: (
      <>
        Fast and effective framework to create beautiful and friendly user experience on any web platform.
      </>
    )
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={classnames('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}


function Hero ({ title, tagline}) {
  return (
    <div className={"hero hero--primary"} style={{ height: "25rem"}}>
      <div className={"container"}>
        <div className='row'>
          <div className={'col col--6'} style={{ display: 'flex', alignItems: 'center' }}>
            <div>
              <h1 className={"hero__title"}>{title}</h1>
              <p className={"hero__subtitle"}>{tagline}</p>
              <button className={"button button--secondary button--lg"}>Learn more</button>
            </div>
          </div>
          <div className='col col--6'>
            <img className={styles.heroImage} src='img/partnership.svg' alt={features[0].title} />
          </div>
        </div>
      </div>
    </div>
  )
}

function Dowload () {
  return (
    <div class="hero hero--primary" style={{ height: '25rem' }}>
      <div class="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'  }}>
        <h1 class="hero__title">Click here to dowload my resume</h1>
        <p class="hero__subtitle">You will definitely not reget</p>
        <div>
          <button class="button button--secondary button--lg"><a href='resume/my_resume.pdf' style={{  }}>Dowload</a></button>
        </div>
      </div>
    </div>
  )
}

function Avatar ({ imageUrl, title, description}) {
  return (
    <div class="avatar">
      <a
        class="avatar__photo-link avatar__photo avatar__photo--lg"
        href={imageUrl}>
        <img
          alt="Dan Abramov Profile"
          src={imageUrl} />
      </a>
      <div class="avatar__intro">
        <div class="avatar__name">{ title }</div>
        <small class="avatar__subtitle">
          {description}
        </small>
      </div>
    </div>
  )
}


function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <Hero title = {siteConfig.title} tagline={siteConfig.tagline} />
      <main>
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems : 'center' , marginTop: '2rem'}}>
          <h1 className={"hero__title"}>How can I help your business ?</h1>
          <p className={"hero__subtitle"}>Effective and professional</p>
        </div>
        {features && features.length && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems : 'center' , marginTop: '2rem'}}>
          <h1 className={"hero__title"}>What do colleague think about me ?</h1>
          <p className={"hero__subtitle"}>Build trust and long lasting relationship</p>
        </div>
        {features && features.length && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {avatars.map((props, idx) => (
                  <div className={'col col--4 card'}>
                    <Avatar imageUrl={props.imageUrl} title={props.title} description={props.description}/>
                    <div class="card__body">
                      <small>{props.comment}</small>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}
        <Dowload />
      </main>
    </Layout>
  );
}

export default Home;
