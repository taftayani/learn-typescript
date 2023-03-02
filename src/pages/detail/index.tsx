import { Inter } from '@next/font/google';
import Link from 'next/link';
import Header from '@/component/Header';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
	return (
		<>
			<Header title={'Home'} />
			<Link href={'/'}>Go back Home</Link>
			<h1>List of Details</h1>
		</>
	);
}
