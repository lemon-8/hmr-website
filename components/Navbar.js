import { HStack } from '@chakra-ui/layout';
import {
	Menu,
	MenuButton,
	MenuList,
	MenuItem,
	MenuDivider,
} from '@chakra-ui/react';
import { IconButton } from '@chakra-ui/react';
import { HiMenuAlt4 } from 'react-icons/hi';
import { Image } from '@chakra-ui/react';
import { MdFastfood, MdPhoto } from 'react-icons/md';
import { scroller } from 'react-scroll';
import { MdFileDownload } from 'react-icons/md';
import { MdPhone } from 'react-icons/md';
import { FaConciergeBell } from 'react-icons/fa';
import { BsPhoneFill } from 'react-icons/bs';
import { useRouter } from 'next/router';

export default function NavBar() {
	const router = useRouter();

	return (
		<HStack
			zIndex="1"
			bg={{ base: 'white', md: 'transparent', lg: 'transparent' }}
			pt={{ base: '6', md: '2', lg: '12' }}
			px={{ base: '6', md: '2', lg: '28' }}
			pb={{ base: '6', md: '2', lg: '12' }}
			justifyContent="space-between"
			width="100%"
			minHeight="16"
			position="fixed"
		>
			<Image
				cursor="pointer"
				onClick={hero_section}
				width={{ base: '8', md: '8', lg: '12' }}
				src="hmrlogox100.png"
				alt="hmr logo"
			></Image>

			<Menu>
				<MenuButton
					as={IconButton}
					variant="solid"
					aria-label="Options"
					icon={<HiMenuAlt4 />}
				/>
				<MenuList>
					<MenuItem icon={<MdFastfood />} onClick={games_section}>
						Facilities
					</MenuItem>
					<MenuItem icon={<MdPhoto />} onClick={slideshow_photos}>
						Photos
					</MenuItem>
					<MenuItem
						icon={<FaConciergeBell />}
						onClick={scrollToSection}
					>
						Ammenities
					</MenuItem>

					<MenuItem icon={<BsPhoneFill />} onClick={ourApp}>
						Our App
					</MenuItem>
					<MenuDivider />
					<MenuItem
						icon={<MdFileDownload />}
						onClick={() => router.push('/download')}
					>
						Download App
					</MenuItem>
					<MenuItem icon={<MdPhone />} onClick={hmrForm}>
						Contact Us
					</MenuItem>
				</MenuList>
			</Menu>
		</HStack>
	);
}

const scrollToSection = () => {
	scroller.scrollTo('Ammenities_section', {
		duration: 800,
		delay: 0,
		smooth: 'easeInOutQuart',
	});
};

const ourApp = () => {
	scroller.scrollTo('ourApp', {
		duration: 800,
		delay: 0,
		smooth: 'easeInOutQuart',
	});
};

const hmrForm = () => {
	scroller.scrollTo('hmrForm', {
		duration: 800,
		delay: 0,
		smooth: 'easeInOutQuart',
	});
};

const slideshow_photos = () => {
	scroller.scrollTo('slideshow_photos', {
		duration: 800,
		delay: 0,
		smooth: 'easeInOutQuart',
	});
};

const games_section = () => {
	scroller.scrollTo('games_section', {
		duration: 800,
		delay: 0,
		smooth: 'easeInOutQuart',
	});
};

const hero_section = () => {
	scroller.scrollTo('hero_section', {
		duration: 800,
		delay: 0,
		smooth: 'easeInOutQuart',
	});
};
