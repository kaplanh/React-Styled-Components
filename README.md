# React Styled Components Example

[:point_right: Click here to see on browser](https://react-styled-components-ten.vercel.app/)

![react styled-components](https://github.com/kaplanh/React-Styled-Components/assets/101884444/c9973af2-a959-421d-ae77-4fb20b17b340)



---

| **What's used in this app ?**                                                      | **How use third party libraries** | **Author**                                                    |
| ---------------------------------------------------------------------------------- | --------------------------------- | ------------------------------------------------------------- |
| [React Styled Components](https://styled-components.com/docs/basics)                               | npm i/yarn add styled-components                                  | [Take a look at my portfolio](https://kaplanh.github.io/Portfolio_with_CssFlex/)                                                                                 |
|  [React icons](https://www.npmjs.com/package/react-icons)        |             |     [Visit me on Linkedin](https://www.linkedin.com/in/kaplan-h/)                                                                              |
| [Semantic-Commits](https://gist.github.com/joshbuchea/6f47e86d2510bce28f8e7f42ae84c716) |                                   |                                                                                  |
|  Deploy with [Vercel](https://vercel.com/kaplanh)        |             |                                                                                  |

---

## How To Run This Project 🚀

<br/>

### 💻 Install React 👇

```bash
yarn create react-app .  or npx create-react-app .
```

### 💻 Install Sass 👇

```bash
yarn add sass  or npm i sass
```

## 🔴 Delete these files and delete the imports👇

    - App.test.js
    - reportWebVitals.js
    - setupTests.js
    - favicon.ico
    - logo192.png
    - logo512.png
    - manifest.json
    - robots.txt

### 💻 Start the project 👇

```bash
yarn start or npm start
```

OR

-   <strong>Clone the Repo</strong>

    ```sh
    git clone
    ```

-   <strong>Install NPM packages</strong>

    ```sh
    npm install or yarn
    ```

-   <strong>Run the project</strong>

    ```sh
    npm start or yarn start
    ```

-   <strong>Open the project on your browser</strong>

    ```sh
    http://localhost:3000/
    ```

-   ### <strong>Enjoy! 🎉</strong>

---

## Project Skeleton

```
 reaact styleed components-example(folder)
|
|----public (folder)
│     └── index.html
│     └── images(folder)
|----src (folder)
│    │
│    ├--- components(folder)
│    |        ├--- styles (folder)
|    |        |     |
│    |        |     ├---Button.styled.jsx
│    |        |     ├---Card.styled.jsx
│    |        |     ├---Container.styled.jsx
│    |        |     ├---Flex.styled.jsx
│    |        |     ├---Footer.styled.jsx
│    |        |     ├---GlobalStyles.jsx
│    |        |     ├---Header.styled.jsx
│    |        |     ├---SocialIcons.styled.jsx
|    |        |
|    |        |--- Card.jsx
|    |        |--- Footer.jsx
|    |        |--- Header.jsx
|    |        |--- SocialIcons.jsx
|    |        
|    |        
│    ├--- App.js
│    ├--- data.js
│    |--- index.js
│
│
|── .gitignore
|── package-lock.json
├── package.json
|── README.md
|── yarn.lock


```

---

### At the end of the project, the following topics are to be covered;

- styled-components  ThemeProvider & theme

```jsx
import Header from "./components/Header";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/styles/GlobalStyles";
import data from "./data";
import Card from "./components/Card";
import Footer from "./components/Footer";
import Container from "./components/styles/Container.styled";

const theme = {
    colors: {
        header: "#fff",
        body: "#fff",
        footer: "#8A1C4A",
        primary: "#bebe",
        secondary: "#dde0e2ed",
    },
    responsive: "768px",
    breakpoints: { xs: "300px", sm: "500px", md: "700px" },
    margin: {},
    padding: {},
};
const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <Header />
            <Container>
                {data.map((item, index) => {
                    return <Card {...item} key={index} />;
                })}
            </Container>
            <Footer />
        </ThemeProvider>
    );
};

export default App;

2.asama
//Flex.styled.jsx
import styled from "styled-components";

const Flex = styled.div`
    display: flex;
    align-items: center;
    gap: 2rem;
    & > div,
    & > ul {
        /*!Tüm elemanların buyumesine izin ver*/
        flex-grow: 1;
        /* Tüm div'lerin eşit miktarda alan tutabilmesine izin ver.*/
        flex-basis: 0;
    }
    @media (max-width: ${({ theme }) => theme.responsive}) {
        flex-direction: column;
        text-align: center;
    }

   
`;

export default Flex;



```


- styled-components div

```jsx
1.asama
//Container.styled.jsx

import styled from "styled-components";

const Container = styled.div`
    width: 1000px;
    max-width: 100%;
    padding: 0 20px;
    margin: 0 auto;
`;

export default Container;

2.asama
//App.jsx
import Container from "./components/styles/Container.styled";

const App = () => {
    return (
      
            <Container>
                {data.map((item, index) => {
                    return <Card {...item} key={index} />;
                })}
            </Container>

    );
};

export default App;



```
- styled-components props & extend & css

```jsx
1.asama
//Button.styled.jsx

//! escb ile buttondan component olusturma kisayolu


import styled, { css } from "styled-components";

const Button = styled.button`
    background-color: ${({ bg }) => bg || "#fff"};
    color: ${({ color }) => color || "#fff"};
    border: 1px solid #a62440;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
    padding: 1rem 1.2rem;
    font-size: 1.1rem;
    margin-right: 0.5rem;
    margin: 2rem 0.5rem;
    cursor: pointer;
    &:hover {
        opacity: 0.9;
        transform: scale(0.98);
    }

    /* !bg property e sahip olana css yardimiyla birden fazla özellikte verebiliriz */
    
    /* ${({ bg }) =>
        bg &&
        css`
            background-color: #a62440;
            color: #fff;
            border: 1px solid #a62440;
            border-radius: 5px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
            padding: 1rem 1.2rem;
            font-size: 1.1rem;
            margin-right: 0.5rem;
            margin: 2rem 0.5rem;
            cursor: pointer;
            &:hover {
                opacity: 0.9;
                transform: scale(0.98);
            }
        `} */
`;

export default Button;


//! extends yukardaki button'un tüm özelliklerini alip istediklerimi degistirebiliyor yada ek özellik ekleyebiliyorum
// export const DarkButton = styled(Button)`
//     background-color: white;
//     color: red;
//     border: 2px solid red;
// `;

2.asama
//Header.jsx
import Button from "./styles/Button.styled";
import Container from "./styles/Container.styled";
import Flex from "./styles/Flex.styled";
import StyledHeader, { Image, Logo, Nav } from "./styles/Header.styled";

const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <Nav>
                    <Logo src="./images/logo.png"></Logo>
                    <div>
                        <Button color="#A62440">Apply Courses</Button>
                        <Button primary bg="#A62440">Talk to Adviser</Button>
                    </div>
                </Nav>

                <Flex>
                    <div>
                        <h1>The IT Career of Your Dreams Starts Here!</h1>
                        <p>
                            Clarusway is a leading international software
                            Bootcamp. Join a micro class online with other
                            trainees and learn coding skills with a
                            highly-skilled instructor.
                        </p>
                        <Button bg="#A62440">Start Your New Carier</Button>
                    </div>
                    <Image src="./images/hero.jpg"></Image>
                </Flex>
            </Container>
        </StyledHeader>
    );
};

export default Header;




```


-   Semantic Commit Messages
    See how a minor change to your commit message style can make you a better programmer.

    Format: <type>(<scope>): <subject>

    <scope> is optional

    -   Example

    ```
                feat: add hat wobble
        ^--^  ^------------^
        |     |
        |     +-> Summary in present tense.
        |
        +-------> Type: chore, docs, feat, fix, refactor, style, or test.
    ```

-   More Examples:
    -   `feat`: (new feature for the user, not a new feature for build script)
    -   `fix`: (bug fix for the user, not a fix to a build script)
    -   `docs`: (changes to the documentation)
    -   `style`: (formatting, missing semi colons, etc; no production code change)
    -   `refactor`: (refactoring production code, eg. renaming a variable)
    -   `test`: (adding missing tests, refactoring tests; no production code change)
    -   `chore`: (updating grunt tasks etc; no production code change)

---

## Feedback and Collaboration

I value your feedback and suggestions. If you have any comments, questions, or ideas for improvement regarding this project or any of my other projects, please don't hesitate to reach out.
I'm always open to collaboration and welcome the opportunity to work on exciting projects together.
Thank you for visiting my project. I hope you have a wonderful experience exploring it, and I look forward to connecting with you soon!

<p align="center"> ⌛<strong> Happy Coding </strong> ✍ </p>
