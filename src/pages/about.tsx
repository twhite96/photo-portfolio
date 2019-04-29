import React from 'react'
import { config, useSpring } from 'react-spring'
import Layout from '../components/layout'
import { AnimatedBox } from '../elements'
import SEO from '../components/SEO'

const About = () => {
  const pageAnimation = useSpring({
    config: config.slow,
    from: { opacity: 0 },
    to: { opacity: 1 },
  })

  return (
    <Layout>
      <SEO
        title='About | Tiffany'
        desc="Hi. I'm LekoArts! You can visit my website or my other Gatsby projects."
      />
      <AnimatedBox
        style={pageAnimation}
        py={[6, 6, 6, 8]}
        px={[6, 6, 8, 6, 8, 13]}
      >
        <h1>Hi. I'm Tiffany.</h1>
        <p>
          You can visit my{' '}
          <a href='https://www.instagram.com/trwhitephoto/'>Instagram</a> or
          {' '}<a href='https://www.eyeem.com/u/trwhite'>Eyeem</a> for
          more photos.
          Alternatively, if you're into iPhoneography, you can
          find me on{' '}
          <a href='https://mobitog.com/members/tiffany.5595/'>Mobitog</a>.
        </p>
      </AnimatedBox>
    </Layout>
  );
}

export default About
