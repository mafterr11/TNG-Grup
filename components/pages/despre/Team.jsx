import Image from "next/image"
import p1 from '../../../public/HeroCarousel/1.webp'
const Team = () => {
    return (
        <section className=" mt-24">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-20">
                    <h3 className="mb-8 text-accent">Echipa Noastră</h3>
                    <p className="lg:w-full mx-auto leading-relaxed text-base">Inovarea și adaptabilitatea sunt calitățile cheie ale echipei TNG Grup. Tinerii noștri profesioniști sunt mereu la curent cu ultimele tendințe și tehnologii din domeniu, îmbrățișând noi metode și soluții pentru a optimiza procesele de construcție. Această abordare proactivă asigură că suntem mereu un pas înainte în industrie, oferind clienților noștri cele mai eficiente și sustenabile soluții.</p>
                </div>
                <div className="flex flex-wrap -m-4">
                    <div className="p-4 lg:w-1/2">
                        <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left mb-12">
                            <Image alt="team" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src={p1} />
                            {/* Text */}
                            <div className="flex-grow sm:pl-8">
                                <h2 className="font-medium text-lg">Munteanu Mihai</h2>
                                <h3 className="text-accent mb-6">Inginer pleb</h3>
                                <p className="-m-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor, eveniet labore aut nisi perspiciatis non alias molestiae nemo a libero!</p>

                            </div>
                        </div>
                    </div>
                    <div className="p-4 lg:w-1/2">
                        <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left mb-12">
                            <Image alt="team" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src={p1} />
                            {/* Text */}
                            <div className="flex-grow sm:pl-8">
                                <h2 className="font-medium text-lg">Bogdan Munteanu</h2>
                                <h3 className="text-accent mb-6">Inginer Sef</h3>
                                <p className="-m-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor, eveniet labore aut nisi perspiciatis non alias molestiae nemo a libero!</p>

                            </div>
                        </div>
                    </div>
                    <div className="p-4 lg:w-1/2">
                        <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left mb-12">
                            <Image alt="team" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src={p1} />
                            {/* Text */}
                            <div className="flex-grow sm:pl-8">
                                <h2 className="font-medium text-lg">Tudor Balanoiu</h2>
                                <h3 className="text-accent mb-6">Deseneaza Bine</h3>
                                <p className="-m-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor, eveniet labore aut nisi perspiciatis non alias molestiae nemo a libero!</p>

                            </div>
                        </div>
                    </div>
                    <div className="p-4 lg:w-1/2">
                        <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left mb-12">
                            <Image alt="team" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src={p1} />
                            {/* Text */}
                            <div className="flex-grow sm:pl-8">
                                <h2 className="font-medium text-lg">Marius</h2>
                                <h3 className="text-accent mb-6">Pare rau de mailuri</h3>
                                <p className="-m-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor, eveniet labore aut nisi perspiciatis non alias molestiae nemo a libero!</p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Team
