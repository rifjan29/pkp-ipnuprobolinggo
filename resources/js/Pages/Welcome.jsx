import BlogSection from '@/Components/frontend/blog-section';
import Contact from '@/Components/frontend/contact';
import Divisi from '@/Components/frontend/divisi';
import HeroSlider from '@/Components/frontend/hero-slider';
import IndicatorBar from '@/Components/frontend/indicator';
import WelcomeMessage from '@/Components/frontend/welcome-massage';
import FrontendLayout from '@/Layouts/FrontendLayout';
import { Head, Link } from '@inertiajs/react';

export default function Welcome({ auth, laravelVersion, chairman }) {
    const handleImageError = () => {
        document
            .getElementById('screenshot-container')
            ?.classList.add('!hidden');
        document.getElementById('docs-card')?.classList.add('!row-span-1');
        document
            .getElementById('docs-card-content')
            ?.classList.add('!flex-row');
        document.getElementById('background')?.classList.add('!hidden');
    };
    const posts = [
    {
        id: 1,
        title: 'Boost your conversion rate',
        href: '#',
        description:
        'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
        date: 'Mar 16, 2020',
        datetime: '2020-03-16',
        category: { title: 'Marketing', href: '#' },
        author: {
        name: 'Michael Foster',
        role: 'Co-Founder / CTO',
        href: '#',
        imageUrl:
            'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
    },
    // More posts...
    ]

    return (
        <>
            <Head title="Home - PC IPNU & IPPNU Kota Probolinggo" />
            <FrontendLayout>
                <HeroSlider />
                <div className='container mx-auto dark:bg-gray-800 bg-white'>
                    <WelcomeMessage chairman={chairman} />
                </div>
                <section className="bg-emerald-800 dark:bg-gray-900">
                    <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6  space-y-3">
                        <h4 className='font-heading text-lg font-bold italic text-center text-white'>"Siapa yang mau mengurus NU, aku anggap dia santriku, dan siapa yang menjadi santriku aku doakan Khusnul Khotimah beserta anak cucunya."</h4>
                        <span className='text-center font-semibold font-body flex justify-center text-md text-yellow-400'>— Hadratussyeikh KH. Hasyim Asy'ari</span>
                    </div>
                </section>
                {/* SECTION DIVISI  */}
                <section className="w-full pt-20 md:pt-32 lg:py-40 overflow-hidden">
                    <div className=" px-4 md:px-6 relative">
                        <div className="absolute inset-0 -z-0 h-full w-full  bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
                        <Divisi/>
                    </div>
                </section>
                {/*END SECTION DIVISI  */}
                {/* SECTION BERITA & ARTIKEL  */}
                <section className="w-full pb-10 md:pb-10 lg:pb-10 overflow-hidden">
                    <div className=" px-4 md:px-6 relative">
                        <div className="absolute inset-0 -z-0 h-full w-full  bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
                        <div className="mx-auto max-w-7xl px-6 lg:px-8 container relative py-24 sm:py-32">
                            <div className="mx-auto max-w-2xl lg:mx-0">
                                <h2 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 dark:text-white sm:text-5xl">From the blog</h2>
                                <div className="flex justify-start mt-5">
                                    <IndicatorBar/>
                                </div>
                                <p className="mt-2 text-lg/8 text-gray-600">Learn how to grow your business with our expert advice.</p>
                            </div>
                            <div className="mx-auto mt-10 grid w-full grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none ">
                                <BlogSection/>

                            </div>
                        </div>

                    </div>
                </section>
                {/* END SECTION BERITA & ARTIKEL  */}

                {/* Kritik dan saran  */}
                <Contact/>

            </FrontendLayout>
        </>
    );
}
