import styled from 'styled-components'
import H2 from '../components/HeadlineLevel2'

const Section = styled.section`
margin-top: 100px;
margin-left: auto;
margin-right: auto;
width: 1000px;
`

const MyPage = props => {

  return (
    <Section>
      <H2>My Page</H2>
      <dl>

      </dl>
    </Section>
  )
}

export default MyPage