import { ArrowRight, BarChart2, Calendar, CheckCircle, Clock, Headphones, Music, Users } from "lucide-react"
import EnhancedProfileCard from "./profile-header"
import { GlowingEffect } from "./glowing-effect"
import IndicatorBar from "./indicator"
import { motion, useScroll, useTransform } from "framer-motion"
import { Badge } from "../ui/badge"

export default function WelcomeMessage({ chairman }) {
    const achievements = [
        { icon: <Headphones className="w-6 h-6 text-gray-900" />, label: "Years of Experience", value: "VISI" },
        { icon: <Music className="w-6 h-6 text-gray-900" />, label: "Tracks Produced", value: "MISI" },
    ]

    return (
        <>
            <div className="py-24 sm:py-32">
            <div className="mx-auto w-full px-6 lg:px-8 md:flex">
                <div className="md:flex-shrink-0 md:w-2/4 content-center items-center">
                    <div className="mx-auto grid w-full items-center gap-2 py-12 lg:grid-cols-2 lg:gap-3">
                        <div className="relative min-h-[14rem]">
                            <div className="relative h-full rounded-[1.25rem] border-[0.75px] border-border p-2 md:rounded-[1.5rem] md:p-3">
                                <GlowingEffect
                                    spread={40}
                                    glow={true}
                                    disabled={false}
                                    proximity={64}
                                    inactiveZone={0.01}
                                    borderWidth={3}
                                />
                                <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl border-[0.75px] bg-background p-6 shadow-sm dark:shadow-[0px_0px_27px_0px_rgba(45,45,45,0.3)] md:p-6">
                                    <div className="relative flex flex-1 flex-col justify-between gap-3">
                                    <div className="w-fit rounded-lg border-[0.75px] border-border bg-muted p-2">
                                        <img src={"https://images.unsplash.com/photo-1585036156171-384164a8c675?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"} alt={name} className="w-full aspect-square object-cover object-center" />
                                    </div>
                                    <div className="space-y-3">
                                        <Badge variant="primary">KETUA IPNU</Badge>
                                        <h3 className="font-heading pt-0.5 text-xl leading-[1.375rem] font-semibold tracking-[-0.04em] md:text-2xl md:leading-[1.875rem] text-balance text-foreground">
                                        MUHAMMAD FAUZAN
                                        </h3>
                                        <span className="text-xs text-gray-400">Periode : 2025-2026</span>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                         <div className="relative min-h-[14rem]">
                            <div className="relative h-full rounded-[1.25rem] border-[0.75px] border-border p-2 md:rounded-[1.5rem] md:p-3">
                                <GlowingEffect
                                    spread={40}
                                    glow={true}
                                    disabled={false}
                                    proximity={64}
                                    inactiveZone={0.01}
                                    borderWidth={3}
                                />
                                <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl border-[0.75px] bg-background p-6 shadow-sm dark:shadow-[0px_0px_27px_0px_rgba(45,45,45,0.3)] md:p-6">
                                    <div className="relative flex flex-1 flex-col justify-between gap-3">
                                    <div className="w-fit rounded-lg border-[0.75px] border-border bg-muted p-2">
                                        <img src={"https://images.unsplash.com/photo-1585036156171-384164a8c675?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"} alt={name} className="w-full aspect-square object-cover object-center" />
                                    </div>
                                    <div className="space-y-3">
                                        <Badge variant="primary">KETUA IPPNU</Badge>
                                        <h3 className="font-heading pt-0.5 text-xl leading-[1.375rem] font-semibold tracking-[-0.04em] md:text-2xl md:leading-[1.875rem] text-balance text-foreground">
                                        SITI AMINA
                                        </h3>
                                        <span className="text-xs text-gray-400">Periode : 2025-2026</span>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="px-8 md:w-2/3">
                    <div className="flex justify-center z-10">
                    <span className="text-emerald-400 font-extrabold text-md text-center">اَلسَّلَامُ عَلَيْكُمْ وَرَحْمَةُ اللهِ وَبَرَكَا تُهُ</span>
                    </div>
                    <h3 className="font-heading text-center pt-0.5 text-xl leading-[1.375rem] font-extrabold tracking-[-0.04em] md:text-2xl md:leading-[1.875rem] text-balance text-foreground">PIMPINAN CABANG IPNU - IPPNU Kota Probolinggo</h3>
                    <div className="flex justify-center z-10 mt-5">
                    <IndicatorBar/>
                    </div>
                    <div className="py-10">
                        <p className="font-body text-md text-gray-500">Ikatan Pelajar Nahdlatul Ulama (IPNU) dan Ikatan Pelajar Putri Nahdlatul Ulama (IPPNU) adalah organisasi kepemudaan yang beranggotakan pelajar, santri dan remaja yang berada di bawah naungan Nahdlatul Ulama.</p>
                    </div>
                    <div className="grid grid-cols-1 gap-6">
                        {achievements.map((achievement, index) => (
                            <motion.div
                            key={achievement.label}
                            className="bg-white rounded-lg p-4 border border-gray/10"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            >
                            <div className="flex items-center mb-2">
                                <div className="mr-2 text-white">{achievement.icon}</div>
                                <div className="text-2xl font-bold">{achievement.value}</div>
                            </div>
                            <div className="text-sm text-zinc-400">{achievement.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
            </div>
            <div className="mx-auto grid w-full items-center gap-6 py-12 lg:grid-cols-4 lg:gap-5">
                {[
                {
                    icon: BarChart2,
                    title: "PAC & PKPT",
                    description: "Track your project progress with detailed analytics and insights",
                },
                {
                    icon: Users,
                    title: "Pimpinan Komisariat",
                    description: "Work together seamlessly with your team members on projects",
                },
                {
                    icon: Calendar,
                    title: "Pimpinan Rating",
                    description: "Plan your tasks and meetings with an intuitive calendar",
                },
                {
                    icon: CheckCircle,
                    title: "Jumlah Anggota",
                    description: "Create, assign, and track tasks with ease",
                },
                ].map((feature, index) => (
                <div key={index} className="relative min-h-[14rem]">
                    <div className="relative h-full rounded-[1.25rem] border-[0.75px] border-border p-2 md:rounded-[1.5rem] md:p-3">
                    <GlowingEffect
                        spread={40}
                        glow={true}
                        disabled={false}
                        proximity={64}
                        inactiveZone={0.01}
                        borderWidth={3}
                    />
                    <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl border-[0.75px] bg-background p-6 shadow-sm dark:shadow-[0px_0px_27px_0px_rgba(45,45,45,0.3)] md:p-6">
                        <div className="relative flex flex-1 flex-col justify-between gap-3">
                        <div className="w-fit rounded-lg border-[0.75px] border-border bg-muted p-2">
                            <feature.icon className="h-6 w-6 text-primary" />
                        </div>
                        <div className="space-y-3">
                            <h3 className="pt-0.5 text-xl leading-[1.375rem] font-semibold font-sans tracking-[-0.04em] md:text-2xl md:leading-[1.875rem] text-balance text-foreground">
                            {feature.title}
                            </h3>
                            <p className="[&_b]:md:font-semibold [&_strong]:md:font-semibold font-sans text-sm leading-[1.125rem] md:text-base md:leading-[1.375rem] text-muted-foreground">
                            {feature.description}
                            </p>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                ))}
            </div>
        </>
    )
}
