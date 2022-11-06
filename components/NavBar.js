import { Box, Header, Text } from 'grommet';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '../styles/NavBar.module.css'

export default function NavBar() {
  const router = useRouter()

  const pageButton = (name, route) => (
    <Text color={router.route === route && 'focus'} weight={400}>
      <Link href={route}>{name}</Link>
    </Text>
  )

  return (
    <Header
      className={styles.container}
      pad='medium'
      border={{ color: 'focus', side: 'bottom', size: 'small' }}
    >
      <Box direction='row' gap='large' align='end'>
        <Link href='/portfolio'>
          <Box direction='row' focusIndicator={false}>
            <Text size='1.6rem'>Crypto</Text>
            <Text color='focus' size='1.6rem' weight={600}>Tracker</Text>
          </Box>
        </Link>
        <Box direction='row' gap='medium'>
          {pageButton('Portfolio', '/portfolio')}
          {pageButton('Coins', '/coins')}
        </Box>
      </Box>
    </Header>
  )
}