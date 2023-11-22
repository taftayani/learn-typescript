import { Typography } from 'antd';
import Link from 'next/link';
import React from 'react';

function Navbar() {
	return (
		<>
			<div className="flex items-center justify-between p-6 bg-gray-300">
				<Typography className="text-3xl text-slate-800">BacaAku</Typography>
				<div className="flex items-center gap-8">
					<Link href={''} className="text-sm text-slate-500">
						Lihat artikel
					</Link>
					<Link href={''} className="text-sm text-slate-500">
						Masuk
					</Link>
					<Link href={''} className="text-sm text-slate-500">
						Daftar Akun
					</Link>
				</div>
			</div>
		</>
	);
}

export default Navbar;
