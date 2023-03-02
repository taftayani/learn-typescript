import Image from 'next/image';
import { Inter } from '@next/font/google';
import styles from '@/styles/Home.module.css';
import Header from '../component/Header';
import Link from 'next/link';
import { Typography, Input } from 'antd';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
	return (
		<>
			<Header title={'Home'} />
			<Typography.Title className="!text-6xl text-right !text-yellow-300">TES</Typography.Title>
			<Input placeholder="please input text"></Input>
			<main className={styles.main}>
				<Link href={'/detail'}>Go to details</Link>
			</main>
		</>
	);
}
