import Image from "next/image";
import MenuItem from "../menu/MenuItem";
import SectionHeaders from "./SectionHeaders";
export default function HomeMenu() {
    return (
        <section>
            <div className="h-72 w-72 absolute top-[43%] left-0"> {/* Increase height and width */}
                <Image src={'/kimchi.png'} layout={"fill"} objectFit={"contain"} alt={'kimchi'}></Image>
            </div>
            <div className="h-48 w-48 absolute right-0 ">
                <Image src={'/bokchoy.png'} layout={"fill"} objectFit={"contain"} alt={'bokchoy'}></Image>
            </div>
            <div className="text-center py-12">
                <SectionHeaders subHeader={'check out'} mainHeader={'Menu'}></SectionHeaders>
            </div>
            <div className="grid grid-cols-3 gap-4 py-20">
                <MenuItem></MenuItem>
                <MenuItem></MenuItem>
                <MenuItem></MenuItem>
                <MenuItem></MenuItem>
                <MenuItem></MenuItem>
                <MenuItem></MenuItem>
            </div>
        </section>
    );
}
