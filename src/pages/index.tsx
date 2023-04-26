import styles from '@/styles/Home.module.css';
import Link from 'next/link';
import { Typography, Input, Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '@/store/counter/counterSlice';
import { RootState } from '@/store';
import Header from '@/component/Header';

export default function Home() {
	const dispatch = useDispatch();
	const count = useSelector((state: RootState) => state.counter.value);
	return (
		<>
			<Header title={'Home'} />
			<Typography.Title className="!text-6xl text-right !text-yellow-300">TES</Typography.Title>
			<Input placeholder="please input text"></Input>
			<Button onClick={() => dispatch(increment())}>Tambah</Button>
			<Typography.Text className="">{count}</Typography.Text>
			<Button onClick={() => dispatch(decrement())}>kurang</Button>
			<main className={styles.main}>
				<Link href={'/detail'}>Go to details</Link>
			</main>
		</>
	);
}
