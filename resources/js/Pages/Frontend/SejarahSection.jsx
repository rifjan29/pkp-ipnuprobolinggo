import IndicatorBar from "@/Components/frontend/indicator"
import { Card, CardHeader } from "@/Components/ui/card"
import FrontendLayout from "@/Layouts/FrontendLayout"
import { Head } from "@inertiajs/react"


export default function SejarahSection()
{
    const leadersIPNU = [
        "H. Badrus Zaman, S.E.",
        "Yusuf Zainal Kubro, S.Pd.",
        "Abdullah Zabut, S.Pd.",
        "Musthofa Baqir, S.Ag.",
        "Abdul Karim Zain, S.Pd.",
        "M. Syahroni",
        "Didik Hariyanto, S.Pd.",
        "Imam Muhtadi, S.Pd.",
        "Mashuri Nurzah, S.Pd., MM.",
        "Abd Jalal, S.Pd.",
        "Anton, S.Sos.",
        "Muhammad Fathur Rozi, S.Sos.",
        "Muhammad Rizal Ali, S.T.",
        "Ahmad Ainul Yaqin, S.Pd.",
        "Muhammad Arif (Sekarang)",
    ];

    const leadersIPPNU = [
        "Farida Subowo",
        "Nur Fadilah Walqur Ani, S.Ag",
        "Musyarofa Ubaidi, S.Ag., M.Pd.I",
        "Fifit Syamur R",
        "Wahyuni Hidayati, S.Ag",
        "Nur Hasanah, S.Pd",
        "Khoirun Nisa",
        "Musyrifatul Mukarromah, S.Pd.I",
        "Nur Baiti As Shiddiqi",
        "Evi Kumalasari",
        "Winda Badiatul Jamilah, S.Pd.",
        "Fita Mar’atus Sholihah",
        "Dinastia Iriani Azzahro (Sekarang)",
    ];
    return (
        <>
            <Head title="Sejarah - PC IPNU IPPNU Kota Probolling"/>
            <FrontendLayout>
                <div className="bg-emerald-800 py-12 px-4">
                    <div className="max-w-6xl mx-auto text-center">
                    <h1 className="font-heading text-3xl md:text-4xl font-bold text-white dark:text-gray-800 mb-4">SEJARAH PC IPNU IPPNU KOTA PROBOLINGGO</h1>
                    <div className="flex justify-center my-5">
                        <IndicatorBar/>
                    </div>
                    </div>
                </div>
                <div className="container mx-auto py-5">
                    <h4 className="font-heading"></h4>
                    <Card className="shadow-none rounded-sm">
                        <div className=" px-4 md:px-6 relative">
                            <div className="absolute inset-0 -z-0 h-full w-full  bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
                            <div className="mx-auto max-w-7xl container relative py-24 sm:py-10">
                                <div className="mx-auto max-w-2xl lg:mx-0">
                                    <h2 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 dark:text-white sm:text-5xl">Latar Sejarah Nasional dan Kelahiran IPNU-IPPNU</h2>
                                    <div className="flex justify-start mt-5">
                                        <IndicatorBar/>
                                    </div>
                                </div>
                                <p className="font-body mt-10 text-lg/8 text-gray-900 indent-8 text-justify">
                                Ikatan Pelajar Nahdlatul Ulama (IPNU) dan Ikatan Pelajar Putri Nahdlatul Ulama (IPPNU) merupakan organisasi pelajar di bawah naungan Nahdlatul Ulama yang berdiri sebagai respon terhadap kebutuhan akan kader-kader muda yang mampu melanjutkan perjuangan ulama dalam menjaga dan menyebarkan ajaran Ahlus Sunnah Wal Jamaah. Kelahirannya pada 24 Februari 1954 di Semarang dilandasi oleh kebutuhan idiologis, paedagogis, dan sosiologis akan wadah yang menyatukan pelajar-pelajar NU dari berbagai daerah di Indonesia.
                                </p>
                                <p className="font-body mt-10 text-lg/8 text-gray-900 indent-8 text-justify">
Sebelum lahirnya IPNU secara resmi, telah berkembang berbagai organisasi pelajar bersifat lokal di beberapa wilayah seperti Surabaya, Malang, Madura, dan Bangil. Diantaranya adalah Tsamrotul Mustafidin (Surabaya, 1936), PERSANU (1939), Ikatan Murid NU (1941), hingga IJMAUTTOLABIAH (Madura, 1945). Organisasi ini menjadi fondasi awal terbentuknya IPNU dan IPPNU secara nasional.
                                </p>
                            </div>
                            <div className="mx-auto max-w-7xl container relative py-24 sm:py-10">
                                <div className="mx-auto max-w-2xl lg:mx-0">
                                    <h2 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 dark:text-white sm:text-5xl">Tentang IPNU IPPNU Kota Probolinggo</h2>
                                    <div className="flex justify-start mt-5">
                                        <IndicatorBar/>
                                    </div>
                                </div>
                                <p className="font-body mt-10 text-lg/8 text-gray-900 indent-8 text-justify">
                                    Kehadiran IPNU dan IPPNU di Kota Probolinggo tidak lepas dari semangat yang sama dalam menyemai kader-kader muda Nahdliyin yang siap berkontribusi dalam bidang keagamaan, pendidikan, dan sosial kemasyarakatan. Bermula pada tahun 1990, sebagai hasil dari inisiatif para santri dari beberapa pesantren terkemuka di wilayah tersebut, khususnya Pesantren Nurul Jadid. Para santri yang tergabung dalam wadah Forum Komunikasi Santri (FKS) memiliki pandangan jauh ke depan bahwa diperlukan sebuah organisasi kepemudaan yang tidak hanya menampung aspirasi pelajar, tetapi juga memperkuat identitas ke-NU-an (An Nahdliyyah).
                                </p>
                                <p className="font-body mt-4 text-lg/8 text-gray-900 indent-8 text-justify">
                                    Dalam forum tersebut, muncul gagasan untuk menghadirkan organisasi pelajar berbasis Ahlus Sunnah wal Jamaah, yang secara struktural sudah mapan di tingkat nasional, yaitu IPNU (Ikatan Pelajar Nahdlatul Ulama) dan IPPNU (Ikatan Pelajar Putri Nahdlatul Ulama).
                                </p>
                                <p className="font-body mt-4 text-lg/8 text-gray-900 indent-8">Tokoh-tokoh sentral yang mempelopori pembentukan IPNU IPPNU di Kota Probolinggo pada saat itu antara lain:
                                    <ul className="max-w-full space-y-1 text-gray-900 list-disc list-inside dark:text-gray-400">
                                        <li>
                                            Alm. Ibnu Khalid (promotor utama),
                                        </li>
                                        <li>
                                        Gus Zabut (Abdullah Zabut),
                                        </li>
                                        <li>
                                            H. Badrus, dan
                                        </li>
                                        <li>
                                        Beberapa rekan santri lainnya yang aktif dalam dakwah dan pendidikan.
                                        </li>
                                    </ul>
                                </p>
                                <p className="font-body mt-4 text-lg/8 text-gray-900 indent-8 text-justify">
                                    Mereka mulai merintis pergerakan IPNU-IPPNU secara informal melalui diskusi dan kegiatan bersama
                                    di lingkungan pesantren. Upaya tersebut kemudian diformalisasi tiga tahun kemudian. Pada tahun
                                    1993, baik IPNU maupun IPPNU secara resmi mengajukan surat pengesahan ke Pimpinan Pusat,
                                    sebagai bentuk legitimasi struktural. Sejak saat itu, IPNU-IPPNU Kota Probolinggo mulai aktif
                                    melaksanakan kaderisasi, kegiatan sosial, serta partisipasi dalam penguatan pelajar NU di wilayahnya.
                                </p>
                                <hr />
                                <div className="grid md:grid-cols-2 gap-8">
                                    <div>
                                    <h2 className="font-heading text-xl font-semibold mb-4">Kepemimpinan IPNU Kota Probolinggo</h2>
                                    <ol className="list-decimal list-inside space-y-1 font-body mt-4 text-lg/8 text-gray-900 indent-8 text-justify">
                                        {leadersIPNU.map((name, index) => (
                                        <li key={index}>{name}</li>
                                        ))}
                                    </ol>
                                    </div>

                                    <div>
                                    <h2 className="font-heading text-xl font-semibold mb-4">Kepemimpinan IPPNU Kota Probolinggo</h2>
                                    <ol className="list-decimal list-inside space-y-1 font-body mt-4 text-lg/8 text-gray-900 indent-8 text-justify">
                                        {leadersIPPNU.map((name, index) => (
                                        <li key={index}>{name}</li>
                                        ))}
                                    </ol>
                                    </div>
                                </div>

                                <div className="font-body mt-4 text-lg/8 text-gray-900 indent-8 text-justify">
                                    <p>
                                    Dalam beberapa dekade terakhir, IPNU-IPPNU Kota Probolinggo terus menunjukkan eksistensinya melalui
                                    kegiatan kaderisasi, seperti <strong>Makesta</strong> (Masa Kesetiaan Anggota), <strong>Lakmud</strong> (Latihan Kader Muda),
                                    dan <strong>Lakut</strong> (Latihan Kader Utama), serta berbagai kegiatan sosial dan keagamaan yang menyentuh
                                    langsung kehidupan masyarakat pelajar.
                                    </p>
                                    <p className="mt-2">
                                    Hal ini menunjukkan bahwa IPNU-IPPNU di Probolinggo tidak hanya sekadar simbol keorganisasian, namun telah
                                    menjadi ruang pembinaan kader yang aktif, progresif, dan dinamis.
                                    </p>
                                </div>

                            </div>
                        </div>
                    </Card>
                </div>

            </FrontendLayout>

        </>
    )
}
