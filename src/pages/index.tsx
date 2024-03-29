import styles from '@/styles/Home.module.css';
import Link from 'next/link';
import { Typography, Input, Button, Spin } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '@/store/counter/counterSlice';
import { RootState } from '@/store';
import Header from '@/component/Header';
import MainLayout from '@/component/Layout/MainLayout';
import { useListUsers } from '@/component/Pages/UserList/hooks/useUserList';
import axios from 'axios';

export default function Home() {
	const dispatch = useDispatch();
	const count = useSelector((state: RootState) => state.counter.value);

	const { data: listUser, isLoading } = useListUsers();
	return (
		<>
			<MainLayout>
				<Spin spinning={isLoading}>
					<Header title={'Home'} />
					<Typography.Title className="!text-6xl text-right !text-yellow-300">TES</Typography.Title>
					<Input placeholder="please input text"></Input>
					<Button onClick={() => dispatch(increment())}>Tambah</Button>
					<Typography.Text className="">{count}</Typography.Text>
					<Button onClick={() => dispatch(decrement())}>kurang</Button>
					<main className={styles.main}>
						<Link href={'/detail'}>Go to details</Link>

						<h1>tes 1</h1>
						<h3>tes3</h3>
					</main>

					{listUser?.data?.map((list: any) => {
						return (
							<>
								<li>{list?.title}</li>
							</>
						);
					})}
				</Spin>
			</MainLayout>
		</>
	);
}
