import { Anchor, Box, Footer, Grommet, Text } from "grommet";
import NavBar from "./NavBar";

export default function Layout({ children }) {
  return (
    <Grommet full>
      <NavBar />
      <main>
        <Box pad='medium' gap='medium' margin={{ top: 'small' }}>
          {children}
        </Box>
      </main>
      <Footer background='var(--extra-dark-blue)' pad='medium'>
        <Text>Copyright 2022 Serge Andriessen - Creative Commons Attribution Non Commercial</Text>
        <Anchor color='focus' label='GitHub' href="https://github.com/serg-and/IoT-2022-next-fire"/>
      </Footer>
    </Grommet>
  )
}
