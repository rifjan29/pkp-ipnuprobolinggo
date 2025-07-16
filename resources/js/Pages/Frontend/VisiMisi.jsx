import IndicatorBar from "@/Components/frontend/indicator";
import { Card } from "@/Components/ui/card";
import FrontendLayout from "@/Layouts/FrontendLayout";
import { Head } from "@inertiajs/react";


export default function VisiMisi()
{
    return (
        <>
            <Head title="VIsi Misi"/>
            <FrontendLayout>
                <div className="container mx-auto my-20">
                    <Card className="rounded-none shadow-none">
                        <div className=" px-4 md:px-6 relative">
                            <div className="absolute inset-0 -z-0 h-full w-full  bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>

                            <div className="max-w-4xl mx-auto p-6 space-y-12 z-0 relative">
                                {/* Ketua IPNU */}
                                <section>
                                    <h2 className="font-heading text-2xl font-bold mb-2">VISI & MISI KETUA IPNU</h2>
                                    <div className="flex justify-start mb-5">
                                        <IndicatorBar/>
                                    </div>
                                    <div className="mb-4">
                                    <h3 className="font-semibold font-heading">Visi:</h3>
                                    <p>
                                        Menjadikan IPNU sebagai wadah pengembangan pelajar yang <strong>berkarakter</strong> Islami, <strong>berdaya saing</strong> global, dan <strong>berkontribusi</strong> aktif dalam <strong>membangun masyarakat</strong> yang <strong>berkeadilan</strong> dan <strong>berkemajuan</strong>.
                                    </p>
                                    </div>
                                    <div>
                                    <h3 className="font-semibold font-heading">Misi:</h3>
                                    <ol className="list-decimal list-inside space-y-1">
                                        <li>Memperkuat identitas keorganisasian</li>
                                        <li>Meningkatkan kualitas Sumber Daya Manusia (SDM)</li>
                                        <li>Meningkatkan peran aktif anggota</li>
                                        <li>Membangun kemitraan strategis</li>
                                        <li>Mengembangkan media dan teknologi informasi</li>
                                    </ol>
                                    </div>
                                </section>

                                {/* Ketua IPPNU */}
                                <section>
                                    <h2 className="text-2xl font-bold mb-2 font-heading">VISI & MISI KETUA IPPNU</h2>
                                    <div className="flex justify-start mb-5">
                                        <IndicatorBar/>
                                    </div>
                                    <div className="mb-4">
                                    <h3 className="font-semibold font-heading">Visi:</h3>
                                    <p>
                                        Mewujudkan IPPNU yang aktif, <strong>berdaya</strong>, dan <strong>berdampak</strong>, dengan program-program yang <strong>berkelanjutan</strong> untuk pengembangan <strong>anggota</strong> dan <strong>masyarakat</strong>.
                                    </p>
                                    </div>
                                    <div>
                                    <h3 className="font-semibold font-heading">Misi:</h3>
                                    <ol className="list-decimal list-inside space-y-1">
                                        <li>
                                        Membangun IPPNU yang <strong>berfokus</strong> pada pendidikan dan pemberdayaan <strong>anggota melalui</strong> program-program yang <strong>aplikatif</strong> dan <strong>berkelanjutan</strong>.
                                        </li>
                                        <li>
                                        Mengoptimalkan <strong>kolaborasi</strong> dengan berbagai pihak untuk <strong>menciptakan peluang</strong> bagi <strong>anggota</strong> dalam pengembangan diri dan <strong>karier</strong>.
                                        </li>
                                        <li>
                                        Menjaga <strong>konsistensi</strong> dan <strong>keberlanjutan</strong> program agar tidak hanya <strong>bersifat seremonial</strong>, tetapi <strong>memberi dampak jangka panjang</strong> bagi <strong>anggota</strong> dan <strong>masyarakat</strong>.
                                        </li>
                                    </ol>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </Card>
                </div>
            </FrontendLayout>
        </>
    )
}
