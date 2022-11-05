import { Box, Header } from 'grommet';
import Link from 'next/link';

export default function NavBar() {
  return (
    <Header
      pad='medium'
      style={{ position: 'sticky', top: '0' }}
    >
      <Box direction='row' gap='medium'>
        <Link href='/portfolio'>Portfolio</Link>
        <Link href='/coins'>Coins</Link>
      </Box>
    </Header>
  )
}