import { Box, Grommet } from "grommet";
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
      {/* <div>This is the footer</div> */}
    </Grommet>
  )
}
