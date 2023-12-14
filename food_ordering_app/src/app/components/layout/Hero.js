import Image from "next/image";
import Right from "../icons/Right";
export default function Hero() {
    return (
        <section className="hero">
            <div className="py-12 px-8">
                <h1 className="text-4xl font-semibold">
                    A Symphony of Flavour in<br></br> Every Bowl!
                </h1>
                <p className="my-6 text-gray-500 text-sm">
                    A bowl of ramen is more than just a meal;<br></br>
                    it's a celebration of bold flavors, <br></br>artful preparation,
                    and comforting warmth.
                </p>
                <div className="flex gap-4 text-sm">
                    <button className="bg-primary uppercase flex items-center gap-2 text-white px-8 py-2 rounded-full">
                        Order Now
                        <Right></Right>
                    </button>
                    <button className="flex gap-2 text-gray-600 px-8 py-2 font-semibold">
                        Learn More
                        <Right></Right>
                    </button>
                </div>
            </div>
            <div className=" relative">
                <Image src={'/ramen.png'} layout="fill" objectFit="contain"
                    alt={'ramen'}>
                </Image>
            </div>

        </section>
    );
}