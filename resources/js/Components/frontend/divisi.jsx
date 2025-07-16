import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import IndicatorBar from "./indicator"

export default function Divisi() {
  return (
    <div className=" py-24 sm:py-32">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8  container relative ">

        <p className="font-heading z-10 mx-auto mt-2 max-w-lg text-center text-4xl font-extrabold tracking-tight text-balance sm:text-5xl ">
            Kenali Ragam Divisi di IPNU IPPNU
        </p>
        <div className="flex justify-center z-10 mt-5">
        <IndicatorBar/>
        </div>
        <Tabs defaultValue="ipnu" className="w-fit mt-10">
            <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="ipnu">IPNU</TabsTrigger>
                <TabsTrigger value="ippnu">IPPNU</TabsTrigger>
            </TabsList>
            <TabsContent value="ipnu">
                <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
                    <div className="relative lg:row-span-2">
                        <div className="absolute inset-px rounded-lg bg-white lg:rounded-l-4xl"></div>
                        <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
                        <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                            <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                            Departemen Organisasi
                            </p>
                            <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, aliquid est. Unde vel veniam distinctio qui autem magnam facilis molestiae, in maiores fugit dolorum, a quisquam molestias aut dolores deserunt!
                            </p>
                        </div>
                        </div>
                        <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm ring-1 ring-black/5 lg:rounded-l-4xl"></div>
                    </div>
                    <div className="relative max-lg:row-start-1">
                        <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-t-4xl"></div>
                        <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
                        <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                            <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">Departemen Kaderisasi</p>
                            <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus non quas asperiores a! Perferendis distinctio possimus eos labore quas inventore soluta, nesciunt deserunt debitis voluptate temporibus magnam optio facere ipsa?
                            </p>
                        </div>
                        </div>
                        <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm ring-1 ring-black/5 max-lg:rounded-t-4xl"></div>
                    </div>
                    <div className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
                        <div className="absolute inset-px rounded-lg bg-white"></div>
                        <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)]">
                        <div className="px-8 py-8 sm:px-10 sm:py-10">
                            <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">Departemen Jaringan Sekolah dan Pesantren</p>
                            <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta modi debitis explicabo repellat distinctio obcaecati, in at ea iure! Excepturi ullam officia soluta corporis repellendus illum animi aspernatur atque sed.
                            </p>
                        </div>
                        </div>
                        <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm ring-1 ring-black/5"></div>
                    </div>
                    <div className="relative max-lg:row-start-1">
                        <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-t-4xl"></div>
                        <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
                        <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                            <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">Departemen Olahraga Seni dan Budaya</p>
                            <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus non quas asperiores a! Perferendis distinctio possimus eos labore quas inventore soluta, nesciunt deserunt debitis voluptate temporibus magnam optio facere ipsa?
                            </p>
                        </div>
                        </div>
                        <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm ring-1 ring-black/5 max-lg:rounded-t-4xl"></div>
                    </div>
                    <div className="relative max-lg:row-start-1">
                        <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-t-4xl"></div>
                        <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
                        <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                            <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">Departemen Media, Teknologi dan Informasi</p>
                            <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus non quas asperiores a! Perferendis distinctio possimus eos labore quas inventore soluta, nesciunt deserunt debitis voluptate temporibus magnam optio facere ipsa?
                            </p>
                        </div>
                        </div>
                        <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm ring-1 ring-black/5 max-lg:rounded-t-4xl"></div>
                    </div>
                    <div className="relative lg:row-span-2">
                        <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-b-4xl lg:rounded-r-4xl"></div>
                        <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
                        <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                            <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                            Departemen Dakwah
                            </p>
                            <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                            Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget sem sodales gravida.
                            </p>
                        </div>
                        </div>
                        <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm ring-1 ring-black/5 max-lg:rounded-b-4xl lg:rounded-r-4xl"></div>
                    </div>
                    <div className="relative lg:row-span-2">
                        <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-b-4xl lg:rounded-r-4xl"></div>
                        <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
                        <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                            <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                            Lembaga Komunikasi Perguruan Tinggi
                            </p>
                            <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                            Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget sem sodales gravida.
                            </p>
                        </div>
                        </div>
                        <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm ring-1 ring-black/5 max-lg:rounded-b-4xl lg:rounded-r-4xl"></div>
                    </div>
                    <div className="relative lg:row-span-2">
                        <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-b-4xl lg:rounded-r-4xl"></div>
                        <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
                        <div className="px-8 py-8 sm:px-10 sm:py-10">
                            <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                            Badan Student Crisis Center
                            </p>
                            <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                            Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget sem sodales gravida.
                            </p>
                        </div>
                        </div>
                        <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm ring-1 ring-black/5 max-lg:rounded-b-4xl lg:rounded-r-4xl"></div>
                    </div>
                    <div className="relative lg:row-span-2">
                        <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-b-4xl lg:rounded-r-4xl"></div>
                        <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
                        <div className="px-8 py-8 sm:px-10 sm:py-10">
                            <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                            Badan Student Research Center
                            </p>
                            <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                            Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget sem sodales gravida.
                            </p>
                        </div>
                        </div>
                        <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm ring-1 ring-black/5 max-lg:rounded-b-4xl lg:rounded-r-4xl"></div>
                    </div>
                    <div className="relative lg:row-span-2">
                        <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-b-4xl lg:rounded-r-4xl"></div>
                        <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
                        <div className="px-8 py-8 sm:px-10 sm:py-10">
                            <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                            Lembaga Ekonomi Kewirausahaan dan Koperasi
                            </p>
                            <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                            Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget sem sodales gravida.
                            </p>
                        </div>
                        </div>
                        <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm ring-1 ring-black/5 max-lg:rounded-b-4xl lg:rounded-r-4xl"></div>
                    </div>
                    <div className="relative lg:row-span-2">
                        <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-b-4xl lg:rounded-r-4xl"></div>
                        <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
                        <div className="px-8 py-8 sm:px-10 sm:py-10">
                            <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                            Lembaga Anti Narkoba
                            </p>
                            <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                            Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget sem sodales gravida.
                            </p>
                        </div>
                        </div>
                        <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm ring-1 ring-black/5 max-lg:rounded-b-4xl lg:rounded-r-4xl"></div>
                    </div>
                </div>
            </TabsContent>
            <TabsContent value="ippnu">

            </TabsContent>

         </Tabs>
      </div>
    </div>
  )
}
