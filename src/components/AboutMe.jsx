import { useState } from 'react'
import { LUCAS_INFO } from '../constants'
import {
  AboutDivSection,
  AboutMeButton,
  AboutMeParagraph,
  CodeContainer,
  CodeLineNumber,
  CodeRow,
  Comment,
  Declaration,
  Emphasis,
  HeaderAboutSection,
  Names,
  Signs,
  Space,
  TickingSpan,
  VarName,
  VarValueNumber,
  VarValues,
} from '../styles/AboutDivSection'

const addSpaces = (quantity) => {
  const arrayWithQuantity = Array.from(Array(quantity).keys())

  return arrayWithQuantity.map(() => <Space />)
}

const AboutMe = () => {
  const [hasTechinalContent, setHasTechnicalContent] = useState(false)

  return (
    <AboutDivSection>
      <CodeContainer>
        <HeaderAboutSection>
          <p id="aboutMe">{`<!..About Me..>`}</p>
          <AboutMeButton
            type="button"
            onClick={() => setHasTechnicalContent(!hasTechinalContent)}
          >
            Change presentation
          </AboutMeButton>
        </HeaderAboutSection>

        {hasTechinalContent ? (
          <>
            <AboutMeParagraph>
              Hi! My name is {LUCAS_INFO.name} and I`m {LUCAS_INFO.age} years
              old.
            </AboutMeParagraph>
            <AboutMeParagraph>
              I have 3 years experience by working as a Front-end developer and
              1 and a half years experience working as a Full-Stack developer.
            </AboutMeParagraph>
            <AboutMeParagraph>
              I`m always looking for new technologies to learn. Since the
              beggining of my learning I got more and more curious of how we can
              actually change lives by coding.
            </AboutMeParagraph>{' '}
            <AboutMeParagraph>
              Coding changed my own life because I had the opportunity to change
              my career, and through my latest job I`m helping a lot of people
              change their careers too!
            </AboutMeParagraph>{' '}
            <AboutMeParagraph>
              I`ve developed a passion to code and I`ll keep going in any way I
              can.
            </AboutMeParagraph>{' '}
            <AboutMeParagraph>
              My Tech Stack currently is: NodeJS/Express, Javascript/Typescript,
              React/NextJS, PostgreSQL and MongoDB.
            </AboutMeParagraph>{' '}
            <AboutMeParagraph>
              A list of a few personal experiences that I had:
            </AboutMeParagraph>
            <AboutMeParagraph>
              -> Developed from scratch a daily automatic e-mail triggering
              system using NodeJS/Express and Hubspot.
            </AboutMeParagraph>
            <AboutMeParagraph>
              -> Participating in the creation of new products from scratch,
              interacting with several areas such as product and user
              experience, always aiming at the best minimum viable product
              (MVP).
            </AboutMeParagraph>
            <AboutMeParagraph>
              -> Tutor for new junior developers in the company, onboarding them
              and accompanying them until they feel comfortable with the
              projects.
            </AboutMeParagraph>
            <AboutMeParagraph>
              -> Experience in identifying, fixing and resolving bugs,
              documentation, post mortem and discussions to get the best
              maintenance of the code.
            </AboutMeParagraph>
            <AboutMeParagraph>
              I have a few professional experiencies that showed my that I`m a
              very adaptive person, I can learn new technologies without a
              problem and I`m a very communicative guy as well :)
            </AboutMeParagraph>{' '}
            <AboutMeParagraph>
              You cand reach me through my phone which is {LUCAS_INFO.phone} or
              email: {LUCAS_INFO.email} ( you can also send me an email through
              a button right below ).
            </AboutMeParagraph>
          </>
        ) : (
          <>
            <CodeRow>
              <div>
                <CodeLineNumber>1</CodeLineNumber>
                {addSpaces(3)}
                <Declaration>class </Declaration>
                {addSpaces(1)}
                <Names>Lucas</Names>
                {addSpaces(1)}
                <Signs>{`{`}</Signs>
              </div>
            </CodeRow>
            <CodeRow>
              <div>
                <CodeLineNumber>2</CodeLineNumber>
                {addSpaces(5)}
                <Comment>
                  {`//`} Always excited to learn new technologies.
                </Comment>
              </div>
            </CodeRow>
            <CodeRow>
              <div>
                <CodeLineNumber>3</CodeLineNumber>
                {addSpaces(5)}
                <Comment>
                  {`//`} I`m improving everyday searching for new ways to code
                  {`:)`}
                </Comment>
              </div>
            </CodeRow>
            <CodeRow>
              <div>
                <CodeLineNumber>4</CodeLineNumber>
                {addSpaces(5)}
                <Declaration>developer</Declaration>
                <Signs>{`()`}</Signs>
                {addSpaces(1)}
                <Signs>{`{`}</Signs>
              </div>
            </CodeRow>
            <CodeRow>
              <div>
                <CodeLineNumber>5</CodeLineNumber>
                {addSpaces(7)}
                <Emphasis>this</Emphasis>
                <Signs>.</Signs>
                <VarName>name</VarName>
                {addSpaces(1)}
                <Emphasis>=</Emphasis>
                {addSpaces(1)}
                <VarValues>'Lucas Ferreira Silva'</VarValues>
              </div>
            </CodeRow>
            <CodeRow>
              <div>
                <CodeLineNumber>6</CodeLineNumber>
                {addSpaces(7)}
                <Emphasis>this</Emphasis>
                <Signs>.</Signs>
                <VarName>age</VarName>
                {addSpaces(1)}
                <Emphasis>=</Emphasis>
                {addSpaces(1)}
                <VarValueNumber>27</VarValueNumber>
              </div>
            </CodeRow>
            <CodeRow>
              <div>
                <CodeLineNumber>7</CodeLineNumber>
                {addSpaces(7)}
                <Emphasis>this</Emphasis>
                <Signs>.</Signs>
                <VarName>email</VarName>
                {addSpaces(1)}
                <Emphasis>=</Emphasis>
                {addSpaces(1)}
                <VarValues>'lucasfsilva2310@gmail.com'</VarValues>
              </div>
            </CodeRow>
            <CodeRow>
              <div>
                <CodeLineNumber>8</CodeLineNumber>
                {addSpaces(7)}
                <Emphasis>this</Emphasis>
                <Signs>.</Signs>
                <VarName>phoneNumber</VarName>
                {addSpaces(1)}
                <Emphasis>=</Emphasis>
                {addSpaces(1)}
                <VarValues>'+55 11 96670-3167'</VarValues>
              </div>
            </CodeRow>
            <CodeRow>
              <div>
                <CodeLineNumber>9</CodeLineNumber>
                {addSpaces(5)}
                <Signs>{`}`}</Signs>
              </div>
            </CodeRow>
            <CodeRow>
              <div>
                <CodeLineNumber>10</CodeLineNumber>
                {addSpaces(4)}
                <Names>workExperience</Names>
                <Signs>{`()`}</Signs>
                {addSpaces(1)}
                <Signs>{`{`}</Signs>
              </div>
            </CodeRow>
            <CodeRow>
              <div>
                <CodeLineNumber>11</CodeLineNumber>
                {addSpaces(6)}
                <Declaration>return</Declaration> <Space />
                <Signs>{`[`}</Signs>
              </div>
            </CodeRow>
            <CodeRow>
              <div>
                <CodeLineNumber>12</CodeLineNumber>
                {addSpaces(8)}
                <Signs>{`{`}</Signs>
                {addSpaces(1)}
                <VarValues>'03/2021 - now'</VarValues>
                {addSpaces(1)}
                <Signs>:</Signs>
                {addSpaces(1)}
                <VarValues>
                  'Provi Soluções - FullStack Web Developer'
                </VarValues>{' '}
                {addSpaces(1)}
                <Signs>{`},`}</Signs>
              </div>
            </CodeRow>
            <CodeRow>
              <div>
                <CodeLineNumber>13</CodeLineNumber>
                {addSpaces(8)}
                <Signs>{`{`}</Signs>
                {addSpaces(1)}
                <VarValues>'08/2019 - 06/2020'</VarValues>
                {addSpaces(1)}
                <Signs>:</Signs>
                {addSpaces(1)}
                <VarValues>
                  'Aram Bistrô Café e Bar - Operational Manager'
                </VarValues>{' '}
                {addSpaces(1)}
                <Signs>{`},`}</Signs>
              </div>
            </CodeRow>
            <CodeRow>
              <div>
                <CodeLineNumber>14</CodeLineNumber>
                {addSpaces(8)}
                <Signs>{`{`}</Signs>
                {addSpaces(1)}
                <VarValues>'04/2019 - 06/2019'</VarValues>
                {addSpaces(1)}
                <Signs>:</Signs>
                {addSpaces(1)}
                <VarValues>
                  'Birds From Amazon - Personal Assistant'
                </VarValues>{' '}
                {addSpaces(1)}
                <Signs>{`},`}</Signs>
              </div>
            </CodeRow>
            <CodeRow>
              <div>
                <CodeLineNumber>15</CodeLineNumber>
                {addSpaces(8)}
                <Signs>{`{`}</Signs>
                {addSpaces(1)}
                <VarValues>'09/2017 - 02/2018'</VarValues>
                {addSpaces(1)}
                <Signs>:</Signs>
                {addSpaces(1)}
                <VarValues>'Martin Dog - Sales Promoter'</VarValues>
                {addSpaces(1)}
                <Signs>{`},`}</Signs>
              </div>
            </CodeRow>
            <CodeRow>
              <div>
                <CodeLineNumber>16</CodeLineNumber>
                {addSpaces(8)}
                <Signs>{`{`}</Signs>
                {addSpaces(1)}
                <VarValues>'06/2017 - 10/2017'</VarValues>
                {addSpaces(1)}
                <Signs>:</Signs>
                {addSpaces(1)}
                <VarValues>'Pet Care - Veterinary Assistant'</VarValues>
                {addSpaces(1)}
                <Signs>{`}`}</Signs>
              </div>
            </CodeRow>
            <CodeRow>
              <div>
                <CodeLineNumber>17</CodeLineNumber>
                {addSpaces(6)}
                <Signs>{`]`}</Signs>
              </div>
            </CodeRow>
            <CodeRow>
              <div>
                <CodeLineNumber>18</CodeLineNumber>
                {addSpaces(6)}
                <Signs>{`}`}</Signs>
              </div>
            </CodeRow>
            <CodeRow>
              <div>
                <CodeLineNumber>19</CodeLineNumber>
                {addSpaces(4)}
                <Names>education</Names>
                <Signs>{`()`}</Signs>
                {addSpaces(1)}
                <Signs>{`{`}</Signs>
              </div>
            </CodeRow>
            <CodeRow>
              <div>
                <CodeLineNumber>20</CodeLineNumber>
                {addSpaces(6)}
                <Declaration>return</Declaration>
                {addSpaces(1)}
                <Signs>{`[`}</Signs>
              </div>
            </CodeRow>
            <CodeRow>
              <div>
                <CodeLineNumber>21</CodeLineNumber>
                {addSpaces(8)}
                <Signs>{`{`}</Signs>
                {addSpaces(1)}
                <VarValues>'07/2020 - 07/2021'</VarValues>
                {addSpaces(1)}
                <Signs>:</Signs>
                {addSpaces(1)}
                <VarValues>
                  'Kenzie Academy Brasil - FullStack Web Course'
                </VarValues>{' '}
                {addSpaces(1)}
                <Signs>{`},`}</Signs>
              </div>
            </CodeRow>

            <CodeRow>
              <div>
                <CodeLineNumber>22</CodeLineNumber>
                {addSpaces(6)}
                <Signs>{`]`}</Signs>
              </div>
            </CodeRow>
            <CodeRow>
              <div>
                <CodeLineNumber>23</CodeLineNumber>
                {addSpaces(4)}
                <Signs>{`}`}</Signs>
              </div>
            </CodeRow>
            <CodeRow>
              <div>
                <CodeLineNumber>24</CodeLineNumber>
                {addSpaces(4)}
                <Names>exchange</Names>
                <Signs>{`()`}</Signs>
                {addSpaces(1)}
                <Signs>{`{`}</Signs>
              </div>
            </CodeRow>
            <CodeRow>
              <div>
                <CodeLineNumber>25</CodeLineNumber>
                {addSpaces(6)}
                <Declaration>return</Declaration>
                {addSpaces(1)}
                <Signs>{`[`}</Signs>
              </div>
            </CodeRow>
            <CodeRow>
              <div>
                <CodeLineNumber>26</CodeLineNumber>
                {addSpaces(6)}
                <Signs>{`{`}</Signs>
                {addSpaces(1)}
                <VarValues>'12/2018 - 07-2019'</VarValues>
                {addSpaces(1)}
                <Signs>:</Signs>
                {addSpaces(1)}
                <VarValues>' Australia - General English Course '</VarValues>
                {addSpaces(1)}
                <Signs>{`}`}</Signs>
              </div>
            </CodeRow>
            <CodeRow>
              <div>
                <CodeLineNumber>27</CodeLineNumber>
                {addSpaces(6)}
                <Signs>{`]`}</Signs>
              </div>
            </CodeRow>
            <CodeRow>
              <div>
                <CodeLineNumber>28</CodeLineNumber>
                {addSpaces(4)}
                <Signs>{`}`}</Signs>
              </div>
            </CodeRow>
            <CodeRow>
              <div>
                <CodeLineNumber>29</CodeLineNumber>
                {addSpaces(4)}
                <Names>skills</Names> <Signs>{`()`}</Signs>
                {addSpaces(1)}
                <Signs>{`{`}</Signs>
              </div>
            </CodeRow>
            <CodeRow>
              <div>
                <CodeLineNumber>30</CodeLineNumber>
                {addSpaces(6)}
                <Declaration>return</Declaration>
                {addSpaces(1)}
                <Signs>{`[`}</Signs>
                {addSpaces(1)}
                <VarValues>'HTML'</VarValues>
                <Signs>,</Signs>
                {addSpaces(1)}
                <VarValues>'CSS'</VarValues>
                <Signs>,</Signs>
                {addSpaces(1)}
                <VarValues>'Javascript'</VarValues>
                <Signs>,</Signs>
                {addSpaces(1)}
                <VarValues>'ReactJS'</VarValues>
                <Signs>,</Signs>
                {addSpaces(1)}
                <VarValues>'NextJS'</VarValues>
                <Signs>,</Signs>
                {addSpaces(1)}
                <VarValues>'Styled-Components'</VarValues>
                <Signs>,</Signs>
              </div>
            </CodeRow>
            <CodeRow>
              <div>
                <CodeLineNumber>31</CodeLineNumber>
                {addSpaces(13)}
                <VarValues>'Redux'</VarValues>
                <Signs>,</Signs>
                {addSpaces(1)}
                <VarValues>'Python'</VarValues>
                <Signs>,</Signs>
                {addSpaces(1)}
                <VarValues>'GIT'</VarValues>
                <Signs>,</Signs>
                {addSpaces(1)}
                <VarValues>'npm/yarn'</VarValues>
                <Signs>,</Signs>
                {addSpaces(1)}
                <VarValues>'NodeJS'</VarValues>
                <Signs>,</Signs>
                {addSpaces(1)}
                <VarValues>'ExpressJS'</VarValues>
                <Signs>,</Signs>
                {addSpaces(1)}
                <VarValues>'Jest'</VarValues>
                <Signs>,</Signs>
              </div>
            </CodeRow>
            <CodeRow>
              <div>
                <CodeLineNumber>32</CodeLineNumber>
                {addSpaces(13)}
                <VarValues>'Tailwind'</VarValues>
                <Signs>,</Signs>
                {addSpaces(1)}
                <VarValues>'ChakraUI'</VarValues>
                <Signs>,</Signs>
                {addSpaces(1)}
                <VarValues>'MaterialUI'</VarValues>
                <Signs>,</Signs>
                {addSpaces(1)}
                <VarValues>'Cypress'</VarValues>
                <Signs>,</Signs>
                {addSpaces(1)}
                <VarValues>'MongoDB'</VarValues>
                <Signs>,</Signs>
                {addSpaces(1)}
                <VarValues>'PostgreSQL'</VarValues>
                {addSpaces(1)}
                <Signs>{`]`}</Signs>
              </div>
            </CodeRow>
            <CodeRow>
              <div>
                <CodeLineNumber>33</CodeLineNumber>
                {addSpaces(4)}
                <Signs>{`}`}</Signs>
              </div>
            </CodeRow>
            <CodeRow>
              <div>
                <CodeLineNumber>34</CodeLineNumber>
                {addSpaces(4)}
                <Names>letsCode</Names>
                <Signs>{`(challenges)`}</Signs>
                {addSpaces(1)}
                <Signs>{`{`}</Signs>
              </div>
            </CodeRow>
            <CodeRow>
              <div>
                <CodeLineNumber>34</CodeLineNumber>
                {addSpaces(6)}
                <Signs>{`while (challenges ===`}</Signs>
                <VarValues>'undone'</VarValues>
                <Signs>{`) {`}</Signs>
                {addSpaces(1)}
              </div>
            </CodeRow>
            <CodeRow>
              <div>
                <CodeLineNumber>30</CodeLineNumber>
                {addSpaces(6)}
                <Declaration>return</Declaration>
                {addSpaces(2)}
                <VarValues>'keep going!'</VarValues>
                {addSpaces(1)}
              </div>
            </CodeRow>
            <CodeRow>
              <div>
                <CodeLineNumber>33</CodeLineNumber>
                {addSpaces(4)}
                <Signs>{`}`}</Signs>
              </div>
            </CodeRow>
            <CodeRow>
              <div>
                <CodeLineNumber>34</CodeLineNumber>
                {addSpaces(2)}
                <Signs>{`}`}</Signs>
                {addSpaces(1)}
                <TickingSpan>
                  <span>|</span>
                </TickingSpan>
              </div>
            </CodeRow>
          </>
        )}
      </CodeContainer>
    </AboutDivSection>
  )
}

export default AboutMe
