import Image from 'next/image';
import Link from 'next/link';

import { WalletControlBar } from '../../features/wallet/WalletControlBar';
import Logo from '../../images/logos/app-logo.svg';
import Name from '../../images/logos/app-name.svg';
import Bridge from '../../images/logos/app-title.png';

export function Header() {
  return (
    <header className="pt-3 pb-2 w-full">
      <div className="flex items-center justify-between">
        <Link href="/" className="flex items-center max-w-[6rem] sm:max-w-none">
          <Image src={Logo} width={20} alt="" />
          <Image src={Name} width={110} alt="" className="mt-0.5 ml-2" />
          <Image src={Bridge} width={104} alt="Bridge" className="mt-0.5 ml-2" />
        </Link>
        <WalletControlBar />
      </div>
    </header>
  );
}
