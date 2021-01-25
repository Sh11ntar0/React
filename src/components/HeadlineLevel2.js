import styled from 'styled-components'

const Headline = styled.h2`
font-size: 24px;
font-weight: 900;
`

const HeadlineLevel2 = props => (
    <Headline>{props.children}</Headline>
)

export default HeadlineLevel2