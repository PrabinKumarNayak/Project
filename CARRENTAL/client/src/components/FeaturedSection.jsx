import Title from "./Title";

export default function FeaturedSection (){
    return(
        <div className="flex flex-col items-center py-24 px-6 md:px-16 ld:px-24 xl:px-32">
            <div>
                <Title title='Featured Vehicles' subTitle='Explore our selection of premium vehicles for youur next adventure.'/>
            </div>
        </div>
    )
}