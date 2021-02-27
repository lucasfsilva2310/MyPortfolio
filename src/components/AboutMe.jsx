import {
  AboutDivSection,
  CodeContainer,
  CodeLineNumber,
  CodeRow,
  Comment,
  Declaration,
  Emphasis,
  Names,
  Signs,
  Space,
  TickingSpan,
  VarName,
  VarValueNumber,
  VarValues,
} from "../styles/AboutDivSection";

const AboutMe = () => {
  return (
    <AboutDivSection>
      <p id="aboutMe">{`<!..Sobre..>`}</p>
      <CodeContainer>
        <CodeRow>
          <div>
            <CodeLineNumber>01</CodeLineNumber> <Space />
            <Space />
            <Declaration>class </Declaration>
            <Space /> <Names>Lucas</Names> <Space />
            <Signs>{`{`}</Signs>
          </div>
        </CodeRow>
        <CodeRow>
          <div>
            <CodeLineNumber>02</CodeLineNumber> <Space /> <Space />
            <Space />
            <Space />
            <Comment>{`//`} Empolgado em aprender novas tecnologias.</Comment>
          </div>
        </CodeRow>
        <CodeRow>
          <div>
            <CodeLineNumber>03</CodeLineNumber> <Space /> <Space />
            <Space />
            <Space />
            <Comment>
              {`//`} Minha quantidade e qualidade hard e soft skills aumenta
              diariamente {`:)`}
            </Comment>
          </div>
        </CodeRow>
        <CodeRow>
          <div>
            <CodeLineNumber>04</CodeLineNumber> <Space /> <Space />
            <Space /> <Space />
            <Declaration>developer</Declaration>
            <Signs>{`()`}</Signs> <Space /> <Signs>{`{`}</Signs>
          </div>
        </CodeRow>
        <CodeRow>
          <div>
            <CodeLineNumber>05</CodeLineNumber> <Space /> <Space />
            <Space /> <Space /> <Space /> <Space />
            <Emphasis>this</Emphasis>
            <Signs>.</Signs>
            <VarName>name</VarName>
            <Space />
            <Emphasis>=</Emphasis>
            <Space />
            <VarValues>'Lucas Ferreira Silva'</VarValues>
          </div>
        </CodeRow>
        <CodeRow>
          <div>
            <CodeLineNumber>06</CodeLineNumber> <Space /> <Space />
            <Space /> <Space /> <Space /> <Space />
            <Emphasis>this</Emphasis>
            <Signs>.</Signs>
            <VarName>age</VarName>
            <Space />
            <Emphasis>=</Emphasis>
            <Space />
            <VarValueNumber>26</VarValueNumber>
          </div>
        </CodeRow>
        <CodeRow>
          <div>
            <CodeLineNumber>07</CodeLineNumber> <Space /> <Space />
            <Space /> <Space /> <Space /> <Space />
            <Emphasis>this</Emphasis>
            <Signs>.</Signs>
            <VarName>email</VarName>
            <Space />
            <Emphasis>=</Emphasis>
            <Space />
            <VarValues>'lucasfsilva2310@gmail.com'</VarValues>
          </div>
        </CodeRow>
        <CodeRow>
          <div>
            <CodeLineNumber>08</CodeLineNumber> <Space /> <Space />
            <Space /> <Space />
            <Signs>{`}`}</Signs>
          </div>
        </CodeRow>
        <CodeRow>
          <div>
            <CodeLineNumber>09</CodeLineNumber> <Space /> <Space />
            <Space /> <Space />
            <Names>workExperience</Names>
            <Signs>{`()`}</Signs> <Space /> <Signs>{`{`}</Signs>
          </div>
        </CodeRow>
        <CodeRow>
          <div>
            <CodeLineNumber>10</CodeLineNumber> <Space /> <Space />
            <Space /> <Space /> <Space /> <Space />
            <Declaration>return</Declaration> <Space />
            <Signs>{`[`}</Signs>
          </div>
        </CodeRow>
        <CodeRow>
          <div>
            <CodeLineNumber>11</CodeLineNumber> <Space /> <Space />
            <Space /> <Space /> <Space /> <Space />
            <Space /> <Space />
            <Signs>{`{`}</Signs> <Space />{" "}
            <VarValues>'08/2019 - 06/2020'</VarValues> <Space />{" "}
            <Signs>:</Signs> <Space />{" "}
            <VarValues>
              'Aram Bistrô Café e Bar - Gerente Operacional'
            </VarValues>{" "}
            <Space /> <Signs>{`},`}</Signs>
          </div>
        </CodeRow>
        <CodeRow>
          <div>
            <CodeLineNumber>12</CodeLineNumber> <Space /> <Space />
            <Space /> <Space /> <Space /> <Space />
            <Space /> <Space />
            <Signs>{`{`}</Signs> <Space />{" "}
            <VarValues>'04/2019 - 06/2019'</VarValues> <Space />{" "}
            <Signs>:</Signs> <Space />{" "}
            <VarValues>'Birds From Amazon - Assistente pessoal'</VarValues>{" "}
            <Space /> <Signs>{`},`}</Signs>
          </div>
        </CodeRow>
        <CodeRow>
          <div>
            <CodeLineNumber>13</CodeLineNumber> <Space /> <Space />
            <Space /> <Space /> <Space /> <Space />
            <Space /> <Space />
            <Signs>{`{`}</Signs> <Space />{" "}
            <VarValues>'09/2017 - 02/2018'</VarValues> <Space />{" "}
            <Signs>:</Signs> <Space />{" "}
            <VarValues>'Martin Dog - Promotor de vendas'</VarValues> <Space />{" "}
            <Signs>{`},`}</Signs>
          </div>
        </CodeRow>
        <CodeRow>
          <div>
            <CodeLineNumber>14</CodeLineNumber> <Space /> <Space />
            <Space /> <Space /> <Space /> <Space />
            <Space /> <Space />
            <Signs>{`{`}</Signs> <Space />{" "}
            <VarValues>'06/2017 - 10/2017'</VarValues> <Space />{" "}
            <Signs>:</Signs> <Space />{" "}
            <VarValues>'Pet Care - Auxiliar veterinário'</VarValues> <Space />{" "}
            <Signs>{`}`}</Signs>
          </div>
        </CodeRow>
        <CodeRow>
          <div>
            <CodeLineNumber>15</CodeLineNumber> <Space /> <Space />
            <Space /> <Space /> <Space /> <Space />
            <Signs>{`]`}</Signs>
          </div>
        </CodeRow>
        <CodeRow>
          <div>
            <CodeLineNumber>16</CodeLineNumber> <Space /> <Space />
            <Space /> <Space />
            <Signs>{`}`}</Signs>
          </div>
        </CodeRow>
        <CodeRow>
          <div>
            <CodeLineNumber>17</CodeLineNumber> <Space /> <Space />
            <Space /> <Space />
            <Names>education</Names>
            <Signs>{`()`}</Signs>
            <Space /> <Signs>{`{`}</Signs>
          </div>
        </CodeRow>
        <CodeRow>
          <div>
            <CodeLineNumber>18</CodeLineNumber> <Space /> <Space />
            <Space /> <Space /> <Space /> <Space />
            <Declaration>return</Declaration> <Space />
            <Signs>{`[`}</Signs>
          </div>
        </CodeRow>
        <CodeRow>
          <div>
            <CodeLineNumber>19</CodeLineNumber> <Space /> <Space />
            <Space /> <Space /> <Space /> <Space /> <Space /> <Space />
            <Signs>{`{`}</Signs> <Space />{" "}
            <VarValues>'07/2020 - now'</VarValues> <Space /> <Signs>:</Signs>{" "}
            <Space />{" "}
            <VarValues>
              'Kenzie Academy Brasil - Desenvolvedor Web FullStack'
            </VarValues>{" "}
            <Space /> <Signs>{`},`}</Signs>
          </div>
        </CodeRow>

        <CodeRow>
          <div>
            <CodeLineNumber>20</CodeLineNumber> <Space /> <Space />
            <Space /> <Space /> <Space /> <Space />
            <Signs>{`]`}</Signs>
          </div>
        </CodeRow>
        <CodeRow>
          <div>
            <CodeLineNumber>21</CodeLineNumber> <Space /> <Space />
            <Space /> <Space />
            <Signs>{`}`}</Signs>
          </div>
        </CodeRow>
        <CodeRow>
          <div>
            <CodeLineNumber>22</CodeLineNumber> <Space /> <Space />
            <Space /> <Space />
            <Names>exchange</Names>
            <Signs>{`()`}</Signs> <Space /> <Signs>{`{`}</Signs>
          </div>
        </CodeRow>
        <CodeRow>
          <div>
            <CodeLineNumber>23</CodeLineNumber> <Space /> <Space />
            <Space /> <Space /> <Space /> <Space />
            <Declaration>return</Declaration> <Space />
            <Signs>{`[`}</Signs>
          </div>
        </CodeRow>
        <CodeRow>
          <div>
            <CodeLineNumber>24</CodeLineNumber> <Space /> <Space />
            <Space /> <Space /> <Space /> <Space /> <Space /> <Space />
            <Signs>{`{`}</Signs> <Space />
            <VarValues>'12/2018 - 07-2019'</VarValues> <Space />{" "}
            <Signs>:</Signs> <Space />{" "}
            <VarValues>' Australia - General English Course '</VarValues>{" "}
            <Space /> <Signs>{`}`}</Signs>
          </div>
        </CodeRow>
        <CodeRow>
          <div>
            <CodeLineNumber>25</CodeLineNumber> <Space /> <Space />
            <Space /> <Space /> <Space /> <Space />
            <Signs>{`]`}</Signs>
          </div>
        </CodeRow>
        <CodeRow>
          <div>
            <CodeLineNumber>26</CodeLineNumber> <Space /> <Space />
            <Space /> <Space />
            <Signs>{`}`}</Signs>
          </div>
        </CodeRow>
        <CodeRow>
          <div>
            <CodeLineNumber>27</CodeLineNumber> <Space /> <Space />
            <Space /> <Space />
            <Names>skills</Names> <Signs>{`()`}</Signs> <Space />{" "}
            <Signs>{`{`}</Signs>
          </div>
        </CodeRow>
        <CodeRow>
          <div>
            <CodeLineNumber>28</CodeLineNumber> <Space /> <Space />
            <Space /> <Space /> <Space /> <Space />
            <Declaration>return</Declaration> <Space />
            <Signs>{`[`}</Signs> <Space /> <VarValues>'HTML'</VarValues>
            <Signs>,</Signs>
            <Space /> <VarValues>'CSS'</VarValues>
            <Signs>,</Signs>
            <Space /> <VarValues>'Javascript'</VarValues>
            <Signs>,</Signs> <Space /> <VarValues>'ReactJS'</VarValues>
            <Signs>,</Signs>
            <Space /> <VarValues>'Redux'</VarValues>
            <Signs>,</Signs>
            <Space /> <VarValues>'Python'</VarValues>
            <Signs>,</Signs> <Space /> <VarValues>'GIT'</VarValues>
            <Signs>,</Signs> <Space /> <VarValues>'npm/yarn'</VarValues>
            <Signs>,</Signs> <Space /> <VarValues>'Flask'</VarValues>
            <Signs>,</Signs> <Space /> <VarValues>'Docker'</VarValues> <Space />
            <Signs>{`]`}</Signs>
          </div>
        </CodeRow>
        <CodeRow>
          <div>
            <CodeLineNumber>29</CodeLineNumber> <Space /> <Space />
            <Space /> <Space />
            <Signs>{`}`}</Signs>
          </div>
        </CodeRow>
        <CodeRow>
          <div>
            <CodeLineNumber>30</CodeLineNumber> <Space /> <Space />
            <Signs>{`}`}</Signs> <Space />
            <TickingSpan>
              <span>|</span>
            </TickingSpan>
          </div>
        </CodeRow>
      </CodeContainer>
    </AboutDivSection>
  );
};

export default AboutMe;
