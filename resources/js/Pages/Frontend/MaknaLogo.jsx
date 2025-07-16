import { Card } from "@/Components/ui/card";
import FrontendLayout from "@/Layouts/FrontendLayout";
import { Head } from "@inertiajs/react";
import { useState } from "react";


export default function MaknaLogo()
{
    const [isPlayingIpnu, setIsPlayingIpnu] = useState(false);
    const [isPlayingIppnu, setIsPlayingIppnu] = useState(false);

    const toggleAudio = (id, setPlaying, isPlaying) => {
        const audio = document.getElementById(id);
        if (isPlaying) {
        audio.pause();
        } else {
        audio.play();
        }
        setPlaying(!isPlaying);
    };
    return (
        <>
            <Head title="Makna Logo"/>
            <FrontendLayout>
                <div className="container mx-auto my-20">
                    <Card className="rounded-none shadow-none">
                        <div className=" px-4 md:px-6 relative">

                            <section className="bg-white dark:bg-gray-900 z-50">
                                <div className="max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                                <div className="lg:mt-0 lg:col-span-5 z-10">
                                    <img src="/frontend/logo.png" className="w-fit h-auto mx-auto z-10" alt="IPNU Logo" />
                                </div>
                                <div className="mr-auto place-self-center lg:col-span-7">
                                    <h1 className="font-heading max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-4xl dark:text-white">
                                    Sejarah Singkat IPNU
                                    </h1>
                                    <p className="mb-3 font-body leading-8 dark:text-gray-500 font-normal text-justify">
                                    Ikatan Pelajar Nahdlatul Ulama (disingkat IPNU) adalah badan otonom Nahdlatul Ulama yang berfungsi membantu melaksanakan kebijakan NU pada segmen pelajar dan santri putra.
                                    </p>
                                    <p className="mb-3 font-body leading-8 dark:text-gray-500 font-normal text-justify">
                                    IPNU didirikan di Semarang pada tanggal 20 Jumadil Akhir 1373 H/ 24 Februari 1954, yaitu pada Konbes LP Ma’arif NU. Pendiri IPNU adalah M. Shufyan Cholil (mahasiswa UGM), H. Musthafa (Solo), dan Abdul Ghony Farida (Semarang).
                                    </p>
                                    <p className="mb-3 font-body leading-8 dark:text-gray-500 font-normal text-justify">
                                    Ketua Umum Pertama IPNU adalah M. Tholhah Mansoer yang terpilih dalam Konferensi Segi Lima di Solo pada 30 April–1 Mei 1954.
                                    </p>
                                    <p className="mb-3 font-body leading-8 dark:text-gray-500 font-normal text-justify">
                                    Pada tahun 1988, IPNU mengubah kepanjangannya menjadi Ikatan Putra Nahdlatul Ulama. Namun, pada Kongres XIV di Surabaya (2003), kembali menjadi “Ikatan Pelajar Nahdlatul Ulama” dan bertekad mengembalikan basisnya di sekolah dan pesantren.
                                    </p>

                                    <h2 className="font-heading mb-2 text-lg font-semibold text-gray-900 dark:text-white">Latar Belakang Berdiri:</h2>
                                    <ul className="font-body max-full space-y-1 list-disc list-inside dark:text-gray-400">
                                    <li>Wadah perjuangan pelajar Nahdlatul Ulama dalam pendidikan dan kepelajaran.</li>
                                    <li>Wadah penguatan pelajar dalam mengembangkan Islam ahlussunah wal-jamaah.</li>
                                    <li>Wadah komunikasi pelajar untuk memperkokoh ukhuwah nahdliyah, islamiyah, insaniyah, dan wathoniyah.</li>
                                    </ul>

                                    <div className="mt-5">
                                    <button
                                        type="button"
                                        onClick={() => toggleAudio('marsIpnuAudio', setIsPlayingIpnu, isPlayingIpnu)}
                                        className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex items-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                                    >
                                        <svg className="w-4 h-4 text-white me-2" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M2 2h4L3.75 5h2.5L8.5 2h1.715l-2.25 3h2.5l2.25-3h1.715l-2.25 3h2.5l2.25-3H18v3h2V1a1 1 0 0 0-1-1H1a1 1 0 0 0-1 1v4h2V2ZM0 7v12a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V7H0Zm12.76 6.458-4.818 3.43A.593.593 0 0 1 7 16.429V9.571a.593.593 0 0 1 .942-.459l4.818 3.43a.557.557 0 0 1 0 .916Z" />
                                        </svg>
                                        {isPlayingIpnu ? 'Pause!' : 'Putar Mars IPNU'}
                                    </button>
                                    <audio id="marsIpnuAudio" src="/frontend/mars-ipnu.mp3" />
                                    </div>
                                </div>
                                </div>
                            </section>

                            <section className="bg-white dark:bg-gray-900">
                                <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                                <div className="mr-auto place-self-center lg:col-span-7">
                                    <h1 className="font-heading max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-4xl dark:text-white">Sejarah Singkat IPPNU</h1>
                                    <p className=" font-body mb-3 leading-8 dark:text-gray-500 font-normal text-justify">
                                    Kelahiran IPPNU adalah pada waktu kongres pertama IPNU, yaitu tanggal 2 Maret 1955 bertepatan dengan 8 Rajab 1374. IPPNU awalnya bagian dari departemen keputrian IPNU, kemudian berdiri sendiri berkat dukungan dari Umroh Mahfudhoh, Nyai Hajah Mahmudah Mawardi, dan K.H. Syukri Ghazali. Umroh Mahfudhoh menjadi ketua umum pertama IPPNU.
                                    </p>

                                    <div>
                                    <button
                                        type="button"
                                        onClick={() => toggleAudio('marsIppnuAudio', setIsPlayingIppnu, isPlayingIppnu)}
                                        className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex items-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                                    >
                                        <svg className="w-4 h-4 text-white me-2" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M2 2h4L3.75 5h2.5L8.5 2h1.715l-2.25 3h2.5l2.25-3h1.715l-2.25 3h2.5l2.25-3H18v3h2V1a1 1 0 0 0-1-1H1a1 1 0 0 0-1 1v4h2V2ZM0 7v12a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V7H0Zm12.76 6.458-4.818 3.43A.593.593 0 0 1 7 16.429V9.571a.593.593 0 0 1 .942-.459l4.818 3.43a.557.557 0 0 1 0 .916Z" />
                                        </svg>
                                        {isPlayingIppnu ? 'Pause!' : 'Putar Mars IPPNU'}
                                    </button>
                                    <audio id="marsIppnuAudio" src="/frontend/mars-ippnu.mp3" />
                                    </div>
                                </div>
                                <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                                    <img src="/frontend/logo-ippnu.png" className="w-fit h-full mx-auto" alt="IPPNU Logo" />
                                </div>
                                </div>
                            </section>
                        </div>
                    </Card>
                </div>
            </FrontendLayout>
        </>
    )
}
